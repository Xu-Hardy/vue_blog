module.exports = {
    lang: 'zh-CN',
    title: '看见成长的自己',
    base: '/vue_blog/',
    description: '随笔写作，记录感悟',
    themeConfig: {
        logo: '/assets/logo/tf.png',
        repo: 'mengze-han/vue_blog/',
        repoLabel: 'Github',
        smoothScroll: true,
        nav: [
          { text: 'Blog', link:'https://mengze-han.github.io/'},
          { text: 'Home', link: '/' },
          { text: 'About', link: '/about'},
          {
            text: '技术',
            items: [
              { 
                text: '开发', items: [
                { text: 'python', link: '/python/' },
                { text: 'c++', link: '/linux/' },
                { text: 'AI', link: '/python/' },
                ] 
              },
                { text: '运维', items: [
                { text: 'Linux', link: '/python/' },
                { text: 'linux', link: '/linux/' },
                { text: 'AI', link: '/python/' },
                ] 
              },
              { text: 'AI', items: [
                { text: '深度学习', link: '/python/' },
                { text: 'linux', link: '/linux/' },
                { text: 'AI', link: '/python/' },
                ] 
            }
            ]
          },
            { text: '随笔', items: [
            { text: 'python', link: '/python/' },
            { text: 'linux', link: '/linux/' },
            { text: 'AI', link: '/python/' },
            ] 
          },
          { text: 'GEEK', items: [
            { text: '装机', link: '/computer/' },
            { text: 'DIY', link: '/diy/' },
            { text: 'AI', link: '/python/' },
          ] },
        ],
        sidebar: {
          '/Python/': [
            '',     /* /foo/ */
            '1',  /* /foo/one.html */
            '2'   /* /foo/two.html */
          ],
         // fallback
          '/': [
            '',        /* / */
            // 'contact', /* /contact.html */
            'about'    /* /about.html */
          ]
        }
      },  
    }