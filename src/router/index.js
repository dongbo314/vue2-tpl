/**
 * @Date         : 2020-09-18 16:02:20
 * @Description  :
 * @Autor        : Qzr(z5021996@vip.qq.com)
 * @LastEditors  : Qzr(z5021996@vip.qq.com)
 * @LastEditTime : 2020-09-30 17:34:22
 */


import Vue from 'vue'
import VueRouter from 'vue-router'

import modules from './modules'

import beforeEach from './guard/beforeEach'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: modules
})

beforeEach(router)

export default router
