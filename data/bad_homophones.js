// 谐音黑名单三层：
// fullNames 字面精确匹配（姓氏+名字组合，全为不雅谐音「坑娃名」）
// pinyinPatterns 拼音全串匹配（全名拼音连写 或 名部分拼音连写，小写无空格）
// bannedChars 危险字筛查（名中任一字符命中即剔除）
window.NAMES_DB = window.NAMES_DB || {};
window.NAMES_DB.badHomo = {
  fullNames: [
    // 吴 → 无
    "吴礼", "吴用", "吴仁幸", "吴能", "吴德", "吴寿",
    // 肚脐眼 / 肚子疼
    "杜子腾", "杜琦燕",
    // 屎 系列
    "史珍香", "史泰香", "史一彪", "史大佗", "史可朗", "史可廊",
    // 饭桶 / 犯贱 / 烦人
    "范统", "范建", "范仁",
    // 阳痿
    "杨伟", "杨委",
    // 禽兽
    "秦寿生", "秦寿",
    // 猪
    "朱逸群", "朱会飞", "朱奋强",
    // 狐狸精
    "胡丽晶", "胡礼京",
    // 下贱
    "夏建", "夏剑",
    // 避孕套
    "毕云涛", "毕云陶",
    // 来月经
    "赖月京", "赖月晶",
    // 神经病
    "沈京冰", "沈金兵", "沈劲兵",
    // 王八
    "王巴", "王霸", "王保合",
    // 马桶
    "马统", "马彤",
    // 送终
    "宋忠", "宋终",
    // 菜刀 / 菜花
    "蔡刀", "蔡华",
    // 流产
    "刘产",
    // 狗 系列
    "苟史", "苟冬曦", "苟盛",
    // 阴 系列
    "殷道", "殷纯", "尹道雪",
    // 假如男 / 假真
    "贾若男", "贾真",
    // 真贱人
    "甄健仁", "甄建人",
    // 真讨厌 / 真有钱
    "曾桃燕", "曾友乾",
    // 桃花运
    "陶华韵",
    // 卫生巾
    "魏生津", "魏笙津",
    // 费事 / 费劲
    "费事", "费建",
    // 熊出没
    "熊初墨", "熊初陌",
    // 好贱
    "郝建", "郝剑",
    // 赔光 / 赔精光
    "裴光", "裴劲光",
    // 没良心
    "梅良心",
    // 武大郎
    "武大朗",
    // 潘金莲
    "潘金连"
  ],
  pinyinPatterns: [
    // 无 系列
    "wuli", "wuyong", "wurenxing", "wuneng", "wude", "wushou",
    // 肚子 系列
    "duziteng", "duqiyan",
    // 屎 系列
    "shizhenxiang", "shitaixiang", "shiyibiao", "shidatuo", "shikelang",
    // 饭/犯/烦 系列
    "fantong", "fanjian", "fanren",
    // 阳痿
    "yangwei",
    // 禽兽
    "qinshousheng", "qinshou",
    // 猪 系列
    "zhuyiqun", "zhuhuifei", "zhufenqiang", "zhuweiba",
    // 狐狸精
    "hulijing",
    // 下贱
    "xiajian", "jianhuo", "saohuo",
    // 避孕套
    "biyuntao",
    // 来月经
    "laiyuejing",
    // 神经病
    "shenjingbing", "shenjing",
    // 王八
    "wangba",
    // 马桶
    "matong",
    // 送终
    "songzhong",
    // 菜刀 / 菜花
    "caidao", "caihua",
    // 流产
    "liuchan",
    // 狗 系列
    "goushi", "goudongxi", "gousheng",
    // 阴 系列
    "yindao", "yinchun", "yindaoxue",
    // 假/真 系列
    "jiaruonan", "jiazhen", "zhenjianren",
    // 真讨厌 / 真有钱
    "zengtaoyan", "zengyouqian",
    // 桃花运
    "taohuayun",
    // 卫生巾
    "weishengjin",
    // 费事 / 费劲
    "feishi", "feijian",
    // 好贱 / 没良心
    "haojian", "meiliangxin",
    // 赔光
    "peiguang",
    // 通用侮辱词（名部分命中即剔除，不限姓氏）
    "jianren", "baichi", "chunzhu", "shazi", "shabi", "sabi",
    "huli", "yaojing", "xiaosan", "ernai", "qingren",
    "mogui", "yaoguai", "hundan", "hutu"
  ],
  bannedChars: [
    "死", "屎", "尿", "贱", "坟", "娼", "妓", "奸", "毒", "痔", "粪", "矬", "傻",
    "浑", "魑", "魅", "魍", "魉", "癌", "疴", "瘟", "尸", "鬼", "棺", "丧", "祸",
    "灾", "邪", "魔", "妖", "淫", "嫖", "赌", "赃", "瘸", "聋", "瞎", "哑", "腐"
  ]
};
