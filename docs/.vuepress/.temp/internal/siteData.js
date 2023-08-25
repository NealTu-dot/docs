export const siteData = JSON.parse("{\"base\":\"/./\",\"lang\":\"zh-CN\",\"title\":\"\",\"description\":\"回归实践,才是最好的提升\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"/images/东方融资网logo.jpg\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
