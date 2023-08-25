export const data = JSON.parse("{\"key\":\"v-5a7754b8\",\"path\":\"/guide/Test3.html\",\"title\":\"Test3\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1692946776000,\"contributors\":[{\"name\":\"codertutu\",\"email\":\"tutu18981446992@!63.com\",\"commits\":1}]},\"filePathRelative\":\"guide/Test3.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
