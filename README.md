# How To Live Better — 站点产物快照

《高性价比人生指南》衍生工具的**静态站点产物**（构建输出快照），对应线上站点 [how2livebetter.net](https://how2livebetter.net)。

> 本仓库只包含构建产物（`dist/`），由上游私有源码仓自动同步，**请勿直接修改 `dist/` 内的文件**。

## 本地运行

无需安装任何依赖，只需 Node.js ≥ 18：

```bash
npm start          # 即 node server.mjs
# 或自定义端口
PORT=8080 npm start
```

然后访问 <http://localhost:4321/>。

也可以用任何静态服务器指向 `dist/`，例如：

```bash
npx serve dist
python3 -m http.server 8000 --directory dist
```

## 目录结构

```
├── dist/        # 站点构建产物 (纯静态 HTML/CSS/JS)
├── server.mjs   # 零依赖本地预览服务器 (支持目录重定向 / 自定义 404)
└── package.json # npm start 入口
```

## 同步机制

本仓库由上游源码仓的同步脚本维护：每次同步会用最新构建产物替换 `dist/` 并记录对应的源码版本号（见 commit 信息中的 `livebetter@<hash>`）。搜索引擎验证文件、`ads.txt` 等运营文件不在同步范围内。

## License

站点内容（文章、题库、数据）版权归原项目所有；代码部分按仓库 LICENSE 处理。