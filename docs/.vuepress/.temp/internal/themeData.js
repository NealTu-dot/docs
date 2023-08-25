export const themeData = JSON.parse("{\"lastUpdated\":\"更新时间\",\"colorModeSwitch\":true,\"repo\":\"https://gitee.com/passerbytt/dashboard/projects\",\"logo\":\"/images/东方融资网logo.jpg\",\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"全局导航\",\"link\":\"/guide/前言.md\"},{\"text\":\"IT常见问题\",\"link\":\"/guide/Test1.md\"},{\"text\":\"此处有子路由\",\"children\":[{\"text\":\"Text2\",\"link\":\"/guide/Test2.md\"},{\"text\":\"Text3\",\"link\":\"/guide/Test3.md\"},{\"text\":\"Text4\",\"link\":\"/guide/Test4.md\"}]}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"auto\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
