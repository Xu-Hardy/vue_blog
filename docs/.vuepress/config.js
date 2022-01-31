module.exports = {
    title: '文集',
    base: 'https://mengze-han.github.io/vue_blog/',
    description: '随笔写作，记录感悟',
    themeConfig: {
        logo: '/assets/logo/tf.png',
        repo: 'vuejs/vuepress',
        repoLabel: '查看源码',
        // 假如你的文档仓库和项目本身不在一个仓库：
        docsRepo: 'vuejs/vuepress',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '帮助我们改善此页面！',
        smoothScroll: true,
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide/' },
          { text: 'External', link: 'https://google.com' },
        ],
        sidebar: 'auto',
        // sidebar: {
        //     '/python/': [
        //       '',     /* /foo/ */
        //       '1',  /* /foo/one.html */
        //       '2'   /* /foo/two.html */
        //     ],
        //     // fallback
        //     '/': [
        //       '',        /* / */
        //       'confif', /* /contact.html */
        //       'about'    /* /about.html */
        //     ]
        //   },
        // displayAllHeaders: true // 默认值：false
      },
  }