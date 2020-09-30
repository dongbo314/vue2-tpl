/**
 * @Date         : 2020-09-25 16:16:39
 * @Description  : 全局自定义指令
 * @Autor        : Qzr(z5021996@vip.qq.com)
 * @LastEditors  : Qzr(z5021996@vip.qq.com)
 * @LastEditTime : 2020-09-27 16:10:34
 */


export default function(Vue) {
  Vue.directive('income', {
    update(el) {
      income(el)
    },
    inserted(el) {
      income(el)
    }
  })

}

function income(el) {
  const reg = /\-/g
  const isNegative = reg.test(el.innerText)
  if (isNegative) {
    el.style.color = '#00A960'
  } else {
    el.style.color = '#F22C43'
  }
}