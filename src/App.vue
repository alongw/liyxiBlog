<template>
  <div id="app">
    <isLogin class="islogin" v-if="islogini"></isLogin>
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
  data() {
    return {
      islogini: false
    }
  },
  components: {
    Nav,
    Under,
    isLogin
  },
  methods: {
    refreshloginstatus() {
      if (localStorage.getItem('token')) {
        this.islogini = true
      } else {
        this.islogini = false
      }
    }
    // 刷新登录状态
  },
  created() {
    this.refreshloginstatus()
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
