/**
 * @Date         : 2020-09-22 15:06:20
 * @Description  : templates文件聚合
 * @Autor        : Qzr(z5021996@vip.qq.com)
 * @LastEditors  : Qzr(z5021996@vip.qq.com)
 * @LastEditTime : 2020-09-22 15:16:23
 */


const files = require.context('.', false, /\.js$/)
let modules = {}

files.keys().forEach(key => {
  if (key === './index.js') return
  modules = { ...modules, ...files(key).default }
})

export default modules