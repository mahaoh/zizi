# 子子制燥门户网站

基于 VitePress 的摇滚乐迷组织门户网站，包含首屏大图、现场时间线和移动端适配。

## 本地开发

```bash
npm install
npm run docs:dev
```

## 构建

```bash
npm run docs:build
```

## GitHub Pages 部署

1. 推送到 GitHub 仓库的 `main` 分支。
2. 在仓库 `Settings -> Pages` 中选择 `GitHub Actions`。
3. workflow 会自动构建并发布 `.vitepress/dist`。

如使用自定义域名或用户站点，可在 `.github/workflows/deploy.yml` 中调整 `BASE_PATH`。

## 替换照片

首屏轮播图位于 `public/assets/hero-rock-festival.png` 和 `public/assets/zizi-poster-stage.png`。时间线数据在 `.vitepress/theme/HomePage.vue` 的 `moments` 数组中，替换 `image` 字段即可使用真实音乐节合照。
