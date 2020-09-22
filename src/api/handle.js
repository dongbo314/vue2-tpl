/**
 * @Date         : 2020-09-22 14:47:43
 * @Description  : 生成axios函数
 * @Autor        : Qzr(z5021996@vip.qq.com)
 * @LastEditors  : Qzr(z5021996@vip.qq.com)
 * @LastEditTime : 2020-09-22 15:51:38
 */


import axios from '@/common/axios'

function handleGet(obj) {
  const modules = {}
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const item = obj[key]
      modules[key] = (data = {}) => {
        return axios.get(item, { params: data })
      }
    }
  }
  return modules
}

function handlePost(obj) {
  const modules = {}
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const item = obj[key]
      modules[key] = (data = {}) => {
        return axios.post(item, data)
      }
    }
  }
}

export default function(obj) {
  const getObj = handleGet(obj.get)
  const postObj = handlePost(obj.post)

  return { ...getObj, ...postObj }
}