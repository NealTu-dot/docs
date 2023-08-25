export const data = JSON.parse("{\"key\":\"v-614ab734\",\"path\":\"/guide/Test1.html\",\"title\":\"Tes1\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"标题2\",\"slug\":\"标题2\",\"link\":\"#标题2\",\"children\":[]}],\"git\":{\"updatedTime\":1692946776000,\"contributors\":[{\"name\":\"codertutu\",\"email\":\"tutu18981446992@!63.com\",\"commits\":1}]},\"filePathRelative\":\"guide/Test1.md\"}")

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
