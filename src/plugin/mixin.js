/**
 * @Date         : 2020-09-25 10:25:55
 * @Description  : 全局mixin
 * @Autor        : Qzr(z5021996@vip.qq.com)
 * @LastEditors  : Qzr(z5021996@vip.qq.com)
 * @LastEditTime : 2020-09-25 10:26:41
 */


export default function(Vue) {
  Vue.mixin({
    methods: {
      goRouter(path, params) {
        this.$router.push(path, params)
      }
    },
  })
}