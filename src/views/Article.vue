<template>
  <div id="article">
    <div class="title">
      <h1>{{ articleData.title }}</h1>
    </div>
    <div class="passwordwindow" v-if="needpassword.enable">
      <el-input
        placeholder="该文章需验证密码"
        v-model="needpassword.input"
        show-password
      ></el-input>
      <el-button type="primary" @click="checkPwd">验证</el-button>
    </div>
    <div class="viewwindow" v-if="!needpassword.enable">
      <v-md-editor class="view" :value="articleData.content" mode="preview"></v-md-editor>
    </div>
  </div>
</template>

<!-- this.$route.params.id -->
<script>
import axios from '@/util/request'
export default {
  data() {
    return {
      articleData: {
        content: '正在加载，请稍后...'
      },
      needpassword: {
        enable: false,
        input: ''
      }
    }
  },
  methods: {
    // 获取登录状态
    getLoginStatus() {
      const date = new Date().getTime()
      if (!localStorage.getItem('expiredTime')) {
        // 未登录
        return false
      }
      if (localStorage.getItem('expiredTime') <= date) {
        //已过期
        return false
      }
      // 未过期
      return true
    },
    async getArticle(aid) {
      if (this.getLoginStatus()) {
        // 用户接口
        const { data: res } = await axios.post('/api/getArticle', {
          aid
        })
        if (res.status == 5030) {
          // 未找到文章
          this.$router.push('/404')
          return this.$notify.error({
            title: '错误',
            message: '404 未找到'
          })
        }
        if (res.status == 4032) {
          // todo:输入密码并重发请求
          this.$notify({
            title: '鉴权',
            message: '该文章受密码保护',
            type: 'warning'
          })
          return (this.needpassword.enable = true)
        }
        if (res.status == 4031) {
          return this.$notify.error({
            title: '错误',
            message: '您的账号无权查看该文章'
          })
        }
        if (res.status == 200) {
          this.articleData = res.data
        }
        return
      }

      // 游客接口
      const { data: res } = await axios.get(`/api/public/getArticle?aid=${aid}`)
      if (res.status == 5030) {
        // 未找到文章
        this.$router.push('/404')
        return this.$notify.error({
          title: '错误',
          message: '404 未找到'
        })
      }
      if (res.status == 4032) {
        this.$notify({
          title: '鉴权',
          message: '该文章受密码保护',
          type: 'warning'
        })
        return (this.needpassword.enable = true)
      }
      if (res.status == 4031) {
        return this.$notify.error({
          title: '错误',
          message: '权限不足'
        })
      }
      if (res.status == 200) {
        this.articleData = res.data
      }
    },
    async checkPwd() {
      let req = ''
      if (this.getLoginStatus()) {
        req = await axios.post('/api/getArticle', {
          aid: this.$route.params.id,
          password: this.needpassword.input
        })
      } else {
        req = await axios.get(
          `/api/public/getArticle?aid=${this.$route.params.id}&password=${this.needpassword.input}`
        )
      }
      const res = req.data

      if (res.status == 4032) {
        // 密码错误
        return this.$notify.error({
          title: '错误',
          message: '密码错误'
        })
      }
      if (res.status == 200) {
        this.needpassword.enable = false
        return (this.articleData = res.data)
      }
    }
  },
  created() {
    this.getArticle(this.$route.params.id)
  }
}
</script>

<style lang="less" scoped>
#article {
  .title {
    text-align: center;
    margin: 50px;
  }

  .viewwindow {
    border-bottom: 1px solid #e4e4e4;
  }

  .passwordwindow {
    max-width: 400px;
    margin: 0 auto;
    border: 1px solid #ccc;
    border-radius: 15px;
    padding: 25px;
    // background-color: pink;
    display: flex;
  }
}
</style>
