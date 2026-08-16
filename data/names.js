// 「名典」名字词条主库
// 每个词条自带出处与寓意（名字质量 = 词库质量）。编写规范见 README：
// ①一字一验（用字必须存在于 chars.js）②出处可溯源（无法确证标 verified:false）
// ③双关优先（与常见姓构成妙配的词条同步录入 config.surnameCompat）
// gender: f 女 / m 男 / u 中性；frequency: legend 千古名句 / classic 名篇 / common 雅词
window.NAMES_DB = window.NAMES_DB || {};
window.NAMES_DB.names = [
  // ==================== 《诗经》 ====================
  {
    id: "hui-yin", given: "徽音", length: 2, pinyin: "hui yin", tones: [1, 1],
    category: "shijing", gender: "f",
    source: { text: "大姒嗣徽音，则百斯男", title: "《诗经·大雅·思齐》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "徽：美好。徽音：美好的声誉、美德，为母仪之范。",
    tags: ["仁善", "风雅"], frequency: "legend", verified: true
  },
  {
    id: "you-you", given: "呦呦", length: 2, pinyin: "you you", tones: [1, 1],
    category: "shijing", gender: "u",
    source: { text: "呦呦鹿鸣，食野之苹。我有嘉宾，鼓瑟吹笙", title: "《诗经·小雅·鹿鸣》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "鹿鸣呦呦，呼朋引伴之声，和乐而欢喜。",
    tags: ["自然", "清朗"], frequency: "legend", verified: true
  },
  {
    id: "jing-shu", given: "静姝", length: 2, pinyin: "jing shu", tones: [4, 1],
    category: "shijing", gender: "f",
    source: { text: "静女其姝，俟我于城隅", title: "《诗经·邶风·静女》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "静：娴静；姝：美好。娴静而美好的女子。",
    tags: ["风雅"], frequency: "classic", verified: true
  },
  {
    id: "yao-tiao", given: "窈窕", length: 2, pinyin: "yao tiao", tones: [3, 3],
    category: "shijing", gender: "f",
    source: { text: "窈窕淑女，君子好逑", title: "《诗经·周南·关雎》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "窈窕：体态美好、仪容娴雅。淑女之典范。",
    tags: ["风雅", "爱情"], frequency: "legend", verified: true
  },
  {
    id: "jian-jia", given: "蒹葭", length: 2, pinyin: "jian jia", tones: [1, 1],
    category: "shijing", gender: "u",
    source: { text: "蒹葭苍苍，白露为霜。所谓伊人，在水一方", title: "《诗经·秦风·蒹葭》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "蒹葭：芦苇。秋日水畔，苍苍蒹葭，含蓄隽永的追寻之美。",
    tags: ["自然", "风雅"], frequency: "legend", verified: true
  },
  {
    id: "yao-yao", given: "夭夭", length: 2, pinyin: "yao yao", tones: [1, 1],
    category: "shijing", season: [1], gender: "f",
    source: { text: "桃之夭夭，灼灼其华", title: "《诗经·周南·桃夭》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "夭夭：草木初生之态，生机勃勃、含苞待放。",
    tags: ["自然", "风雅"], frequency: "classic", verified: true
  },
  {
    id: "zhuo-hua", given: "灼华", length: 2, pinyin: "zhuo hua", tones: [2, 2],
    category: "shijing", season: [1], gender: "f",
    source: { text: "桃之夭夭，灼灼其华", title: "《诗经·周南·桃夭》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "灼华：花朵明艳如火。取其明丽照人之意。",
    tags: ["风雅", "自然"], frequency: "classic", verified: true
  },
  {
    id: "tao-yao", given: "桃夭", length: 2, pinyin: "tao yao", tones: [2, 1],
    category: "shijing", season: [1], gender: "f",
    source: { text: "桃之夭夭，灼灼其华。之子于归，宜其室家", title: "《诗经·周南·桃夭》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "桃夭：桃花盛开。贺新娘之诗，寓婚姻美满、宜室宜家。",
    tags: ["爱情", "自然"], frequency: "classic", verified: true
  },
  {
    id: "yan-wan", given: "燕婉", length: 2, pinyin: "yan wan", tones: [4, 3],
    category: "shijing", gender: "f",
    source: { text: "燕婉之求，籧篨不鲜", title: "《诗经·邶风·新台》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "燕婉：温柔和顺、美好。",
    tags: ["风雅", "仁善"], frequency: "classic", verified: true
  },
  {
    id: "ru-yun", given: "如云", length: 2, pinyin: "ru yun", tones: [2, 2],
    category: "shijing", gender: "f",
    source: { text: "出其东门，有女如云", title: "《诗经·郑风·出其东门》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "如云：如云般众多而美好。",
    tags: ["风雅"], frequency: "classic", verified: true
  },
  {
    id: "zi-jin", given: "子衿", length: 2, pinyin: "zi jin", tones: [3, 1],
    category: "shijing", gender: "u",
    source: { text: "青青子衿，悠悠我心", title: "《诗经·郑风·子衿》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "子衿：你的衣领，后指学子。青青子衿，青春好学之象。",
    tags: ["聪慧", "风雅"], frequency: "legend", verified: true
  },
  {
    id: "zi-pei", given: "子佩", length: 2, pinyin: "zi pei", tones: [3, 4],
    category: "shijing", gender: "u",
    source: { text: "青青子佩，悠悠我思", title: "《诗经·郑风·子衿》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "子佩：你的玉佩。佩玉鸣鸾，君子之饰。",
    tags: ["风雅"], frequency: "classic", verified: true
  },
  {
    id: "qing-yang", given: "清扬", length: 2, pinyin: "qing yang", tones: [1, 2],
    category: "shijing", gender: "u",
    source: { text: "有美一人，清扬婉兮", title: "《诗经·郑风·野有蔓草》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "清扬：眉目清秀。亦谐「轻扬」，神采飞扬。",
    tags: ["清朗", "风雅"], frequency: "legend", verified: true
  },
  {
    id: "wan-xi", given: "婉兮", length: 2, pinyin: "wan xi", tones: [3, 1],
    category: "shijing", gender: "f",
    source: { text: "有美一人，清扬婉兮", title: "《诗经·郑风·野有蔓草》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "婉：温婉。婉兮，温婉美好之貌。",
    tags: ["风雅"], frequency: "classic", verified: true
  },
  {
    id: "ling-lu", given: "零露", length: 2, pinyin: "ling lu", tones: [2, 4],
    category: "shijing", gender: "u",
    source: { text: "野有蔓草，零露漙兮", title: "《诗经·郑风·野有蔓草》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "零露：晶莹的露珠。清澈纯净，不染纤尘。",
    tags: ["清朗", "自然"], frequency: "classic", verified: true
  },
  {
    id: "jing-hao", given: "静好", length: 2, pinyin: "jing hao", tones: [4, 3],
    category: "shijing", gender: "f",
    source: { text: "琴瑟在御，莫不静好", title: "《诗经·郑风·女曰鸡鸣》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "静好：安静美好。「岁月静好」之出处，愿岁月温柔、现世安稳。",
    tags: ["平安", "爱情"], frequency: "legend", verified: true
  },
  {
    id: "qin-se", given: "琴瑟", length: 2, pinyin: "qin se", tones: [2, 4],
    category: "shijing", gender: "u",
    source: { text: "窈窕淑女，琴瑟友之", title: "《诗经·周南·关雎》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "琴瑟：弦乐之合。「琴瑟和鸣」喻夫妻和谐。",
    tags: ["爱情", "风雅"], frequency: "classic", verified: true
  },
  {
    id: "qiong-yao", given: "琼瑶", length: 2, pinyin: "qiong yao", tones: [2, 2],
    category: "shijing", gender: "f",
    source: { text: "投我以木桃，报之以琼瑶", title: "《诗经·卫风·木瓜》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "琼瑶：美玉。知恩图报，情比美玉。",
    tags: ["爱情", "仁善"], frequency: "legend", verified: true
  },
  {
    id: "qiong-jiu", given: "琼玖", length: 2, pinyin: "qiong jiu", tones: [2, 3],
    category: "shijing", gender: "u",
    source: { text: "投我以木李，报之以琼玖", title: "《诗经·卫风·木瓜》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "琼玖：美玉。与「琼瑶」同源，取酬报之意。",
    tags: ["仁善", "富贵"], frequency: "classic", verified: true
  },
  {
    id: "ru-yue", given: "如月", length: 2, pinyin: "ru yue", tones: [2, 4],
    category: "shijing", gender: "f",
    source: { text: "如月之恒，如日之升", title: "《诗经·小雅·天保》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "如月：如月渐盈，日日向好。祝福之辞。",
    tags: ["福寿", "清朗"], frequency: "legend", verified: true
  },
  {
    id: "gu-feng", given: "谷风", length: 2, pinyin: "gu feng", tones: [3, 1],
    category: "shijing", season: [1], gender: "u",
    source: { text: "习习谷风，以阴以雨", title: "《诗经·邶风·谷风》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "谷风：山谷间的和风，习习而来。",
    tags: ["自然", "仁善"], frequency: "classic", verified: true
  },
  {
    id: "kai-feng", given: "凯风", length: 2, pinyin: "kai feng", tones: [3, 1],
    category: "shijing", season: [1, 2], gender: "u",
    source: { text: "凯风自南，吹彼棘心", title: "《诗经·邶风·凯风》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "凯风：和煦的南风，喻母爱之温润。",
    tags: ["仁善", "自然"], frequency: "classic", verified: true
  },
  {
    id: "zhen-zhen", given: "蓁蓁", length: 2, pinyin: "zhen zhen", tones: [1, 1],
    category: "shijing", season: [1], gender: "f",
    source: { text: "桃之夭夭，其叶蓁蓁", title: "《诗经·周南·桃夭》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "蓁蓁：枝叶繁茂。生机勃发，家业兴旺。",
    tags: ["自然", "福寿"], frequency: "classic", verified: true
  },
  {
    id: "cai-wei", given: "采薇", length: 2, pinyin: "cai wei", tones: [3, 1],
    category: "shijing", season: [1], gender: "u",
    source: { text: "采薇采薇，薇亦作止。曰归曰归，岁亦莫止", title: "《诗经·小雅·采薇》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "采薇：采摘薇菜。古之名篇，含乡思与坚韧。",
    tags: ["坚韧", "自然"], frequency: "legend", verified: true
  },
  {
    id: "yang-liu", given: "杨柳", length: 2, pinyin: "yang liu", tones: [2, 3],
    category: "shijing", season: [1], gender: "u",
    source: { text: "昔我往矣，杨柳依依", title: "《诗经·小雅·采薇》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "杨柳：春风中的垂柳，依依惜别之情。",
    tags: ["自然", "风雅"], frequency: "classic", verified: true
  },
  {
    id: "yi-yi", given: "依依", length: 2, pinyin: "yi yi", tones: [1, 1],
    category: "shijing", season: [1], gender: "f",
    source: { text: "昔我往矣，杨柳依依", title: "《诗经·小雅·采薇》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "依依：轻柔依恋之貌。",
    tags: ["爱情"], frequency: "classic", verified: true
  },
  {
    id: "fei-fei", given: "霏霏", length: 2, pinyin: "fei fei", tones: [1, 1],
    category: "shijing", gender: "f",
    source: { text: "今我来思，雨雪霏霏", title: "《诗经·小雅·采薇》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "霏霏：雨雪纷飞之貌。",
    tags: ["自然"], frequency: "classic", verified: true
  },
  {
    id: "si-qi", given: "思齐", length: 2, pinyin: "si qi", tones: [1, 2],
    category: "shijing", gender: "u",
    source: { text: "思齐大任，文王之母", title: "《诗经·大雅·思齐》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "思齐：见贤思齐（《论语》）。亦出《诗经·思齐》，取向善向贤之意。",
    tags: ["聪慧", "仁善"], frequency: "legend", verified: true
  },
  {
    id: "yan-yan", given: "燕燕", length: 2, pinyin: "yan yan", tones: [4, 4],
    category: "shijing", season: [1], gender: "f",
    source: { text: "燕燕于飞，差池其羽", title: "《诗经·邶风·燕燕》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "燕燕：春燕双飞。轻盈自在。",
    tags: ["自然", "爱情"], frequency: "classic", verified: true
  },
  {
    id: "yu-fei", given: "于飞", length: 2, pinyin: "yu fei", tones: [2, 1],
    category: "shijing", season: [1], gender: "u",
    source: { text: "凤凰于飞，翙翙其羽", title: "《诗经·大雅·卷阿》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "于飞：凤凰比翼双飞。吉庆之象，喻夫妻和顺、事业腾飞。",
    tags: ["爱情", "事业"], frequency: "legend", verified: true
  },
  {
    id: "jing-jing", given: "菁菁", length: 2, pinyin: "jing jing", tones: [1, 1],
    category: "shijing", season: [1], gender: "f",
    source: { text: "菁菁者莪，在彼中阿", title: "《诗经·小雅·菁菁者莪》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "菁菁：草木茂盛，亦喻人才济济。",
    tags: ["聪慧", "自然"], frequency: "classic", verified: true
  },
  {
    id: "lu-ming", given: "鹿鸣", length: 2, pinyin: "lu ming", tones: [4, 2],
    category: "shijing", gender: "u",
    source: { text: "呦呦鹿鸣，食野之苹。我有嘉宾，鼓瑟吹笙", title: "《诗经·小雅·鹿鸣》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "鹿鸣：宴乐嘉宾之诗。「鹿鸣宴」为新科举人设，寓功名有成。",
    tags: ["事业", "清朗"], frequency: "legend", verified: true
  },
  {
    id: "zhan-lu", given: "湛露", length: 2, pinyin: "zhan lu", tones: [4, 4],
    category: "shijing", gender: "u",
    source: { text: "湛湛露斯，匪阳不晞", title: "《诗经·小雅·湛露》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "湛露：浓重的露水。湛亦含清澈之意。",
    tags: ["清朗", "仁善"], frequency: "classic", verified: true
  },
  {
    id: "he-ming", given: "鹤鸣", length: 2, pinyin: "he ming", tones: [4, 2],
    category: "shijing", gender: "u",
    source: { text: "鹤鸣于九皋，声闻于天", title: "《诗经·小雅·鹤鸣》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "鹤鸣：仙鹤长鸣，声闻于天。喻才华终将显于世。",
    tags: ["事业", "风雅"], frequency: "legend", verified: true
  },
  {
    id: "jiu-gao", given: "九皋", length: 2, pinyin: "jiu gao", tones: [3, 1],
    category: "shijing", gender: "m",
    source: { text: "鹤鸣于九皋，声闻于天", title: "《诗经·小雅·鹤鸣》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "九皋：深远的水泽。鹤鸣九皋，深藏不露、一鸣惊人。",
    tags: ["风雅", "事业"], frequency: "classic", verified: true
  },
  {
    id: "mu-qing", given: "穆清", length: 2, pinyin: "mu qing", tones: [4, 1],
    category: "shijing", gender: "u",
    source: { text: "吉甫作诵，穆如清风", title: "《诗经·大雅·烝民》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "穆清：和美如清风，天清气和之象。",
    tags: ["清朗", "仁善"], frequency: "legend", verified: true
  },
  {
    id: "qing-feng", given: "清风", length: 2, pinyin: "qing feng", tones: [1, 1],
    category: "shijing", gender: "u",
    source: { text: "吉甫作诵，穆如清风", title: "《诗经·大雅·烝民》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "清风：穆如清风。苏轼《赤壁赋》亦有「清风徐来」，两美并收。",
    tags: ["清朗", "风雅"], frequency: "legend", verified: true
  },
  {
    id: "qiao-mu", given: "乔木", length: 2, pinyin: "qiao mu", tones: [2, 4],
    category: "shijing", gender: "m",
    source: { text: "南有乔木，不可休思", title: "《诗经·周南·汉广》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "乔木：高大的树木。顶天立地，可为栋梁。",
    tags: ["事业", "坚韧"], frequency: "legend", verified: true
  },
  {
    id: "bai-zhou", given: "柏舟", length: 2, pinyin: "bai zhou", tones: [3, 1],
    category: "shijing", gender: "m",
    source: { text: "泛彼柏舟，亦泛其流", title: "《诗经·邶风·柏舟》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "柏舟：柏木之舟。坚贞自守、不随波逐流。",
    tags: ["坚韧"], frequency: "classic", verified: true
  },
  {
    id: "jing-nv", given: "静女", length: 2, pinyin: "jing nv", tones: [4, 3],
    category: "shijing", gender: "f",
    source: { text: "静女其姝，俟我于城隅", title: "《诗经·邶风·静女》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "静女：娴静美好的女子。",
    tags: ["风雅"], frequency: "classic", verified: true
  },
  {
    id: "tong-guan", given: "彤管", length: 2, pinyin: "tong guan", tones: [2, 3],
    category: "shijing", gender: "f",
    source: { text: "静女其娈，贻我彤管", title: "《诗经·邶风·静女》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "彤管：红色的笔管，古代女史记事之笔。取文采之意。",
    tags: ["爱情", "风雅"], frequency: "classic", verified: true
  },
  {
    id: "lv-zhu", given: "绿竹", length: 2, pinyin: "lv zhu", tones: [4, 2],
    category: "shijing", gender: "u",
    source: { text: "瞻彼淇奥，绿竹猗猗", title: "《诗经·卫风·淇奥》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "绿竹：淇水之畔的翠竹。君子如竹，虚心有节。",
    tags: ["坚韧", "风雅"], frequency: "classic", verified: true
  },
  {
    id: "ru-gui", given: "如圭", length: 2, pinyin: "ru gui", tones: [2, 1],
    category: "shijing", gender: "m",
    source: { text: "如圭如璋，令闻令望", title: "《诗经·大雅·卷阿》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "如圭：如圭璧般端方温润。",
    tags: ["仁善", "风雅"], frequency: "classic", verified: true
  },
  {
    id: "rou-ti", given: "柔荑", length: 2, pinyin: "rou ti", tones: [2, 2],
    category: "shijing", gender: "f",
    source: { text: "手如柔荑，肤如凝脂", title: "《诗经·卫风·硕人》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "柔荑：初生白茅的嫩芽，喻女子纤柔之美。",
    tags: ["风雅"], frequency: "classic", verified: true
  },
  {
    id: "nan-shan", given: "南山", length: 2, pinyin: "nan shan", tones: [2, 1],
    category: "shijing", gender: "m",
    source: { text: "如南山之寿，不骞不崩", title: "《诗经·小雅·天保》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "南山：如南山之寿。福寿绵长之祝。",
    tags: ["福寿", "坚韧"], frequency: "classic", verified: true
  },
  {
    id: "ru-song", given: "如松", length: 2, pinyin: "ru song", tones: [2, 1],
    category: "shijing", gender: "m",
    source: { text: "如松柏之茂，无不尔或承", title: "《诗经·小雅·天保》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "如松：如松柏之长青。健康长寿、岁寒不凋。",
    tags: ["坚韧", "福寿"], frequency: "classic", verified: true
  },
  {
    id: "san-qiu", given: "三秋", length: 2, pinyin: "san qiu", tones: [1, 1],
    category: "shijing", season: [3], gender: "u",
    source: { text: "一日不见，如三秋兮", title: "《诗经·王风·采葛》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "三秋：「一日不见，如隔三秋」，深情而风雅。",
    tags: ["爱情", "风雅"], frequency: "classic", verified: true
  },
  {
    id: "tao-li", given: "桃李", length: 2, pinyin: "tao li", tones: [2, 3],
    category: "shijing", season: [1], gender: "u",
    source: { text: "何彼襛矣，华如桃李", title: "《诗经·召南·何彼襛矣》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "桃李：桃李芳华。「桃李满天下」，亦寓育人成材。",
    tags: ["事业", "自然"], frequency: "classic", verified: true
  },
  {
    id: "yi-ren", given: "伊人", length: 2, pinyin: "yi ren", tones: [1, 2],
    category: "shijing", gender: "f",
    source: { text: "蒹葭苍苍，白露为霜。所谓伊人，在水一方", title: "《诗经·秦风·蒹葭》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "伊人：那个人。水畔佳人，可望而思之。",
    tags: ["风雅", "爱情"], frequency: "legend", verified: true
  },
  {
    id: "jiao-jiao", given: "皎皎", length: 2, pinyin: "jiao jiao", tones: [3, 3],
    category: "shijing", gender: "f",
    source: { text: "月出皎兮，佼人僚兮", title: "《诗经·陈风·月出》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "皎皎：月光洁白明亮。亦见《古诗十九首》「皎皎河汉女」。",
    tags: ["清朗"], frequency: "classic", verified: true
  },
  {
    id: "jiang-han", given: "江汉", length: 2, pinyin: "jiang han", tones: [1, 4],
    category: "shijing", gender: "m",
    source: { text: "江汉浮浮，武夫滔滔", title: "《诗经·大雅·江汉》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "江汉：长江与汉水。雄浑壮阔，川流不息。",
    tags: ["事业", "自然"], frequency: "classic", verified: true
  },
  {
    id: "yun-han", given: "云汉", length: 2, pinyin: "yun han", tones: [2, 4],
    category: "shijing", gender: "m",
    source: { text: "倬彼云汉，昭回于天", title: "《诗经·大雅·云汉》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "云汉：天河、银河。浩瀚高远。",
    tags: ["清朗", "自然"], frequency: "classic", verified: true
  },
  {
    id: "ling-yu", given: "灵雨", length: 2, pinyin: "ling yu", tones: [2, 3],
    category: "shijing", season: [1], gender: "f",
    source: { text: "灵雨既零，命彼倌人", title: "《诗经·鄘风·定之方中》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "灵雨：好雨、及时之雨。润物无声。",
    tags: ["自然"], frequency: "classic", verified: true
  },
  {
    id: "jing-hang", given: "景行", length: 2, pinyin: "jing hang", tones: [3, 2],
    category: "shijing", gender: "m",
    source: { text: "高山仰止，景行行止", title: "《诗经·小雅·车舝》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "景行：光明大道。高山仰止，景行行止，德行之范。",
    tags: ["仁善", "事业"], frequency: "legend", verified: true
  },
  {
    id: "gao-shan", given: "高山", length: 2, pinyin: "gao shan", tones: [1, 1],
    category: "shijing", gender: "m",
    source: { text: "高山仰止，景行行止", title: "《诗经·小雅·车舝》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "高山：高山仰止。亦「高山流水」知音之典。",
    tags: ["坚韧", "仁善"], frequency: "classic", verified: true
  },
  {
    id: "jia-yu", given: "嘉鱼", length: 2, pinyin: "jia yu", tones: [1, 2],
    category: "shijing", gender: "u",
    source: { text: "南有嘉鱼，烝然罩罩", title: "《诗经·小雅·南有嘉鱼》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "嘉鱼：美鱼。「嘉」为美善，年年有余。",
    tags: ["仁善", "福寿"], frequency: "classic", verified: true
  },
  {
    id: "yuan-fei", given: "鸢飞", length: 2, pinyin: "yuan fei", tones: [1, 1],
    category: "shijing", gender: "m",
    source: { text: "鸢飞戾天，鱼跃于渊", title: "《诗经·大雅·旱麓》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "鸢飞：鹰击长空。各得其所，志在高远。",
    tags: ["事业", "自然"], frequency: "classic", verified: true
  },
  {
    id: "yu-yue", given: "鱼跃", length: 2, pinyin: "yu yue", tones: [2, 4],
    category: "shijing", gender: "u",
    source: { text: "鸢飞戾天，鱼跃于渊", title: "《诗经·大雅·旱麓》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "鱼跃：鱼跃于渊。「鱼跃龙门」之吉。",
    tags: ["事业"], frequency: "classic", verified: true
  },
  {
    id: "lie-wen", given: "烈文", length: 2, pinyin: "lie wen", tones: [4, 2],
    category: "shijing", gender: "m",
    source: { text: "烈文辟公，锡兹祉福", title: "《诗经·周颂·烈文》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "烈文：功业与文章。文武相济。",
    tags: ["事业", "风雅"], frequency: "classic", verified: true
  },
  {
    id: "feng-nian", given: "丰年", length: 2, pinyin: "feng nian", tones: [1, 2],
    category: "shijing", gender: "u",
    source: { text: "丰年多黍多稌", title: "《诗经·周颂·丰年》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "丰年：五谷丰登之年。富足安康。",
    tags: ["福寿", "富贵"], frequency: "classic", verified: true
  },

  // ==================== 《楚辞》 ====================
  {
    id: "ling-jun", given: "灵均", length: 2, pinyin: "ling jun", tones: [2, 1],
    category: "chuci", gender: "m",
    source: { text: "名余曰正则兮，字余曰灵均", title: "《离骚》", author: "屈原", dynasty: "战国", genre: "fu" },
    meaning: "灵均：屈原之字。灵：善；均：平。秉善持平，光风霁月。",
    tags: ["风雅", "清朗"], frequency: "legend", verified: true
  },
  {
    id: "zheng-ze", given: "正则", length: 2, pinyin: "zheng ze", tones: [4, 2],
    category: "chuci", gender: "m",
    source: { text: "名余曰正则兮，字余曰灵均", title: "《离骚》", author: "屈原", dynasty: "战国", genre: "fu" },
    meaning: "正则：屈原之名。公正而有法则。",
    tags: ["仁善", "清朗"], frequency: "legend", verified: true
  },
  {
    id: "xiu-yuan", given: "修远", length: 2, pinyin: "xiu yuan", tones: [1, 3],
    category: "chuci", gender: "m",
    source: { text: "路漫漫其修远兮，吾将上下而求索", title: "《离骚》", author: "屈原", dynasty: "战国", genre: "fu" },
    meaning: "修远：路漫漫其修远。求索不息，志存高远。",
    tags: ["坚韧", "事业"], frequency: "legend", verified: true
  },
  {
    id: "jiang-li", given: "江离", length: 2, pinyin: "jiang li", tones: [1, 2],
    category: "chuci", gender: "u",
    source: { text: "扈江离与辟芷兮，纫秋兰以为佩", title: "《离骚》", author: "屈原", dynasty: "战国", genre: "fu" },
    meaning: "江离：楚辞香草，生于江畔，清芬自远。",
    tags: ["自然", "风雅"], frequency: "classic", verified: true
  },
  {
    id: "pi-zhi", given: "辟芷", length: 2, pinyin: "pi zhi", tones: [4, 3],
    category: "chuci", gender: "u",
    source: { text: "扈江离与辟芷兮，纫秋兰以为佩", title: "《离骚》", author: "屈原", dynasty: "战国", genre: "fu" },
    meaning: "辟芷：幽处之白芷。生于幽谷，不以无人而不芳。",
    tags: ["坚韧", "风雅"], frequency: "classic", verified: true
  },
  {
    id: "qiu-lan", given: "秋兰", length: 2, pinyin: "qiu lan", tones: [1, 2],
    category: "chuci", season: [3], gender: "f",
    source: { text: "扈江离与辟芷兮，纫秋兰以为佩", title: "《离骚》", author: "屈原", dynasty: "战国", genre: "fu" },
    meaning: "秋兰：秋日之兰，纫以为佩。幽芳自守。",
    tags: ["风雅", "清朗"], frequency: "classic", verified: true
  },
  {
    id: "mu-lan", given: "木兰", length: 2, pinyin: "mu lan", tones: [4, 2],
    category: "chuci", gender: "f",
    source: { text: "朝饮木兰之坠露兮，夕餐秋菊之落英", title: "《离骚》", author: "屈原", dynasty: "战国", genre: "fu" },
    meaning: "木兰：饮木兰之坠露。亦花木兰之英名，柔中带刚。",
    tags: ["坚韧", "风雅"], frequency: "legend", verified: true
  },
  {
    id: "fu-rong", given: "芙蓉", length: 2, pinyin: "fu rong", tones: [2, 2],
    category: "chuci", season: [2], gender: "f",
    source: { text: "制芰荷以为衣兮，集芙蓉以为裳", title: "《离骚》", author: "屈原", dynasty: "战国", genre: "fu" },
    meaning: "芙蓉：荷花。「清水出芙蓉」，出淤泥而不染。",
    tags: ["风雅", "清朗"], frequency: "legend", verified: true
  },
  {
    id: "du-ruo", given: "杜若", length: 2, pinyin: "du ruo", tones: [4, 4],
    category: "chuci", season: [3], gender: "f",
    source: { text: "搴汀洲兮杜若，将以遗兮远者", title: "《九歌·湘夫人》", author: "屈原", dynasty: "战国", genre: "fu" },
    meaning: "杜若：香草，赠远人之花。芬芳而深情。",
    tags: ["风雅", "自然"], frequency: "classic", verified: true
  },
  {
    id: "xiang-jun", given: "湘君", length: 2, pinyin: "xiang jun", tones: [1, 1],
    category: "chuci", gender: "f",
    source: { text: "君不行兮夷犹，蹇谁留兮中洲", title: "《九歌·湘君》", author: "屈原", dynasty: "战国", genre: "fu" },
    meaning: "湘君：湘水之神。婉约而深情。",
    tags: ["风雅"], frequency: "classic", verified: true
  },
  {
    id: "ruo-ying", given: "若英", length: 2, pinyin: "ruo ying", tones: [4, 1],
    category: "chuci", gender: "f",
    source: { text: "浴兰汤兮沐芳，华采衣兮若英", title: "《九歌·云中君》", author: "屈原", dynasty: "战国", genre: "fu" },
    meaning: "若英：如花般明艳。",
    tags: ["风雅"], frequency: "classic", verified: true
  },
  {
    id: "zhao-zhao", given: "昭昭", length: 2, pinyin: "zhao zhao", tones: [1, 1],
    category: "chuci", gender: "u",
    source: { text: "灵连蜷兮既留，烂昭昭兮未央", title: "《九歌·云中君》", author: "屈原", dynasty: "战国", genre: "fu" },
    meaning: "昭昭：光明灿烂。「以其昭昭，使人昭昭」，明达之象。",
    tags: ["清朗"], frequency: "classic", verified: true
  },
  {
    id: "wei-yang", given: "未央", length: 2, pinyin: "wei yang", tones: [4, 1],
    category: "chuci", gender: "u",
    source: { text: "灵连蜷兮既留，烂昭昭兮未央", title: "《九歌·云中君》", author: "屈原", dynasty: "战国", genre: "fu" },
    meaning: "未央：无穷无尽。汉宫名未央，取福泽绵长之意。",
    tags: ["福寿"], frequency: "classic", verified: true
  },
  {
    id: "qi-ji", given: "骐骥", length: 2, pinyin: "qi ji", tones: [2, 4],
    category: "chuci", gender: "m",
    source: { text: "乘骐骥以驰骋兮，来吾道夫先路", title: "《离骚》", author: "屈原", dynasty: "战国", genre: "fu" },
    meaning: "骐骥：千里马。骐骥一跃，志在千里。",
    tags: ["事业"], frequency: "classic", verified: true
  },
  {
    id: "lan-gao", given: "兰皋", length: 2, pinyin: "lan gao", tones: [2, 1],
    category: "chuci", gender: "m",
    source: { text: "步余马于兰皋兮，驰椒丘且焉止息", title: "《离骚》", author: "屈原", dynasty: "战国", genre: "fu" },
    meaning: "兰皋：长满兰草的水边高地。清雅之地。",
    tags: ["风雅"], frequency: "classic", verified: true
  },
  {
    id: "ji-he", given: "芰荷", length: 2, pinyin: "ji he", tones: [4, 2],
    category: "chuci", season: [2], gender: "f",
    source: { text: "制芰荷以为衣兮，集芙蓉以为裳", title: "《离骚》", author: "屈原", dynasty: "战国", genre: "fu" },
    meaning: "芰荷：菱叶与荷叶。清雅脱俗。",
    tags: ["风雅", "清朗"], frequency: "classic", verified: true
  },
  {
    id: "ruo-mu", given: "若木", length: 2, pinyin: "ruo mu", tones: [4, 4],
    category: "chuci", gender: "u",
    source: { text: "折若木以拂日兮，聊逍遥以相羊", title: "《离骚》", author: "屈原", dynasty: "战国", genre: "fu" },
    meaning: "若木：神话中的神树，生于西极，灼灼其华。",
    tags: ["坚韧", "自然"], frequency: "classic", verified: true
  },
  {
    id: "fu-sang", given: "扶桑", length: 2, pinyin: "fu sang", tones: [2, 1],
    category: "chuci", gender: "u",
    source: { text: "饮余马于咸池兮，总余辔乎扶桑", title: "《离骚》", author: "屈原", dynasty: "战国", genre: "fu" },
    meaning: "扶桑：日出之处的神树。旭日初升，朝气蓬勃。",
    tags: ["事业", "自然"], frequency: "classic", verified: true
  },
  {
    id: "xi-he", given: "羲和", length: 2, pinyin: "xi he", tones: [1, 2],
    category: "chuci", gender: "f",
    source: { text: "吾令羲和弭节兮，望崦嵫而勿迫", title: "《离骚》", author: "屈原", dynasty: "战国", genre: "fu" },
    meaning: "羲和：为日驾车之神。驭日而行，光明在望。",
    tags: ["事业", "风雅"], frequency: "classic", verified: true
  },
  {
    id: "wang-shu", given: "望舒", length: 2, pinyin: "wang shu", tones: [4, 1],
    category: "chuci", gender: "u",
    source: { text: "前望舒使先驱兮，后飞廉使奔属", title: "《离骚》", author: "屈原", dynasty: "战国", genre: "fu" },
    meaning: "望舒：为月驾车之神。月色清辉，皎洁如许。",
    tags: ["清朗", "风雅"], frequency: "legend", verified: true
  },
  {
    id: "du-heng", given: "杜蘅", length: 2, pinyin: "du heng", tones: [4, 2],
    category: "chuci", gender: "u",
    source: { text: "畦留夷与揭车兮，杂杜衡与芳芷", title: "《离骚》", author: "屈原", dynasty: "战国", genre: "fu" },
    meaning: "杜蘅：楚辞香草，叶似马蹄，幽香清远。",
    tags: ["风雅"], frequency: "classic", verified: true
  },
  {
    id: "fang-zhi", given: "芳芷", length: 2, pinyin: "fang zhi", tones: [1, 3],
    category: "chuci", gender: "f",
    source: { text: "畦留夷与揭车兮，杂杜衡与芳芷", title: "《离骚》", author: "屈原", dynasty: "战国", genre: "fu" },
    meaning: "芳芷：芬芳的白芷。德馨如兰。",
    tags: ["风雅", "仁善"], frequency: "classic", verified: true
  },
  {
    id: "lu-li", given: "陆离", length: 2, pinyin: "lu li", tones: [4, 2],
    category: "chuci", gender: "u",
    source: { text: "高余冠之岌岌兮，长余佩之陆离", title: "《离骚》", author: "屈原", dynasty: "战国", genre: "fu" },
    meaning: "陆离：光彩斑斓、绚丽夺目。",
    tags: ["风雅"], frequency: "classic", verified: true
  },
  {
    id: "geng-jie", given: "耿介", length: 2, pinyin: "geng jie", tones: [3, 4],
    category: "chuci", gender: "m",
    source: { text: "彼尧舜之耿介兮，既遵道而得路", title: "《离骚》", author: "屈原", dynasty: "战国", genre: "fu" },
    meaning: "耿介：光明磊落，正直不阿。",
    tags: ["仁善", "清朗"], frequency: "classic", verified: true
  },
  {
    id: "he-yi", given: "荷衣", length: 2, pinyin: "he yi", tones: [2, 1],
    category: "chuci", season: [2], gender: "f",
    source: { text: "制芰荷以为衣兮，集芙蓉以为裳", title: "《离骚》", author: "屈原", dynasty: "战国", genre: "fu" },
    meaning: "荷衣：荷叶为衣。出尘之姿，不染俗尘。",
    tags: ["风雅", "自然"], frequency: "classic", verified: true
  },
  {
    id: "luo-ying", given: "落英", length: 2, pinyin: "luo ying", tones: [4, 1],
    category: "chuci", season: [3], gender: "u",
    source: { text: "朝饮木兰之坠露兮，夕餐秋菊之落英", title: "《离骚》", author: "屈原", dynasty: "战国", genre: "fu" },
    meaning: "落英：落花。「落英缤纷」，芳华满地。",
    tags: ["自然", "风雅"], frequency: "classic", verified: true
  },
  {
    id: "qiong-zhi", given: "琼枝", length: 2, pinyin: "qiong zhi", tones: [2, 1],
    category: "chuci", gender: "f",
    source: { text: "溘吾游此春宫兮，折琼枝以继佩", title: "《离骚》", author: "屈原", dynasty: "战国", genre: "fu" },
    meaning: "琼枝：玉树琼枝。华美而珍贵。",
    tags: ["风雅", "富贵"], frequency: "classic", verified: true
  },
  {
    id: "zhao-zhi", given: "昭质", length: 2, pinyin: "zhao zhi", tones: [1, 4],
    category: "chuci", gender: "u",
    source: { text: "芳与泽其杂糅兮，唯昭质其犹未亏", title: "《离骚》", author: "屈原", dynasty: "战国", genre: "fu" },
    meaning: "昭质：光明纯洁的品质。历劫不亏。",
    tags: ["仁善", "清朗"], frequency: "classic", verified: true
  },
  {
    id: "fang-fei", given: "芳菲", length: 2, pinyin: "fang fei", tones: [1, 1],
    category: "chuci", season: [1], gender: "f",
    source: { text: "佩缤纷其繁饰兮，芳菲菲其弥章", title: "《离骚》", author: "屈原", dynasty: "战国", genre: "fu" },
    meaning: "芳菲：花草芬芳。「人间四月芳菲尽」，春光正好。",
    tags: ["自然", "风雅"], frequency: "legend", verified: true
  },
  {
    id: "mi-zhang", given: "弥章", length: 2, pinyin: "mi zhang", tones: [2, 1],
    category: "chuci", gender: "u",
    source: { text: "佩缤纷其繁饰兮，芳菲菲其弥章", title: "《离骚》", author: "屈原", dynasty: "战国", genre: "fu" },
    meaning: "弥章：更加彰显。芳菲弥章，声名日盛。",
    tags: ["事业"], frequency: "classic", verified: true
  },
  {
    id: "xiang-ling", given: "湘灵", length: 2, pinyin: "xiang ling", tones: [1, 2],
    category: "chuci", gender: "f",
    source: { text: "使湘灵鼓瑟兮，令海若舞冯夷", title: "《楚辞·远游》", author: "屈原", dynasty: "战国", genre: "fu" },
    meaning: "湘灵：湘水女神，鼓瑟于江上。",
    tags: ["风雅"], frequency: "classic", verified: true
  },
  {
    id: "ruo-hua", given: "若华", length: 2, pinyin: "ruo hua", tones: [4, 2],
    category: "chuci", gender: "f",
    source: { text: "羲和之未扬，若华何光", title: "《楚辞·天问》", author: "屈原", dynasty: "战国", genre: "fu" },
    meaning: "若华：若木之花。光华四射。",
    tags: ["自然"], frequency: "classic", verified: true
  },

  // ==================== 单字词条（批次 4 第一批） ====================
  {
    id: "dan-ruo", given: "若", length: 1, pinyin: "ruo", tones: [4],
    category: "chuci", gender: "u",
    source: { text: "搴汀洲兮杜若，将以遗兮远者", title: "《九歌·湘夫人》", author: "屈原", dynasty: "战国", genre: "fu" },
    meaning: "若：杜若，楚辞香草。亦含「如」意，若有所待。",
    tags: ["风雅", "自然"], frequency: "classic", verified: true
  },
  {
    id: "dan-lu", given: "露", length: 1, pinyin: "lu", tones: [4],
    category: "shijing", season: [3], gender: "u",
    source: { text: "蒹葭苍苍，白露为霜", title: "《诗经·秦风·蒹葭》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "露：露珠，晶莹清透。亦二十四节气之白露。",
    tags: ["清朗", "自然"], frequency: "legend", verified: true
  },
  {
    id: "dan-xue", given: "雪", length: 1, pinyin: "xue", tones: [3],
    category: "shijing", season: [4], gender: "u",
    source: { text: "今我来思，雨雪霏霏", title: "《诗经·小雅·采薇》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "雪：冰雪之姿。「阳春白雪」，清雅高洁。",
    tags: ["清朗", "风雅"], frequency: "classic", verified: true
  },
  {
    id: "dan-feng", given: "风", length: 1, pinyin: "feng", tones: [1],
    category: "shijing", gender: "u",
    source: { text: "吉甫作诵，穆如清风", title: "《诗经·大雅·烝民》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "风：清风。金风玉露、穆如清风，皆以此字为眼。",
    tags: ["清朗", "风雅"], frequency: "legend", verified: true
  },
  {
    id: "dan-yu", given: "玉", length: 1, pinyin: "yu", tones: [4],
    category: "shijing", gender: "u",
    source: { text: "言念君子，温其如玉", title: "《诗经·秦风·小戎》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "玉：温其如玉，君子之德。",
    tags: ["仁善", "风雅"], frequency: "legend", verified: true
  },
  {
    id: "dan-zhi", given: "芷", length: 1, pinyin: "zhi", tones: [3],
    category: "chuci", gender: "f",
    source: { text: "扈江离与辟芷兮，纫秋兰以为佩", title: "《离骚》", author: "屈原", dynasty: "战国", genre: "fu" },
    meaning: "芷：白芷，香草。亦本草之名，幽香清远。",
    tags: ["风雅", "自然"], frequency: "classic", verified: true
  },
  {
    id: "dan-zhi2", given: "芝", length: 1, pinyin: "zhi", tones: [1],
    category: "hanfu", gender: "u",
    source: { text: "灵芝生天地，朱草被洛滨", title: "曹植《灵芝篇》", author: "曹植", dynasty: "三国", genre: "yuefu" },
    meaning: "芝：灵芝，祥瑞之草。",
    tags: ["福寿"], frequency: "classic", verified: true
  },
  {
    id: "dan-lan", given: "兰", length: 1, pinyin: "lan", tones: [2],
    category: "chuci", gender: "f",
    source: { text: "扈江离与辟芷兮，纫秋兰以为佩", title: "《离骚》", author: "屈原", dynasty: "战国", genre: "fu" },
    meaning: "兰：兰花，君子之花。幽兰生于深谷，不以无人而不芳。",
    tags: ["风雅", "仁善"], frequency: "legend", verified: true
  },
  {
    id: "dan-yue", given: "月", length: 1, pinyin: "yue", tones: [4],
    category: "tangshi", gender: "u",
    source: { text: "海上生明月，天涯共此时", title: "张九龄《望月怀远》", author: "张九龄", dynasty: "唐", genre: "shi" },
    meaning: "月：明月。海上生明月，天涯共此时。",
    tags: ["清朗", "爱情"], frequency: "legend", verified: true
  },
  {
    id: "dan-xing", given: "星", length: 1, pinyin: "xing", tones: [1],
    category: "hanfu", gender: "u",
    source: { text: "日月之行，若出其中；星汉灿烂，若出其里", title: "曹操《观沧海》", author: "曹操", dynasty: "东汉", genre: "yuefu" },
    meaning: "星：星辰。「星汉灿烂」，胸襟如海。",
    tags: ["清朗", "自然"], frequency: "legend", verified: true
  },
  {
    id: "dan-yun", given: "云", length: 1, pinyin: "yun", tones: [2],
    category: "hanfu", gender: "u",
    source: { text: "云无心以出岫，鸟倦飞而知还", title: "陶渊明《归去来兮辞》", author: "陶渊明", dynasty: "东晋", genre: "fu" },
    meaning: "云：云无心以出岫。闲淡自在。",
    tags: ["自然", "清朗"], frequency: "legend", verified: true
  },
  {
    id: "dan-yu3", given: "雨", length: 1, pinyin: "yu", tones: [3],
    category: "tangshi", season: [1], gender: "u",
    source: { text: "好雨知时节，当春乃发生。随风潜入夜，润物细无声", title: "杜甫《春夜喜雨》", author: "杜甫", dynasty: "唐", genre: "shi" },
    meaning: "雨：好雨知时节，润物细无声。",
    tags: ["自然", "仁善"], frequency: "legend", verified: true
  },
  {
    id: "dan-quan", given: "泉", length: 1, pinyin: "quan", tones: [2],
    category: "tangshi", gender: "u",
    source: { text: "明月松间照，清泉石上流", title: "王维《山居秋暝》", author: "王维", dynasty: "唐", genre: "shi" },
    meaning: "泉：清泉石上流。清澈见底，川流不息。",
    tags: ["清朗", "自然"], frequency: "legend", verified: true
  },
  {
    id: "dan-tao", given: "涛", length: 1, pinyin: "tao", tones: [1],
    category: "songci", gender: "m",
    source: { text: "乱石穿空，惊涛拍岸，卷起千堆雪", title: "苏轼《念奴娇·赤壁怀古》", author: "苏轼", dynasty: "宋", genre: "ci" },
    meaning: "涛：惊涛拍岸，气势磅礴。",
    tags: ["事业", "坚韧"], frequency: "legend", verified: true
  },
  {
    id: "dan-song", given: "松", length: 1, pinyin: "song", tones: [1],
    category: "wenyan", gender: "m",
    source: { text: "岁寒，然后知松柏之后凋也", title: "《论语·子罕》", author: "孔子", dynasty: "春秋", genre: "classic" },
    meaning: "松：岁寒不凋，坚韧长青。",
    tags: ["坚韧", "福寿"], frequency: "legend", verified: true
  },
  {
    id: "dan-mei", given: "梅", length: 1, pinyin: "mei", tones: [2],
    category: "songci", season: [4], gender: "f",
    source: { text: "疏影横斜水清浅，暗香浮动月黄昏", title: "林逋《山园小梅》", author: "林逋", dynasty: "宋", genre: "shi" },
    meaning: "梅：凌寒独放，暗香浮动。",
    tags: ["风雅", "坚韧"], frequency: "legend", verified: true
  },
  {
    id: "dan-zhu", given: "竹", length: 1, pinyin: "zhu", tones: [2],
    category: "shijing", gender: "u",
    source: { text: "瞻彼淇奥，绿竹猗猗", title: "《诗经·卫风·淇奥》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "竹：绿竹猗猗。虚心有节，君子之德。",
    tags: ["坚韧", "风雅"], frequency: "classic", verified: true
  },
  {
    id: "dan-he", given: "荷", length: 1, pinyin: "he", tones: [2],
    category: "wenyan", season: [2], gender: "f",
    source: { text: "予独爱莲之出淤泥而不染，濯清涟而不妖", title: "周敦颐《爱莲说》", author: "周敦颐", dynasty: "宋", genre: "classic" },
    meaning: "荷：莲花，出淤泥而不染。",
    tags: ["清朗", "风雅"], frequency: "legend", verified: true
  },
  {
    id: "dan-tang", given: "棠", length: 1, pinyin: "tang", tones: [2],
    category: "shijing", gender: "u",
    source: { text: "蔽芾甘棠，勿翦勿伐，召伯所茇", title: "《诗经·召南·甘棠》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "棠：甘棠，召公遗爱之树，仁政爱民之典。",
    tags: ["仁善"], frequency: "classic", verified: true
  },
  {
    id: "dan-mu", given: "木", length: 1, pinyin: "mu", tones: [4],
    category: "shijing", gender: "u",
    source: { text: "南有乔木，不可休思", title: "《诗经·周南·汉广》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "木：乔木，栋梁之材。",
    tags: ["自然", "事业"], frequency: "classic", verified: true
  },
  {
    id: "dan-nan", given: "南", length: 1, pinyin: "nan", tones: [2],
    category: "hanfu", gender: "u",
    source: { text: "江南可采莲，莲叶何田田", title: "汉乐府《江南》", author: "佚名", dynasty: "汉", genre: "yuefu" },
    meaning: "南：江南，烟雨温柔之乡。",
    tags: ["自然", "风雅"], frequency: "classic", verified: true
  },
  {
    id: "dan-shan", given: "山", length: 1, pinyin: "shan", tones: [1],
    category: "shijing", gender: "m",
    source: { text: "高山仰止，景行行止", title: "《诗经·小雅·车舝》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "山：高山仰止。稳重如山。",
    tags: ["坚韧", "仁善"], frequency: "legend", verified: true
  },
  {
    id: "dan-hai", given: "海", length: 1, pinyin: "hai", tones: [3],
    category: "hanfu", gender: "u",
    source: { text: "东临碣石，以观沧海。水何澹澹，山岛竦峙", title: "曹操《观沧海》", author: "曹操", dynasty: "东汉", genre: "yuefu" },
    meaning: "海：沧海。海纳百川，有容乃大。",
    tags: ["事业", "自然"], frequency: "legend", verified: true
  },
  {
    id: "dan-tian", given: "天", length: 1, pinyin: "tian", tones: [1],
    category: "hanfu", gender: "u",
    source: { text: "天苍苍，野茫茫，风吹草低见牛羊", title: "北朝民歌《敕勒歌》", author: "佚名", dynasty: "北朝", genre: "yuefu" },
    meaning: "天：天空。胸怀苍天，志向高远。",
    tags: ["清朗", "事业"], frequency: "classic", verified: true
  },
  {
    id: "dan-ming", given: "明", length: 1, pinyin: "ming", tones: [2],
    category: "wenyan", gender: "u",
    source: { text: "大学之道，在明明德，在亲民，在止于至善", title: "《大学》", author: "曾子", dynasty: "春秋", genre: "classic" },
    meaning: "明：光明，明德。「明明德」为大学之首义。",
    tags: ["聪慧", "清朗"], frequency: "legend", verified: true
  },
  {
    id: "dan-ning", given: "宁", length: 1, pinyin: "ning", tones: [2],
    category: "wenyan", gender: "u",
    source: { text: "五福：一曰寿，二曰富，三曰康宁，四曰攸好德，五曰考终命", title: "《尚书·洪范》", author: "佚名", dynasty: "周", genre: "classic" },
    meaning: "宁：康宁。五福之一，平安顺遂。",
    tags: ["平安", "福寿"], frequency: "legend", verified: true
  },
  {
    id: "dan-fei", given: "飞", length: 1, pinyin: "fei", tones: [1],
    category: "shijing", gender: "u",
    source: { text: "凤凰于飞，翙翙其羽", title: "《诗经·大雅·卷阿》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "飞：凤凰于飞。比翼双飞，一飞冲天。",
    tags: ["事业", "爱情"], frequency: "legend", verified: true
  },
  {
    id: "dan-gui", given: "归", length: 1, pinyin: "gui", tones: [1],
    category: "shijing", gender: "f",
    source: { text: "之子于归，宜其室家", title: "《诗经·周南·桃夭》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "归：之子于归，宜室宜家。",
    tags: ["平安", "爱情"], frequency: "classic", verified: true
  },
  {
    id: "dan-lai", given: "来", length: 1, pinyin: "lai", tones: [2],
    category: "hanfu", gender: "u",
    source: { text: "清风徐来，水波不兴", title: "苏轼《赤壁赋》", author: "苏轼", dynasty: "宋", genre: "fu" },
    meaning: "来：清风徐来。从容而至，未来可期。",
    tags: ["清朗", "平安"], frequency: "legend", verified: true
  },
  {
    id: "dan-ran", given: "然", length: 1, pinyin: "ran", tones: [2],
    category: "hanfu", gender: "u",
    source: { text: "采菊东篱下，悠然见南山", title: "陶渊明《饮酒·其五》", author: "陶渊明", dynasty: "东晋", genre: "shi" },
    meaning: "然：悠然。恬淡自适，泰然处之。",
    tags: ["风雅", "平安"], frequency: "legend", verified: true
  },
  {
    id: "dan-xing2", given: "行", length: 1, pinyin: "xing", tones: [2],
    category: "shijing", gender: "u",
    source: { text: "高山仰止，景行行止", title: "《诗经·小雅·车舝》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "行：景行行止。知行合一，行稳致远。",
    tags: ["事业", "仁善"], frequency: "classic", verified: true
  },
  {
    id: "dan-zhou", given: "周", length: 1, pinyin: "zhou", tones: [1],
    category: "wenyan", gender: "u",
    source: { text: "昔者庄周梦为蝴蝶，栩栩然蝴蝶也", title: "《庄子·齐物论》", author: "庄子", dynasty: "战国", genre: "classic" },
    meaning: "周：庄周。物我两忘，逍遥自在。亦含「周全」之意。",
    tags: ["聪慧", "风雅"], frequency: "legend", verified: true
  },
  {
    id: "dan-xiao", given: "笑", length: 1, pinyin: "xiao", tones: [4],
    category: "tangshi", gender: "f",
    source: { text: "谈笑有鸿儒，往来无白丁", title: "刘禹锡《陋室铭》", author: "刘禹锡", dynasty: "唐", genre: "fu" },
    meaning: "笑：谈笑风生。乐观豁达，笑对人生。",
    tags: ["风雅", "平安"], frequency: "legend", verified: true
  },
  {
    id: "dan-run", given: "润", length: 1, pinyin: "run", tones: [4],
    category: "tangshi", gender: "u",
    source: { text: "随风潜入夜，润物细无声", title: "杜甫《春夜喜雨》", author: "杜甫", dynasty: "唐", genre: "shi" },
    meaning: "润：润物细无声。温润如玉，泽被无声。",
    tags: ["仁善", "自然"], frequency: "legend", verified: true
  },
  {
    id: "dan-shi", given: "诗", length: 1, pinyin: "shi", tones: [1],
    category: "wenyan", gender: "f",
    source: { text: "不学诗，无以言", title: "《论语·季氏》", author: "孔子", dynasty: "春秋", genre: "classic" },
    meaning: "诗：诗书传家。腹有诗书气自华。",
    tags: ["聪慧", "风雅"], frequency: "legend", verified: true
  },
  {
    id: "dan-nuo", given: "诺", length: 1, pinyin: "nuo", tones: [4],
    category: "hanfu", gender: "u",
    source: { text: "得黄金百斤，不如得季布一诺", title: "《史记·季布列传》", author: "司马迁", dynasty: "汉", genre: "classic" },
    meaning: "诺：一诺千金。言而有信。",
    tags: ["仁善"], frequency: "legend", verified: true
  },
  {
    id: "dan-an", given: "安", length: 1, pinyin: "an", tones: [1],
    category: "tangshi", gender: "u",
    source: { text: "安得广厦千万间，大庇天下寒士俱欢颜", title: "杜甫《茅屋为秋风所破歌》", author: "杜甫", dynasty: "唐", genre: "shi" },
    meaning: "安：平安，安定。「安然」双关：安然而处，安之若素。",
    tags: ["平安", "仁善"], frequency: "legend", verified: true
  },
  {
    id: "dan-xin", given: "心", length: 1, pinyin: "xin", tones: [1],
    category: "tangshi", gender: "u",
    source: { text: "洛阳亲友如相问，一片冰心在玉壶", title: "王昌龄《芙蓉楼送辛渐》", author: "王昌龄", dynasty: "唐", genre: "shi" },
    meaning: "心：冰心玉壶。心地纯净。",
    tags: ["仁善", "清朗"], frequency: "legend", verified: true
  },
  {
    id: "dan-zhou2", given: "舟", length: 1, pinyin: "zhou", tones: [1],
    category: "shijing", gender: "u",
    source: { text: "泛彼柏舟，亦泛其流", title: "《诗经·邶风·柏舟》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "舟：柏舟。中流击楫，逆流而上。",
    tags: ["坚韧", "事业"], frequency: "classic", verified: true
  },
  {
    id: "dan-lin", given: "林", length: 1, pinyin: "lin", tones: [2],
    category: "tangshi", gender: "u",
    source: { text: "平林漠漠烟如织，寒山一带伤心碧", title: "李白《菩萨蛮》", author: "李白", dynasty: "唐", genre: "ci" },
    meaning: "林：平林漠漠。林木葱茏，生机盎然。",
    tags: ["自然"], frequency: "legend", verified: true
  },
  {
    id: "dan-qiu", given: "秋", length: 1, pinyin: "qiu", tones: [1],
    category: "tangshi", season: [3], gender: "u",
    source: { text: "空山新雨后，天气晚来秋", title: "王维《山居秋暝》", author: "王维", dynasty: "唐", genre: "shi" },
    meaning: "秋：山居秋暝。秋高气爽，天朗气清。",
    tags: ["清朗", "自然"], frequency: "legend", verified: true
  },
  {
    id: "dan-dong", given: "冬", length: 1, pinyin: "dong", tones: [1],
    category: "solar", season: [4], gender: "u",
    source: { text: "冬，终也，万物收藏也", title: "《月令七十二候集解》", author: "佚名", dynasty: "元", genre: "classic" },
    meaning: "冬：万物收藏，蓄势待发。亦中药麦冬之名。",
    tags: ["福寿", "自然"], frequency: "classic", verified: true
  },
  {
    id: "dan-xia", given: "夏", length: 1, pinyin: "xia", tones: [4],
    category: "shijing", season: [2], gender: "u",
    source: { text: "四月维夏，六月徂暑", title: "《诗经·小雅·四月》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "夏：夏日。生机蓬勃，草木繁盛。",
    tags: ["自然"], frequency: "classic", verified: true
  },
  {
    id: "dan-chun", given: "春", length: 1, pinyin: "chun", tones: [1],
    category: "tangshi", season: [1], gender: "u",
    source: { text: "春风又绿江南岸，明月何时照我还", title: "王安石《泊船瓜洲》", author: "王安石", dynasty: "宋", genre: "shi" },
    meaning: "春：春风又绿江南岸。万物之始。",
    tags: ["自然", "福寿"], frequency: "legend", verified: true
  },
  {
    id: "dan-ying", given: "英", length: 1, pinyin: "ying", tones: [1],
    category: "chuci", gender: "u",
    source: { text: "朝饮木兰之坠露兮，夕餐秋菊之落英", title: "《离骚》", author: "屈原", dynasty: "战国", genre: "fu" },
    meaning: "英：落英缤纷，亦英才之意。",
    tags: ["风雅", "事业"], frequency: "classic", verified: true
  },
  {
    id: "dan-hua", given: "华", length: 1, pinyin: "hua", tones: [2],
    category: "shijing", gender: "u",
    source: { text: "桃之夭夭，灼灼其华", title: "《诗经·周南·桃夭》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "华：灼灼其华。光彩照人，含华咀英。",
    tags: ["风雅", "富贵"], frequency: "legend", verified: true
  },
  {
    id: "dan-yin", given: "音", length: 1, pinyin: "yin", tones: [1],
    category: "shijing", gender: "f",
    source: { text: "大姒嗣徽音，则百斯男", title: "《诗经·大雅·思齐》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "音：徽音，美名善誉。亦知音之音。",
    tags: ["风雅", "仁善"], frequency: "legend", verified: true
  },
  {
    id: "dan-guang", given: "光", length: 1, pinyin: "guang", tones: [1],
    category: "tangshi", gender: "u",
    source: { text: "床前明月光，疑是地上霜", title: "李白《静夜思》", author: "李白", dynasty: "唐", genre: "shi" },
    meaning: "光：明月光。光华流转，前程似锦。",
    tags: ["清朗", "事业"], frequency: "legend", verified: true
  },

  // ==================== 批次 2a：唐诗与汉魏诗文 ====================
  {
    id: "yun-fan", given: "云帆", length: 2, pinyin: "yun fan", tones: [2, 1],
    category: "tangshi", gender: "m",
    source: { text: "长风破浪会有时，直挂云帆济沧海", title: "李白《行路难·其一》", author: "李白", dynasty: "唐", genre: "shi" },
    meaning: "云帆：高挂入云的船帆。长风破浪，一往无前。",
    tags: ["事业", "坚韧"], frequency: "legend", verified: true
  },
  {
    id: "chang-feng", given: "长风", length: 2, pinyin: "chang feng", tones: [2, 1],
    category: "tangshi", gender: "u",
    source: { text: "长风破浪会有时，直挂云帆济沧海", title: "李白《行路难·其一》", author: "李白", dynasty: "唐", genre: "shi" },
    meaning: "长风：长风破浪。乘长风之势，破万里之浪。",
    tags: ["事业", "坚韧"], frequency: "legend", verified: true
  },
  {
    id: "ming-yue", given: "明月", length: 2, pinyin: "ming yue", tones: [2, 4],
    category: "tangshi", gender: "u",
    source: { text: "举头望明月，低头思故乡", title: "李白《静夜思》", author: "李白", dynasty: "唐", genre: "shi" },
    meaning: "明月：明月千里。皎洁无瑕，普照万家。",
    tags: ["清朗", "爱情"], frequency: "legend", verified: true
  },
  {
    id: "qing-xi", given: "清溪", length: 2, pinyin: "qing xi", tones: [1, 1],
    category: "tangshi", gender: "u",
    source: { text: "清溪清我心，水色异诸水", title: "李白《清溪行》", author: "李白", dynasty: "唐", genre: "shi" },
    meaning: "清溪：清澈的溪流。清溪清心，洗尽尘俗。",
    tags: ["清朗", "自然"], frequency: "classic", verified: true
  },
  {
    id: "qing-tian", given: "青天", length: 2, pinyin: "qing tian", tones: [1, 1],
    category: "tangshi", gender: "u",
    source: { text: "俱怀逸兴壮思飞，欲上青天揽明月", title: "李白《宣州谢朓楼饯别校书叔云》", author: "李白", dynasty: "唐", genre: "shi" },
    meaning: "青天：碧空如洗。青云之志，壮思飞扬。",
    tags: ["清朗", "事业"], frequency: "legend", verified: true
  },
  {
    id: "yi-xing", given: "逸兴", length: 2, pinyin: "yi xing", tones: [4, 4],
    category: "tangshi", gender: "u",
    source: { text: "俱怀逸兴壮思飞，欲上青天揽明月", title: "李白《宣州谢朓楼饯别校书叔云》", author: "李白", dynasty: "唐", genre: "shi" },
    meaning: "逸兴：超逸豪放的兴致。",
    tags: ["风雅"], frequency: "classic", verified: true
  },
  {
    id: "yun-hai", given: "云海", length: 2, pinyin: "yun hai", tones: [2, 3],
    category: "tangshi", gender: "u",
    source: { text: "明月出天山，苍茫云海间", title: "李白《关山月》", author: "李白", dynasty: "唐", genre: "shi" },
    meaning: "云海：苍茫云海。胸襟开阔，气象万千。",
    tags: ["自然", "清朗"], frequency: "legend", verified: true
  },
  {
    id: "guan-shan", given: "关山", length: 2, pinyin: "guan shan", tones: [1, 1],
    category: "tangshi", gender: "m",
    source: { text: "明月出天山，苍茫云海间", title: "李白《关山月》", author: "李白", dynasty: "唐", genre: "shi" },
    meaning: "关山：关隘与山川。关山万里，志在四方。",
    tags: ["坚韧", "事业"], frequency: "classic", verified: true
  },
  {
    id: "yin-he", given: "银河", length: 2, pinyin: "yin he", tones: [2, 2],
    category: "tangshi", gender: "u",
    source: { text: "飞流直下三千尺，疑是银河落九天", title: "李白《望庐山瀑布》", author: "李白", dynasty: "唐", genre: "shi" },
    meaning: "银河：天河。银汉灿烂，气势磅礴。",
    tags: ["清朗"], frequency: "legend", verified: true
  },
  {
    id: "jiu-tian", given: "九天", length: 2, pinyin: "jiu tian", tones: [3, 1],
    category: "tangshi", gender: "u",
    source: { text: "飞流直下三千尺，疑是银河落九天", title: "李白《望庐山瀑布》", author: "李白", dynasty: "唐", genre: "shi" },
    meaning: "九天：九重之天。至高至远。",
    tags: ["事业"], frequency: "classic", verified: true
  },
  {
    id: "xing-chui", given: "星垂", length: 2, pinyin: "xing chui", tones: [1, 2],
    category: "tangshi", gender: "m",
    source: { text: "星垂平野阔，月涌大江流", title: "杜甫《旅夜书怀》", author: "杜甫", dynasty: "唐", genre: "shi" },
    meaning: "星垂：星垂平野。天地辽阔，气象雄浑。",
    tags: ["清朗", "事业"], frequency: "legend", verified: true
  },
  {
    id: "yue-yong", given: "月涌", length: 2, pinyin: "yue yong", tones: [4, 3],
    category: "tangshi", gender: "u",
    source: { text: "星垂平野阔，月涌大江流", title: "杜甫《旅夜书怀》", author: "杜甫", dynasty: "唐", genre: "shi" },
    meaning: "月涌：月随江涌。月光随波，气象万千。",
    tags: ["清朗", "自然"], frequency: "classic", verified: true
  },
  {
    id: "ping-ye", given: "平野", length: 2, pinyin: "ping ye", tones: [2, 3],
    category: "tangshi", gender: "u",
    source: { text: "星垂平野阔，月涌大江流", title: "杜甫《旅夜书怀》", author: "杜甫", dynasty: "唐", genre: "shi" },
    meaning: "平野：辽阔的原野。视野开阔，胸襟坦荡。",
    tags: ["自然", "清朗"], frequency: "classic", verified: true
  },
  {
    id: "jiang-liu", given: "江流", length: 2, pinyin: "jiang liu", tones: [1, 2],
    category: "tangshi", gender: "u",
    source: { text: "星垂平野阔，月涌大江流", title: "杜甫《旅夜书怀》", author: "杜甫", dynasty: "唐", genre: "shi" },
    meaning: "江流：大江东去。川流不息，生生不止。",
    tags: ["事业", "自然"], frequency: "classic", verified: true
  },
  {
    id: "ling-jue", given: "凌绝", length: 2, pinyin: "ling jue", tones: [2, 2],
    category: "tangshi", gender: "m",
    source: { text: "会当凌绝顶，一览众山小", title: "杜甫《望岳》", author: "杜甫", dynasty: "唐", genre: "shi" },
    meaning: "凌绝：凌绝顶。登峰造极，一览众山小。",
    tags: ["事业", "坚韧"], frequency: "classic", verified: true
  },
  {
    id: "xing-he", given: "星河", length: 2, pinyin: "xing he", tones: [1, 2],
    category: "tangshi", gender: "u",
    source: { text: "五更鼓角声悲壮，三峡星河影动摇", title: "杜甫《阁夜》", author: "杜甫", dynasty: "唐", genre: "shi" },
    meaning: "星河：银河倒映。星汉灿烂，浩瀚无垠。",
    tags: ["清朗", "自然"], frequency: "legend", verified: true
  },
  {
    id: "bai-lu2", given: "白鹭", length: 2, pinyin: "bai lu", tones: [2, 4],
    category: "tangshi", gender: "u",
    source: { text: "两个黄鹂鸣翠柳，一行白鹭上青天", title: "杜甫《绝句》", author: "杜甫", dynasty: "唐", genre: "shi" },
    meaning: "白鹭：白鹭上青天。身姿轻盈，志向高远。",
    tags: ["自然", "事业"], frequency: "classic", verified: true
  },
  {
    id: "cui-liu", given: "翠柳", length: 2, pinyin: "cui liu", tones: [4, 3],
    category: "tangshi", season: [1], gender: "f",
    source: { text: "两个黄鹂鸣翠柳，一行白鹭上青天", title: "杜甫《绝句》", author: "杜甫", dynasty: "唐", genre: "shi" },
    meaning: "翠柳：翠绿的柳色。春意盎然。",
    tags: ["自然"], frequency: "classic", verified: true
  },
  {
    id: "wan-qing", given: "晚晴", length: 2, pinyin: "wan qing", tones: [3, 2],
    category: "tangshi", gender: "u",
    source: { text: "天意怜幽草，人间重晚晴", title: "李商隐《晚晴》", author: "李商隐", dynasty: "唐", genre: "shi" },
    meaning: "晚晴：傍晚放晴。风雨之后，云开月明。",
    tags: ["平安", "清朗"], frequency: "legend", verified: true
  },
  {
    id: "jin-se", given: "锦瑟", length: 2, pinyin: "jin se", tones: [3, 4],
    category: "tangshi", gender: "f",
    source: { text: "锦瑟无端五十弦，一弦一柱思华年", title: "李商隐《锦瑟》", author: "李商隐", dynasty: "唐", genre: "shi" },
    meaning: "锦瑟：华美的瑟。弦歌雅意，华年似锦。",
    tags: ["风雅", "爱情"], frequency: "legend", verified: true
  },
  {
    id: "ling-xi", given: "灵犀", length: 2, pinyin: "ling xi", tones: [2, 1],
    category: "tangshi", gender: "u",
    source: { text: "身无彩凤双飞翼，心有灵犀一点通", title: "李商隐《无题》", author: "李商隐", dynasty: "唐", genre: "shi" },
    meaning: "灵犀：犀牛角中白纹，相传通灵。心有灵犀，默契天成。",
    tags: ["聪慧", "爱情"], frequency: "legend", verified: true
  },
  {
    id: "cang-hai", given: "沧海", length: 2, pinyin: "cang hai", tones: [1, 3],
    category: "tangshi", gender: "u",
    source: { text: "曾经沧海难为水，除却巫山不是云", title: "元稹《离思五首·其四》", author: "元稹", dynasty: "唐", genre: "shi" },
    meaning: "沧海：沧海桑田。曾经沧海，胸怀辽阔。",
    tags: ["事业", "自然"], frequency: "legend", verified: true
  },
  {
    id: "qing-quan", given: "清泉", length: 2, pinyin: "qing quan", tones: [1, 2],
    category: "tangshi", gender: "u",
    source: { text: "明月松间照，清泉石上流", title: "王维《山居秋暝》", author: "王维", dynasty: "唐", genre: "shi" },
    meaning: "清泉：石上清泉。清澈见底，润物无声。",
    tags: ["清朗", "自然"], frequency: "legend", verified: true
  },
  {
    id: "kong-shan", given: "空山", length: 2, pinyin: "kong shan", tones: [1, 1],
    category: "tangshi", gender: "u",
    source: { text: "空山新雨后，天气晚来秋", title: "王维《山居秋暝》", author: "王维", dynasty: "唐", genre: "shi" },
    meaning: "空山：空山新雨。静谧空灵，清幽出尘。",
    tags: ["清朗", "自然"], frequency: "legend", verified: true
  },
  {
    id: "qiu-shui", given: "秋水", length: 2, pinyin: "qiu shui", tones: [1, 3],
    category: "hanfu", season: [3], gender: "u",
    source: { text: "落霞与孤鹜齐飞，秋水共长天一色", title: "王勃《滕王阁序》", author: "王勃", dynasty: "唐", genre: "fu" },
    meaning: "秋水：秋水共长天一色。亦《庄子》「秋水时至」，望穿秋水之深情。",
    tags: ["清朗", "自然"], frequency: "legend", verified: true
  },
  {
    id: "chang-tian", given: "长天", length: 2, pinyin: "chang tian", tones: [2, 1],
    category: "hanfu", gender: "u",
    source: { text: "落霞与孤鹜齐飞，秋水共长天一色", title: "王勃《滕王阁序》", author: "王勃", dynasty: "唐", genre: "fu" },
    meaning: "长天：长天一色。天高地迥，气象万千。",
    tags: ["清朗", "事业"], frequency: "classic", verified: true
  },
  {
    id: "luo-xia", given: "落霞", length: 2, pinyin: "luo xia", tones: [4, 2],
    category: "hanfu", gender: "f",
    source: { text: "落霞与孤鹜齐飞，秋水共长天一色", title: "王勃《滕王阁序》", author: "王勃", dynasty: "唐", genre: "fu" },
    meaning: "落霞：晚霞满天。绚烂之美。",
    tags: ["风雅", "自然"], frequency: "legend", verified: true
  },
  {
    id: "sang-yu", given: "桑榆", length: 2, pinyin: "sang yu", tones: [1, 2],
    category: "hanfu", gender: "u",
    source: { text: "东隅已逝，桑榆非晚", title: "王勃《滕王阁序》", author: "王勃", dynasty: "唐", genre: "fu" },
    meaning: "桑榆：日落处，喻晚景。「桑榆非晚」，为时未晚。",
    tags: ["福寿", "事业"], frequency: "classic", verified: true
  },
  {
    id: "yu-ji", given: "雨霁", length: 2, pinyin: "yu ji", tones: [3, 4],
    category: "hanfu", gender: "u",
    source: { text: "云销雨霁，彩彻区明", title: "王勃《滕王阁序》", author: "王勃", dynasty: "唐", genre: "fu" },
    meaning: "雨霁：雨过天晴。云销雨霁，豁然开朗。",
    tags: ["清朗", "平安"], frequency: "classic", verified: true
  },
  {
    id: "qing-yun", given: "青云", length: 2, pinyin: "qing yun", tones: [1, 2],
    category: "hanfu", gender: "m",
    source: { text: "穷且益坚，不坠青云之志", title: "王勃《滕王阁序》", author: "王勃", dynasty: "唐", genre: "fu" },
    meaning: "青云：青云之志。「平步青云」，志向高远。",
    tags: ["事业", "坚韧"], frequency: "legend", verified: true
  },
  {
    id: "chun-jiang", given: "春江", length: 2, pinyin: "chun jiang", tones: [1, 1],
    category: "tangshi", season: [1], gender: "u",
    source: { text: "春江潮水连海平，海上明月共潮生", title: "张若虚《春江花月夜》", author: "张若虚", dynasty: "唐", genre: "shi" },
    meaning: "春江：春江潮水。月照春江，孤篇横绝全唐。",
    tags: ["自然", "清朗"], frequency: "legend", verified: true
  },
  {
    id: "jiang-yue", given: "江月", length: 2, pinyin: "jiang yue", tones: [1, 4],
    category: "tangshi", gender: "u",
    source: { text: "江畔何人初见月，江月何年初照人", title: "张若虚《春江花月夜》", author: "张若虚", dynasty: "唐", genre: "shi" },
    meaning: "江月：江上明月。江月年年，亘古长存。",
    tags: ["清朗"], frequency: "legend", verified: true
  },
  {
    id: "yan-yan2", given: "滟滟", length: 2, pinyin: "yan yan", tones: [4, 4],
    category: "tangshi", gender: "f",
    source: { text: "滟滟随波千万里，何处春江无月明", title: "张若虚《春江花月夜》", author: "张若虚", dynasty: "唐", genre: "shi" },
    meaning: "滟滟：波光荡漾。月光随波，滟滟千里。",
    tags: ["清朗", "风雅"], frequency: "classic", verified: true
  },
  {
    id: "zhi-qiu", given: "知秋", length: 2, pinyin: "zhi qiu", tones: [1, 1],
    category: "wenyan", season: [3], gender: "u",
    source: { text: "见一叶落而知岁之将暮", title: "《淮南子·说山训》", author: "刘安", dynasty: "汉", genre: "classic" },
    meaning: "知秋：一叶知秋。见微知著，明察秋毫。",
    tags: ["聪慧"], frequency: "legend", verified: true
  },
  {
    id: "shuang-ye", given: "霜叶", length: 2, pinyin: "shuang ye", tones: [1, 4],
    category: "tangshi", season: [3], gender: "u",
    source: { text: "停车坐爱枫林晚，霜叶红于二月花", title: "杜牧《山行》", author: "杜牧", dynasty: "唐", genre: "shi" },
    meaning: "霜叶：经霜的红叶。霜重色愈浓，历经风霜而愈艳。",
    tags: ["自然", "坚韧"], frequency: "legend", verified: true
  },
  {
    id: "song-feng", given: "松风", length: 2, pinyin: "song feng", tones: [1, 1],
    category: "tangshi", gender: "u",
    source: { text: "松风吹解带，山月照弹琴", title: "王维《酬张少府》", author: "王维", dynasty: "唐", genre: "shi" },
    meaning: "松风：松间清风。松风山月，隐逸之趣。",
    tags: ["风雅", "自然"], frequency: "classic", verified: true
  },
  {
    id: "shan-yue", given: "山月", length: 2, pinyin: "shan yue", tones: [1, 4],
    category: "tangshi", gender: "u",
    source: { text: "松风吹解带，山月照弹琴", title: "王维《酬张少府》", author: "王维", dynasty: "唐", genre: "shi" },
    meaning: "山月：山间明月。清辉遍洒。",
    tags: ["清朗"], frequency: "classic", verified: true
  },
  {
    id: "hong-dou", given: "红豆", length: 2, pinyin: "hong dou", tones: [2, 4],
    category: "tangshi", gender: "f",
    source: { text: "红豆生南国，春来发几枝", title: "王维《相思》", author: "王维", dynasty: "唐", genre: "shi" },
    meaning: "红豆：相思之种。此物最相思。",
    tags: ["爱情", "风雅"], frequency: "classic", verified: true
  },
  {
    id: "chun-hui", given: "春晖", length: 2, pinyin: "chun hui", tones: [1, 1],
    category: "tangshi", season: [1], gender: "u",
    source: { text: "谁言寸草心，报得三春晖", title: "孟郊《游子吟》", author: "孟郊", dynasty: "唐", genre: "shi" },
    meaning: "春晖：春日暖阳，喻母爱。寸草春晖，孝亲之意。",
    tags: ["仁善", "福寿"], frequency: "legend", verified: true
  },
  {
    id: "chun-xiao", given: "春晓", length: 2, pinyin: "chun xiao", tones: [1, 3],
    category: "tangshi", season: [1], gender: "u",
    source: { text: "春眠不觉晓，处处闻啼鸟", title: "孟浩然《春晓》", author: "孟浩然", dynasty: "唐", genre: "shi" },
    meaning: "春晓：春天的清晨。万物初醒，生机盎然。",
    tags: ["自然", "清朗"], frequency: "legend", verified: true
  },
  {
    id: "he-feng", given: "荷风", length: 2, pinyin: "he feng", tones: [2, 1],
    category: "tangshi", season: [2], gender: "u",
    source: { text: "荷风送香气，竹露滴清响", title: "孟浩然《夏日南亭怀辛大》", author: "孟浩然", dynasty: "唐", genre: "shi" },
    meaning: "荷风：拂过荷塘的凉风。荷风送香。",
    tags: ["自然", "清朗"], frequency: "classic", verified: true
  },
  {
    id: "zhu-lu", given: "竹露", length: 2, pinyin: "zhu lu", tones: [2, 4],
    category: "tangshi", season: [2], gender: "u",
    source: { text: "荷风送香气，竹露滴清响", title: "孟浩然《夏日南亭怀辛大》", author: "孟浩然", dynasty: "唐", genre: "shi" },
    meaning: "竹露：竹上清露。晶莹剔透。",
    tags: ["清朗", "自然"], frequency: "classic", verified: true
  },
  {
    id: "qing-xiang", given: "清响", length: 2, pinyin: "qing xiang", tones: [1, 3],
    category: "tangshi", season: [2], gender: "u",
    source: { text: "荷风送香气，竹露滴清响", title: "孟浩然《夏日南亭怀辛大》", author: "孟浩然", dynasty: "唐", genre: "shi" },
    meaning: "清响：清脆的声响。竹露滴落，清音入耳。",
    tags: ["清朗", "风雅"], frequency: "classic", verified: true
  },
  {
    id: "you-huang", given: "幽篁", length: 2, pinyin: "you huang", tones: [1, 2],
    category: "tangshi", gender: "u",
    source: { text: "独坐幽篁里，弹琴复长啸", title: "王维《竹里馆》", author: "王维", dynasty: "唐", genre: "shi" },
    meaning: "幽篁：幽静的竹林。清幽自处，琴啸相和。",
    tags: ["风雅", "自然"], frequency: "classic", verified: true
  },
  {
    id: "chun-shan", given: "春山", length: 2, pinyin: "chun shan", tones: [1, 1],
    category: "tangshi", season: [1], gender: "u",
    source: { text: "人闲桂花落，夜静春山空", title: "王维《鸟鸣涧》", author: "王维", dynasty: "唐", genre: "shi" },
    meaning: "春山：春夜空山。静谧安然。",
    tags: ["自然", "清朗"], frequency: "classic", verified: true
  },
  {
    id: "bing-xin", given: "冰心", length: 2, pinyin: "bing xin", tones: [1, 1],
    category: "tangshi", gender: "f",
    source: { text: "洛阳亲友如相问，一片冰心在玉壶", title: "王昌龄《芙蓉楼送辛渐》", author: "王昌龄", dynasty: "唐", genre: "shi" },
    meaning: "冰心：冰清玉洁之心。",
    tags: ["清朗", "仁善"], frequency: "legend", verified: true
  },
  {
    id: "yu-hu", given: "玉壶", length: 2, pinyin: "yu hu", tones: [4, 2],
    category: "tangshi", gender: "u",
    source: { text: "洛阳亲友如相问，一片冰心在玉壶", title: "王昌龄《芙蓉楼送辛渐》", author: "王昌龄", dynasty: "唐", genre: "shi" },
    meaning: "玉壶：白玉之壶。冰心玉壶，表里澄澈。",
    tags: ["仁善", "清朗"], frequency: "classic", verified: true
  },
  {
    id: "chun-feng", given: "春风", length: 2, pinyin: "chun feng", tones: [1, 1],
    category: "tangshi", season: [1], gender: "u",
    source: { text: "野火烧不尽，春风吹又生", title: "白居易《赋得古原草送别》", author: "白居易", dynasty: "唐", genre: "shi" },
    meaning: "春风：春风吹又生。生生不息，温暖和煦。",
    tags: ["自然", "坚韧"], frequency: "legend", verified: true
  },
  {
    id: "huai-yuan", given: "怀远", length: 2, pinyin: "huai yuan", tones: [2, 3],
    category: "tangshi", gender: "u",
    source: { text: "海上生明月，天涯共此时", title: "张九龄《望月怀远》", author: "张九龄", dynasty: "唐", genre: "shi" },
    meaning: "怀远：胸怀远方。志存高远，亦含思念之意。",
    tags: ["爱情", "事业"], frequency: "classic", verified: true
  },
  {
    id: "tian-ya", given: "天涯", length: 2, pinyin: "tian ya", tones: [1, 2],
    category: "tangshi", gender: "u",
    source: { text: "海上生明月，天涯共此时", title: "张九龄《望月怀远》", author: "张九龄", dynasty: "唐", genre: "shi" },
    meaning: "天涯：天涯共此时。无论多远，心意相连。",
    tags: ["爱情", "清朗"], frequency: "legend", verified: true
  },
  {
    id: "jing-hong", given: "惊鸿", length: 2, pinyin: "jing hong", tones: [1, 2],
    category: "hanfu", gender: "f",
    source: { text: "翩若惊鸿，婉若游龙", title: "曹植《洛神赋》", author: "曹植", dynasty: "三国", genre: "fu" },
    meaning: "惊鸿：惊飞之鸿雁。翩若惊鸿，婉若游龙，绝代风华。",
    tags: ["风雅"], frequency: "legend", verified: true
  },
  {
    id: "fu-qu", given: "芙蕖", length: 2, pinyin: "fu qu", tones: [2, 2],
    category: "hanfu", season: [2], gender: "f",
    source: { text: "灼若芙蕖出渌波", title: "曹植《洛神赋》", author: "曹植", dynasty: "三国", genre: "fu" },
    meaning: "芙蕖：荷花。灼若芙蕖，清丽脱俗。",
    tags: ["风雅", "清朗"], frequency: "classic", verified: true
  },
  {
    id: "zhao-xia", given: "朝霞", length: 2, pinyin: "zhao xia", tones: [1, 2],
    category: "hanfu", gender: "f",
    source: { text: "远而望之，皎若太阳升朝霞", title: "曹植《洛神赋》", author: "曹植", dynasty: "三国", genre: "fu" },
    meaning: "朝霞：清晨的霞光。旭日朝霞，明媚动人。",
    tags: ["自然", "清朗"], frequency: "classic", verified: true
  },
  {
    id: "chun-song", given: "春松", length: 2, pinyin: "chun song", tones: [1, 1],
    category: "hanfu", season: [1], gender: "u",
    source: { text: "荣曜秋菊，华茂春松", title: "曹植《洛神赋》", author: "曹植", dynasty: "三国", genre: "fu" },
    meaning: "春松：华茂春松。风华正茂。",
    tags: ["坚韧", "自然"], frequency: "classic", verified: true
  },
  {
    id: "ling-bo", given: "凌波", length: 2, pinyin: "ling bo", tones: [2, 1],
    category: "hanfu", gender: "f",
    source: { text: "凌波微步，罗袜生尘", title: "曹植《洛神赋》", author: "曹植", dynasty: "三国", genre: "fu" },
    meaning: "凌波：踏波而行。轻盈飘逸，超然出尘。",
    tags: ["风雅", "事业"], frequency: "legend", verified: true
  },
  {
    id: "bai-xue", given: "白雪", length: 2, pinyin: "bai xue", tones: [2, 3],
    category: "wenyan", season: [4], gender: "u",
    source: { text: "客有歌于郢中者……其为《阳春》《白雪》", title: "宋玉《对楚王问》", author: "宋玉", dynasty: "战国", genre: "classic" },
    meaning: "白雪：阳春白雪。曲高和寡之清贵。",
    tags: ["清朗", "风雅"], frequency: "classic", verified: true
  },
  {
    id: "yang-chun", given: "阳春", length: 2, pinyin: "yang chun", tones: [2, 1],
    category: "wenyan", season: [1], gender: "u",
    source: { text: "客有歌于郢中者……其为《阳春》《白雪》", title: "宋玉《对楚王问》", author: "宋玉", dynasty: "战国", genre: "classic" },
    meaning: "阳春：温暖的春天。阳春布德泽，万物生光辉。",
    tags: ["自然", "仁善"], frequency: "classic", verified: true
  },
  {
    id: "wu-tong", given: "梧桐", length: 2, pinyin: "wu tong", tones: [2, 2],
    category: "shijing", gender: "u",
    source: { text: "凤凰鸣矣，于彼高冈。梧桐生矣，于彼朝阳", title: "《诗经·大雅·卷阿》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "梧桐：凤凰所栖之木。栽下梧桐树，引得凤凰来。",
    tags: ["自然", "爱情"], frequency: "legend", verified: true
  },
  {
    id: "feng-huang", given: "凤凰", length: 2, pinyin: "feng huang", tones: [4, 2],
    category: "shijing", gender: "u",
    source: { text: "凤凰于飞，翙翙其羽", title: "《诗经·大雅·卷阿》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "凤凰：百鸟之王。凤凰于飞，和鸣锵锵。",
    tags: ["富贵", "爱情"], frequency: "legend", verified: true
  },
  {
    id: "zhao-yang", given: "朝阳", length: 2, pinyin: "zhao yang", tones: [1, 2],
    category: "shijing", gender: "u",
    source: { text: "梧桐生矣，于彼朝阳", title: "《诗经·大雅·卷阿》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "朝阳：初升的太阳。朝气蓬勃。",
    tags: ["事业", "清朗"], frequency: "legend", verified: true
  },
  {
    id: "jiang-nan", given: "江南", length: 2, pinyin: "jiang nan", tones: [1, 2],
    category: "hanfu", season: [2], gender: "u",
    source: { text: "江南可采莲，莲叶何田田", title: "汉乐府《江南》", author: "佚名", dynasty: "汉", genre: "yuefu" },
    meaning: "江南：江南采莲。杏花春雨，温柔之乡。",
    tags: ["自然", "风雅"], frequency: "legend", verified: true
  },
  {
    id: "you-ran", given: "悠然", length: 2, pinyin: "you ran", tones: [1, 2],
    category: "hanfu", gender: "u",
    source: { text: "采菊东篱下，悠然见南山", title: "陶渊明《饮酒·其五》", author: "陶渊明", dynasty: "东晋", genre: "shi" },
    meaning: "悠然：悠然自得。闲适从容，岁月静好。",
    tags: ["风雅", "平安"], frequency: "legend", verified: true
  },
  {
    id: "dong-li", given: "东篱", length: 2, pinyin: "dong li", tones: [1, 2],
    category: "hanfu", season: [3], gender: "u",
    source: { text: "采菊东篱下，悠然见南山", title: "陶渊明《饮酒·其五》", author: "陶渊明", dynasty: "东晋", genre: "shi" },
    meaning: "东篱：东篱菊香。归隐田园之趣。",
    tags: ["风雅", "自然"], frequency: "classic", verified: true
  },
  {
    id: "cai-ju", given: "采菊", length: 2, pinyin: "cai ju", tones: [3, 2],
    category: "hanfu", season: [3], gender: "u",
    source: { text: "采菊东篱下，悠然见南山", title: "陶渊明《饮酒·其五》", author: "陶渊明", dynasty: "东晋", genre: "shi" },
    meaning: "采菊：采菊东篱。恬淡闲适。",
    tags: ["自然", "风雅"], frequency: "legend", verified: true
  },
  {
    id: "tao-yuan", given: "桃源", length: 2, pinyin: "tao yuan", tones: [2, 2],
    category: "hanfu", season: [1], gender: "u",
    source: { text: "忽逢桃花林，夹岸数百步", title: "陶渊明《桃花源记》", author: "陶渊明", dynasty: "东晋", genre: "fu" },
    meaning: "桃源：桃花源。世外桃源，人间乐土。",
    tags: ["平安", "自然"], frequency: "legend", verified: true
  },
  {
    id: "cheng-jiang", given: "澄江", length: 2, pinyin: "cheng jiang", tones: [2, 1],
    category: "hanfu", gender: "u",
    source: { text: "余霞散成绮，澄江静如练", title: "谢朓《晚登三山还望京邑》", author: "谢朓", dynasty: "南朝", genre: "shi" },
    meaning: "澄江：澄澈如练的江水。",
    tags: ["清朗", "自然"], frequency: "classic", verified: true
  },
  {
    id: "qing-hui", given: "清辉", length: 2, pinyin: "qing hui", tones: [1, 1],
    category: "tangshi", gender: "f",
    source: { text: "香雾云鬟湿，清辉玉臂寒", title: "杜甫《月夜》", author: "杜甫", dynasty: "唐", genre: "shi" },
    meaning: "清辉：清冷的月光。皎洁如水。",
    tags: ["清朗", "风雅"], frequency: "classic", verified: true
  },
  {
    id: "qing-chuan", given: "晴川", length: 2, pinyin: "qing chuan", tones: [2, 1],
    category: "tangshi", gender: "u",
    source: { text: "晴川历历汉阳树，芳草萋萋鹦鹉洲", title: "崔颢《黄鹤楼》", author: "崔颢", dynasty: "唐", genre: "shi" },
    meaning: "晴川：晴日下的江流。历历在目，清明开阔。",
    tags: ["清朗", "自然"], frequency: "legend", verified: true
  },
  {
    id: "zhao-lu", given: "朝露", length: 2, pinyin: "zhao lu", tones: [1, 4],
    category: "hanfu", gender: "u",
    source: { text: "青青园中葵，朝露待日晞", title: "汉乐府《长歌行》", author: "佚名", dynasty: "汉", genre: "yuefu" },
    meaning: "朝露：清晨的露珠。晶莹而珍贵，惜取少年时。",
    tags: ["清朗", "自然"], frequency: "classic", verified: true
  },
  {
    id: "qing-lian", given: "青莲", length: 2, pinyin: "qing lian", tones: [1, 2],
    category: "wenyan", season: [2], gender: "u",
    source: { text: "青莲居士，李白自号", title: "李白自号「青莲居士」", author: "李白", dynasty: "唐", genre: "classic" },
    meaning: "青莲：李白自号青莲居士。青莲出尘，仙风道骨。",
    tags: ["风雅", "清朗"], frequency: "legend", verified: true
  },
  {
    id: "yi-de", given: "懿德", length: 2, pinyin: "yi de", tones: [4, 2],
    category: "shijing", gender: "f",
    source: { text: "民之秉彝，好是懿德", title: "《诗经·大雅·烝民》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "懿德：美好的品德。",
    tags: ["仁善"], frequency: "classic", verified: true
  },
  {
    id: "huai-jin", given: "怀瑾", length: 2, pinyin: "huai jin", tones: [2, 3],
    category: "chuci", gender: "m",
    source: { text: "怀瑾握瑜兮，穷不知所示", title: "屈原《九章·怀沙》", author: "屈原", dynasty: "战国", genre: "fu" },
    meaning: "怀瑾：怀揣美玉。怀瑾握瑜，品德高洁。",
    tags: ["仁善", "风雅"], frequency: "legend", verified: true
  },
  {
    id: "wo-yu", given: "握瑜", length: 2, pinyin: "wo yu", tones: [4, 2],
    category: "chuci", gender: "u",
    source: { text: "怀瑾握瑜兮，穷不知所示", title: "屈原《九章·怀沙》", author: "屈原", dynasty: "战国", genre: "fu" },
    meaning: "握瑜：手握美玉。怀瑾握瑜，德才兼备。",
    tags: ["仁善", "风雅"], frequency: "classic", verified: true
  },
  {
    id: "jia-shu", given: "嘉树", length: 2, pinyin: "jia shu", tones: [1, 4],
    category: "chuci", gender: "u",
    source: { text: "后皇嘉树，橘徕服兮。受命不迁，生南国兮", title: "屈原《九章·橘颂》", author: "屈原", dynasty: "战国", genre: "fu" },
    meaning: "嘉树：美好的树木。受命不迁，深固难徙。",
    tags: ["坚韧", "仁善"], frequency: "classic", verified: true
  },
  {
    id: "bing-de", given: "秉德", length: 2, pinyin: "bing de", tones: [3, 2],
    category: "chuci", gender: "u",
    source: { text: "秉德无私，参天地兮", title: "屈原《九章·橘颂》", author: "屈原", dynasty: "战国", genre: "fu" },
    meaning: "秉德：秉持美德。秉德无私。",
    tags: ["仁善"], frequency: "classic", verified: true
  },
  {
    id: "zhi-yuan", given: "致远", length: 2, pinyin: "zhi yuan", tones: [4, 3],
    category: "hanfu", gender: "m",
    source: { text: "非淡泊无以明志，非宁静无以致远", title: "诸葛亮《诫子书》", author: "诸葛亮", dynasty: "三国", genre: "classic" },
    meaning: "致远：宁静致远。行稳致远，志存高远。",
    tags: ["事业", "聪慧"], frequency: "legend", verified: true
  },
  {
    id: "ning-jing", given: "宁静", length: 2, pinyin: "ning jing", tones: [2, 4],
    category: "hanfu", gender: "f",
    source: { text: "非淡泊无以明志，非宁静无以致远", title: "诸葛亮《诫子书》", author: "诸葛亮", dynasty: "三国", genre: "classic" },
    meaning: "宁静：宁静致远。内心安宁，志向高远。",
    tags: ["平安", "聪慧"], frequency: "legend", verified: true
  },
  {
    id: "dan-bo", given: "淡泊", length: 2, pinyin: "dan bo", tones: [4, 2],
    category: "hanfu", gender: "u",
    source: { text: "非淡泊无以明志，非宁静无以致远", title: "诸葛亮《诫子书》", author: "诸葛亮", dynasty: "三国", genre: "classic" },
    meaning: "淡泊：淡泊明志。不慕荣利，心境澄明。",
    tags: ["风雅", "仁善"], frequency: "legend", verified: true
  },
  {
    id: "ming-zhi", given: "明志", length: 2, pinyin: "ming zhi", tones: [2, 4],
    category: "hanfu", gender: "u",
    source: { text: "非淡泊无以明志，非宁静无以致远", title: "诸葛亮《诫子书》", author: "诸葛亮", dynasty: "三国", genre: "classic" },
    meaning: "明志：明确志向。淡泊明志。",
    tags: ["事业", "聪慧"], frequency: "classic", verified: true
  },
  {
    id: "lan-ting", given: "兰亭", length: 2, pinyin: "lan ting", tones: [2, 2],
    category: "hanfu", season: [1], gender: "u",
    source: { text: "会于会稽山阴之兰亭，修禊事也", title: "王羲之《兰亭集序》", author: "王羲之", dynasty: "东晋", genre: "fu" },
    meaning: "兰亭：兰亭雅集。曲水流觞，天下第一行书之地。",
    tags: ["风雅", "聪慧"], frequency: "legend", verified: true
  },
  {
    id: "hui-feng", given: "惠风", length: 2, pinyin: "hui feng", tones: [4, 1],
    category: "hanfu", season: [1], gender: "u",
    source: { text: "是日也，天朗气清，惠风和畅", title: "王羲之《兰亭集序》", author: "王羲之", dynasty: "东晋", genre: "fu" },
    meaning: "惠风：和煦的春风。惠风和畅。",
    tags: ["仁善", "清朗"], frequency: "legend", verified: true
  },
  {
    id: "he-chang", given: "和畅", length: 2, pinyin: "he chang", tones: [2, 4],
    category: "hanfu", season: [1], gender: "u",
    source: { text: "是日也，天朗气清，惠风和畅", title: "王羲之《兰亭集序》", author: "王羲之", dynasty: "东晋", genre: "fu" },
    meaning: "和畅：惠风和畅。和乐舒畅。",
    tags: ["清朗", "平安"], frequency: "classic", verified: true
  },
  {
    id: "xiu-zhu", given: "修竹", length: 2, pinyin: "xiu zhu", tones: [1, 2],
    category: "hanfu", gender: "u",
    source: { text: "此地有崇山峻岭，茂林修竹", title: "王羲之《兰亭集序》", author: "王羲之", dynasty: "东晋", genre: "fu" },
    meaning: "修竹：修长的翠竹。高洁挺拔。",
    tags: ["风雅", "坚韧"], frequency: "classic", verified: true
  },
  {
    id: "qing-liu", given: "清流", length: 2, pinyin: "qing liu", tones: [1, 2],
    category: "hanfu", gender: "u",
    source: { text: "又有清流激湍，映带左右", title: "王羲之《兰亭集序》", author: "王羲之", dynasty: "东晋", genre: "fu" },
    meaning: "清流：清澈的溪流。亦喻清正之流。",
    tags: ["清朗", "仁善"], frequency: "classic", verified: true
  },
  {
    id: "qu-shui", given: "曲水", length: 2, pinyin: "qu shui", tones: [1, 3],
    category: "hanfu", gender: "u",
    source: { text: "引以为流觞曲水，列坐其次", title: "王羲之《兰亭集序》", author: "王羲之", dynasty: "东晋", genre: "fu" },
    meaning: "曲水：流觞曲水。文人雅集之趣。",
    tags: ["风雅"], frequency: "classic", verified: true
  },
  {
    id: "tian-lang", given: "天朗", length: 2, pinyin: "tian lang", tones: [1, 3],
    category: "hanfu", gender: "u",
    source: { text: "是日也，天朗气清，惠风和畅", title: "王羲之《兰亭集序》", author: "王羲之", dynasty: "东晋", genre: "fu" },
    meaning: "天朗：天朗气清。晴空万里。",
    tags: ["清朗"], frequency: "classic", verified: true
  },
  {
    id: "chang-le", given: "长乐", length: 2, pinyin: "chang le", tones: [2, 4],
    category: "hanfu", gender: "u",
    source: { text: "长乐未央，瓦当吉语", title: "汉瓦当铭「长乐未央」", author: "佚名", dynasty: "汉", genre: "classic" },
    meaning: "长乐：长久安乐。长乐未央，福泽绵长。",
    tags: ["福寿", "平安"], frequency: "classic", verified: true
  },
  {
    id: "shou-zhuo", given: "守拙", length: 2, pinyin: "shou zhuo", tones: [3, 1],
    category: "hanfu", gender: "u",
    source: { text: "开荒南野际，守拙归园田", title: "陶渊明《归园田居·其一》", author: "陶渊明", dynasty: "东晋", genre: "shi" },
    meaning: "守拙：大巧若拙。抱朴守拙，返璞归真。",
    tags: ["坚韧", "风雅"], frequency: "classic", verified: true
  },
  {
    id: "xiang-ru", given: "相如", length: 2, pinyin: "xiang ru", tones: [1, 2],
    category: "wenyan", gender: "m",
    source: { text: "司马相如者，蜀郡成都人也", title: "《史记·司马相如列传》", author: "司马迁", dynasty: "汉", genre: "classic" },
    meaning: "相如：司马相如，汉代辞赋大家。文采斐然。",
    tags: ["风雅", "聪慧"], frequency: "legend", verified: true
  },
  {
    id: "chang-qing", given: "长卿", length: 2, pinyin: "chang qing", tones: [2, 1],
    category: "wenyan", gender: "u",
    source: { text: "司马相如，字长卿", title: "《史记·司马相如列传》", author: "司马迁", dynasty: "汉", genre: "classic" },
    meaning: "长卿：司马相如之字。亦本草「徐长卿」之名，雅趣天成。",
    tags: ["风雅"], frequency: "classic", verified: true
  },
  {
    id: "hao-ran", given: "浩然", length: 2, pinyin: "hao ran", tones: [4, 2],
    category: "wenyan", gender: "m",
    source: { text: "我善养吾浩然之气", title: "《孟子·公孙丑上》", author: "孟子", dynasty: "战国", genre: "classic" },
    meaning: "浩然：浩然之气，至大至刚。",
    tags: ["仁善", "坚韧"], frequency: "legend", verified: true
  },
  {
    id: "ming-de", given: "明德", length: 2, pinyin: "ming de", tones: [2, 2],
    category: "wenyan", gender: "u",
    source: { text: "大学之道，在明明德，在亲民，在止于至善", title: "《大学》", author: "曾子", dynasty: "春秋", genre: "classic" },
    meaning: "明德：光明的品德。「大学之道，在明明德」。",
    tags: ["仁善", "聪慧"], frequency: "legend", verified: true
  },
  {
    id: "zhi-shan", given: "至善", length: 2, pinyin: "zhi shan", tones: [4, 4],
    category: "wenyan", gender: "u",
    source: { text: "大学之道，在明明德，在亲民，在止于至善", title: "《大学》", author: "曾子", dynasty: "春秋", genre: "classic" },
    meaning: "至善：止于至善。臻于至善之境。",
    tags: ["仁善"], frequency: "classic", verified: true
  },
  {
    id: "zhi-cheng", given: "至诚", length: 2, pinyin: "zhi cheng", tones: [4, 2],
    category: "wenyan", gender: "u",
    source: { text: "唯天下至诚，为能尽其性", title: "《中庸》", author: "子思", dynasty: "战国", genre: "classic" },
    meaning: "至诚：至诚之心。精诚所至，金石为开。",
    tags: ["仁善"], frequency: "classic", verified: true
  },
  {
    id: "wen-run", given: "温润", length: 2, pinyin: "wen run", tones: [1, 4],
    category: "wenyan", gender: "u",
    source: { text: "夫昔者君子比德于玉焉：温润而泽，仁也", title: "《礼记·聘义》", author: "佚名", dynasty: "周", genre: "classic" },
    meaning: "温润：温润如玉。谦谦君子，温润而泽。",
    tags: ["仁善", "风雅"], frequency: "legend", verified: true
  },
  {
    id: "guan-lan", given: "观澜", length: 2, pinyin: "guan lan", tones: [1, 2],
    category: "wenyan", gender: "m",
    source: { text: "观水有术，必观其澜", title: "《孟子·尽心上》", author: "孟子", dynasty: "战国", genre: "classic" },
    meaning: "观澜：观水必观其澜。眼界宏阔，见其大者。",
    tags: ["聪慧"], frequency: "classic", verified: true
  },
  {
    id: "ruo-shui", given: "若水", length: 2, pinyin: "ruo shui", tones: [4, 3],
    category: "wenyan", gender: "u",
    source: { text: "上善若水，水善利万物而不争", title: "《道德经》", author: "老子", dynasty: "春秋", genre: "classic" },
    meaning: "若水：上善若水。利万物而不争，至柔至善。",
    tags: ["仁善", "聪慧"], frequency: "legend", verified: true
  },
  {
    id: "shang-shan", given: "上善", length: 2, pinyin: "shang shan", tones: [4, 4],
    category: "wenyan", gender: "u",
    source: { text: "上善若水，水善利万物而不争", title: "《道德经》", author: "老子", dynasty: "春秋", genre: "classic" },
    meaning: "上善：至善。上善若水。",
    tags: ["仁善"], frequency: "classic", verified: true
  },
  {
    id: "zhi-wei", given: "知微", length: 2, pinyin: "zhi wei", tones: [1, 1],
    category: "wenyan", gender: "u",
    source: { text: "圣人见微以知萌，见端以知末", title: "《韩非子·说林上》", author: "韩非", dynasty: "战国", genre: "classic" },
    meaning: "知微：见微知著。明察秋毫。",
    tags: ["聪慧"], frequency: "classic", verified: true
  },
  {
    id: "gui-zhen", given: "归真", length: 2, pinyin: "gui zhen", tones: [1, 1],
    category: "wenyan", gender: "u",
    source: { text: "归真反璞，则终身不辱", title: "《战国策·齐策》", author: "刘向", dynasty: "汉", genre: "classic" },
    meaning: "归真：返璞归真。回归本真。",
    tags: ["仁善", "风雅"], frequency: "classic", verified: true
  },
  {
    id: "bao-pu", given: "抱朴", length: 2, pinyin: "bao pu", tones: [4, 3],
    category: "wenyan", gender: "u",
    source: { text: "见素抱朴，少私寡欲", title: "《道德经》", author: "老子", dynasty: "春秋", genre: "classic" },
    meaning: "抱朴：抱朴守拙。质朴自然，葛洪亦自号抱朴子。",
    tags: ["仁善", "坚韧"], frequency: "classic", verified: true
  },
  {
    id: "yun-shu", given: "云舒", length: 2, pinyin: "yun shu", tones: [2, 1],
    category: "wenyan", gender: "u",
    source: { text: "宠辱不惊，看庭前花开花落；去留无意，望天上云卷云舒", title: "陈继儒《小窗幽记》", author: "陈继儒", dynasty: "明", genre: "classic" },
    meaning: "云舒：云卷云舒。宠辱不惊，从容自在。",
    tags: ["风雅", "平安"], frequency: "classic", verified: true
  },
  {
    id: "ji-yue", given: "霁月", length: 2, pinyin: "ji yue", tones: [4, 4],
    category: "wenyan", gender: "u",
    source: { text: "光风霁月，胸怀洒落", title: "黄庭坚评周敦颐语", author: "黄庭坚", dynasty: "宋", genre: "classic" },
    meaning: "霁月：雨后的明月。光风霁月，光明磊落。",
    tags: ["清朗", "仁善"], frequency: "classic", verified: true
  },
  {
    id: "guang-feng", given: "光风", length: 2, pinyin: "guang feng", tones: [1, 1],
    category: "wenyan", gender: "u",
    source: { text: "光风霁月，胸怀洒落", title: "黄庭坚评周敦颐语", author: "黄庭坚", dynasty: "宋", genre: "classic" },
    meaning: "光风：雨霁后的和风。光风霁月。",
    tags: ["清朗"], frequency: "classic", verified: true
  },
  {
    id: "chao-yun", given: "朝云", length: 2, pinyin: "zhao yun", tones: [1, 2],
    category: "hanfu", gender: "f",
    source: { text: "妾在巫山之阳，高丘之阻，旦为朝云，暮为行雨", title: "宋玉《高唐赋》", author: "宋玉", dynasty: "战国", genre: "fu" },
    meaning: "朝云：清晨的云霞。亦苏轼侍妾王朝云之名，才情相伴。",
    tags: ["风雅"], frequency: "classic", verified: true
  },

  // ==================== 批次 2b：宋词、元曲与宋诗 ====================
  {
    id: "qing-zhao", given: "清照", length: 2, pinyin: "qing zhao", tones: [1, 4],
    category: "tangshi", gender: "f",
    source: { text: "明月松间照，清泉石上流", title: "王维《山居秋暝》", author: "王维", dynasty: "唐", genre: "shi" },
    meaning: "清照：清泉映照。亦李清照之名，明月清泉，千古才女。",
    tags: ["风雅", "聪慧"], frequency: "legend", verified: true
  },
  {
    id: "jin-shu", given: "锦书", length: 2, pinyin: "jin shu", tones: [3, 1],
    category: "songci", gender: "f",
    source: { text: "云中谁寄锦书来，雁字回时，月满西楼", title: "李清照《一剪梅》", author: "李清照", dynasty: "宋", genre: "ci" },
    meaning: "锦书：锦字回文，书信之美称。",
    tags: ["爱情", "风雅"], frequency: "classic", verified: true
  },
  {
    id: "ou-hua", given: "藕花", length: 2, pinyin: "ou hua", tones: [3, 1],
    category: "songci", season: [2], gender: "f",
    source: { text: "兴尽晚回舟，误入藕花深处", title: "李清照《如梦令》", author: "李清照", dynasty: "宋", genre: "ci" },
    meaning: "藕花：荷花。藕花深处，青春欢畅。",
    tags: ["自然", "风雅"], frequency: "classic", verified: true
  },
  {
    id: "an-xiang", given: "暗香", length: 2, pinyin: "an xiang", tones: [4, 1],
    category: "songci", season: [4], gender: "f",
    source: { text: "疏影横斜水清浅，暗香浮动月黄昏", title: "林逋《山园小梅》", author: "林逋", dynasty: "宋", genre: "shi" },
    meaning: "暗香：梅香幽微。疏影暗香，梅之绝唱。",
    tags: ["风雅", "坚韧"], frequency: "legend", verified: true
  },
  {
    id: "shu-ying", given: "疏影", length: 2, pinyin: "shu ying", tones: [1, 3],
    category: "songci", season: [4], gender: "f",
    source: { text: "疏影横斜水清浅，暗香浮动月黄昏", title: "林逋《山园小梅》", author: "林逋", dynasty: "宋", genre: "shi" },
    meaning: "疏影：梅枝疏朗之影。清雅出尘。",
    tags: ["风雅", "清朗"], frequency: "legend", verified: true
  },
  {
    id: "dao-xiang", given: "稻香", length: 2, pinyin: "dao xiang", tones: [4, 1],
    category: "songci", season: [3], gender: "u",
    source: { text: "稻花香里说丰年，听取蛙声一片", title: "辛弃疾《西江月·夜行黄沙道中》", author: "辛弃疾", dynasty: "宋", genre: "ci" },
    meaning: "稻香：稻花香里说丰年。丰收之喜，朴实之福。",
    tags: ["自然", "福寿"], frequency: "legend", verified: true
  },
  {
    id: "qing-qiu", given: "清秋", length: 2, pinyin: "qing qiu", tones: [1, 1],
    category: "songci", season: [3], gender: "u",
    source: { text: "多情自古伤离别，更那堪，冷落清秋节", title: "柳永《雨霖铃》", author: "柳永", dynasty: "宋", genre: "ci" },
    meaning: "清秋：清朗的秋天。天高云淡。",
    tags: ["清朗"], frequency: "legend", verified: true
  },
  {
    id: "xiao-feng", given: "晓风", length: 2, pinyin: "xiao feng", tones: [3, 1],
    category: "songci", gender: "u",
    source: { text: "今宵酒醒何处，杨柳岸，晓风残月", title: "柳永《雨霖铃》", author: "柳永", dynasty: "宋", genre: "ci" },
    meaning: "晓风：拂晓的清风。杨柳岸晓风。",
    tags: ["清朗", "风雅"], frequency: "classic", verified: true
  },
  {
    id: "lan-zhou", given: "兰舟", length: 2, pinyin: "lan zhou", tones: [2, 1],
    category: "songci", gender: "u",
    source: { text: "都门帐饮无绪，留恋处，兰舟催发", title: "柳永《雨霖铃》", author: "柳永", dynasty: "宋", genre: "ci" },
    meaning: "兰舟：木兰之舟。李白「轻舟已过万重山」之快意。",
    tags: ["风雅", "事业"], frequency: "classic", verified: true
  },
  {
    id: "jin-feng", given: "金风", length: 2, pinyin: "jin feng", tones: [1, 1],
    category: "songci", season: [3], gender: "u",
    source: { text: "金风玉露一相逢，便胜却人间无数", title: "秦观《鹊桥仙》", author: "秦观", dynasty: "宋", genre: "ci" },
    meaning: "金风：秋风。金风玉露一相逢，便胜却人间无数。",
    tags: ["爱情", "清朗"], frequency: "legend", verified: true
  },
  {
    id: "yu-lu", given: "玉露", length: 2, pinyin: "yu lu", tones: [4, 4],
    category: "songci", season: [3], gender: "f",
    source: { text: "金风玉露一相逢，便胜却人间无数", title: "秦观《鹊桥仙》", author: "秦观", dynasty: "宋", genre: "ci" },
    meaning: "玉露：晶莹的秋露。金风玉露，天上人间。",
    tags: ["爱情", "清朗"], frequency: "legend", verified: true
  },
  {
    id: "xian-yun", given: "纤云", length: 2, pinyin: "xian yun", tones: [1, 2],
    category: "songci", gender: "f",
    source: { text: "纤云弄巧，飞星传恨，银汉迢迢暗度", title: "秦观《鹊桥仙》", author: "秦观", dynasty: "宋", genre: "ci" },
    meaning: "纤云：纤薄的云丝。纤云弄巧。",
    tags: ["风雅", "爱情"], frequency: "classic", verified: true
  },
  {
    id: "yin-han", given: "银汉", length: 2, pinyin: "yin han", tones: [2, 4],
    category: "songci", gender: "u",
    source: { text: "纤云弄巧，飞星传恨，银汉迢迢暗度", title: "秦观《鹊桥仙》", author: "秦观", dynasty: "宋", genre: "ci" },
    meaning: "银汉：银河。银汉迢迢。",
    tags: ["清朗", "爱情"], frequency: "classic", verified: true
  },
  {
    id: "jia-qi", given: "佳期", length: 2, pinyin: "jia qi", tones: [1, 1],
    category: "songci", gender: "u",
    source: { text: "柔情似水，佳期如梦，忍顾鹊桥归路", title: "秦观《鹊桥仙》", author: "秦观", dynasty: "宋", genre: "ci" },
    meaning: "佳期：美好的时光。佳期如梦，良辰美景。",
    tags: ["爱情", "福寿"], frequency: "classic", verified: true
  },
  {
    id: "que-qiao", given: "鹊桥", length: 2, pinyin: "que qiao", tones: [4, 2],
    category: "songci", gender: "u",
    source: { text: "柔情似水，佳期如梦，忍顾鹊桥归路", title: "秦观《鹊桥仙》", author: "秦观", dynasty: "宋", genre: "ci" },
    meaning: "鹊桥：喜鹊搭桥，七夕相会。爱情忠贞。",
    tags: ["爱情"], frequency: "legend", verified: true
  },
  {
    id: "wei-yun", given: "微云", length: 2, pinyin: "wei yun", tones: [1, 2],
    category: "songci", gender: "u",
    source: { text: "山抹微云，天连衰草，画角声断谯门", title: "秦观《满庭芳》", author: "秦观", dynasty: "宋", genre: "ci" },
    meaning: "微云：山间薄云。淡雅朦胧。",
    tags: ["风雅", "清朗"], frequency: "classic", verified: true
  },
  {
    id: "hua-ming", given: "花明", length: 2, pinyin: "hua ming", tones: [1, 2],
    category: "songci", season: [1], gender: "u",
    source: { text: "山重水复疑无路，柳暗花明又一村", title: "陆游《游山西村》", author: "陆游", dynasty: "宋", genre: "shi" },
    meaning: "花明：柳暗花明。绝处逢生，豁然开朗。",
    tags: ["事业", "平安"], frequency: "classic", verified: true
  },
  {
    id: "chan-juan", given: "婵娟", length: 2, pinyin: "chan juan", tones: [2, 1],
    category: "songci", gender: "f",
    source: { text: "但愿人长久，千里共婵娟", title: "苏轼《水调歌头》", author: "苏轼", dynasty: "宋", genre: "ci" },
    meaning: "婵娟：月色美好，亦喻美人。千里共婵娟。",
    tags: ["清朗", "爱情"], frequency: "legend", verified: true
  },
  {
    id: "yu-yu", given: "玉宇", length: 2, pinyin: "yu yu", tones: [4, 3],
    category: "songci", gender: "u",
    source: { text: "我欲乘风归去，又恐琼楼玉宇，高处不胜寒", title: "苏轼《水调歌头》", author: "苏轼", dynasty: "宋", genre: "ci" },
    meaning: "玉宇：琼楼玉宇。华美高远。",
    tags: ["清朗", "富贵"], frequency: "classic", verified: true
  },
  {
    id: "pian-zhou", given: "扁舟", length: 2, pinyin: "pian zhou", tones: [1, 1],
    category: "hanfu", gender: "u",
    source: { text: "驾一叶之扁舟，举匏樽以相属", title: "苏轼《前赤壁赋》", author: "苏轼", dynasty: "宋", genre: "fu" },
    meaning: "扁舟：一叶扁舟。自在逍遥。",
    tags: ["自然", "风雅"], frequency: "classic", verified: true
  },
  {
    id: "yan-yu", given: "烟雨", length: 2, pinyin: "yan yu", tones: [1, 3],
    category: "songci", season: [1], gender: "u",
    source: { text: "一蓑烟雨任平生", title: "苏轼《定风波》", author: "苏轼", dynasty: "宋", genre: "ci" },
    meaning: "烟雨：江南烟雨。一蓑烟雨任平生，豁达通透。",
    tags: ["清朗", "坚韧"], frequency: "legend", verified: true
  },
  {
    id: "qing-huan", given: "清欢", length: 2, pinyin: "qing huan", tones: [1, 1],
    category: "songci", gender: "u",
    source: { text: "人间有味是清欢", title: "苏轼《浣溪沙·细雨斜风作晓寒》", author: "苏轼", dynasty: "宋", genre: "ci" },
    meaning: "清欢：清淡的欢愉。人间至味。",
    tags: ["风雅", "平安"], frequency: "legend", verified: true
  },
  {
    id: "nian-hua", given: "年华", length: 2, pinyin: "nian hua", tones: [2, 2],
    category: "songci", gender: "u",
    source: { text: "诗酒趁年华", title: "苏轼《望江南·超然台作》", author: "苏轼", dynasty: "宋", genre: "ci" },
    meaning: "年华：美好的年岁。不负年华。",
    tags: ["福寿", "事业"], frequency: "classic", verified: true
  },
  {
    id: "shu-tong", given: "疏桐", length: 2, pinyin: "shu tong", tones: [1, 2],
    category: "songci", gender: "u",
    source: { text: "缺月挂疏桐，漏断人初静", title: "苏轼《卜算子·黄州定慧院寓居作》", author: "苏轼", dynasty: "宋", genre: "ci" },
    meaning: "疏桐：疏朗的梧桐。清高自守。",
    tags: ["风雅", "清朗"], frequency: "classic", verified: true
  },
  {
    id: "fei-hong", given: "飞鸿", length: 2, pinyin: "fei hong", tones: [1, 2],
    category: "songci", gender: "u",
    source: { text: "人生到处知何似，应似飞鸿踏雪泥", title: "苏轼《和子由渑池怀旧》", author: "苏轼", dynasty: "宋", genre: "shi" },
    meaning: "飞鸿：高飞的大雁。飞鸿踏雪，志在千里。",
    tags: ["事业", "自然"], frequency: "classic", verified: true
  },
  {
    id: "chu-qing", given: "初晴", length: 2, pinyin: "chu qing", tones: [1, 2],
    category: "songci", gender: "u",
    source: { text: "水光潋滟晴方好，山色空蒙雨亦奇", title: "苏轼《饮湖上初晴后雨》", author: "苏轼", dynasty: "宋", genre: "shi" },
    meaning: "初晴：雨后初晴。云开日出，万象更新。",
    tags: ["清朗", "平安"], frequency: "classic", verified: true
  },
  {
    id: "lian-yan", given: "潋滟", length: 2, pinyin: "lian yan", tones: [4, 4],
    category: "songci", gender: "f",
    source: { text: "水光潋滟晴方好，山色空蒙雨亦奇", title: "苏轼《饮湖上初晴后雨》", author: "苏轼", dynasty: "宋", genre: "shi" },
    meaning: "潋滟：水波荡漾，光彩夺目。",
    tags: ["风雅", "清朗"], frequency: "classic", verified: true
  },
  {
    id: "kong-meng", given: "空蒙", length: 2, pinyin: "kong meng", tones: [1, 2],
    category: "songci", gender: "u",
    source: { text: "水光潋滟晴方好，山色空蒙雨亦奇", title: "苏轼《饮湖上初晴后雨》", author: "苏轼", dynasty: "宋", genre: "shi" },
    meaning: "空蒙：烟雨迷蒙。亦「空蒙」灵动之境。",
    tags: ["自然", "清朗"], frequency: "classic", verified: true
  },
  {
    id: "chun-shui", given: "春水", length: 2, pinyin: "chun shui", tones: [1, 3],
    category: "songci", season: [1], gender: "u",
    source: { text: "问君能有几多愁，恰似一江春水向东流", title: "李煜《虞美人》", author: "李煜", dynasty: "五代", genre: "ci" },
    meaning: "春水：一江春水。绵绵不绝，温润灵动。",
    tags: ["自然", "风雅"], frequency: "classic", verified: true
  },
  {
    id: "nong-ying", given: "弄影", length: 2, pinyin: "nong ying", tones: [4, 3],
    category: "songci", gender: "f",
    source: { text: "沙上并禽池上暝，云破月来花弄影", title: "张先《天仙子》", author: "张先", dynasty: "宋", genre: "ci" },
    meaning: "弄影：花枝弄影。灵动婀娜。",
    tags: ["风雅"], frequency: "classic", verified: true
  },
  {
    id: "fang-cao", given: "芳草", length: 2, pinyin: "fang cao", tones: [1, 3],
    category: "songci", season: [1], gender: "u",
    source: { text: "枝上柳绵吹又少，天涯何处无芳草", title: "苏轼《蝶恋花·春景》", author: "苏轼", dynasty: "宋", genre: "ci" },
    meaning: "芳草：天涯何处无芳草。生机处处，前路有光。",
    tags: ["自然", "坚韧"], frequency: "classic", verified: true
  },
  {
    id: "liu-shui", given: "流水", length: 2, pinyin: "liu shui", tones: [2, 3],
    category: "yuanqu", gender: "u",
    source: { text: "枯藤老树昏鸦，小桥流水人家", title: "马致远《天净沙·秋思》", author: "马致远", dynasty: "元", genre: "qu" },
    meaning: "流水：小桥流水。亦高山流水，知音之谊。",
    tags: ["自然", "风雅"], frequency: "legend", verified: true
  },
  {
    id: "bi-yun", given: "碧云", length: 2, pinyin: "bi yun", tones: [4, 2],
    category: "yuanqu", gender: "f",
    source: { text: "碧云天，黄花地，西风紧，北雁南飞", title: "王实甫《西厢记·长亭送别》", author: "王实甫", dynasty: "元", genre: "qu" },
    meaning: "碧云：碧空云霞。秋日晴空。",
    tags: ["清朗", "风雅"], frequency: "classic", verified: true
  },
  {
    id: "chun-yu", given: "春雨", length: 2, pinyin: "chun yu", tones: [1, 3],
    category: "yuanqu", season: [1], gender: "u",
    source: { text: "报道先生归也，杏花春雨江南", title: "虞集《风入松·寄柯敬仲》", author: "虞集", dynasty: "元", genre: "qu" },
    meaning: "春雨：杏花春雨江南。温润如诗。",
    tags: ["自然", "风雅"], frequency: "legend", verified: true
  },
  {
    id: "chun-he", given: "春和", length: 2, pinyin: "chun he", tones: [1, 2],
    category: "wenyan", season: [1], gender: "u",
    source: { text: "至若春和景明，波澜不惊", title: "范仲淹《岳阳楼记》", author: "范仲淹", dynasty: "宋", genre: "classic" },
    meaning: "春和：春和景明。和煦明媚。",
    tags: ["平安", "清朗"], frequency: "legend", verified: true
  },
  {
    id: "jing-ming", given: "景明", length: 2, pinyin: "jing ming", tones: [3, 2],
    category: "wenyan", season: [1], gender: "u",
    source: { text: "至若春和景明，波澜不惊", title: "范仲淹《岳阳楼记》", author: "范仲淹", dynasty: "宋", genre: "classic" },
    meaning: "景明：春和景明。春光明媚。",
    tags: ["清朗"], frequency: "legend", verified: true
  },
  {
    id: "hao-yue", given: "皓月", length: 2, pinyin: "hao yue", tones: [4, 4],
    category: "wenyan", gender: "u",
    source: { text: "而或长烟一空，皓月千里，浮光跃金", title: "范仲淹《岳阳楼记》", author: "范仲淹", dynasty: "宋", genre: "classic" },
    meaning: "皓月：皓月千里。皎洁明亮。",
    tags: ["清朗"], frequency: "classic", verified: true
  },
  {
    id: "liu-guang", given: "流光", length: 2, pinyin: "liu guang", tones: [2, 1],
    category: "songci", gender: "u",
    source: { text: "流光容易把人抛，红了樱桃，绿了芭蕉", title: "蒋捷《一剪梅·舟过吴江》", author: "蒋捷", dynasty: "宋", genre: "ci" },
    meaning: "流光：流动的光华。流光溢彩，惜时之意。",
    tags: ["风雅", "清朗"], frequency: "legend", verified: true
  },
  {
    id: "wan-zi", given: "万紫", length: 2, pinyin: "wan zi", tones: [4, 3],
    category: "songci", season: [1], gender: "f",
    source: { text: "等闲识得东风面，万紫千红总是春", title: "朱熹《春日》", author: "朱熹", dynasty: "宋", genre: "shi" },
    meaning: "万紫：万紫千红。春色满园。",
    tags: ["自然", "福寿"], frequency: "classic", verified: true
  },
  {
    id: "qian-hong", given: "千红", length: 2, pinyin: "qian hong", tones: [1, 2],
    category: "songci", season: [1], gender: "f",
    source: { text: "等闲识得东风面，万紫千红总是春", title: "朱熹《春日》", author: "朱熹", dynasty: "宋", genre: "shi" },
    meaning: "千红：万紫千红。繁花似锦。",
    tags: ["自然", "风雅"], frequency: "classic", verified: true
  },
  {
    id: "dong-feng", given: "东风", length: 2, pinyin: "dong feng", tones: [1, 1],
    category: "songci", season: [1], gender: "u",
    source: { text: "等闲识得东风面，万紫千红总是春", title: "朱熹《春日》", author: "朱熹", dynasty: "宋", genre: "shi" },
    meaning: "东风：春天的风。东风拂面，万物生发。",
    tags: ["自然", "事业"], frequency: "classic", verified: true
  },
  {
    id: "yun-ying", given: "云影", length: 2, pinyin: "yun ying", tones: [2, 3],
    category: "songci", gender: "u",
    source: { text: "半亩方塘一鉴开，天光云影共徘徊", title: "朱熹《观书有感》", author: "朱熹", dynasty: "宋", genre: "shi" },
    meaning: "云影：天光云影。澄澈如鉴。",
    tags: ["清朗", "聪慧"], frequency: "classic", verified: true
  },
  {
    id: "qing-ru", given: "清如", length: 2, pinyin: "qing ru", tones: [1, 2],
    category: "songci", gender: "u",
    source: { text: "问渠那得清如许，为有源头活水来", title: "朱熹《观书有感》", author: "朱熹", dynasty: "宋", genre: "shi" },
    meaning: "清如：清澈如许。清明澄澈。",
    tags: ["清朗", "聪慧"], frequency: "classic", verified: true
  },
  {
    id: "da-jiang", given: "大江", length: 2, pinyin: "da jiang", tones: [4, 1],
    category: "songci", gender: "m",
    source: { text: "大江东去，浪淘尽，千古风流人物", title: "苏轼《念奴娇·赤壁怀古》", author: "苏轼", dynasty: "宋", genre: "ci" },
    meaning: "大江：大江东去。气吞万里。",
    tags: ["事业", "坚韧"], frequency: "legend", verified: true
  },
  {
    id: "jiang-shan", given: "江山", length: 2, pinyin: "jiang shan", tones: [1, 1],
    category: "songci", gender: "m",
    source: { text: "江山如画，一时多少豪杰", title: "苏轼《念奴娇·赤壁怀古》", author: "苏轼", dynasty: "宋", genre: "ci" },
    meaning: "江山：江山如画。家国天下，气象万千。",
    tags: ["事业"], frequency: "legend", verified: true
  },
  {
    id: "ru-hua", given: "如画", length: 2, pinyin: "ru hua", tones: [2, 4],
    category: "songci", gender: "f",
    source: { text: "江山如画，一时多少豪杰", title: "苏轼《念奴娇·赤壁怀古》", author: "苏轼", dynasty: "宋", genre: "ci" },
    meaning: "如画：江山如画。美景如绘。",
    tags: ["风雅"], frequency: "classic", verified: true
  },
  {
    id: "tan-xiao", given: "谈笑", length: 2, pinyin: "tan xiao", tones: [2, 4],
    category: "songci", gender: "u",
    source: { text: "羽扇纶巾，谈笑间，樯橹灰飞烟灭", title: "苏轼《念奴娇·赤壁怀古》", author: "苏轼", dynasty: "宋", genre: "ci" },
    meaning: "谈笑：谈笑风生。从容不迫，举重若轻。",
    tags: ["风雅", "事业"], frequency: "classic", verified: true
  },
  {
    id: "xi-yun", given: "溪云", length: 2, pinyin: "xi yun", tones: [1, 2],
    category: "tangshi", gender: "u",
    source: { text: "溪云初起日沉阁，山雨欲来风满楼", title: "许浑《咸阳城东楼》", author: "许浑", dynasty: "唐", genre: "shi" },
    meaning: "溪云：溪上云雾。云水相依。",
    tags: ["自然", "清朗"], frequency: "classic", verified: true
  },
  {
    id: "shan-yu", given: "山雨", length: 2, pinyin: "shan yu", tones: [1, 3],
    category: "tangshi", gender: "u",
    source: { text: "溪云初起日沉阁，山雨欲来风满楼", title: "许浑《咸阳城东楼》", author: "许浑", dynasty: "唐", genre: "shi" },
    meaning: "山雨：山雨欲来。风雨之中，自成气象。",
    tags: ["自然", "坚韧"], frequency: "classic", verified: true
  },
  {
    id: "gui-hua", given: "桂花", length: 2, pinyin: "gui hua", tones: [4, 1],
    category: "tangshi", season: [3], gender: "f",
    source: { text: "人闲桂花落，夜静春山空", title: "王维《鸟鸣涧》", author: "王维", dynasty: "唐", genre: "shi" },
    meaning: "桂花：金秋桂子。清香远播，亦「蟾宫折桂」之吉。",
    tags: ["自然", "事业"], frequency: "classic", verified: true
  },
  {
    id: "mei-xue", given: "梅雪", length: 2, pinyin: "mei xue", tones: [2, 3],
    category: "songci", season: [4], gender: "f",
    source: { text: "梅须逊雪三分白，雪却输梅一段香", title: "卢梅坡《雪梅》", author: "卢梅坡", dynasty: "宋", genre: "shi" },
    meaning: "梅雪：梅雪争春。各有千秋，相映成辉。",
    tags: ["风雅", "坚韧"], frequency: "classic", verified: true
  },
  {
    id: "zhi-xing", given: "知行", length: 2, pinyin: "zhi xing", tones: [1, 2],
    category: "wenyan", gender: "u",
    source: { text: "知是行之始，行是知之成", title: "王阳明《传习录》", author: "王阳明", dynasty: "明", genre: "classic" },
    meaning: "知行：知行合一。学思并重，身体力行。",
    tags: ["聪慧", "事业"], frequency: "classic", verified: true
  },
  {
    id: "du-xing", given: "笃行", length: 2, pinyin: "du xing", tones: [3, 2],
    category: "wenyan", gender: "u",
    source: { text: "博学之，审问之，慎思之，明辨之，笃行之", title: "《礼记·中庸》", author: "子思", dynasty: "战国", genre: "classic" },
    meaning: "笃行：笃行不怠。知行合一，踏实致远。",
    tags: ["事业", "坚韧"], frequency: "classic", verified: true
  },
  {
    id: "shen-si", given: "慎思", length: 2, pinyin: "shen si", tones: [4, 1],
    category: "wenyan", gender: "u",
    source: { text: "博学之，审问之，慎思之，明辨之，笃行之", title: "《礼记·中庸》", author: "子思", dynasty: "战国", genre: "classic" },
    meaning: "慎思：审慎思考。思虑周密。",
    tags: ["聪慧"], frequency: "classic", verified: true
  },
  {
    id: "bo-xue", given: "博学", length: 2, pinyin: "bo xue", tones: [2, 2],
    category: "wenyan", gender: "u",
    source: { text: "博学之，审问之，慎思之，明辨之，笃行之", title: "《礼记·中庸》", author: "子思", dynasty: "战国", genre: "classic" },
    meaning: "博学：博学多识。学问广博。",
    tags: ["聪慧"], frequency: "classic", verified: true
  },
  {
    id: "chang-ge", given: "长歌", length: 2, pinyin: "chang ge", tones: [2, 1],
    category: "hanfu", gender: "u",
    source: { text: "少壮不努力，老大徒伤悲", title: "汉乐府《长歌行》", author: "佚名", dynasty: "汉", genre: "yuefu" },
    meaning: "长歌：长歌当行。慷慨激越，惜时奋进。",
    tags: ["风雅", "事业"], frequency: "classic", verified: true
  },
  {
    id: "jiang-xue", given: "江雪", length: 2, pinyin: "jiang xue", tones: [1, 3],
    category: "tangshi", season: [4], gender: "u",
    source: { text: "孤舟蓑笠翁，独钓寒江雪", title: "柳宗元《江雪》", author: "柳宗元", dynasty: "唐", genre: "shi" },
    meaning: "江雪：江天雪色。清冷高洁，遗世独立。",
    tags: ["清朗", "坚韧"], frequency: "classic", verified: true
  },
  {
    id: "song-bai", given: "松柏", length: 2, pinyin: "song bai", tones: [1, 3],
    category: "wenyan", gender: "u",
    source: { text: "岁寒，然后知松柏之后凋也", title: "《论语·子罕》", author: "孔子", dynasty: "春秋", genre: "classic" },
    meaning: "松柏：岁寒不凋。坚韧长青。",
    tags: ["坚韧", "福寿"], frequency: "classic", verified: true
  },
  {
    id: "sui-han", given: "岁寒", length: 2, pinyin: "sui han", tones: [4, 2],
    category: "wenyan", season: [4], gender: "u",
    source: { text: "岁寒，然后知松柏之后凋也", title: "《论语·子罕》", author: "孔子", dynasty: "春秋", genre: "classic" },
    meaning: "岁寒：岁寒知松柏。历经考验，方显本色。",
    tags: ["坚韧"], frequency: "classic", verified: true
  },
  {
    id: "chun-lan", given: "春兰", length: 2, pinyin: "chun lan", tones: [1, 2],
    category: "chuci", season: [1], gender: "f",
    source: { text: "春兰兮秋菊，长无绝兮终古", title: "屈原《九歌·礼魂》", author: "屈原", dynasty: "战国", genre: "fu" },
    meaning: "春兰：春兰秋菊。各擅胜场，芳华不绝。",
    tags: ["风雅", "自然"], frequency: "classic", verified: true
  },
  {
    id: "xing-qiao", given: "星桥", length: 2, pinyin: "xing qiao", tones: [1, 2],
    category: "songci", gender: "u",
    source: { text: "星桥鹊驾，经年才见，想离情别恨难穷", title: "李清照《行香子·七夕》", author: "李清照", dynasty: "宋", genre: "ci" },
    meaning: "星桥：鹊桥星汉。七夕相会。",
    tags: ["爱情", "清朗"], frequency: "classic", verified: true
  },

  // ==================== 批次 3a：中药名 ====================
  {
    id: "bai-zhi", given: "白芷", length: 2, pinyin: "bai zhi", tones: [2, 3],
    category: "medicine", season: [1, 2], gender: "f",
    source: { text: "扈江离与辟芷兮，纫秋兰以为佩", title: "《楚辞·离骚》", author: "屈原", dynasty: "战国", genre: "fu" },
    meaning: "白芷：楚辞香草，亦本草名。芳香通窍，玉骨冰肌。",
    tags: ["风雅", "健康"], frequency: "classic", verified: true
  },
  {
    id: "ban-xia", given: "半夏", length: 2, pinyin: "ban xia", tones: [4, 4],
    category: "medicine", season: [2], gender: "u",
    source: { text: "药名见于《本草纲目》", title: "《本草纲目》", author: "李时珍", dynasty: "明", genre: "medicine" },
    meaning: "半夏：生于夏之半。万物正盛，欣欣向荣。",
    tags: ["健康", "自然"], frequency: "classic", verified: true
  },
  {
    id: "qing-dai", given: "青黛", length: 2, pinyin: "qing dai", tones: [1, 4],
    category: "medicine", gender: "f",
    source: { text: "药名见于《本草纲目》", title: "《本草纲目》", author: "李时珍", dynasty: "明", genre: "medicine" },
    meaning: "青黛：青如远山，黛为画眉之色。清雅深沉。",
    tags: ["风雅", "健康"], frequency: "classic", verified: true
  },
  {
    id: "chen-xiang", given: "沉香", length: 2, pinyin: "chen xiang", tones: [2, 1],
    category: "medicine", gender: "u",
    source: { text: "药名见于《本草纲目》", title: "《本草纲目》", author: "李时珍", dynasty: "明", genre: "medicine" },
    meaning: "沉香：名贵香木，入水即沉。历久弥香，深沉内敛。",
    tags: ["风雅", "健康"], frequency: "legend", verified: true
  },
  {
    id: "zi-su", given: "紫苏", length: 2, pinyin: "zi su", tones: [3, 1],
    category: "medicine", gender: "u",
    source: { text: "药名见于《本草纲目》", title: "《本草纲目》", author: "李时珍", dynasty: "明", genre: "medicine" },
    meaning: "紫苏：紫叶香草。解表散寒，温润平易。",
    tags: ["健康", "自然"], frequency: "classic", verified: true
  },
  {
    id: "fu-ling", given: "茯苓", length: 2, pinyin: "fu ling", tones: [2, 2],
    category: "medicine", gender: "u",
    source: { text: "药名见于《本草纲目》", title: "《本草纲目》", author: "李时珍", dynasty: "明", genre: "medicine" },
    meaning: "茯苓：松根灵气所结。淡泊宁心，健脾安神。",
    tags: ["健康", "平安"], frequency: "classic", verified: true
  },
  {
    id: "bai-zhu", given: "白术", length: 2, pinyin: "bai zhu", tones: [2, 2],
    category: "medicine", gender: "u",
    source: { text: "药名见于《本草纲目》", title: "《本草纲目》", author: "李时珍", dynasty: "明", genre: "medicine" },
    meaning: "白术：健脾益气之品。温厚平和，如良师益友。",
    tags: ["健康", "仁善"], frequency: "classic", verified: true
  },
  {
    id: "dang-gui", given: "当归", length: 2, pinyin: "dang gui", tones: [1, 1],
    category: "medicine", gender: "f",
    source: { text: "良田百顷，不在一亩；但有远志，不在当归也", title: "《三国志·姜维传》注引", author: "姜维", dynasty: "三国", genre: "classic" },
    meaning: "当归：本草名，亦「应当归来」之意。游子思归，深情之典。",
    tags: ["爱情", "健康"], frequency: "legend", verified: true
  },
  {
    id: "ren-dong", given: "忍冬", length: 2, pinyin: "ren dong", tones: [3, 1],
    category: "medicine", season: [4], gender: "u",
    source: { text: "药名见于《本草纲目》", title: "《本草纲目》", author: "李时珍", dynasty: "明", genre: "medicine" },
    meaning: "忍冬：金银花之别名。经冬不凋，坚韧如松。",
    tags: ["坚韧", "健康"], frequency: "legend", verified: true
  },
  {
    id: "ling-xiao", given: "凌霄", length: 2, pinyin: "ling xiao", tones: [2, 1],
    category: "medicine", season: [2], gender: "f",
    source: { text: "有木名凌霄，擢秀非孤标", title: "白居易《有木诗八首》", author: "白居易", dynasty: "唐", genre: "shi" },
    meaning: "凌霄：凌霄花，攀援而上。志在凌云，花开九霄。",
    tags: ["事业", "坚韧"], frequency: "legend", verified: true
  },
  {
    id: "xin-yi", given: "辛夷", length: 2, pinyin: "xin yi", tones: [1, 2],
    category: "medicine", season: [1], gender: "f",
    source: { text: "木末芙蓉花，山中发红萼", title: "王维《辛夷坞》", author: "王维", dynasty: "唐", genre: "shi" },
    meaning: "辛夷：玉兰之别称，望春之花。涧户寂无人，纷纷开且落。",
    tags: ["风雅", "健康"], frequency: "legend", verified: true
  },
  {
    id: "pei-lan", given: "佩兰", length: 2, pinyin: "pei lan", tones: [4, 2],
    category: "medicine", gender: "u",
    source: { text: "扈江离与辟芷兮，纫秋兰以为佩", title: "《楚辞·离骚》", author: "屈原", dynasty: "战国", genre: "fu" },
    meaning: "佩兰：纫兰为佩。香草随身，德馨自远。",
    tags: ["风雅", "仁善"], frequency: "classic", verified: true
  },
  {
    id: "ze-lan", given: "泽兰", length: 2, pinyin: "ze lan", tones: [2, 2],
    category: "medicine", gender: "u",
    source: { text: "药名见于《本草纲目》", title: "《本草纲目》", author: "李时珍", dynasty: "明", genre: "medicine" },
    meaning: "泽兰：泽畔之兰。生于水泽，香远益清。",
    tags: ["风雅", "自然"], frequency: "classic", verified: true
  },
  {
    id: "qing-hao", given: "青蒿", length: 2, pinyin: "qing hao", tones: [1, 1],
    category: "medicine", gender: "u",
    source: { text: "药名见于《本草纲目》", title: "《本草纲目》", author: "李时珍", dynasty: "明", genre: "medicine" },
    meaning: "青蒿：青蒿一握，以水二升渍。屠呦呦据此发现青蒿素，青蒿济世。",
    tags: ["健康", "清朗"], frequency: "legend", verified: true
  },
  {
    id: "mu-xiang", given: "木香", length: 2, pinyin: "mu xiang", tones: [4, 1],
    category: "medicine", gender: "u",
    source: { text: "药名见于《本草纲目》", title: "《本草纲目》", author: "李时珍", dynasty: "明", genre: "medicine" },
    meaning: "木香：行气之药。木之芬芳，清雅悠长。",
    tags: ["健康", "自然"], frequency: "classic", verified: true
  },
  {
    id: "tan-xiang", given: "檀香", length: 2, pinyin: "tan xiang", tones: [2, 1],
    category: "medicine", gender: "u",
    source: { text: "药名见于《本草纲目》", title: "《本草纲目》", author: "李时珍", dynasty: "明", genre: "medicine" },
    meaning: "檀香：檀木之香。庄重沉静，古寺禅意。",
    tags: ["风雅", "平安"], frequency: "classic", verified: true
  },
  {
    id: "jing-tian", given: "景天", length: 2, pinyin: "jing tian", tones: [3, 1],
    category: "medicine", gender: "u",
    source: { text: "药名见于《本草纲目》", title: "《本草纲目》", author: "李时珍", dynasty: "明", genre: "medicine" },
    meaning: "景天：本草名。景仰苍天，胸怀高远。",
    tags: ["健康", "清朗"], frequency: "legend", verified: true
  },
  {
    id: "bai-wei", given: "白薇", length: 2, pinyin: "bai wei", tones: [2, 1],
    category: "medicine", gender: "f",
    source: { text: "药名见于《本草纲目》", title: "《本草纲目》", author: "李时珍", dynasty: "明", genre: "medicine" },
    meaning: "白薇：白薇之草，清雅素净。",
    tags: ["风雅", "健康"], frequency: "classic", verified: true
  },
  {
    id: "lian-qiao", given: "连翘", length: 2, pinyin: "lian qiao", tones: [2, 2],
    category: "medicine", season: [1], gender: "u",
    source: { text: "药名见于《本草纲目》", title: "《本草纲目》", author: "李时珍", dynasty: "明", genre: "medicine" },
    meaning: "连翘：早春黄花。连捷翘楚，名列前茅。",
    tags: ["健康", "事业"], frequency: "classic", verified: true
  },
  {
    id: "jie-geng", given: "桔梗", length: 2, pinyin: "jie geng", tones: [2, 3],
    category: "medicine", season: [2], gender: "u",
    source: { text: "药名见于《本草纲目》", title: "《本草纲目》", author: "李时珍", dynasty: "明", genre: "medicine" },
    meaning: "桔梗：蓝紫之花，铃铛之形。清亮可爱。",
    tags: ["健康", "自然"], frequency: "classic", verified: true
  },
  {
    id: "du-zhong", given: "杜仲", length: 2, pinyin: "du zhong", tones: [4, 4],
    category: "medicine", gender: "u",
    source: { text: "药名见于《本草纲目》", title: "《本草纲目》", author: "李时珍", dynasty: "明", genre: "medicine" },
    meaning: "杜仲：以人名入药。强筋健骨，柔韧如丝。",
    tags: ["健康", "坚韧"], frequency: "classic", verified: true
  },
  {
    id: "tian-dong", given: "天冬", length: 2, pinyin: "tian dong", tones: [1, 1],
    category: "medicine", gender: "u",
    source: { text: "药名见于《本草纲目》", title: "《本草纲目》", author: "李时珍", dynasty: "明", genre: "medicine" },
    meaning: "天冬：天门冬。养阴润燥，清润如水。",
    tags: ["健康", "清朗"], frequency: "classic", verified: true
  },
  {
    id: "mai-dong", given: "麦冬", length: 2, pinyin: "mai dong", tones: [4, 1],
    category: "medicine", gender: "u",
    source: { text: "药名见于《本草纲目》", title: "《本草纲目》", author: "李时珍", dynasty: "明", genre: "medicine" },
    meaning: "麦冬：麦冬润肺养心。性味甘平，温润如玉。",
    tags: ["健康", "平安"], frequency: "classic", verified: true
  },
  {
    id: "che-qian", given: "车前", length: 2, pinyin: "che qian", tones: [1, 2],
    category: "medicine", gender: "u",
    source: { text: "药名见于《本草纲目》", title: "《本草纲目》", author: "李时珍", dynasty: "明", genre: "medicine" },
    meaning: "车前：车前草，长于道旁。一往无前，随遇而安。",
    tags: ["健康", "坚韧"], frequency: "classic", verified: true
  },
  {
    id: "long-kui", given: "龙葵", length: 2, pinyin: "long kui", tones: [2, 2],
    category: "medicine", gender: "u",
    source: { text: "药名见于《本草纲目》", title: "《本草纲目》", author: "李时珍", dynasty: "明", genre: "medicine" },
    meaning: "龙葵：本草名。龙腾之势，葵心向阳。",
    tags: ["健康", "事业"], frequency: "classic", verified: true
  },
  {
    id: "shi-hu", given: "石斛", length: 2, pinyin: "shi hu", tones: [2, 2],
    category: "medicine", gender: "u",
    source: { text: "药名见于《本草纲目》", title: "《本草纲目》", author: "李时珍", dynasty: "明", genre: "medicine" },
    meaning: "石斛：九大仙草之首，生于石上。坚劲清高。",
    tags: ["健康", "坚韧"], frequency: "classic", verified: true
  },
  {
    id: "zhi-mu", given: "知母", length: 2, pinyin: "zhi mu", tones: [1, 3],
    category: "medicine", gender: "u",
    source: { text: "药名见于《本草纲目》", title: "《本草纲目》", author: "李时珍", dynasty: "明", genre: "medicine" },
    meaning: "知母：本草名。亦含知恩报母之意，孝亲之情。",
    tags: ["健康", "仁善"], frequency: "classic", verified: true
  },
  {
    id: "yuan-zhi", given: "远志", length: 2, pinyin: "yuan zhi", tones: [3, 4],
    category: "medicine", gender: "u",
    source: { text: "良田百顷，不在一亩；但有远志，不在当归也", title: "《三国志·姜维传》注引", author: "姜维", dynasty: "三国", genre: "classic" },
    meaning: "远志：本草名，亦「志向远大」之双关。",
    tags: ["事业", "健康"], frequency: "legend", verified: true
  },
  {
    id: "fang-feng", given: "防风", length: 2, pinyin: "fang feng", tones: [2, 1],
    category: "medicine", gender: "u",
    source: { text: "药名见于《本草纲目》", title: "《本草纲目》", author: "李时珍", dynasty: "明", genre: "medicine" },
    meaning: "防风：御风之草。护身御疾，稳健如山。",
    tags: ["健康", "平安"], frequency: "classic", verified: true
  },
  {
    id: "xi-xin", given: "细辛", length: 2, pinyin: "xi xin", tones: [4, 1],
    category: "medicine", gender: "u",
    source: { text: "药名见于《本草纲目》", title: "《本草纲目》", author: "李时珍", dynasty: "明", genre: "medicine" },
    meaning: "细辛：根细味辛。细致入微，坚韧不拔。",
    tags: ["健康", "坚韧"], frequency: "classic", verified: true
  },
  {
    id: "chuan-xiong", given: "川芎", length: 2, pinyin: "chuan xiong", tones: [1, 1],
    category: "medicine", gender: "u",
    source: { text: "药名见于《本草纲目》", title: "《本草纲目》", author: "李时珍", dynasty: "明", genre: "medicine" },
    meaning: "川芎：产自蜀地。川流不息，行气活血。",
    tags: ["健康", "自然"], frequency: "classic", verified: true
  },
  {
    id: "bai-shao", given: "白芍", length: 2, pinyin: "bai shao", tones: [2, 2],
    category: "medicine", gender: "f",
    source: { text: "药名见于《本草纲目》", title: "《本草纲目》", author: "李时珍", dynasty: "明", genre: "medicine" },
    meaning: "白芍：白芍之花，雍容淡雅。柔肝养血。",
    tags: ["健康", "风雅"], frequency: "classic", verified: true
  },
  {
    id: "yu-zhu", given: "玉竹", length: 2, pinyin: "yu zhu", tones: [4, 2],
    category: "medicine", gender: "u",
    source: { text: "药名见于《本草纲目》", title: "《本草纲目》", author: "李时珍", dynasty: "明", genre: "medicine" },
    meaning: "玉竹：根如白玉，茎如修竹。温润清雅。",
    tags: ["健康", "风雅"], frequency: "classic", verified: true
  },
  {
    id: "bai-he", given: "百合", length: 2, pinyin: "bai he", tones: [3, 2],
    category: "medicine", season: [2], gender: "f",
    source: { text: "药名见于《本草纲目》", title: "《本草纲目》", author: "李时珍", dynasty: "明", genre: "medicine" },
    meaning: "百合：百合花清雅，亦「百年好合」之谐。爱情美满。",
    tags: ["爱情", "福寿"], frequency: "legend", verified: true
  },
  {
    id: "ling-zhi", given: "灵芝", length: 2, pinyin: "ling zhi", tones: [2, 1],
    category: "medicine", gender: "u",
    source: { text: "灵芝生天地，朱草被洛滨", title: "曹植《灵芝篇》", author: "曹植", dynasty: "三国", genre: "yuefu" },
    meaning: "灵芝：仙草灵芝。祥瑞长寿，灵秀天成。",
    tags: ["福寿", "健康"], frequency: "legend", verified: true
  },
  {
    id: "dou-kou", given: "豆蔻", length: 2, pinyin: "dou kou", tones: [4, 4],
    category: "medicine", season: [1], gender: "f",
    source: { text: "娉娉袅袅十三余，豆蔻梢头二月初", title: "杜牧《赠别》", author: "杜牧", dynasty: "唐", genre: "shi" },
    meaning: "豆蔻：豆蔻年华。青春正好，含苞待放。",
    tags: ["风雅", "健康"], frequency: "classic", verified: true
  },
  {
    id: "su-he", given: "苏合", length: 2, pinyin: "su he", tones: [1, 2],
    category: "medicine", gender: "u",
    source: { text: "药名见于《本草纲目》", title: "《本草纲目》", author: "李时珍", dynasty: "明", genre: "medicine" },
    meaning: "苏合：苏合香，名贵香药。苏醒和合，开窍醒神。",
    tags: ["健康", "平安"], frequency: "classic", verified: true
  },
  {
    id: "dong-qing", given: "冬青", length: 2, pinyin: "dong qing", tones: [1, 1],
    category: "medicine", season: [4], gender: "u",
    source: { text: "药名见于《本草纲目》", title: "《本草纲目》", author: "李时珍", dynasty: "明", genre: "medicine" },
    meaning: "冬青：四季常青之木。经冬不凋。",
    tags: ["坚韧", "健康"], frequency: "classic", verified: true
  },
  {
    id: "chang-pu", given: "菖蒲", length: 2, pinyin: "chang pu", tones: [1, 2],
    category: "medicine", season: [2], gender: "u",
    source: { text: "药名见于《本草纲目》", title: "《本草纲目》", author: "李时珍", dynasty: "明", genre: "medicine" },
    meaning: "菖蒲：端午之草，驱邪纳吉。叶如剑，气如兰。",
    tags: ["平安", "健康"], frequency: "classic", verified: true
  },
  {
    id: "du-huo", given: "独活", length: 2, pinyin: "du huo", tones: [2, 2],
    category: "medicine", gender: "u",
    source: { text: "药名见于《本草纲目》", title: "《本草纲目》", author: "李时珍", dynasty: "明", genre: "medicine" },
    meaning: "独活：一茎直上，不为风摇。遗世独立，卓尔不群。",
    tags: ["坚韧", "健康"], frequency: "classic", verified: true
  },
  {
    id: "xu-duan", given: "续断", length: 2, pinyin: "xu duan", tones: [4, 4],
    category: "medicine", gender: "u",
    source: { text: "药名见于《本草纲目》", title: "《本草纲目》", author: "李时珍", dynasty: "明", genre: "medicine" },
    meaning: "续断：续骨疗伤之药。生生不息，绵绵不绝。",
    tags: ["健康", "坚韧"], frequency: "classic", verified: true
  },
  {
    id: "zi-wan", given: "紫菀", length: 2, pinyin: "zi wan", tones: [3, 3],
    category: "medicine", season: [3], gender: "f",
    source: { text: "药名见于《本草纲目》", title: "《本草纲目》", author: "李时珍", dynasty: "明", genre: "medicine" },
    meaning: "紫菀：秋日紫花。婉约清丽。",
    tags: ["风雅", "健康"], frequency: "classic", verified: true
  },
  {
    id: "he-huan", given: "合欢", length: 2, pinyin: "he huan", tones: [2, 1],
    category: "medicine", season: [2], gender: "f",
    source: { text: "合欢蠲忿，萱草忘忧", title: "嵇康《养生论》", author: "嵇康", dynasty: "魏晋", genre: "classic" },
    meaning: "合欢：合欢花昼开夜合。阖家欢乐，爱情和美。",
    tags: ["爱情", "福寿"], frequency: "legend", verified: true
  },
  {
    id: "wang-you", given: "忘忧", length: 2, pinyin: "wang you", tones: [4, 1],
    category: "medicine", gender: "u",
    source: { text: "合欢蠲忿，萱草忘忧", title: "嵇康《养生论》", author: "嵇康", dynasty: "魏晋", genre: "classic" },
    meaning: "忘忧：萱草别名忘忧草。无忧无虑，喜乐安康。",
    tags: ["平安", "福寿"], frequency: "legend", verified: true
  },
  {
    id: "xuan-cao", given: "萱草", length: 2, pinyin: "xuan cao", tones: [1, 3],
    category: "medicine", season: [2], gender: "f",
    source: { text: "焉得谖草，言树之背", title: "《诗经·卫风·伯兮》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "萱草：谖草即萱草，母亲花。萱堂之乐，孝亲之思。",
    tags: ["仁善", "平安"], frequency: "classic", verified: true
  },
  {
    id: "su-xin", given: "素馨", length: 2, pinyin: "su xin", tones: [4, 1],
    category: "medicine", season: [2], gender: "f",
    source: { text: "药名见于《本草纲目》", title: "《本草纲目》", author: "李时珍", dynasty: "明", genre: "medicine" },
    meaning: "素馨：素馨花，色白如雪，香清似兰。",
    tags: ["风雅", "清朗"], frequency: "classic", verified: true
  },
  {
    id: "han-xiao", given: "含笑", length: 2, pinyin: "han xiao", tones: [2, 4],
    category: "medicine", season: [1], gender: "f",
    source: { text: "药名见于《本草纲目》", title: "《本草纲目》", author: "李时珍", dynasty: "明", genre: "medicine" },
    meaning: "含笑：含笑花，将开未开似含笑。笑靥如花。",
    tags: ["平安", "风雅"], frequency: "classic", verified: true
  },
  {
    id: "mu-jin", given: "木槿", length: 2, pinyin: "mu jin", tones: [4, 3],
    category: "medicine", season: [2], gender: "f",
    source: { text: "有女同车，颜如舜华", title: "《诗经·郑风·有女同车》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "木槿：舜华即木槿。朝开暮落，生生不息。",
    tags: ["自然", "坚韧"], frequency: "classic", verified: true
  },
  {
    id: "gan-song", given: "甘松", length: 2, pinyin: "gan song", tones: [1, 1],
    category: "medicine", gender: "u",
    source: { text: "药名见于《本草纲目》", title: "《本草纲目》", author: "李时珍", dynasty: "明", genre: "medicine" },
    meaning: "甘松：甘松之香。甘之如饴，松之坚韧。",
    tags: ["健康", "平安"], frequency: "classic", verified: true
  },
  {
    id: "bai-ji", given: "白及", length: 2, pinyin: "bai ji", tones: [2, 2],
    category: "medicine", season: [2], gender: "u",
    source: { text: "药名见于《本草纲目》", title: "《本草纲目》", author: "李时珍", dynasty: "明", genre: "medicine" },
    meaning: "白及：兰科之花，清雅如兰。",
    tags: ["健康", "风雅"], frequency: "classic", verified: true
  },
  {
    id: "zhi-zi", given: "栀子", length: 2, pinyin: "zhi zi", tones: [1, 3],
    category: "medicine", season: [2], gender: "f",
    source: { text: "栀子比众木，人间诚未多", title: "杜甫《栀子》", author: "杜甫", dynasty: "唐", genre: "shi" },
    meaning: "栀子：栀子花开，清香满庭。",
    tags: ["风雅", "自然"], frequency: "classic", verified: true
  },
  {
    id: "hou-po", given: "厚朴", length: 2, pinyin: "hou po", tones: [4, 3],
    category: "medicine", gender: "u",
    source: { text: "药名见于《本草纲目》", title: "《本草纲目》", author: "李时珍", dynasty: "明", genre: "medicine" },
    meaning: "厚朴：厚道朴实。亦行气化湿之药。",
    tags: ["仁善", "健康"], frequency: "classic", verified: true
  },
  {
    id: "yi-zhi", given: "益智", length: 2, pinyin: "yi zhi", tones: [4, 4],
    category: "medicine", gender: "u",
    source: { text: "药名见于《本草纲目》", title: "《本草纲目》", author: "李时珍", dynasty: "明", genre: "medicine" },
    meaning: "益智：益智仁，本草名。增益智慧。",
    tags: ["聪慧", "健康"], frequency: "classic", verified: true
  },
  {
    id: "tian-ma", given: "天麻", length: 2, pinyin: "tian ma", tones: [1, 2],
    category: "medicine", gender: "u",
    source: { text: "药名见于《本草纲目》", title: "《本草纲目》", author: "李时珍", dynasty: "明", genre: "medicine" },
    meaning: "天麻：天赐之麻，息风定惊。",
    tags: ["健康", "平安"], frequency: "classic", verified: true
  },
  {
    id: "san-qi", given: "三七", length: 2, pinyin: "san qi", tones: [1, 1],
    category: "medicine", gender: "u",
    source: { text: "药名见于《本草纲目》", title: "《本草纲目》", author: "李时珍", dynasty: "明", genre: "medicine" },
    meaning: "三七：金疮圣药，亦名田七。",
    tags: ["健康"], frequency: "classic", verified: true
  },
  {
    id: "dan-shen", given: "丹参", length: 2, pinyin: "dan shen", tones: [1, 1],
    category: "medicine", gender: "u",
    source: { text: "药名见于《本草纲目》", title: "《本草纲目》", author: "李时珍", dynasty: "明", genre: "medicine" },
    meaning: "丹参：丹心入药。活血化瘀，赤诚温润。",
    tags: ["健康", "仁善"], frequency: "classic", verified: true
  },
  {
    id: "huo-xiang", given: "藿香", length: 2, pinyin: "huo xiang", tones: [4, 1],
    category: "medicine", season: [2], gender: "u",
    source: { text: "药名见于《本草纲目》", title: "《本草纲目》", author: "李时珍", dynasty: "明", genre: "medicine" },
    meaning: "藿香：藿香正气。芳香化湿，正气凛然。",
    tags: ["健康", "清朗"], frequency: "classic", verified: true
  },
  {
    id: "bo-he", given: "薄荷", length: 2, pinyin: "bo he", tones: [4, 2],
    category: "medicine", season: [2], gender: "u",
    source: { text: "药名见于《本草纲目》", title: "《本草纲目》", author: "李时珍", dynasty: "明", genre: "medicine" },
    meaning: "薄荷：清凉之草。沁人心脾，清新自在。",
    tags: ["健康", "清朗"], frequency: "classic", verified: true
  },

  // ==================== 批次 3b：二十四节气 ====================
  {
    id: "li-chun", given: "立春", length: 2, pinyin: "li chun", tones: [4, 1],
    category: "solar", season: [1], gender: "u",
    source: { text: "立春，正月节。立，建始也", title: "《月令七十二候集解》", author: "吴澄", dynasty: "元", genre: "classic" },
    meaning: "立春：万物起始。一年之计在于春。",
    tags: ["自然", "福寿"], frequency: "classic", verified: true
  },
  {
    id: "yu-shui", given: "雨水", length: 2, pinyin: "yu shui", tones: [3, 3],
    category: "solar", season: [1], gender: "u",
    source: { text: "雨水，正月中。天一生水", title: "《月令七十二候集解》", author: "吴澄", dynasty: "元", genre: "classic" },
    meaning: "雨水：天一生水。润泽万物。",
    tags: ["自然", "平安"], frequency: "classic", verified: true
  },
  {
    id: "jing-zhe", given: "惊蛰", length: 2, pinyin: "jing zhe", tones: [1, 2],
    category: "solar", season: [1], gender: "u",
    source: { text: "惊蛰，二月节。万物出乎震，震为雷，故曰惊蛰", title: "《月令七十二候集解》", author: "吴澄", dynasty: "元", genre: "classic" },
    meaning: "惊蛰：春雷乍动，万物复苏。一鸣惊人。",
    tags: ["自然", "事业"], frequency: "classic", verified: true
  },
  {
    id: "chun-fen", given: "春分", length: 2, pinyin: "chun fen", tones: [1, 1],
    category: "solar", season: [1], gender: "u",
    source: { text: "春分，二月中。分者，半也", title: "《月令七十二候集解》", author: "吴澄", dynasty: "元", genre: "classic" },
    meaning: "春分：昼夜均分。不偏不倚，恰到好处。",
    tags: ["自然", "平安"], frequency: "classic", verified: true
  },
  {
    id: "qing-ming", given: "清明", length: 2, pinyin: "qing ming", tones: [1, 2],
    category: "solar", season: [1], gender: "u",
    source: { text: "清明，三月节。物至此时，皆以洁齐而清明矣", title: "《月令七十二候集解》", author: "吴澄", dynasty: "元", genre: "classic" },
    meaning: "清明：气清景明。天清地明，万物洁净。",
    tags: ["清朗", "平安"], frequency: "legend", verified: true
  },
  {
    id: "gu-yu", given: "谷雨", length: 2, pinyin: "gu yu", tones: [3, 3],
    category: "solar", season: [1], gender: "u",
    source: { text: "谷雨，三月中。雨其谷于水也", title: "《月令七十二候集解》", author: "吴澄", dynasty: "元", genre: "classic" },
    meaning: "谷雨：雨生百谷。播谷降雨，仓廪之望。",
    tags: ["自然", "福寿"], frequency: "classic", verified: true
  },
  {
    id: "li-xia", given: "立夏", length: 2, pinyin: "li xia", tones: [4, 4],
    category: "solar", season: [2], gender: "u",
    source: { text: "立夏，四月节。立，始建也", title: "《月令七十二候集解》", author: "吴澄", dynasty: "元", genre: "classic" },
    meaning: "立夏：夏季之始。万物繁茂。",
    tags: ["自然"], frequency: "classic", verified: true
  },
  {
    id: "xiao-man", given: "小满", length: 2, pinyin: "xiao man", tones: [3, 3],
    category: "solar", season: [2], gender: "u",
    source: { text: "小满，四月中。物致于此，小得盈满", title: "《月令七十二候集解》", author: "吴澄", dynasty: "元", genre: "classic" },
    meaning: "小满：小得盈满。「小满胜万全」，不求圆满，知足常乐。",
    tags: ["平安", "福寿"], frequency: "legend", verified: true
  },
  {
    id: "xia-zhi", given: "夏至", length: 2, pinyin: "xia zhi", tones: [4, 4],
    category: "solar", season: [2], gender: "u",
    source: { text: "夏至，五月中。夏，假也，至，极也", title: "《月令七十二候集解》", author: "吴澄", dynasty: "元", genre: "classic" },
    meaning: "夏至：日至极处。盛极而生新。",
    tags: ["自然"], frequency: "classic", verified: true
  },
  {
    id: "li-qiu", given: "立秋", length: 2, pinyin: "li qiu", tones: [4, 1],
    category: "solar", season: [3], gender: "u",
    source: { text: "立秋，七月节。秋，揪也，物于此而揪敛也", title: "《月令七十二候集解》", author: "吴澄", dynasty: "元", genre: "classic" },
    meaning: "立秋：秋之始。金风送爽。",
    tags: ["自然", "清朗"], frequency: "classic", verified: true
  },
  {
    id: "bai-lu3", given: "白露", length: 2, pinyin: "bai lu", tones: [2, 4],
    category: "solar", season: [3], gender: "u",
    source: { text: "蒹葭苍苍，白露为霜", title: "《诗经·秦风·蒹葭》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "白露：二十四节气，亦《蒹葭》名句。露凝而白，秋意初生。",
    tags: ["清朗", "自然"], frequency: "legend", verified: true
  },
  {
    id: "qiu-fen", given: "秋分", length: 2, pinyin: "qiu fen", tones: [1, 1],
    category: "solar", season: [3], gender: "u",
    source: { text: "秋分，八月中。分者，半也", title: "《月令七十二候集解》", author: "吴澄", dynasty: "元", genre: "classic" },
    meaning: "秋分：秋色平分。天高云淡。",
    tags: ["自然", "清朗"], frequency: "classic", verified: true
  },
  {
    id: "han-lu", given: "寒露", length: 2, pinyin: "han lu", tones: [2, 4],
    category: "solar", season: [3], gender: "u",
    source: { text: "寒露，九月节。露气寒冷，将凝结也", title: "《月令七十二候集解》", author: "吴澄", dynasty: "元", genre: "classic" },
    meaning: "寒露：秋露将凝。清冷高洁。",
    tags: ["清朗", "自然"], frequency: "classic", verified: true
  },
  {
    id: "shuang-jiang", given: "霜降", length: 2, pinyin: "shuang jiang", tones: [1, 4],
    category: "solar", season: [3], gender: "u",
    source: { text: "霜降，九月中。气肃而凝，露结为霜矣", title: "《月令七十二候集解》", author: "吴澄", dynasty: "元", genre: "classic" },
    meaning: "霜降：露结为霜。经霜愈劲，如霜叶之红。",
    tags: ["坚韧", "自然"], frequency: "classic", verified: true
  },
  {
    id: "li-dong", given: "立冬", length: 2, pinyin: "li dong", tones: [4, 1],
    category: "solar", season: [4], gender: "u",
    source: { text: "立冬，十月节。冬，终也，万物收藏也", title: "《月令七十二候集解》", author: "吴澄", dynasty: "元", genre: "classic" },
    meaning: "立冬：万物收藏。蓄势待春。",
    tags: ["自然", "福寿"], frequency: "classic", verified: true
  },
  {
    id: "xiao-xue", given: "小雪", length: 2, pinyin: "xiao xue", tones: [3, 3],
    category: "solar", season: [4], gender: "f",
    source: { text: "小雪，十月中。雨下而为寒气所薄，故凝而为雪", title: "《月令七十二候集解》", author: "吴澄", dynasty: "元", genre: "classic" },
    meaning: "小雪：初雪将至。轻灵洁净。",
    tags: ["清朗", "自然"], frequency: "classic", verified: true
  },
  {
    id: "da-xue", given: "大雪", length: 2, pinyin: "da xue", tones: [4, 3],
    category: "solar", season: [4], gender: "u",
    source: { text: "大雪，十一月节。大者，盛也，至此而雪盛矣", title: "《月令七十二候集解》", author: "吴澄", dynasty: "元", genre: "classic" },
    meaning: "大雪：瑞雪兆丰年。银装素裹。",
    tags: ["自然", "福寿"], frequency: "classic", verified: true
  },
  {
    id: "dong-zhi", given: "冬至", length: 2, pinyin: "dong zhi", tones: [1, 4],
    category: "solar", season: [4], gender: "u",
    source: { text: "冬至，十一月中。终藏之气至此而极也", title: "《月令七十二候集解》", author: "吴澄", dynasty: "元", genre: "classic" },
    meaning: "冬至：阴极阳生。冬至一阳生，否极泰来。",
    tags: ["福寿", "坚韧"], frequency: "legend", verified: true
  },

  // ==================== 批次 3c：自然意象与山水清音 ====================
  {
    id: "xing-han", given: "星汉", length: 2, pinyin: "xing han", tones: [1, 4],
    category: "hanfu", gender: "u",
    source: { text: "日月之行，若出其中；星汉灿烂，若出其里", title: "曹操《观沧海》", author: "曹操", dynasty: "东汉", genre: "yuefu" },
    meaning: "星汉：银河。星汉灿烂，浩瀚如海。",
    tags: ["清朗", "自然"], frequency: "legend", verified: true
  },
  {
    id: "yun-xiu", given: "云岫", length: 2, pinyin: "yun xiu", tones: [2, 4],
    category: "hanfu", gender: "u",
    source: { text: "云无心以出岫，鸟倦飞而知还", title: "陶渊明《归去来兮辞》", author: "陶渊明", dynasty: "东晋", genre: "fu" },
    meaning: "云岫：云出山间。闲云出岫，悠然自得。",
    tags: ["自然", "风雅"], frequency: "classic", verified: true
  },
  {
    id: "yue-hua", given: "月华", length: 2, pinyin: "yue hua", tones: [4, 2],
    category: "tangshi", gender: "f",
    source: { text: "此时相望不相闻，愿逐月华流照君", title: "张若虚《春江花月夜》", author: "张若虚", dynasty: "唐", genre: "shi" },
    meaning: "月华：月光。月华如水，流光千里。",
    tags: ["清朗", "爱情"], frequency: "legend", verified: true
  },
  {
    id: "chun-jian", given: "春涧", length: 2, pinyin: "chun jian", tones: [1, 4],
    category: "tangshi", season: [1], gender: "u",
    source: { text: "人闲桂花落，夜静春山空", title: "王维《鸟鸣涧》", author: "王维", dynasty: "唐", genre: "shi" },
    meaning: "春涧：春日山涧。清泉流淌，鸟鸣山幽。",
    tags: ["自然", "清朗"], frequency: "classic", verified: true
  },
  {
    id: "song-yue", given: "松月", length: 2, pinyin: "song yue", tones: [1, 4],
    category: "tangshi", gender: "u",
    source: { text: "明月松间照，清泉石上流", title: "王维《山居秋暝》", author: "王维", dynasty: "唐", genre: "shi" },
    meaning: "松月：松间明月。清幽高洁。",
    tags: ["清朗", "风雅"], frequency: "classic", verified: true
  },
  {
    id: "he-xiang", given: "荷香", length: 2, pinyin: "he xiang", tones: [2, 1],
    category: "tangshi", season: [2], gender: "u",
    source: { text: "荷风送香气，竹露滴清响", title: "孟浩然《夏日南亭怀辛大》", author: "孟浩然", dynasty: "唐", genre: "shi" },
    meaning: "荷香：荷花之香。清芬远播。",
    tags: ["自然", "风雅"], frequency: "classic", verified: true
  },
  {
    id: "qing-yin", given: "清音", length: 2, pinyin: "qing yin", tones: [1, 1],
    category: "hanfu", gender: "u",
    source: { text: "非必丝与竹，山水有清音", title: "左思《招隐诗》", author: "左思", dynasty: "晋", genre: "shi" },
    meaning: "清音：山水清音。天然之声，胜于丝竹。",
    tags: ["风雅", "清朗"], frequency: "legend", verified: true
  },
  {
    id: "shan-shui", given: "山水", length: 2, pinyin: "shan shui", tones: [1, 3],
    category: "hanfu", gender: "u",
    source: { text: "非必丝与竹，山水有清音", title: "左思《招隐诗》", author: "左思", dynasty: "晋", genre: "shi" },
    meaning: "山水：山水清音。亦山水画之意境。",
    tags: ["自然", "风雅"], frequency: "classic", verified: true
  },
  {
    id: "qing-kong", given: "晴空", length: 2, pinyin: "qing kong", tones: [2, 1],
    category: "tangshi", season: [3], gender: "u",
    source: { text: "晴空一鹤排云上，便引诗情到碧霄", title: "刘禹锡《秋词》", author: "刘禹锡", dynasty: "唐", genre: "shi" },
    meaning: "晴空：晴空万里。秋高气爽，心怀开阔。",
    tags: ["清朗", "事业"], frequency: "legend", verified: true
  },
  {
    id: "shi-qing", given: "诗情", length: 2, pinyin: "shi qing", tones: [1, 2],
    category: "tangshi", gender: "f",
    source: { text: "晴空一鹤排云上，便引诗情到碧霄", title: "刘禹锡《秋词》", author: "刘禹锡", dynasty: "唐", genre: "shi" },
    meaning: "诗情：诗情画意。心中有诗，眼中有光。",
    tags: ["风雅", "聪慧"], frequency: "classic", verified: true
  },
  {
    id: "bi-xiao", given: "碧霄", length: 2, pinyin: "bi xiao", tones: [4, 1],
    category: "tangshi", gender: "u",
    source: { text: "晴空一鹤排云上，便引诗情到碧霄", title: "刘禹锡《秋词》", author: "刘禹锡", dynasty: "唐", genre: "shi" },
    meaning: "碧霄：碧空云霄。志在高远。",
    tags: ["清朗", "事业"], frequency: "classic", verified: true
  },
  {
    id: "chun-chao", given: "春潮", length: 2, pinyin: "chun chao", tones: [1, 2],
    category: "tangshi", season: [1], gender: "u",
    source: { text: "春江潮水连海平，海上明月共潮生", title: "张若虚《春江花月夜》", author: "张若虚", dynasty: "唐", genre: "shi" },
    meaning: "春潮：春江潮水。生机涌动。",
    tags: ["自然", "事业"], frequency: "classic", verified: true
  },
  {
    id: "tian-lai", given: "天籁", length: 2, pinyin: "tian lai", tones: [1, 4],
    category: "wenyan", gender: "u",
    source: { text: "女闻人籁而未闻地籁，女闻地籁而未闻天籁夫", title: "《庄子·齐物论》", author: "庄子", dynasty: "战国", genre: "classic" },
    meaning: "天籁：天籁之音。至美至纯之声。",
    tags: ["风雅", "聪慧"], frequency: "legend", verified: true
  },
  {
    id: "ming-cha", given: "明察", length: 2, pinyin: "ming cha", tones: [2, 2],
    category: "wenyan", gender: "u",
    source: { text: "明足以察秋毫之末，而不见舆薪", title: "《孟子·梁惠王上》", author: "孟子", dynasty: "战国", genre: "classic" },
    meaning: "明察：明察秋毫。洞明事理。",
    tags: ["聪慧"], frequency: "classic", verified: true
  },

  // ==================== 批次 4：单字词条（玉器 / 天象 / 草木 / 雅德） ====================
  {
    id: "dan-zhao", given: "昭", length: 1, pinyin: "zhao", tones: [1],
    category: "chuci", gender: "u",
    source: { text: "芳与泽其杂糅兮，唯昭质其犹未亏", title: "《离骚》", author: "屈原", dynasty: "战国", genre: "fu" },
    meaning: "昭：光明。「以其昭昭，使人昭昭」，明达之象。",
    tags: ["清朗", "仁善"], frequency: "classic", verified: true
  },
  {
    id: "dan-heng", given: "珩", length: 1, pinyin: "heng", tones: [2],
    category: "wenyan", gender: "u",
    source: { text: "珩，佩上玉也", title: "《说文解字》", author: "许慎", dynasty: "东汉", genre: "classic" },
    meaning: "珩：玉佩之横玉。君子佩玉，珩璜之德。",
    tags: ["风雅"], frequency: "classic", verified: true
  },
  {
    id: "dan-zhang", given: "璋", length: 1, pinyin: "zhang", tones: [1],
    category: "shijing", gender: "m",
    source: { text: "乃生男子，载寝之床，载衣之裳，载弄之璋", title: "《诗经·小雅·斯干》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "璋：半圭之玉。「弄璋之喜」，贵子之兆。",
    tags: ["事业", "富贵"], frequency: "legend", verified: true
  },
  {
    id: "dan-wan", given: "琬", length: 1, pinyin: "wan", tones: [3],
    category: "chuci", gender: "f",
    source: { text: "怀琬琰之华英", title: "《楚辞·远游》", author: "屈原", dynasty: "战国", genre: "fu" },
    meaning: "琬：美玉。琬琰华英，温润美好。",
    tags: ["风雅"], frequency: "classic", verified: true
  },
  {
    id: "dan-yan", given: "琰", length: 1, pinyin: "yan", tones: [3],
    category: "chuci", gender: "u",
    source: { text: "怀琬琰之华英", title: "《楚辞·远游》", author: "屈原", dynasty: "战国", genre: "fu" },
    meaning: "琰：美玉之华光。",
    tags: ["风雅"], frequency: "classic", verified: true
  },
  {
    id: "dan-yao", given: "瑶", length: 1, pinyin: "yao", tones: [2],
    category: "shijing", gender: "f",
    source: { text: "投我以木桃，报之以琼瑶", title: "《诗经·卫风·木瓜》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "瑶：美玉。琼瑶报德，情比玉坚。",
    tags: ["风雅", "爱情"], frequency: "legend", verified: true
  },
  {
    id: "dan-lin2", given: "琳", length: 1, pinyin: "lin", tones: [2],
    category: "hanfu", gender: "f",
    source: { text: "玫瑰碧琳，珊瑚丛生", title: "司马相如《上林赋》", author: "司马相如", dynasty: "汉", genre: "fu" },
    meaning: "琳：美玉。碧琳之美，清贵自持。",
    tags: ["风雅", "富贵"], frequency: "classic", verified: true
  },
  {
    id: "dan-chen", given: "琛", length: 1, pinyin: "chen", tones: [1],
    category: "shijing", gender: "u",
    source: { text: "憬彼淮夷，来献其琛", title: "《诗经·鲁颂·泮水》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "琛：珍宝。献琛之宝，弥足珍贵。",
    tags: ["富贵"], frequency: "classic", verified: true
  },
  {
    id: "dan-yu2", given: "瑜", length: 1, pinyin: "yu", tones: [2],
    category: "chuci", gender: "f",
    source: { text: "怀瑾握瑜兮，穷不知所示", title: "屈原《九章·怀沙》", author: "屈原", dynasty: "战国", genre: "fu" },
    meaning: "瑜：美玉。瑜不掩瑕，瑕不掩瑜。",
    tags: ["仁善", "风雅"], frequency: "classic", verified: true
  },
  {
    id: "dan-jin", given: "瑾", length: 1, pinyin: "jin", tones: [3],
    category: "chuci", gender: "m",
    source: { text: "怀瑾握瑜兮，穷不知所示", title: "屈原《九章·怀沙》", author: "屈原", dynasty: "战国", genre: "fu" },
    meaning: "瑾：美玉。怀瑾之德，光华内敛。",
    tags: ["仁善", "风雅"], frequency: "classic", verified: true
  },
  {
    id: "dan-xuan", given: "璇", length: 1, pinyin: "xuan", tones: [2],
    category: "wenyan", gender: "f",
    source: { text: "在璇玑玉衡，以齐七政", title: "《尚书·舜典》", author: "佚名", dynasty: "周", genre: "classic" },
    meaning: "璇：美玉，亦指北斗。璇玑玉衡，星辰之精。",
    tags: ["聪慧", "风雅"], frequency: "classic", verified: true
  },
  {
    id: "dan-ji", given: "玑", length: 1, pinyin: "ji", tones: [1],
    category: "wenyan", gender: "u",
    source: { text: "在璇玑玉衡，以齐七政", title: "《尚书·舜典》", author: "佚名", dynasty: "周", genre: "classic" },
    meaning: "玑：不圆之珠。璇玑为北斗之象。",
    tags: ["聪慧"], frequency: "classic", verified: true
  },
  {
    id: "dan-bi", given: "璧", length: 1, pinyin: "bi", tones: [4],
    category: "wenyan", gender: "u",
    source: { text: "和氏璧，天下所共传宝也", title: "《史记·廉颇蔺相如列传》", author: "司马迁", dynasty: "汉", genre: "classic" },
    meaning: "璧：玉璧。「完璧归赵」，价值连城。",
    tags: ["富贵", "风雅"], frequency: "classic", verified: true
  },
  {
    id: "dan-chen2", given: "晨", length: 1, pinyin: "chen", tones: [2],
    category: "shijing", gender: "u",
    source: { text: "夜如何其？夜乡晨", title: "《诗经·小雅·庭燎》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "晨：清晨。一日之计在于晨。",
    tags: ["清朗", "事业"], frequency: "classic", verified: true
  },
  {
    id: "dan-xiao2", given: "晓", length: 1, pinyin: "xiao", tones: [3],
    category: "tangshi", gender: "u",
    source: { text: "春眠不觉晓，处处闻啼鸟", title: "孟浩然《春晓》", author: "孟浩然", dynasty: "唐", genre: "shi" },
    meaning: "晓：拂晓。亦「知晓」之聪慧。",
    tags: ["清朗", "聪慧"], frequency: "legend", verified: true
  },
  {
    id: "dan-hui", given: "晖", length: 1, pinyin: "hui", tones: [1],
    category: "tangshi", gender: "u",
    source: { text: "谁言寸草心，报得三春晖", title: "孟郊《游子吟》", author: "孟郊", dynasty: "唐", genre: "shi" },
    meaning: "晖：阳光。三春晖，母爱之暖。",
    tags: ["仁善", "福寿"], frequency: "classic", verified: true
  },
  {
    id: "dan-yao2", given: "曜", length: 1, pinyin: "yao", tones: [4],
    category: "hanfu", gender: "m",
    source: { text: "荣曜秋菊，华茂春松", title: "曹植《洛神赋》", author: "曹植", dynasty: "三国", genre: "fu" },
    meaning: "曜：日光。光曜天地。",
    tags: ["清朗", "事业"], frequency: "classic", verified: true
  },
  {
    id: "dan-qing", given: "晴", length: 1, pinyin: "qing", tones: [2],
    category: "tangshi", gender: "f",
    source: { text: "东边日出西边雨，道是无晴却有晴", title: "刘禹锡《竹枝词》", author: "刘禹锡", dynasty: "唐", genre: "shi" },
    meaning: "晴：晴天。晴谐「情」，道是无晴却有晴，双关之妙。",
    tags: ["爱情", "清朗"], frequency: "legend", verified: true
  },
  {
    id: "dan-lan2", given: "岚", length: 1, pinyin: "lan", tones: [2],
    category: "tangshi", gender: "u",
    source: { text: "瀑布杉松常带雨，夕阳彩翠忽成岚", title: "王维《送方尊师归嵩山》", author: "王维", dynasty: "唐", genre: "shi" },
    meaning: "岚：山间雾气。烟岚缥缈。",
    tags: ["自然", "风雅"], frequency: "classic", verified: true
  },
  {
    id: "dan-shuang", given: "霜", length: 1, pinyin: "shuang", tones: [1],
    category: "shijing", season: [3], gender: "u",
    source: { text: "蒹葭苍苍，白露为霜", title: "《诗经·秦风·蒹葭》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "霜：清霜。霜重色愈浓，高洁自持。",
    tags: ["清朗", "坚韧"], frequency: "classic", verified: true
  },
  {
    id: "dan-xia2", given: "霞", length: 1, pinyin: "xia", tones: [2],
    category: "hanfu", gender: "f",
    source: { text: "落霞与孤鹜齐飞，秋水共长天一色", title: "王勃《滕王阁序》", author: "王勃", dynasty: "唐", genre: "fu" },
    meaning: "霞：云霞。落霞满天，绚烂之姿。",
    tags: ["风雅", "自然"], frequency: "legend", verified: true
  },
  {
    id: "dan-hong", given: "虹", length: 1, pinyin: "hong", tones: [2],
    category: "tangshi", gender: "u",
    source: { text: "两水夹明镜，双桥落彩虹", title: "李白《秋登宣城谢朓北楼》", author: "李白", dynasty: "唐", genre: "shi" },
    meaning: "虹：彩虹。风雨之后，霓虹横空。",
    tags: ["清朗", "爱情"], frequency: "classic", verified: true
  },
  {
    id: "dan-ni", given: "霓", length: 1, pinyin: "ni", tones: [2],
    category: "tangshi", gender: "f",
    source: { text: "霓为衣兮风为马，云之君兮纷纷而来下", title: "李白《梦游天姥吟留别》", author: "李白", dynasty: "唐", genre: "shi" },
    meaning: "霓：虹霓。霓裳羽衣，仙气飘飘。",
    tags: ["风雅"], frequency: "classic", verified: true
  },
  {
    id: "dan-chen3", given: "辰", length: 1, pinyin: "chen", tones: [2],
    category: "wenyan", gender: "u",
    source: { text: "为政以德，譬如北辰，居其所而众星共之", title: "《论语·为政》", author: "孔子", dynasty: "春秋", genre: "classic" },
    meaning: "辰：星辰。北辰居中，众星拱之。",
    tags: ["聪慧", "清朗"], frequency: "classic", verified: true
  },
  {
    id: "dan-shan2", given: "珊", length: 1, pinyin: "shan", tones: [1],
    category: "hanfu", gender: "f",
    source: { text: "玫瑰碧琳，珊瑚丛生", title: "司马相如《上林赋》", author: "司马相如", dynasty: "汉", genre: "fu" },
    meaning: "珊：珊瑚。海底灵树，珍贵如玉。",
    tags: ["风雅", "富贵"], frequency: "classic", verified: true
  },
  {
    id: "dan-hu", given: "瑚", length: 1, pinyin: "hu", tones: [2],
    category: "hanfu", gender: "u",
    source: { text: "玫瑰碧琳，珊瑚丛生", title: "司马相如《上林赋》", author: "司马相如", dynasty: "汉", genre: "fu" },
    meaning: "瑚：珊瑚。瑚琏之器，庙堂之才。",
    tags: ["富贵", "事业"], frequency: "classic", verified: true
  },
  {
    id: "dan-yuan", given: "渊", length: 1, pinyin: "yuan", tones: [1],
    category: "shijing", gender: "u",
    source: { text: "鹤鸣于九皋，声闻于天。鱼在于渚，或潜在渊", title: "《诗经·小雅·鹤鸣》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "渊：深渊。渊渟岳峙，学问渊博。",
    tags: ["聪慧"], frequency: "classic", verified: true
  },
  {
    id: "dan-che", given: "澈", length: 1, pinyin: "che", tones: [4],
    category: "tangshi", gender: "u",
    source: { text: "日光下澈，影布石上", title: "柳宗元《小石潭记》", author: "柳宗元", dynasty: "唐", genre: "classic" },
    meaning: "澈：清澈见底。澄澈之心。",
    tags: ["清朗"], frequency: "classic", verified: true
  },
  {
    id: "dan-cheng", given: "澄", length: 1, pinyin: "cheng", tones: [2],
    category: "hanfu", gender: "u",
    source: { text: "余霞散成绮，澄江静如练", title: "谢朓《晚登三山还望京邑》", author: "谢朓", dynasty: "南朝", genre: "shi" },
    meaning: "澄：澄澈。澄江如练，心境澄明。",
    tags: ["清朗"], frequency: "classic", verified: true
  },
  {
    id: "dan-qing2", given: "清", length: 1, pinyin: "qing", tones: [1],
    category: "tangshi", gender: "u",
    source: { text: "明月松间照，清泉石上流", title: "王维《山居秋暝》", author: "王维", dynasty: "唐", genre: "shi" },
    meaning: "清：清澈。清者自清，濯濯如泉。",
    tags: ["清朗", "仁善"], frequency: "legend", verified: true
  },
  {
    id: "dan-bai", given: "柏", length: 1, pinyin: "bai", tones: [3],
    category: "wenyan", gender: "u",
    source: { text: "岁寒，然后知松柏之后凋也", title: "《论语·子罕》", author: "孔子", dynasty: "春秋", genre: "classic" },
    meaning: "柏：柏树。岁寒不凋，坚贞长青。",
    tags: ["坚韧", "福寿"], frequency: "classic", verified: true
  },
  {
    id: "dan-tong", given: "桐", length: 1, pinyin: "tong", tones: [2],
    category: "shijing", gender: "u",
    source: { text: "凤凰鸣矣，于彼高冈。梧桐生矣，于彼朝阳", title: "《诗经·大雅·卷阿》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "桐：梧桐，凤凰所栖。高洁之木。",
    tags: ["自然", "坚韧"], frequency: "classic", verified: true
  },
  {
    id: "dan-liu", given: "柳", length: 1, pinyin: "liu", tones: [3],
    category: "shijing", season: [1], gender: "f",
    source: { text: "昔我往矣，杨柳依依", title: "《诗经·小雅·采薇》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "柳：杨柳依依。柔美多情。",
    tags: ["自然", "风雅"], frequency: "classic", verified: true
  },
  {
    id: "dan-gui2", given: "桂", length: 1, pinyin: "gui", tones: [4],
    category: "tangshi", season: [3], gender: "u",
    source: { text: "人闲桂花落，夜静春山空", title: "王维《鸟鸣涧》", author: "王维", dynasty: "唐", genre: "shi" },
    meaning: "桂：桂花。「蟾宫折桂」，金榜题名。",
    tags: ["事业", "自然"], frequency: "classic", verified: true
  },
  {
    id: "dan-hui2", given: "蕙", length: 1, pinyin: "hui", tones: [4],
    category: "chuci", gender: "f",
    source: { text: "既替余以蕙纕兮，又申之以揽茝", title: "《离骚》", author: "屈原", dynasty: "战国", genre: "fu" },
    meaning: "蕙：蕙兰。蕙质兰心。",
    tags: ["风雅", "仁善"], frequency: "classic", verified: true
  },
  {
    id: "dan-lian", given: "莲", length: 1, pinyin: "lian", tones: [2],
    category: "wenyan", season: [2], gender: "f",
    source: { text: "予独爱莲之出淤泥而不染，濯清涟而不妖", title: "周敦颐《爱莲说》", author: "周敦颐", dynasty: "宋", genre: "classic" },
    meaning: "莲：莲花。出淤泥而不染。",
    tags: ["清朗", "风雅"], frequency: "legend", verified: true
  },
  {
    id: "dan-feng2", given: "枫", length: 1, pinyin: "feng", tones: [1],
    category: "tangshi", season: [3], gender: "u",
    source: { text: "停车坐爱枫林晚，霜叶红于二月花", title: "杜牧《山行》", author: "杜牧", dynasty: "唐", genre: "shi" },
    meaning: "枫：枫叶。经霜愈红。",
    tags: ["自然", "坚韧"], frequency: "classic", verified: true
  },
  {
    id: "dan-fan", given: "帆", length: 1, pinyin: "fan", tones: [1],
    category: "tangshi", gender: "m",
    source: { text: "长风破浪会有时，直挂云帆济沧海", title: "李白《行路难·其一》", author: "李白", dynasty: "唐", genre: "shi" },
    meaning: "帆：风帆。扬帆远航，一帆风顺。",
    tags: ["事业"], frequency: "legend", verified: true
  },
  {
    id: "dan-xi", given: "溪", length: 1, pinyin: "xi", tones: [1],
    category: "tangshi", gender: "u",
    source: { text: "清溪清我心，水色异诸水", title: "李白《清溪行》", author: "李白", dynasty: "唐", genre: "shi" },
    meaning: "溪：溪流。清溪潺潺。",
    tags: ["自然", "清朗"], frequency: "classic", verified: true
  },
  {
    id: "dan-jian", given: "涧", length: 1, pinyin: "jian", tones: [4],
    category: "tangshi", season: [1], gender: "u",
    source: { text: "人闲桂花落，夜静春山空", title: "王维《鸟鸣涧》", author: "王维", dynasty: "唐", genre: "shi" },
    meaning: "涧：山涧。清泉石上，鸟鸣山幽。",
    tags: ["自然", "清朗"], frequency: "classic", verified: true
  },
  {
    id: "dan-hu2", given: "湖", length: 1, pinyin: "hu", tones: [2],
    category: "songci", gender: "u",
    source: { text: "水光潋滟晴方好，山色空蒙雨亦奇", title: "苏轼《饮湖上初晴后雨》", author: "苏轼", dynasty: "宋", genre: "shi" },
    meaning: "湖：湖泊。湖光山色。",
    tags: ["自然", "风雅"], frequency: "classic", verified: true
  },
  {
    id: "dan-jiang", given: "江", length: 1, pinyin: "jiang", tones: [1],
    category: "songci", gender: "u",
    source: { text: "大江东去，浪淘尽，千古风流人物", title: "苏轼《念奴娇·赤壁怀古》", author: "苏轼", dynasty: "宋", genre: "ci" },
    meaning: "江：大江。江河行地，日月经天。",
    tags: ["事业", "自然"], frequency: "legend", verified: true
  },
  {
    id: "dan-bo2", given: "波", length: 1, pinyin: "bo", tones: [1],
    category: "hanfu", gender: "u",
    source: { text: "清风徐来，水波不兴", title: "苏轼《前赤壁赋》", author: "苏轼", dynasty: "宋", genre: "fu" },
    meaning: "波：水波。波澜不惊，从容有度。",
    tags: ["清朗", "平安"], frequency: "classic", verified: true
  },
  {
    id: "dan-lan3", given: "澜", length: 1, pinyin: "lan", tones: [2],
    category: "wenyan", gender: "u",
    source: { text: "观水有术，必观其澜", title: "《孟子·尽心上》", author: "孟子", dynasty: "战国", genre: "classic" },
    meaning: "澜：波澜。微澜惊鸿，气度不凡。",
    tags: ["聪慧", "事业"], frequency: "classic", verified: true
  },
  {
    id: "dan-feng3", given: "峰", length: 1, pinyin: "feng", tones: [1],
    category: "songci", gender: "m",
    source: { text: "横看成岭侧成峰，远近高低各不同", title: "苏轼《题西林壁》", author: "苏轼", dynasty: "宋", genre: "shi" },
    meaning: "峰：山峰。登峰造极，勇攀高峰。",
    tags: ["事业", "坚韧"], frequency: "classic", verified: true
  },
  {
    id: "dan-yue2", given: "岳", length: 1, pinyin: "yue", tones: [4],
    category: "shijing", gender: "m",
    source: { text: "崧高维岳，骏极于天", title: "《诗经·大雅·崧高》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "岳：高山。五岳之尊，稳重如山。",
    tags: ["坚韧", "事业"], frequency: "classic", verified: true
  },
  {
    id: "dan-yu4", given: "宇", length: 1, pinyin: "yu", tones: [3],
    category: "songci", gender: "u",
    source: { text: "我欲乘风归去，又恐琼楼玉宇", title: "苏轼《水调歌头》", author: "苏轼", dynasty: "宋", genre: "ci" },
    meaning: "宇：宇宙。器宇轩昂。",
    tags: ["清朗", "事业"], frequency: "classic", verified: true
  },
  {
    id: "dan-xuan2", given: "轩", length: 1, pinyin: "xuan", tones: [1],
    category: "tangshi", gender: "m",
    source: { text: "红颜弃轩冕，白首卧松云", title: "李白《赠孟浩然》", author: "李白", dynasty: "唐", genre: "shi" },
    meaning: "轩：高轩。气宇轩昂。",
    tags: ["事业", "风雅"], frequency: "classic", verified: true
  },
  {
    id: "dan-rui", given: "睿", length: 1, pinyin: "rui", tones: [4],
    category: "wenyan", gender: "u",
    source: { text: "思曰睿，睿作圣", title: "《尚书·洪范》", author: "佚名", dynasty: "周", genre: "classic" },
    meaning: "睿：睿智。思虑通达，明智深远。",
    tags: ["聪慧"], frequency: "classic", verified: true
  },
  {
    id: "dan-zhe", given: "哲", length: 1, pinyin: "zhe", tones: [2],
    category: "wenyan", gender: "u",
    source: { text: "知人则哲，能官人", title: "《尚书·皋陶谟》", author: "佚名", dynasty: "周", genre: "classic" },
    meaning: "哲：智慧。知人则哲。",
    tags: ["聪慧"], frequency: "classic", verified: true
  },
  {
    id: "dan-min", given: "敏", length: 1, pinyin: "min", tones: [3],
    category: "wenyan", gender: "u",
    source: { text: "敏而好学，不耻下问", title: "《论语·公冶长》", author: "孔子", dynasty: "春秋", genre: "classic" },
    meaning: "敏：聪敏。敏而好学。",
    tags: ["聪慧"], frequency: "classic", verified: true
  },
  {
    id: "dan-si", given: "思", length: 1, pinyin: "si", tones: [1],
    category: "wenyan", gender: "u",
    source: { text: "学而不思则罔，思而不学则殆", title: "《论语·为政》", author: "孔子", dynasty: "春秋", genre: "classic" },
    meaning: "思：思考。学思并重。",
    tags: ["聪慧"], frequency: "classic", verified: true
  },
  {
    id: "dan-xue2", given: "学", length: 1, pinyin: "xue", tones: [2],
    category: "wenyan", gender: "u",
    source: { text: "学而时习之，不亦说乎", title: "《论语·学而》", author: "孔子", dynasty: "春秋", genre: "classic" },
    meaning: "学：学问。学而不厌，诲人不倦。",
    tags: ["聪慧"], frequency: "classic", verified: true
  },
  {
    id: "dan-wen", given: "文", length: 1, pinyin: "wen", tones: [2],
    category: "wenyan", gender: "u",
    source: { text: "质胜文则野，文胜质则史。文质彬彬，然后君子", title: "《论语·雍也》", author: "孔子", dynasty: "春秋", genre: "classic" },
    meaning: "文：文采。文质彬彬。",
    tags: ["风雅", "聪慧"], frequency: "classic", verified: true
  },
  {
    id: "dan-zhang2", given: "章", length: 1, pinyin: "zhang", tones: [1],
    category: "wenyan", gender: "u",
    source: { text: "吾党之小子狂简，斐然成章", title: "《论语·公冶长》", author: "孔子", dynasty: "春秋", genre: "classic" },
    meaning: "章：文章。斐然成章，出口成章。",
    tags: ["风雅", "聪慧"], frequency: "classic", verified: true
  },
  {
    id: "dan-shu", given: "书", length: 1, pinyin: "shu", tones: [1],
    category: "tangshi", gender: "u",
    source: { text: "烽火连三月，家书抵万金", title: "杜甫《春望》", author: "杜甫", dynasty: "唐", genre: "shi" },
    meaning: "书：诗书。书香门第。",
    tags: ["风雅", "聪慧"], frequency: "classic", verified: true
  },
  {
    id: "dan-qin", given: "琴", length: 1, pinyin: "qin", tones: [2],
    category: "shijing", gender: "f",
    source: { text: "窈窕淑女，琴瑟友之", title: "《诗经·周南·关雎》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "琴：古琴。琴瑟和鸣，高山流水。",
    tags: ["风雅", "爱情"], frequency: "classic", verified: true
  },
  {
    id: "dan-hua2", given: "画", length: 1, pinyin: "hua", tones: [4],
    category: "songci", gender: "u",
    source: { text: "江山如画，一时多少豪杰", title: "苏轼《念奴娇·赤壁怀古》", author: "苏轼", dynasty: "宋", genre: "ci" },
    meaning: "画：画卷。江山如画，诗情画意。",
    tags: ["风雅"], frequency: "classic", verified: true
  },
  {
    id: "dan-ge", given: "歌", length: 1, pinyin: "ge", tones: [1],
    category: "shijing", gender: "u",
    source: { text: "心之忧矣，我歌且谣", title: "《诗经·魏风·园有桃》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "歌：歌唱。长歌一曲，快意人生。",
    tags: ["风雅"], frequency: "classic", verified: true
  },
  {
    id: "dan-le", given: "乐", length: 1, pinyin: "le", tones: [4],
    category: "wenyan", gender: "u",
    source: { text: "有朋自远方来，不亦乐乎", title: "《论语·学而》", author: "孔子", dynasty: "春秋", genre: "classic" },
    meaning: "乐：快乐。知足常乐。",
    tags: ["平安", "福寿"], frequency: "legend", verified: true
  },
  {
    id: "dan-he2", given: "和", length: 1, pinyin: "he", tones: [2],
    category: "wenyan", gender: "u",
    source: { text: "礼之用，和为贵", title: "《论语·学而》", author: "孔子", dynasty: "春秋", genre: "classic" },
    meaning: "和：和谐。家和万事兴。",
    tags: ["平安", "仁善"], frequency: "legend", verified: true
  },
  {
    id: "dan-kang", given: "康", length: 1, pinyin: "kang", tones: [1],
    category: "wenyan", gender: "u",
    source: { text: "五福：一曰寿，二曰富，三曰康宁", title: "《尚书·洪范》", author: "佚名", dynasty: "周", genre: "classic" },
    meaning: "康：安康。五福康宁。",
    tags: ["健康", "福寿"], frequency: "classic", verified: true
  },
  {
    id: "dan-tai", given: "泰", length: 1, pinyin: "tai", tones: [4],
    category: "wenyan", gender: "u",
    source: { text: "天地交而万物通也，上下交而其志同也", title: "《易经·泰卦》", author: "佚名", dynasty: "周", genre: "classic" },
    meaning: "泰：通泰。否极泰来，国泰民安。",
    tags: ["平安", "福寿"], frequency: "classic", verified: true
  },
  {
    id: "dan-ping", given: "平", length: 1, pinyin: "ping", tones: [2],
    category: "wenyan", gender: "u",
    source: { text: "无偏无党，王道荡荡；无党无偏，王道平平", title: "《尚书·洪范》", author: "佚名", dynasty: "周", genre: "classic" },
    meaning: "平：平安。平平安安，岁岁年年。",
    tags: ["平安"], frequency: "classic", verified: true
  },
  {
    id: "dan-qian", given: "谦", length: 1, pinyin: "qian", tones: [1],
    category: "wenyan", gender: "u",
    source: { text: "谦谦君子，卑以自牧也", title: "《易经·谦卦》", author: "佚名", dynasty: "周", genre: "classic" },
    meaning: "谦：谦逊。谦谦君子。",
    tags: ["仁善"], frequency: "classic", verified: true
  },
  {
    id: "dan-heng2", given: "恒", length: 1, pinyin: "heng", tones: [2],
    category: "shijing", gender: "u",
    source: { text: "如月之恒，如日之升", title: "《诗经·小雅·天保》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "恒：恒久。持之以恒，如月之恒。",
    tags: ["坚韧", "福寿"], frequency: "classic", verified: true
  },
  {
    id: "dan-yi", given: "毅", length: 1, pinyin: "yi", tones: [4],
    category: "wenyan", gender: "m",
    source: { text: "士不可以不弘毅，任重而道远", title: "《论语·泰伯》", author: "孔子", dynasty: "春秋", genre: "classic" },
    meaning: "毅：坚毅。士不可以不弘毅。",
    tags: ["坚韧", "事业"], frequency: "classic", verified: true
  },
  {
    id: "dan-hong2", given: "弘", length: 1, pinyin: "hong", tones: [2],
    category: "wenyan", gender: "m",
    source: { text: "士不可以不弘毅，任重而道远", title: "《论语·泰伯》", author: "孔子", dynasty: "春秋", genre: "classic" },
    meaning: "弘：宏大。弘毅之志。",
    tags: ["事业", "坚韧"], frequency: "classic", verified: true
  },
  {
    id: "dan-zheng", given: "正", length: 1, pinyin: "zheng", tones: [4],
    category: "chuci", gender: "u",
    source: { text: "名余曰正则兮，字余曰灵均", title: "《离骚》", author: "屈原", dynasty: "战国", genre: "fu" },
    meaning: "正：正直。正则之名，刚正不阿。",
    tags: ["仁善", "清朗"], frequency: "classic", verified: true
  },
  {
    id: "dan-cheng2", given: "诚", length: 1, pinyin: "cheng", tones: [2],
    category: "wenyan", gender: "u",
    source: { text: "诚者，天之道也；诚之者，人之道也", title: "《中庸》", author: "子思", dynasty: "战国", genre: "classic" },
    meaning: "诚：真诚。精诚所至，金石为开。",
    tags: ["仁善"], frequency: "classic", verified: true
  },
  {
    id: "dan-xin2", given: "信", length: 1, pinyin: "xin", tones: [4],
    category: "wenyan", gender: "u",
    source: { text: "人而无信，不知其可也", title: "《论语·为政》", author: "孔子", dynasty: "春秋", genre: "classic" },
    meaning: "信：诚信。言必信，行必果。",
    tags: ["仁善"], frequency: "classic", verified: true
  },
  {
    id: "dan-ren", given: "仁", length: 1, pinyin: "ren", tones: [2],
    category: "wenyan", gender: "u",
    source: { text: "仁者爱人，有礼者敬人", title: "《孟子·离娄下》", author: "孟子", dynasty: "战国", genre: "classic" },
    meaning: "仁：仁爱。仁者爱人，仁者无敌。",
    tags: ["仁善"], frequency: "classic", verified: true
  },
  {
    id: "dan-de", given: "德", length: 1, pinyin: "de", tones: [2],
    category: "wenyan", gender: "u",
    source: { text: "大学之道，在明明德", title: "《大学》", author: "曾子", dynasty: "春秋", genre: "classic" },
    meaning: "德：德行。厚德载物。",
    tags: ["仁善"], frequency: "classic", verified: true
  },
  {
    id: "dan-jing", given: "静", length: 1, pinyin: "jing", tones: [4],
    category: "shijing", gender: "f",
    source: { text: "静女其姝，俟我于城隅", title: "《诗经·邶风·静女》", author: "佚名", dynasty: "周", genre: "shi" },
    meaning: "静：娴静。静水流深。",
    tags: ["风雅", "平安"], frequency: "classic", verified: true
  },
  {
    id: "dan-ya", given: "雅", length: 1, pinyin: "ya", tones: [3],
    category: "shijing", gender: "u",
    source: { text: "雅者，正也，言王政之所由废兴也", title: "《毛诗序》", author: "佚名", dynasty: "汉", genre: "classic" },
    meaning: "雅：高雅。温文尔雅，大雅之才。",
    tags: ["风雅"], frequency: "classic", verified: true
  },
  {
    id: "dan-zhi3", given: "知", length: 1, pinyin: "zhi", tones: [1],
    category: "wenyan", gender: "u",
    source: { text: "知者不惑，仁者不忧，勇者不惧", title: "《论语·子罕》", author: "孔子", dynasty: "春秋", genre: "classic" },
    meaning: "知：智慧。知者不惑，知行合一。",
    tags: ["聪慧"], frequency: "classic", verified: true
  },
  {
    id: "dan-wang", given: "望", length: 1, pinyin: "wang", tones: [4],
    category: "tangshi", gender: "u",
    source: { text: "海上生明月，天涯共此时", title: "张九龄《望月怀远》", author: "张九龄", dynasty: "唐", genre: "shi" },
    meaning: "望：远望。前程在望，希望满怀。",
    tags: ["爱情", "事业"], frequency: "classic", verified: true
  }
];
