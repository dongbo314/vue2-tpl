/**
 * @Date         : 2020-09-22 14:11:03
 * @Description  : 自动载入图片
 * @Autor        : Qzr(z5021996@vip.qq.com)
 * @LastEditors  : Qzr(z5021996@vip.qq.com)
 * @LastEditTime : 2020-09-24 14:33:57
 */


export default function(path) {
  const files = require.context('@/assets' + path, true, /\.(png|jpg)$/)
  const modules = {}

  files.keys().forEach(key => {
    const fileName = key.replace(/(\.png|\.jpg|\.\/)/g, '').toLowerCase()
    modules[fileName] = files(key).default || files(key)
  })

  return modules
}