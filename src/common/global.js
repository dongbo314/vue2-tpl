/**
 * @Date         : 2020-09-22 13:50:24
 * @Description  : global全局变量
 * @Autor        : Qzr(z5021996@vip.qq.com)
 * @LastEditors  : Qzr(z5021996@vip.qq.com)
 * @LastEditTime : 2020-09-22 15:48:59
 */


let baseUrl = ''

if (process.env.NODE_ENV === 'production') {
  // 生产环境
  baseUrl = '/api'
} else if (process.env.NODE_ENV === 'development') {
  // 开发环境
  baseUrl = '/mock'
}

export default {
  baseUrl
}