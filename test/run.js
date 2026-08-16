#!/usr/bin/env node
/**
 * Node 测试运行器：node test/run.js
 * 在 Node 中模拟 window 全局加载全部数据与算法模块，运行 fixtures 断言。
 * 与 test/test.html（浏览器自测页）共用同一套 fixtures.js。
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

global.window = global; // 模块挂在 window.NamesApp / window.NAMES_DB，落于 global

const ROOT = path.join(__dirname, "..");
function load(rel) {
  const file = path.join(ROOT, rel);
  vm.runInThisContext(fs.readFileSync(file, "utf8"), { filename: rel });
}

// 与 index.html 相同的加载顺序
load("data/config.js");
load("data/surnames.js");
load("data/bad_homophones.js");
load("data/chars.js");
load("data/names.js");
load("data/pairs.js");
load("js/phonetics.js");
load("js/calligraphy.js");
load("js/meaning.js");
load("js/scoring.js");
load("js/candidate.js");
load("js/pairs.js");
load("test/fixtures.js");

const cases = window.NamesApp.TestFixtures.cases;
let pass = 0, fail = 0;
console.log("「名典」规则断言\n" + "=".repeat(50));
for (const c of cases) {
  try {
    c.fn();
    pass++;
    console.log(`  ✓ ${c.name}`);
  } catch (e) {
    fail++;
    console.log(`  ✗ ${c.name}\n    ${e.message}`);
  }
}
console.log("=".repeat(50));
console.log(`${pass} 通过 / ${fail} 失败 / 共 ${cases.length}`);
process.exit(fail ? 1 : 0);
