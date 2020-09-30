/**
 * @Date         : 2020-09-22 14:09:16
 * @Description  : mockjs配置
 * @Autor        : Qzr(z5021996@vip.qq.com)
 * @LastEditors  : Qzr(z5021996@vip.qq.com)
 * @LastEditTime : 2020-09-30 17:30:58
 */


import Mock from 'mockjs'
import base from '@/common/context/apiBase'
import templates from './templates'

for (const key in base) {
  if (base.hasOwnProperty(key)) {
    setMock(key, base[key])
  }
}

function setMock(type, bases) {
  for (const key in bases) {
    if (bases.hasOwnProperty(key)) {
      const url = bases[key]
      Mock.mock(RegExp('/mock' + url + '.*'), type, templates[key])
    }
  }
}
