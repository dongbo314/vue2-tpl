/**
 * @Date         : 2020-09-22 14:11:03
 * @Description  : api配置
 * @Autor        : Qzr(z5021996@vip.qq.com)
 * @LastEditors  : Qzr(z5021996@vip.qq.com)
 * @LastEditTime : 2020-09-22 14:57:50
 */

import handle from './handle'

const files = require.context('./modules', false, /\.js$/)
const modules = {}

files.keys().forEach(key => {
  modules[key.replace(/(\.\/|\.js)/g, '')] = handle(files(key).default)
})

export default modules