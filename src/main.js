/**
 * @Date         : 2020-09-18 16:02:20
 * @Description  : main
 * @Autor        : Qzr(z5021996@vip.qq.com)
 * @LastEditors  : Qzr(z5021996@vip.qq.com)
 * @LastEditTime : 2020-09-30 17:28:50
 */


import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import plugin from './plugin/index'

import 'amfe-flexible'
import './mock'
import './common/context/components'

Vue.config.productionTip = false

Vue.use(plugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
