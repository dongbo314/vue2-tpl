/**
 * @Date         : 2020-09-25 14:57:59
 * @Description  : plugin
 * @Autor        : Qzr(z5021996@vip.qq.com)
 * @LastEditors  : Qzr(z5021996@vip.qq.com)
 * @LastEditTime : 2020-09-25 16:19:39
 */


import commonMixin from '@/plugin/mixin'
import api from '@/api'
import commonDirective from '@/plugin/directive'

const Plugin = {}
Plugin.install = function (Vue, options) {

  commonMixin(Vue)

  commonDirective(Vue)

  Vue.prototype.$api = api
}

export default Plugin