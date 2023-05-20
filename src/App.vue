<template>
  <div id="app">
    <isLogin class="islogin"></isLogin>
    <Nav class="nav"></Nav>
    <router-view></router-view>
    <Under></Under>
  </div>
</template>

<script>

import Nav from '@/components/nav.vue'
import Under from '@/components/under.vue'
import isLogin from '@/components/isLogin.vue'

export default {
  components: {
    Nav, Under, isLogin
  }
}
</script>

<style lang="less" scoped>
.nav {
  // 导航栏粘性定位
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: #fff;
}

.islogin {
  position: fixed;
  left: 0;
  bottom: 0;
}
</style>