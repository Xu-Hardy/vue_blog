const navbar = require("./public/js/navbar")
const sidebar = require('./public/js/sidebar')
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
        nav: navbar.nav,
        sidebar: sidebar.sidebar
     
      },  
    }