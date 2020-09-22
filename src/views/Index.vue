<!--
 * @Date         : 2020-09-18 16:02:20
 * @Description  :
 * @Autor        : Qzr(z5021996@vip.qq.com)
 * @LastEditors  : Qzr(z5021996@vip.qq.com)
 * @LastEditTime : 2020-09-22 16:04:57
-->


<template>
  <div class="container">
    welcome Qzr's vue2-cli
  </div>
</template>

<script>
export default {
  methods: {
    async getUserInfo() {
      const info = await this.$api.user.getInfo()
      console.log(info)
    }
  },
  mounted() {
    this.getUserInfo()
  },
}
</script>

<style scoped lang='stylus'>
.container
  font-size 20px
</style>