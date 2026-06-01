import { defineConfig } from 'vitepress'

const base = process.env.BASE_PATH || '/zizi/'

export default defineConfig({
  title: '子子制燥',
  description: '摇滚乐迷组织门户网站',
  base,
  lang: 'zh-CN',
  cleanUrls: true,
  appearance: false,
  head: [
    ['meta', { name: 'theme-color', content: '#111111' }],
    ['meta', { property: 'og:title', content: '子子制燥' }],
    ['meta', { property: 'og:description', content: '在现场相遇，用噪音记录青春。' }],
    ['meta', { property: 'og:image', content: `${base}assets/hero-rock-festival.png` }]
  ],
  themeConfig: {
    logo: false,
    nav: [
      { text: '现场瞬间', link: '/#timeline' },
      { text: '加入我们', link: '/#join' }
    ],
    socialLinks: []
  }
})
