/**
 * @Date         : 2020-09-24 11:05:15
 * @Description  : 添加配置路由属性
 * @Autor        : Qzr(z5021996@vip.qq.com)
 * @LastEditors  : Qzr(z5021996@vip.qq.com)
 * @LastEditTime : 2020-09-24 16:28:39
 */


import routerContext from '@/common/context/router'

const modules = []

addAttr('details', setTitle('基金组合详情'))

for (const key in routerContext) {
  if (routerContext.hasOwnProperty(key)) {
    const item = routerContext[key]
    modules.push(item)
  }
}

export default modules

function addAttr(name, attr) {
  const oldAttr = { ...routerContext[name] }
  routerContext[name] = {
    ...oldAttr,
    ...attr
  }
}

function setTitle(title) {
  return {
    meta: {
      title
    }
  }
}