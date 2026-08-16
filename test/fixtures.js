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
      name: "三字名（母姓入名·单字）：王林×",
      fn: () => {
        const r = C.generate(makeInput({ motherSurname: "林", modes: ["tri"] }));
        assert(r.candidates.length > 0, "三字名无候选");
        assert(r.candidates.every(c => c.fullName.indexOf("王林") === 0 && c.fullName.length === 3),
          "三字名应为「王林+单字」");
      }
    },
    {
      name: "母姓在前：母姓+父姓+双字",
      fn: () => {
        const r = C.generate(makeInput({ motherSurname: "林", modes: ["quad"], motherFirst: true }));
        assert(r.candidates.length > 0, "母姓在前无候选");
        assert(r.candidates.every(c => c.fullName.indexOf("林王") === 0 && c.fullName.length === 4),
          "母姓在前应为「林王+双字」");
      }
    },
    {
      name: "母姓在前+妙配：母姓白在前仍命中白+玉双关",
      fn: () => {
        const r = C.generate(makeInput({ fatherSurname: "王", motherSurname: "白", modes: ["quad"], motherFirst: true, count: 30 }));
        const yu = r.candidates.filter(c => c.entry.given[0] === "玉");
        assert(yu.length > 0, "应有「白王玉×」候选");
        assert(yu.every(c => c.dims.meaning.notes.some(n => n.key === "compat")), "应命中白+玉妙配");
      }
    },
    {
      name: "四字名妙配：母姓白+「玉×」命中白+玉双关",
      fn: () => {
        const r = C.generate(makeInput({ fatherSurname: "王", motherSurname: "白", modes: ["quad"], gender: "any", count: 30 }));
        const yu = r.candidates.filter(c => c.entry.given[0] === "玉");
        assert(yu.length > 0, "应有「王白玉×」候选");
        assert(yu.every(c => c.dims.meaning.notes.some(n => n.key === "compat")), "应命中白+玉妙配");
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
    },
    {
      name: "多样性：Top15 中同一首字不超过 3 个",
      fn: () => {
        const r = C.generate(makeInput({ count: 15 }));
        assert(r.candidates.length > 0, "无候选");
        const firstCount = {};
        r.candidates.forEach(c => {
          const k = c.entry.given[0];
          firstCount[k] = (firstCount[k] || 0) + 1;
          assert(firstCount[k] <= 3, "首字「" + k + "」出现超过 3 次：" + c.fullName);
        });
        const distinct = Object.keys(firstCount).length;
        assert(distinct >= 5, "Top15 首字种类过少：" + distinct);
      }
    },
    {
      name: "龙凤胎：金风玉露配对可生成",
      fn: () => {
        const P = A.Pairs;
        const r = P.generate(makeInput({ pairType: "mf", count: 100 }));
        const hit = r.pairs.find(p => p.pair.a.given === "金风" && p.pair.b.given === "玉露");
        assert(hit, "应有金风+玉露配对");
        assert(hit.a.fullName === "王金风" && hit.b.fullName === "王玉露", "全名应为王金风/王玉露");
      }
    },
    {
      name: "龙凤胎：知行配对可生成",
      fn: () => {
        const P = A.Pairs;
        const r = P.generate(makeInput({ pairType: "mf", count: 100 }));
        assert(r.pairs.some(p => p.pair.id === "zhi-xing"), "应有知行配对");
      }
    },
    {
      name: "兄弟双胞胎不含女女专属配对（磐石+蒲苇）",
      fn: () => {
        const P = A.Pairs;
        const r = P.generate(makeInput({ pairType: "mm", count: 200 }));
        assert(!r.pairs.some(p => p.pair.id === "panshi-puwei"), "男男模式不应出现蒲苇");
        assert(r.pairs.some(p => p.pair.id === "kun-peng"), "应有鲲鹏配对");
      }
    },
    {
      name: "配对名过滤避讳字",
      fn: () => {
        const P = A.Pairs;
        const r = P.generate(makeInput({ pairType: "mf", count: 200, taboo: ["金"] }));
        assert(!r.pairs.some(p => p.pair.id === "jinfeng-yulu"), "避「金」应过滤金风玉露");
      }
    },
    {
      name: "配对随姓：长随父姓·幼随母姓（王金风·林玉露）",
      fn: () => {
        const P = A.Pairs;
        const r = P.generate(makeInput({ pairType: "mf", motherSurname: "林", splitMode: "fmOrder", count: 200 }));
        const hit = r.pairs.find(p => p.pair.id === "jinfeng-yulu");
        assert(hit, "应有金风玉露配对");
        assert(hit.a.fullName === "王金风" && hit.b.fullName === "林玉露",
          "应为长随父（王金风）幼随母（林玉露），实际：" + hit.a.fullName + "/" + hit.b.fullName);
      }
    },
    {
      name: "配对随姓：男随父姓·女随母姓（龙凤胎）",
      fn: () => {
        const P = A.Pairs;
        const r = P.generate(makeInput({ pairType: "mf", motherSurname: "林", splitMode: "genderA", count: 200 }));
        const hit = r.pairs.find(p => p.pair.id === "panshi-puwei");
        assert(hit, "应有磐石蒲苇配对");
        assert(hit.a.fullName === "王磐石" && hit.b.fullName === "林蒲苇",
          "应为男随父（王磐石）女随母（林蒲苇），实际：" + hit.a.fullName + "/" + hit.b.fullName);
      }
    },
    {
      name: "配对随姓：母姓妙配在母姓半侧生效（白+玉）",
      fn: () => {
        const P = A.Pairs;
        const r = P.generate(makeInput({ pairType: "mf", motherSurname: "白", splitMode: "fmOrder", count: 200 }));
        const hit = r.pairs.find(p => p.pair.id === "jinfeng-yulu");
        assert(hit, "应有金风玉露配对");
        assert(hit.b.fullName === "白玉露", "幼随母姓应为白玉露");
        assert(hit.b.dims.meaning.notes.some(n => n.key === "compat"), "白玉露应命中白+玉妙配");
      }
    },
    {
      name: "乱输入：英文/数字姓氏返回空结果不崩溃",
      fn: () => {
        const r1 = C.generate(makeInput({ fatherSurname: "abc123" }));
        assert(r1.candidates.length === 0, "英文姓氏应返回空");
        const r2 = C.generate(makeInput({ fatherSurname: "王👶" }));
        assert(r2.candidates.length === 0, "含 emoji 姓氏应返回空");
        const P = A.Pairs;
        const r3 = P.generate(makeInput({ pairType: "mf", fatherSurname: "!!!" }));
        assert(r3.pairs.length === 0, "配对模式乱输入应返回空");
      }
    },
    {
      name: "乱输入：母姓为英文时不生成母姓名",
      fn: () => {
        const r = C.generate(makeInput({ motherSurname: "Lin", modes: ["quad", "tri"] }));
        assert(r.candidates.every(c => c.fullName.indexOf("Lin") < 0), "英文母姓不应入名");
      }
    },
    {
      name: "边界：count 负数/0/超大自动收敛",
      fn: () => {
        const r1 = C.generate(makeInput({ count: -5 }));
        assert(r1.candidates.length >= 1, "负数 count 应至少 1 条");
        const r2 = C.generate(makeInput({ count: 99999 }));
        assert(r2.candidates.length <= 100, "超大 count 应限制在 100");
      }
    },
    {
      name: "边界：modes 为空数组/缺失不崩溃",
      fn: () => {
        const r1 = C.generate(makeInput({ modes: [] }));
        assert(Array.isArray(r1.candidates), "空 modes 应返回空数组");
        const inp = makeInput();
        delete inp.modes;
        const r2 = C.generate(inp);
        assert(r2.candidates.length > 0, "缺失 modes 应回退默认双字名");
      }
    },
    {
      name: "边界：避讳字乱输入不影响生成",
      fn: () => {
        const r = C.generate(makeInput({ taboo: ["abc", "，", "💩", "玉"] }));
        assert(r.candidates.every(c => !c.givenChars.includes("玉")), "正常避讳字应生效");
      }
    },
    {
      name: "边界：母姓为空时母姓模式无候选但不崩溃",
      fn: () => {
        const r = C.generate(makeInput({ motherSurname: "", modes: ["quad", "tri"] }));
        assert(r.candidates.every(c => c.fullName.length <= 4), "无母姓时不应有母姓名");
        assert(Array.isArray(r.candidates), "不崩溃");
      }
    },
    {
      name: "换一批：all 含多批数据且 candidates 为首批",
      fn: () => {
        const r = C.generate(makeInput({ count: 10 }));
        assert(Array.isArray(r.all) && r.all.length >= 20, "all 应含至少 2 批数据");
        assert(r.candidates.length === 10, "首批应为 10 个");
        assert(r.candidates[0].fullName === r.all[0].fullName, "candidates 应为 all 的前 count 个");
        // 多样性在整批列表内仍成立
        const firstCount = {};
        r.all.forEach(c => {
          const k = c.entry.given[0];
          firstCount[k] = (firstCount[k] || 0) + 1;
          assert(firstCount[k] <= 3, "整批列表首字「" + k + "」超限");
        });
      }
    },
    {
      name: "换一批：配对模式 all 含多批",
      fn: () => {
        const P = A.Pairs;
        const r = P.generate(makeInput({ pairType: "mf", count: 5 }));
        assert(r.pairs.length === 5, "首批应为 5 对");
        assert(Array.isArray(r.all) && r.all.length >= 10, "配对 all 应含至少 2 批");
      }
    }
  ];

  return { cases: cases, synth: synth, makeInput: makeInput, assert: assert };
})();
