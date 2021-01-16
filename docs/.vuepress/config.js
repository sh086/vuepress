const nav = require('../config/nav.js');
const sidebar = require('../config/sidebar');
module.exports = {
    title: 'Example',
    description: 'Example',
    port: '8086',
    base:'/vuepress/',
    themeConfig: {
        repo: '',
        nav: nav,//导航栏
        sidebar: sidebar,//自动生产导航栏
        sidebarDepth: 2,//sidebar的最大深度
        search: true, //搜索
        searchMaxSuggestions: 10,
        lastUpdated: 'Last update time：'
    },
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    markdown: {
        lineNumbers: true
    },
    plugins: ['@vuepress/back-to-top']
}
