import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",


  //
  // todo x: https://vitepress.dev/zh/reference/site-config#srcdir
  //
  srcDir: 'src',


  //
  // i18n
  //
  locales: {
    root: {
      label: 'English',
      lang: 'en',
    },
    zh: {
      label: '简体中文',
      lang: 'zh',
      link: '/zh/'
    },
    fr: {
      label: 'French',
      lang: 'fr', // 可选，将作为 `lang` 属性添加到 `html` 标签中
      link: '/fr/' // 默认 /fr/ -- 显示在导航栏翻译菜单上，可以是外部的
    },
  },


  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {text: 'Home', link: '/'},
      {text: 'Examples', link: '/markdown-examples'}
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          {text: 'Markdown Examples', link: '/markdown-examples'},
          {text: 'Runtime API Examples', link: '/api-examples'}
        ]
      }
    ],


    //
    // 社交账号:
    //
    socialLinks: [
      {icon: 'github', link: 'https://github.com/better-try'},
      {icon: 'twitter', link: 'https://twitter.com/trybetterapp'}
    ]
  }
})
