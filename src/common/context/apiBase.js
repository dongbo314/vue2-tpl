/**
 * @Date         : 2020-09-22 14:11:03
 * @Description  : api 集合 提供给mock
 * @Autor        : Qzr(z5021996@vip.qq.com)
 * @LastEditors  : Qzr(z5021996@vip.qq.com)
 * @LastEditTime : 2020-09-24 10:13:35
 */

const files = require.context('@/api/modules', false, /\.js$/)
const modules = {
  get: {},
  post: {}
}

files.keys().forEach(key => {
  for (const type in modules) {
    if (modules.hasOwnProperty(type)) {
      const item = modules[type]
      modules[type] = { ...item, ...files(key).default[type] || {}}
    }
  }
})

export default modules