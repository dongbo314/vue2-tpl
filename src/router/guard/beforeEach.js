const defaultTitle = '' // 设置通用标题

export default function(router) {
  router.beforeEach((to, from, next) => {
    setTitle(to, from)
    next()
  })
}

// 设置title
function setTitle(to) {
  const title = to.meta.title || defaultTitle

  document.title = title
}
