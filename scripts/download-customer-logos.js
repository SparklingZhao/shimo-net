/**
 * 将客户 logo 从 Clearbit Logo API 下载到 assets/images/customerlogo
 * 文件名：域名主部分.png，如 baidu.png、jd.png
 */
const https = require('https');
const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, '..', 'assets', 'images', 'customerlogo');

// 客户名称 -> 官网域名（用于 Clearbit: https://logo.clearbit.com/{domain}）
const CUSTOMERS = [
  ['中共中央党校', 'ccps.gov.cn'],
  ['中国地震局', 'cea.gov.cn'],
  ['中国海关', 'customs.gov.cn'],
  ['招商局集团', 'cmhk.com'],
  ['中国交建', 'cccc.com'],
  ['上海证券交易所', 'sse.com.cn'],
  ['中国船舶集团有限公司', 'csic.com.cn'],
  ['中国保利集团有限公司', 'poly.com.cn'],
  ['中国南方电网', 'csg.cn'],
  ['中建八局', 'sec8b.com'],
  ['中广核', 'cgn.cn'],
  ['招商银行', 'cmbchina.com'],
  ['中国农业银行', 'abchina.com'],
  ['微众银行', 'webank.com'],
  ['信达澳亚基金', 'fscinda.com'],
  ['华润银行', 'crbank.com.cn'],
  ['OPPO', 'oppo.com'],
  ['格力', 'gree.com'],
  ['TCL', 'tcl.com'],
  ['哈工大卫星', 'hit.edu.cn'],
  ['小天才', 'imoo.com'],
  ['沃尔沃', 'volvocars.com'],
  ['东风商用车', 'dfcv.com.cn'],
  ['广汽研究院', 'gacrnd.com.cn'],
  ['云鲸', 'narwal.com'],
  ['新华三', 'h3c.com'],
  ['科大讯飞', 'iflytek.com'],
  ['中国电信广东研究院', 'chinatelecom.com.cn'],
  ['天翼数字生活', '189.cn'],
  ['好未来', '100tal.com'],
  ['猿辅导', 'yuanfudao.com'],
  ['作业帮', 'zuoyebang.com'],
  ['新东方', 'xdf.cn'],
  ['京东', 'jd.com'],
  ['唯品会', 'vip.com'],
  ['跨越速运', 'kyexpress.cn'],
  ['小红书', 'xiaohongshu.com'],
  ['百度', 'baidu.com'],
  ['哔哩哔哩', 'bilibili.com'],
  ['大众点评', 'dianping.com'],
  ['美团', 'meituan.com'],
  ['喜马拉雅', 'ximalaya.com'],
  ['爱奇艺', 'iqiyi.com'],
  ['携程', 'ctrip.com'],
  ['滴滴', 'didiglobal.com'],
];

function download(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, { timeout: 10000 }, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`HTTP ${res.statusCode}`));
        return;
      }
      const chunks = [];
      res.on('data', (c) => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks)));
    });
    req.on('error', reject);
    req.on('timeout', () => {
      req.destroy();
      reject(new Error('timeout'));
    });
  });
}

function slug(domain) {
  return domain.replace(/\./g, '-');
}

async function main() {
  if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR, { recursive: true });
  }

  const results = { ok: [], fail: [] };
  for (const [name, domain] of CUSTOMERS) {
    const file = path.join(OUT_DIR, `${slug(domain)}.png`);
    if (fs.existsSync(file)) {
      console.log(`[跳过] ${name} (${domain}) 已存在`);
      results.ok.push(name);
      continue;
    }
    const url = `https://logo.clearbit.com/${domain}?size=128`;
    try {
      const buf = await download(url);
      fs.writeFileSync(file, buf);
      console.log(`[OK] ${name} -> ${slug(domain)}.png`);
      results.ok.push(name);
    } catch (e) {
      console.log(`[失败] ${name} (${domain}): ${e.message}`);
      results.fail.push({ name, domain });
    }
    await new Promise((r) => setTimeout(r, 300));
  }

  console.log('\n--- 完成 ---');
  console.log(`成功: ${results.ok.length}, 失败: ${results.fail.length}`);
  if (results.fail.length) {
    console.log('失败列表:', results.fail.map((f) => `${f.name} (${f.domain})`).join(', '));
  }
}

main().catch(console.error);
