import { defineUserConfig,defaultTheme } from 'vuepress'
// 顶部导航栏的搜索框 需要install这个依赖  npm i -D @vuepress/plugin-search@next
// @ts-ignore
import { searchPlugin } from '@vuepress/plugin-search'



export default defineUserConfig({
    // 插件配置  这里配置了那个搜索框
    plugins:[
        searchPlugin({
            locales: {
                '/': {
                    placeholder: '搜你想搜的',
                },
                '/zh/': {
                    placeholder: '搜索',
                },
            },
            // 排除首页
            isSearchable: (page) => page.path !== '/',
        }),
    ],

    // 打包后html内部资源访问路径
    // @ts-ignore
    base:'./',

    // 打包后的文件放哪
    dest:"dist/",

    lang: 'zh-CN',

    // 标题
    // title: 'ReturnAC',
    description: '回归实践,才是最好的提升',


    // 头部配置
    head: [['link', { rel: 'icon', href: '/images/东方融资网logo.jpg' }],
    ],

    // 最后更新时间

    //新增导航条的配置
    theme: defaultTheme({
        // @ts-ignore
        lastUpdated: "更新时间",

        // 侧边导航栏 不展开则 false
        //sidebar: true,

        // 白天和夜间模式，白天更改为true
        colorModeSwitch: true,


        // 版本仓库地址
        repo: "https://gitee.com/passerbytt/dashboard/projects",

        // tab栏的图标; 图片 / 会自动去public文件夹里找图片
        logo: '/images/东方融资网logo.jpg',

        // 顶部导航条
        navbar: [
            {
                text: '首页',
                link: '/',
            },{
                text: '全局导航',
                link: '/guide/前言.md'
            },
            {
                text: 'IT常见问题',
                link: '/guide/Test1.md'
            },
            {
                text: '此处有子路由',
                children: [
                    {
                        text: 'Text2',
                        link: '/guide/Test2.md'
                    },
                    {
                        text: 'Text3',
                        link: '/guide/Test3.md'
                    },
                    {
                        text: 'Text4',
                        link: '/guide/Test4.md'
                    },
                ],

            },
        ],
    }),
})


