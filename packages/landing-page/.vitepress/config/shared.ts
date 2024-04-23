import { defineConfig } from 'vitepress'
import { search as zhSearch } from './zh'
import { search as ptSearch } from './pt'
import { search as ruSearch } from './ru'

export const shared = defineConfig({
  title: "TryBetterApp",
  description: "try better app",

  //
  // todo x: github pages 部署方式, 设置为 repo name
  //  - 坑: 必须以 / 开头 + 结尾
  //
  base: '/vitepress-template/',

  //
  // todo x: 入口
  //
  srcDir: 'src',


  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  markdown: {
    math: true,
    codeTransformers: [
      // We use `[!!code` in demo to prevent transformation, here we revert it back.
      {
        postprocess(code) {
          return code.replace(/\[\!\!code/g, '[!code')
        }
      }
    ]
  },

  sitemap: {
    hostname: 'https://trybetter.app',
    transformItems(items) {
      return items.filter((item) => !item.url.includes('migration'))
    }
  },

  /* prettier-ignore */
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/vitepress-logo-mini.svg' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/vitepress-logo-mini.png' }],
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en' }],
    ['meta', { property: 'og:title', content: 'VitePress | Vite & Vue Powered Static Site Generator' }],
    ['meta', { property: 'og:site_name', content: 'VitePress' }],
    ['meta', { property: 'og:image', content: 'https://vitepress.dev/vitepress-og.jpg' }],
    ['meta', { property: 'og:url', content: 'https://vitepress.dev/' }],
    ['script', { src: 'https://cdn.usefathom.com/script.js', 'data-site': 'AZBRSFGG', 'data-spa': 'auto', defer: '' }]
  ],

  themeConfig: {

    //
    // todo x: logo
    //
    // logo: { src: '/vitepress-logo-mini.svg', width: 24, height: 24 },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/better-try' },
      { icon: 'twitter', link: 'https://twitter.com/trybetterapp' },
      { icon: 'discord', link: 'https://github.com/better-try' },
      { icon: 'youtube', link: 'https://youtube.com/@trybetterapp' },
    ],


    //
    // todo x: 搜索模块
    //
    // search: {
    //   provider: 'algolia',
    //   options: {
    //     appId: '8J64VVRP8K',
    //     apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
    //     indexName: 'vitepress',
    //     locales: { ...zhSearch, ...ptSearch, ...ruSearch }
    //   }
    // },


    //
    // todo x: carbon ads
    //
    // carbonAds: { code: 'CEBDT27Y', placement: 'vuejsorg' }
  }
})
