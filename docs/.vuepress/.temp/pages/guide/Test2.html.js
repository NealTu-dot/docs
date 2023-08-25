export const data = JSON.parse("{\"key\":\"v-5de105f6\",\"path\":\"/guide/Test2.html\",\"title\":\"Test2\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"子路由2\",\"slug\":\"子路由2\",\"link\":\"#子路由2\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"guide/Test2.md\"}")

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
