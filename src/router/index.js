import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

import beforeEach from './guard/beforeEach'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

beforeEach(router)

export default router
