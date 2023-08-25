export const searchIndex = [
  {
    "title": "Tes1",
    "headers": [
      {
        "level": 2,
        "title": "标题2",
        "slug": "标题2",
        "link": "#标题2",
        "children": []
      }
    ],
    "path": "/guide/Test1.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Test2",
    "headers": [
      {
        "level": 2,
        "title": "子路由2",
        "slug": "子路由2",
        "link": "#子路由2",
        "children": []
      }
    ],
    "path": "/guide/Test2.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Test3",
    "headers": [],
    "path": "/guide/Test3.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Test4",
    "headers": [],
    "path": "/guide/Test4.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": []
  }
]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSearchIndex) {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ searchIndex }) => {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  })
}
