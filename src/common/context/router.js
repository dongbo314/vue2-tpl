/**
 * @Date         : 2020-09-22 14:11:03
 * @Description  : router自动注册异步组件
 * @Autor        : Qzr(z5021996@vip.qq.com)
 * @LastEditors  : Qzr(z5021996@vip.qq.com)
 * @LastEditTime : 2020-09-24 11:38:11
 */

const files = require.context('@/views', false, /\.vue$/)
const modules = {}

files.keys().forEach(key => {
  const fileName = key.replace(/(\.vue|\.\/)/g, '').toLowerCase()
  modules[fileName] = {
    path: '/' + fileName,
    name: fileName,
    component: files(key).default || files(key)
  }
})

export default modules