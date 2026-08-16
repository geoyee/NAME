// 「名典」配置文件 — 权重、黄金调型、姓氏妙配、谐音避讳映射、点评模板
// 所有可调数字集中于此，调参不改代码
window.NAMES_DB = window.NAMES_DB || {};
window.NAMES_DB.config = {
  // 五维权重（合计 1.00）
  weights: { phonetic: 0.30, shape: 0.25, meaning: 0.35, gender: 0.05, freq: 0.05 },

  // 祝福方向标签（表单选项 + 词条 tags 取值空间）
  blessingTags: ["平安", "聪慧", "风雅", "健康", "爱情", "富贵", "坚韧", "仁善", "清朗", "自然", "事业", "福寿"],

  // 黄金调型表（全名声调序列，按全名总字数分组）
  // 2 字：单姓+单字名 / 3 字：单姓+双字名、父姓+母姓+单字 / 4 字：复姓+双字名
  goldenTonePatterns: {
    2: ["24", "14", "42", "23", "34", "41", "31", "21"],
    3: ["214", "241", "124", "231", "314", "412", "421", "142", "341", "134"],
    4: ["2413", "1423", "4132", "2314", "3241", "2143", "1342", "3142", "4231", "1324"]
  },

  // 硬性罚分（过滤层已剔除，此处兜底）
  penalties: { badHomophone: 1000, tabooChar: 1000, unknownChar: 1000, rareChar: 1000 },

  // 风格选项 → 词库类别映射（「不限」= 全部）
  styleMap: {
    poetry: ["tangshi", "songci", "yuanqu", "hanfu"],
    classics: ["shijing", "chuci"],
    medicine: ["medicine"],
    nature: ["solar", "nature"]
  },

  // 类别展示名
  categoryLabels: {
    shijing: "诗经", chuci: "楚辞", tangshi: "唐诗", songci: "宋词", yuanqu: "元曲",
    hanfu: "汉魏", medicine: "中药", solar: "节气", nature: "自然", wenyan: "雅词"
  },

  // 生肖（出生年 → 徽章）
  zodiac: ["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"],

  // 月份 → 季节（2-4 春 / 5-7 夏 / 8-10 秋 / 11-1 冬）
  seasonMap: { 1: 4, 2: 1, 3: 1, 4: 1, 5: 2, 6: 2, 7: 2, 8: 3, 9: 3, 10: 3, 11: 4, 12: 4 },

  // 「姓+名」妙配表（金风玉露式双关核心）。
  // surname=姓氏；given=名部分（单字或双字；双字名取首字匹配）；note=点评文案
  surnameCompat: [
    { surname: "白", given: "露", note: "白露为霜，兼收节气清雅与《诗经》古意" },
    { surname: "白", given: "雪", note: "阳春白雪，曲高和寡之清贵" },
    { surname: "白", given: "芷", note: "白芷成双，本草之名天然一体" },
    { surname: "白", given: "玉", note: "白玉无瑕，温润天成" },
    { surname: "金", given: "风", note: "金风玉露一相逢，便胜却人间无数" },
    { surname: "金", given: "玉", note: "金玉良缘，富贵吉祥" },
    { surname: "叶", given: "知秋", note: "一叶知秋，明察秋毫之聪慧" },
    { surname: "江", given: "南", note: "江南好，风景旧曾谙" },
    { surname: "江", given: "海", note: "江海之气，纳百川之襟怀" },
    { surname: "江", given: "离", note: "江离，楚辞香草，生于江畔" },
    { surname: "柳", given: "暗", note: "柳暗花明又一村，绝处逢生之吉" },
    { surname: "柳", given: "如烟", note: "杨柳如烟，春色朦胧之美" },
    { surname: "苏", given: "合", note: "苏合香，本草名香，姓与名合而为一" },
    { surname: "苏", given: "堤", note: "苏堤春晓，西湖六桥烟柳" },
    { surname: "何", given: "田田", note: "江南可采莲，莲叶何田田" },
    { surname: "夏", given: "木", note: "阴阴夏木啭黄鹂，王维辋川之境" },
    { surname: "夏", given: "雨", note: "夏雨洗空山，清凉入怀" },
    { surname: "秦", given: "淮", note: "烟笼寒水月笼沙，秦淮风雅" },
    { surname: "庄", given: "周", note: "庄周梦蝶，物我两忘之逍遥" },
    { surname: "高", given: "山", note: "高山流水，知音之谊" },
    { surname: "高", given: "远", note: "志存高远，鹏程万里" },
    { surname: "方", given: "圆", note: "不以规矩，不能成方圆" },
    { surname: "关", given: "山", note: "关山万里，明月同照" },
    { surname: "雷", given: "鸣", note: "雷鸣一声，惊蛰而动" },
    { surname: "石", given: "泉", note: "明月松间照，清泉石上流" },
    { surname: "石", given: "斛", note: "石斛，本草九大仙草之首" },
    { surname: "松", given: "涛", note: "松涛阵阵，山风入林之声" },
    { surname: "谷", given: "雨", note: "谷雨，雨生百谷之节气" },
    { surname: "梅", given: "雪", note: "梅须逊雪三分白，雪却输梅一段香" },
    { surname: "于", given: "飞", note: "凤凰于飞，翙翙其羽" },
    { surname: "于", given: "归", note: "之子于归，宜其室家" },
    { surname: "田", given: "园", note: "归园田居，陶潜之乐" },
    { surname: "田", given: "七", note: "田七，本草三七之别名" },
    { surname: "周", given: "行", note: "周道如砥，大道坦荡" },
    { surname: "周", given: "南", note: "《诗经·周南》，风之始也" },
    { surname: "徐", given: "来", note: "清风徐来，水波不兴" },
    { surname: "杜", given: "若", note: "杜若，楚辞香草，芳洲杜若" },
    { surname: "杜", given: "蘅", note: "杜蘅，香草之名，幽芳入名" },
    { surname: "安", given: "然", note: "安然自在，岁月静好" },
    { surname: "许", given: "诺", note: "一诺千金，言出必行" },
    { surname: "唐", given: "诗", note: "唐诗三百首，姓与国粹同辉" },
    { surname: "温", given: "润", note: "温润如玉，谦谦君子" },
    { surname: "乐", given: "天", note: "乐天知命，白居易之字" },
    { surname: "谭", given: "笑", note: "谈笑有鸿儒，谐音妙趣" },
    { surname: "童", given: "心", note: "童心未泯，天真可贵" },
    { surname: "万", given: "紫", note: "万紫千红总是春" },
    { surname: "黎", given: "明", note: "黎明破晓，希望之光" },
    { surname: "康", given: "宁", note: "五福康宁，长寿安康" },
    { surname: "景", given: "天", note: "景天，本草仙草，亦含景仰苍天之意" },
    { surname: "顾", given: "盼", note: "顾盼生姿，眉眼含情" },
    { surname: "乔", given: "木", note: "南有乔木，不可休思" },
    { surname: "姚", given: "黄", note: "姚黄魏紫，牡丹之王" },
    { surname: "魏", given: "紫", note: "魏紫姚黄，牡丹之后" },
    { surname: "汪", given: "洋", note: "汪洋大海，胸襟浩瀚" },
    { surname: "穆", given: "清", note: "穆清，天清气和之雅词" },
    { surname: "林", given: "泉", note: "山林泉石，隐逸之趣" },
    { surname: "林", given: "深", note: "林深时见鹿，幽静之境" },
    { surname: "郝", given: "运", note: "谐音「好运」，吉利天成" },
    { surname: "王", given: "冠", note: "王冠，名含其姓，贵气自华" },
    { surname: "彭", given: "湃", note: "澎湃，心潮逐浪高" },
    { surname: "陶", given: "然", note: "陶然忘机，乐而忘忧" },
    { surname: "贺", given: "兰", note: "贺兰山阙，壮阔辽远" },
    { surname: "易", given: "安", note: "易安居士李清照之号" },
    { surname: "辛", given: "夷", note: "辛夷，玉兰别名，望春花" },
    { surname: "兰", given: "芝", note: "兰芝，芳草之佩" },
    { surname: "沈", given: "香", note: "谐音「沉香」，本草名香" },
    { surname: "黄", given: "芩", note: "黄芩，本草之名，姓与药合" },
    { surname: "车", given: "前", note: "车前草，本草之名" },
    { surname: "龙", given: "葵", note: "龙葵，本草之名，龙腾之势" },
    { surname: "麦", given: "冬", note: "麦冬，本草润肺养心之名" },
    { surname: "徐", given: "长卿", note: "徐长卿，本草以人名入药，雅趣天成" },
    { surname: "凌", given: "霄", note: "凌霄花，壮志凌云" },
    { surname: "连", given: "翘", note: "连翘，本草之花，连捷翘楚" }
  ],

  // 避讳字同音映射：填「春」→ 同音字「椿纯淳」一并避讳（长辈名讳常用字）
  tabooHomophones: {
    "春": ["椿", "纯", "淳"], "平": ["萍", "苹", "屏"], "芳": ["方", "坊"],
    "华": ["花", "桦"], "明": ["铭", "鸣"], "伟": ["玮", "纬"], "静": ["婧", "靖"],
    "燕": ["雁"], "红": ["虹"], "峰": ["锋", "枫"], "军": ["钧", "君"],
    "玉": ["钰"], "文": ["雯"], "雨": ["宇", "羽"], "琳": ["林"], "琪": ["琦"],
    "娜": ["纳"], "强": ["蔷"], "磊": ["蕾"], "敏": ["闵"], "辉": ["晖"],
    "英": ["瑛", "瑛"], "志": ["智", "治"], "国": ["果"], "德": ["得"],
    "福": ["富", "馥"], "喜": ["禧"], "凤": ["奉"], "龙": ["珑", "隆"]
  },

  // 点评模板句（detail.js 按打分中间结果拼装；{xx} 为 note 携带的参数）
  commentTemplates: {
    toneGolden: "全名「{pinyin}」声调为{pattern}，属经典抑扬组合，念来如珠落玉盘",
    toneFlat: "三字同声，稍显平直，若配以叠字或衬字可破",
    tonePingEnd: "末字平声收束，响亮悠长",
    toneZeEnd: "末字仄声收束，斩截有力",
    toneSameWithSurname: "末字与姓同调，收束稍欠变化",
    toneInnerSame: "名内两字同调，读来稍欠起伏",
    readGood: "声母韵母错落有致，连读顺口，无拗口之虞",
    readZeroInit: "相邻零声母连读，稍欠利落",
    readSameInit: "相邻两字声母相同（{ini}），连读略有粘连",
    readSameFinal: "相邻两字韵母声调全同，连读稍显重复",
    readDoubleShang: "两上声相连读来有变调，日常称呼多读为「阳平+上声」",
    readRepeated: "叠字入名，音韵回环，亲切可爱",
    strokeBalance: "全名{total}画，疏密相宜，落笔从容",
    strokeHeavy: "全名{total}画，笔画偏密，宜练行楷化繁为简",
    strokeJump: "相邻两字笔画悬殊，书写节奏略陡",
    strokeGradient: "三字笔画错落有致，书写有起伏之美",
    structureMix: "左右上下结构相间，字形稳中有变",
    structureSame: "三字结构相同，稍显单调，可借连笔化解",
    cursiveGood: "字字末笔出锋，行书连写一气呵成",
    cursiveBreak: "末字点收，连笔至此处稍顿，反成顿挫之美",
    sourceLegend: "出自{title}，千古名句，底蕴深厚",
    sourceClassic: "出自{title}，名篇雅意，耐人寻味",
    sourceHerb: "本草之名，字面清雅，兼得草木之灵",
    compat: "姓与名妙合：「{note}」",
    season: "生于{season}月，此名含{season}之意趣，正合时令"
  }
};
