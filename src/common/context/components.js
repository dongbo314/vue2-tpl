/**
 * @Date         : 2020-09-24 09:28:05
 * @Description  : 全局引用components common组件
 * @Autor        : Qzr(z5021996@vip.qq.com)
 * @LastEditors  : Qzr(z5021996@vip.qq.com)
 * @LastEditTime : 2020-09-24 10:47:25
 */

import Vue from 'vue'

const files = require.context('@/components/common', false, /\.vue$/, 'lazy')

files.keys().forEach(fileName => {
  const componentname = fileName.replace(/(\.\/|\.vue)/g, '')
  Vue.component('common-' + componentname, () => files(fileName).default || files(fileName))
})