import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/sturdy-octo-disco/',
  title: 'My Blog',
  description: 'A personal blog built with VitePress',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Posts', link: '/posts/' }
    ],
    sidebar: {
      '/posts/': [
        {
          text: 'Posts',
          items: [
            { text: 'Welcome', link: '/posts/welcome' },
            { text: 'Getting Started with VitePress', link: '/posts/getting-started-with-vitepress' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/pixelpippy/sturdy-octo-disco' }
    ],
    footer: {
      message: 'Built with VitePress',
      copyright: 'Copyright © 2024'
    }
  }
})
