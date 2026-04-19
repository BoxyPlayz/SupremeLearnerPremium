import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "pages",
  base: "/SupremeLearnerPremium/",
  title: "Supreme Learner Premium",
  description: "learn things i guess",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: "Evil Burger King",
        link: "/evil-king"
      },
      {
        text: 'Math',
        items: [
          { text: 'Intro', link: '/math/intro.md' },
          { text: 'Chapter 1', link: '/math/chapter-1' },
          { text: 'List of Axioms', link: '/math/axioms' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  markdown: {
    math: true
  }
})
