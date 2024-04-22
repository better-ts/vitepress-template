import {createRequire} from 'module'
import {defineConfig, type DefaultTheme} from 'vitepress'

const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')

export const en = defineConfig({
  lang: 'en-US',
  description: 'Vite & Vue powered static site generator.',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/guide/': {base: '/guide/', items: sidebarGuide()},
      '/reference/': {base: '/reference/', items: sidebarReference()}
    },

    editLink: {
      pattern: 'https://github.com/better-ts/vitepress-tempate/edit/main/packages/:path',
      text: 'Edit this page on GitHub'
    },
    footer: {
      // message: '基于 MIT 许可发布',
      copyright: `Copyright © 2023-${new Date().getFullYear()} TryBetterApp.`
    },
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: "Products",
      link: "/products/index",
      activeMatch: '/products/'
    },
    {
      text: 'Guide',
      link: '/guide/index',
    },
    // {
    //   text: 'Reference',
    //   link: '/reference/site-config',
    //   activeMatch: '/reference/'
    // },


    //
    // todo x: 版本历史
    //

    // {
    //   text: pkg.version,
    //   items: [
    //     {
    //       text: 'Changelog',
    //       link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md'
    //     },
    //     {
    //       text: 'Contributing',
    //       link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md'
    //     }
    //   ]
    // }
  ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'GeekClock',
      collapsed: false,
      items: [
        {text: 'What is GeekClock?', base: '/guide/', link: 'product1/api-examples'},

      ]
    },
    {
      text: 'VisaPal',
      collapsed: false,
      items: [
        {text: 'What is VisaPal?', base: '/guide/', link: 'product2/markdown-examples'},

      ]
    },

  ]
}

function sidebarReference(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Reference',
      items: [
        {text: 'Site Config', link: 'site-config'},
        {text: 'Frontmatter Config', link: 'frontmatter-config'},
        {text: 'Runtime API', link: 'runtime-api'},
        {text: 'CLI', link: 'cli'},
        {
          text: 'Default Theme',
          base: '/reference/default-theme-',
          items: [
            {text: 'Overview', link: 'config'},
            {text: 'Nav', link: 'nav'},
            {text: 'Sidebar', link: 'sidebar'},
            {text: 'Home Page', link: 'home-page'},
            {text: 'Footer', link: 'footer'},
            {text: 'Layout', link: 'layout'},
            {text: 'Badge', link: 'badge'},
            {text: 'Team Page', link: 'team-page'},
            {text: 'Prev / Next Links', link: 'prev-next-links'},
            {text: 'Edit Link', link: 'edit-link'},
            {text: 'Last Updated Timestamp', link: 'last-updated'},
            {text: 'Search', link: 'search'},
            {text: 'Carbon Ads', link: 'carbon-ads'}
          ]
        }
      ]
    }
  ]
}
