/**
 * @Date         : 2020-09-18 16:02:20
 * @Description  : main
 * @Autor        : Qzr(z5021996@vip.qq.com)
 * @LastEditors  : Qzr(z5021996@vip.qq.com)
 * @LastEditTime : 2020-09-22 16:03:42
 */


import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './api'

import 'amfe-flexible'
import './mock'

Vue.config.productionTip = false

Vue.prototype.$api = api

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
