# How To Live Better — 开源镜像与衍生站点

## 原始项目

本仓库的源头是 [eternity4719/HowToLiveBetter](https://github.com/eternity4719/HowToLiveBetter)（《高性价比人生指南》，内容遵循 CC BY 4.0）：

- 34 个章节 / 630 条「高性价比行动建议」，每条包含 6 个字段：成本、说人话、收益、证据等级（A/B/C 三级）、文献来源、备注
- 收录 1340 条文献链接、333 处条目互引，27 条诚实标注 TODO(待核实)
- 标签体系：按 钱 / 时间 / 毅力 / 收益 四个维度标注每条建议的实施门槛

原始项目以 Markdown 形式维护，是一个「读」的项目。本仓库则把它做成了一个「用」的产品。

## 本项目的功能扩展

在原始数据之上，我们构建了完整的数据管道与一个静态站点（线上版本：[how2livebetter.net](https://how2livebetter.net)）：

**结构化数据管道**

- 解析器将上游 Markdown 解析为结构化数据（`items.json`），每条建议获得**位置无关的稳定 key**，上游增删条目不会导致引用漂移
- 为全部 630 条建议生成**搜索意图 slug**（`/q/<slug>/` 页面），覆盖真实搜索场景

**静态站点（Astro 构建，688 页全静态）**

- 📖 **章节浏览** — 34 章按原书结构呈现，纸感出版风设计
- 🩺 **处境体检**（`/tools/assess/`）— 问卷 + 匹配引擎 + 打分公式，根据你的处境（预算/时间/毅力）推荐最值得先做的建议
- 🎯 **阶段策展**（`/stages/`）— 按人生阶段（如高中、大学、职场）精选与排序
- ⏰ **场景清单**（`/moments/`）— 8 个关键时刻（如月末、搬家、换季）的行动顺序清单
- 📝 **打卡与复习** — 本地存储的每日打卡（连续天数）与间隔重复（SRS）复习、条目标记收藏
- 🔍 **SEO 基建** — sitemap、JSON-LD 结构化数据、OG 图、`llms.txt`（对 AI 搜索引擎友好）

**衍生产品**

- 📱 微信小程序（数据包由同一管道生成）
- 🧩 浏览器插件（离线速查同一份结构化数据）

> 仓库内 `dist/` 为站点构建产物的自动同步快照，**请勿直接修改**；上游更新后由私有源码仓的同步脚本重新生成（commit 信息中的 `livebetter@<hash>` 标注了对应的源码版本）。

## 本地运行

无需安装任何依赖，只需 Node.js ≥ 18：

```bash
git clone https://github.com/marsbuildlog/how-2-live-better.git
cd how-2-live-better
npm start          # 即 node server.mjs
```

然后访问 <http://localhost:4780/>。自定义端口：

```bash
PORT=8080 npm start
```

也可以用任何静态服务器指向 `dist/`，例如：

```bash
npx serve dist
python3 -m http.server 8000 --directory dist
```

## 目录结构

```
├── dist/        # 站点构建产物 (纯静态 HTML/CSS/JS)
├── server.mjs   # 零依赖本地预览服务器 (目录重定向 / 自定义 404 / 穿越防护)
└── package.json # npm start 入口
```

## License

- **代码部分**（`server.mjs`、`package.json` 等脚手架）：[MIT License](./LICENSE)
- **站点内容**（`dist/` 内的文章、题库、数据）：源自 [eternity4719/HowToLiveBetter](https://github.com/eternity4719/HowToLiveBetter)，遵循 **CC BY 4.0**，使用时请署名原作者并注明非官方衍生作品