const fs = require('fs');
const path = require('path');

const root = process.cwd();
const csvPath = path.join(root, 'docs', 'page-theme-image-full-inventory.csv');
const mdPath = path.join(root, 'docs', 'page-theme-image-full-inventory.md');

function parseCsvLine(line) {
  return line.split(',');
}

function toBaseLabel(imagePath) {
  const base = path.basename(imagePath).replace(/\.[^.]+$/, '');
  const cleaned = base.replace(/\.[0-9a-f]{6,}$/i, '').replace(/[-_]+/g, ' ').trim();
  return cleaned || imagePath;
}

function fallbackTitle(row) {
  const { page, image_type: imageType, image_path: imagePath } = row;

  if (imageType === 'background-css') {
    if (imagePath.includes('solution_banner')) return '解决方案页首屏背景图';
    if (page === 'officesuite-business.html' || page === 'officesuite-enterprise.html') {
      return '办公套件页首屏背景图';
    }
    return '背景图';
  }

  if (imageType === 'background-inline') {
    if (imagePath.includes('partner/hero-bg')) return '渠道合作首屏背景图';
    return '内联背景图';
  }

  const logoMatch = imagePath.match(/customerlogo\/image(\d+)\.png$/);
  if (logoMatch) return `客户 Logo ${logoMatch[1]}`;

  const exactMap = {
    'assets/images/doc.d12d293d.png': '文档产品主图',
    'assets/images/docx_icon.2b3372a8.png': '产品功能图标 docx_icon',
    'assets/images/form_icon.684f8f7b.png': '产品功能图标 form_icon',
    'assets/images/presentation.fbeeebed.png': '幻灯片产品主图',
    'assets/images/sheet.c78ad43b.png': '表格产品主图',
    'assets/images/table_new_icon.daefbbf7.png': '产品功能图标 table_new_icon',
  };

  if (exactMap[imagePath]) return exactMap[imagePath];

  return `图片资源：${toBaseLabel(imagePath)}`;
}

function sanitizeTitle(row) {
  const title = (row.image_title || '').trim();
  if (!title || /^\?+$/.test(title)) {
    return { title: fallbackTitle(row), status: '推断' };
  }
  return { title, status: '正常' };
}

function buildNote(page) {
  const notes = {
    'about.html': '无特殊备注',
    'ai.html': '页面主体仍以文案和 SVG 占位为主，当前仅统计页脚二维码',
    'behavior.html': '无特殊备注',
    'collaboration.html': '无特殊备注',
    'document.html': '无特殊备注',
    'form.html': '同一张主图在多个模块复用',
    'format-support.html': '无特殊备注',
    'index.html': '包含 11 张重复使用图片；页面内容与 welcome.html 一致',
    'knowledge-base.html': '无特殊备注',
    'knowledge.html': '页面主体仍以占位界面图为主，当前仅统计页脚二维码',
    'management-panel.html': '无特殊备注',
    'officesuite-business.html': '包含 1 张首屏背景图；知识沉淀模块仍有占位界面图',
    'officesuite-enterprise.html': '包含 1 张首屏背景图；知识沉淀和 AI 模块仍有占位界面图',
    'partner.html': '主视觉使用内联背景图',
    'portal.html': '无特殊备注',
    'privacy.html': '无特殊备注',
    'security-hub.html': '无特殊备注',
    'service.html': '无特殊备注',
    'sheet.html': '无特殊备注',
    'slide.html': '同一张主图在多个模块复用',
    'solution-ecommerce.html': '无特殊备注',
    'solution-education.html': '无特殊备注',
    'solution-finance.html': '无特殊备注',
    'solution-hr.html': '无特殊备注',
    'solution-management.html': '无特殊备注',
    'solution-manufacturing.html': '无特殊备注',
    'solution-marketing.html': '无特殊备注',
    'solution-product-rd.html': '无特殊备注',
    'solution-retail.html': '页面内容与 solution.html 一致，当前为零售方案正式页',
    'solution-sales.html': '无特殊备注',
    'solution.html': '页面内容与 solution-retail.html 一致，当前为零售方案别名页',
    'solutions.html': '无特殊备注',
    'space.html': '无特殊备注',
    'table.html': '同一张主图在多个模块复用',
    'webofficesdk-integration.html': '无特殊备注',
    'welcome.html': '包含 11 张重复使用图片；页面内容与 index.html 一致',
    'writer.html': '无特殊备注',
  };

  return notes[page] || '无特殊备注';
}

function cleanCell(text) {
  return String(text).replace(/\r?\n/g, ' ').trim();
}

const rawCsv = fs.readFileSync(csvPath, 'utf8').replace(/^\uFEFF/, '');
const lines = rawCsv.split(/\r?\n/).filter(Boolean);
const header = parseCsvLine(lines[0]);
const rows = lines.slice(1).map((line) => {
  const values = parseCsvLine(line);
  const row = Object.fromEntries(header.map((key, index) => [key, values[index] ?? '']));
  const { title, status } = sanitizeTitle(row);
  return {
    ...row,
    note: buildNote(row.page),
    image_title: title,
    status,
    usage_count: String(Number(row.usage_count || 0)),
  };
});

const orderedPages = [];
for (const row of rows) {
  if (!orderedPages.includes(row.page)) orderedPages.push(row.page);
}

const summary = orderedPages.map((page) => {
  const pageRows = rows.filter((row) => row.page === page);
  const first = pageRows[0];
  return {
    page,
    htmlTitle: first.html_title,
    theme: first.theme,
    note: first.note,
    imageCount: pageRows.length,
    usageCount: pageRows.reduce((sum, row) => sum + Number(row.usage_count || 0), 0),
    rows: pageRows,
  };
});

const newCsvLines = [
  header.join(','),
  ...rows.map((row) => [
    row.page,
    row.html_title,
    row.theme,
    row.note,
    row.image_type,
    row.image_path,
    row.image_title,
    row.status,
    row.usage_count,
  ].map(cleanCell).join(',')),
];

const md = [
  '# 页面主题图片全量清单',
  '',
  '更新时间：2026-03-23  ',
  `统计范围：\`dist/*.html\` 顶层构建输出页，共 \`${summary.length}\` 个页面  `,
  '整理原则：按页面梳理所有主题图片，包含 HTML `<img>` 与通过 `background-image` 引用的首屏/模块视觉；若源页面缺少 `alt` 或 `title`，则按文件名和上下文补充推断标题，并在“状态”列标记为 `推断`。',
  '',
  '## 总览',
  '',
  '| 页面 | HTML Title | 页面主题（H1） | 图片数量 | 引用次数 | 备注 |',
  '| --- | --- | --- | ---: | ---: | --- |',
  ...summary.map((item) => `| \`${item.page}\` | ${item.htmlTitle} | ${item.theme} | ${item.imageCount} | ${item.usageCount} | ${item.note} |`),
  '',
];

for (const item of summary) {
  md.push(`## \`${item.page}\``);
  md.push('');
  md.push(`- HTML Title：${item.htmlTitle}`);
  md.push(`- 页面主题：${item.theme}`);
  md.push(`- 备注：${item.note}`);
  md.push(`- 主题图片数：${item.imageCount}`);
  md.push(`- 总引用次数：${item.usageCount}`);
  md.push('');
  md.push('| 类型 | 路径 | 标题 | 状态 | 次数 |');
  md.push('| --- | --- | --- | --- | ---: |');
  for (const row of item.rows) {
    md.push(`| ${row.image_type} | \`${row.image_path}\` | ${row.image_title} | ${row.status} | ${row.usage_count} |`);
  }
  md.push('');
}

fs.writeFileSync(csvPath, `\uFEFF${newCsvLines.join('\n')}\n`, 'utf8');
fs.writeFileSync(mdPath, `${md.join('\n')}\n`, 'utf8');

console.log(`Regenerated ${path.relative(root, csvPath)} and ${path.relative(root, mdPath)}`);
