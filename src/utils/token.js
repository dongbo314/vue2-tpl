/**
 * @Date         : 2020-09-22 13:53:09
 * @Description  : token相关操作
 * @Autor        : Qzr(z5021996@vip.qq.com)
 * @LastEditors  : Qzr(z5021996@vip.qq.com)
 * @LastEditTime : 2020-09-22 13:53:21
 */


import Cookie from 'js-cookie'

const TokenKey = 'token'

export function getToken() {
  return Cookie.get(TokenKey)
}

export function setToken(token) {
  return Cookie.set(TokenKey, token)
}

export function delToken() {
  return Cookie.remove(TokenKey)
}