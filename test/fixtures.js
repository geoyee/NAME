// 规则断言用例：node test/run.js 与 test/test.html 共用
// 新增断言：往 cases 数组里加 { name, fn }；fn 内 assert(条件, 失败信息)
window.NamesApp = window.NamesApp || {};
window.NamesApp.TestFixtures = (function () {
  const A = window.NamesApp;
  const C = A.Candidate;

  function assert(cond, msg) { if (!cond) throw new Error(msg || "断言失败"); }

  // 构造合成候选（不依赖词库内容，直接测过滤/打分模块）
  function synth(surnameText, givenText, entryOverrides) {
    const chars = [...(surnameText + givenText)];
    const pinyins = chars.map(ch => {
      const c = window.NAMES_DB.chars[ch];
      return c ? c.pinyin : "?";
    });
    const tones = chars.map(ch => {
      const c = window.NAMES_DB.chars[ch];
      return c ? c.tone : 5;
    });
    const entry = Object.assign({
      given: givenText,
      length: givenText.length,
      gender: "u",
      frequency: "classic",
      category: "wenyan",
      source: { text: "", title: "《测试》", author: "", dynasty: "" },
      meaning: "测试词条",
      tags: [],
      pinyin: pinyins.slice(-givenText.length).join(" "),
      tones: tones.slice(-givenText.length)
    }, entryOverrides || {});
    return {
      entry: entry,
      givenChars: [...givenText],
      fullName: surnameText + givenText,
      chars: chars,
      tones: tones,
      pinyins: pinyins,
      strokes: chars.map(() => 10),
      structures: chars.map(() => "lr"),
      givenLen: givenText.length,
      compatSurname: surnameText,
      mode: "double"
    };
  }

  function makeInput(overrides) {
    return Object.assign({
      fatherSurname: "王",
      motherSurname: "",
      modes: ["double"],
      gender: "any",
      styles: ["any"],
      taboo: [],
      blessings: [],
      count: 15,
      birthYear: null,
      birthMonth: null
    }, overrides || {});
  }

  const cases = [
    {
      name: "坑娃名「杜子腾」必被过滤",
      fn: () => {
        const r = C.filterCandidates([synth("杜", "子腾")], makeInput());
        assert(r.length === 0, "杜子腾未被过滤");
      }
    },
    {
      name: "坑娃名「吴礼」必被过滤（字面+拼音双重）",
      fn: () => {
        const r = C.filterCandidates([synth("吴", "礼")], makeInput());
        assert(r.length === 0, "吴礼未被过滤");
      }
    },
    {
      name: "拼音串谐音「沈京冰」必被过滤",
      fn: () => {
        const r = C.filterCandidates([synth("沈", "京冰")], makeInput());
        assert(r.length === 0, "沈京冰（shenjingbing）未被过滤");
      }
    },
    {
      name: "危险字（毒）必被过滤",
      fn: () => {
        const r = C.filterCandidates([synth("王", "芳毒")], makeInput());
        assert(r.length === 0, "含「毒」的名字未被过滤");
      }
    },
    {
      name: "避讳字生效：避「诗」则「王诗涵」剔除",
      fn: () => {
        const r = C.filterCandidates([synth("王", "诗涵")], makeInput({ taboo: ["诗"] }));
        assert(r.length === 0, "避讳字未生效");
      }
    },
    {
      name: "避讳同音映射：避「明」则含「铭」剔除",
      fn: () => {
        const r = C.filterCandidates([synth("王", "思铭")], makeInput({ taboo: ["明"] }));
        assert(r.length === 0, "避讳同音映射未生效");
      }
    },
    {
      name: "性别冲突：选男则女名剔除",
      fn: () => {
        const r = C.filterCandidates([synth("王", "静姝", { gender: "f" })], makeInput({ gender: "m" }));
        assert(r.length === 0, "女性词条未被剔除");
        const r2 = C.filterCandidates([synth("王", "静姝", { gender: "f" })], makeInput({ gender: "any" }));
        assert(r2.length === 1, "不限性别时不应剔除");
      }
    },
    {
      name: "生僻字（字库外）必被过滤",
      fn: () => {
        const r = C.filterCandidates([synth("王", "思龘")], makeInput());
        assert(r.length === 0, "字库外生僻字未被过滤");
      }
    },
    {
      name: "叠字词条「呦呦」不因叠韵受罚",
      fn: () => {
        const c = synth("鹿", "呦呦");
        const p = A.Phonetics.scorePhonetic(c);
        assert(p.read.notes.some(n => n.key === "readRepeated"), "应有叠字豁免标注");
        assert(!p.read.notes.some(n => n.key === "readSameFinal"), "叠字不应记叠韵罚分");
      }
    },
    {
      name: "非叠字同韵同调受罚（对照）",
      fn: () => {
        const c = synth("白", "来来");
        const p = A.Phonetics.scorePhonetic(c);
        assert(p.read.notes.some(n => n.key === "readSameFinal"), "同韵同调应记罚分");
      }
    },
    {
      name: "黄金调型识别：王(2)+诗(1)+暮(4) 命中「214」",
      fn: () => {
        const t = A.Phonetics.toneScore([2, 1, 4], 2, ["wang", "shi", "mu"]);
        assert(t.notes.some(n => n.key === "toneGolden" && n.pattern === "214"), "未命中黄金调型");
      }
    },
    {
      name: "三连平受罚",
      fn: () => {
        const t = A.Phonetics.toneScore([1, 1, 1], 2, ["a", "b", "c"]);
        assert(t.notes.some(n => n.key === "toneFlat"), "三连平未受罚");
      }
    },
    {
      name: "姓+名妙配：杜若（姓杜）命中策展表",
      fn: () => {
        const cp = A.Meaning.compatScore("杜", "若");
        assert(cp.score === 100, "杜+若应命中妙配表");
        const cp2 = A.Meaning.compatScore("赵", "若");
        assert(cp2.score === 0, "赵+若不应命中");
      }
    },
    {
      name: "姓+名首字妙配：叶知秋（姓叶）命中策展表",
      fn: () => {
        const cp = A.Meaning.compatScore("叶", "知秋");
        assert(cp.score === 100, "叶+知秋应命中妙配表");
      }
    },
    {
      name: "四字名：王+林生成「王林+双字」四字全名",
      fn: () => {
        const r = C.generate(makeInput({ motherSurname: "林", modes: ["quad"] }));
        assert(r.candidates.length > 0, "四字名无候选");
        assert(r.candidates.every(c => c.fullName.indexOf("王林") === 0 && c.fullName.length === 4),
          "四字名应为「王林+双字」四字全名");
      }
    },
    {
      name: "四字名妙配：母姓白+「玉露」命中白+玉双关",
      fn: () => {
        const r = C.generate(makeInput({ fatherSurname: "王", motherSurname: "白", modes: ["quad"], gender: "any" }));
        const yulu = r.candidates.find(c => c.entry.given === "玉露");
        assert(yulu, "应有「王白玉露」候选");
        assert(yulu.dims.meaning.notes.some(n => n.key === "compat"), "应命中白+玉妙配");
      }
    },
    {
      name: "母姓=父姓时四字名不生成（防「王王×」）",
      fn: () => {
        const r = C.generate(makeInput({ motherSurname: "王", modes: ["quad"] }));
        assert(r.candidates.length === 0, "母姓=父姓时不应生成四字名");
        const r2 = C.generate(makeInput({ motherSurname: "林", modes: ["quad"] }));
        assert(r2.candidates.length > 0, "母姓不同时应正常生成");
      }
    },
    {
      name: "复姓支持：欧阳+双字名四字全名",
      fn: () => {
        const r = C.generate(makeInput({ fatherSurname: "欧阳", modes: ["double"] }));
        assert(r.candidates.length > 0, "复姓无候选");
        assert(r.candidates.every(c => c.fullName.indexOf("欧阳") === 0 && c.fullName.length === 4),
          "复姓双字名应为四字全名");
      }
    },
    {
      name: "自定义姓氏不崩溃（嬴）",
      fn: () => {
        const r = C.generate(makeInput({ fatherSurname: "嬴" }));
        assert(Array.isArray(r.candidates), "自定义姓氏应正常生成");
      }
    },
    {
      name: "结果按总分降序",
      fn: () => {
        const r = C.generate(makeInput());
        for (let i = 1; i < r.candidates.length; i++) {
          assert(r.candidates[i - 1].total >= r.candidates[i].total, "未按总分降序");
        }
      }
    },
    {
      name: "数量限制生效",
      fn: () => {
        const r = C.generate(makeInput({ count: 10 }));
        assert(r.candidates.length <= 10, "超出数量限制");
      }
    },
    {
      name: "词库非空且每个词条可打分（冒烟）",
      fn: () => {
        const r = C.generate(makeInput({ styles: [], count: 100 }));
        assert(r.candidates.length > 0, "冒烟失败");
        for (const c of r.candidates) {
          assert(c.total >= 0 && c.total <= 100, c.fullName + " 总分越界");
          assert(c.dims.phonetic.score >= 0 && c.dims.phonetic.score <= 100, c.fullName + " 音律分越界");
          assert(c.dims.shape.score >= 0 && c.dims.shape.score <= 100, c.fullName + " 形美分越界");
          assert(c.dims.meaning.score >= 0 && c.dims.meaning.score <= 100, c.fullName + " 寓意分越界");
        }
      }
    }
  ];

  return { cases: cases, synth: synth, makeInput: makeInput, assert: assert };
})();
