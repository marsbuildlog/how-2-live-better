#!/usr/bin/env node
/**
 * 零依赖静态服务器 — 本地预览 dist/ 构建产物
 * 用法: node server.mjs  (或 npm start, 端口可用 PORT 环境变量覆盖)
 */
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(ROOT, 'dist');
const PORT = Number(process.env.PORT) || 4321;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.pdf': 'application/pdf',
  '.zip': 'application/zip',
  '.crx': 'application/x-chrome-extension',
  '.wasm': 'application/wasm',
};

if (!fs.existsSync(path.join(DIST, 'index.html'))) {
  console.error('✗ 未找到 dist/index.html — 请先拉取完整仓库, dist/ 不应为空');
  process.exit(1);
}

function send(res, code, body, headers = {}) {
  res.writeHead(code, headers);
  res.end(body);
}

function sendFile(res, filePath, code = 200) {
  const ext = path.extname(filePath).toLowerCase();
  const stream = fs.createReadStream(filePath);
  stream.on('open', () => {
    res.writeHead(code, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
    stream.pipe(res);
  });
  stream.on('error', () => send(res, 500, 'Internal Server Error'));
}

const server = http.createServer((req, res) => {
  let pathname;
  try {
    pathname = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  } catch {
    return send(res, 400, 'Bad Request');
  }
  // 防目录穿越
  const safePath = path.normalize(pathname).replace(/^(\.\.[/\\])+/, '');
  const filePath = path.join(DIST, safePath);
  if (!filePath.startsWith(DIST)) return send(res, 403, 'Forbidden');

  // 与线上 nginx 目录重定向保持一致: /about → 301 /about/
  if (!safePath.endsWith('/') && fs.existsSync(path.join(DIST, safePath, 'index.html'))) {
    res.writeHead(301, { Location: encodeURI(safePath + '/') });
    return res.end();
  }

  const target = fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()
    ? path.join(filePath, 'index.html')
    : filePath;

  if (fs.existsSync(target) && fs.statSync(target).isFile()) {
    return sendFile(res, target);
  }
  // 自定义 404 页
  const notFound = path.join(DIST, '404.html');
  if (fs.existsSync(notFound)) return sendFile(res, notFound, 404);
  send(res, 404, '404 Not Found');
});

server.listen(PORT, () => {
  console.log(`▸ 预览已启动: http://localhost:${PORT}/  (Ctrl+C 停止)`);
});