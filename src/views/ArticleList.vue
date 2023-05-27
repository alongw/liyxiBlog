<template>
  <div id="articlelist">
    <div class="title">
      <h1>文章索引</h1>
    </div>
    <div class="acticle-block">
      <ul>
        <li
          v-for="item in articleList"
          :key="item.aid"
          @click="$router.push(`/article/${item.aid}`)"
        >
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }} […]</p>
          <span>{{ item.updated_at }}</span> | <span>{{ item.author.nick }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from '@/util/request'
export default {
  data() {
    return {
      articleList: null
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
    async getArticleList() {
      // 判断是否有缓存
      if (window.localStorage.getItem('articleList')) {
        // 判断缓存是否有过期
        const temptime = window.localStorage.getItem('getArticleTime')
        const date = new Date().getTime()
        if (date - temptime <= 600000) {
          return (this.articleList = JSON.parse(
            window.localStorage.getItem('articleList')
          ))
        }
      }
      if (this.getLoginStatus()) {
        // 使用登录接口获取文章
        const { data: res } = await axios.post('/api/getArticleList')
        if (!res.data || res.status != 2021) {
          this.$notify.error({
            title: '错误',
            message: '获取文章列表失败，请稍后再试'
          })
        }
        return this.updateArticleList(res.data)
      }
      // 使用游客接口获取文章
      const { data: res } = await axios.get('/api/public/getArticleList')
      if (!res.data || res.status != 2020) {
        this.$notify.error({
          title: '错误',
          message: '获取文章列表失败，请稍后再试'
        })
      }
      return this.updateArticleList(res.data)
    },
    updateArticleList(data) {
      const date = new Date().getTime()
      this.articleList = data
      window.localStorage.setItem('articleList', JSON.stringify(data))
      window.localStorage.setItem('getArticleTime', date)
    }
  },
  created() {
    this.getArticleList()
  }
}
</script>

<style lang="less" scoped>
#articlelist {
  li {
    list-style: none;
  }
  .title {
    text-align: center;
    margin: 30px;
  }

  .acticle-block {
    display: flex;
    max-width: 700px;
    margin: 0 auto;

    ul {
      width: 100%;
      li {
        cursor: pointer;
        padding: 15px;
        margin-bottom: 15px;
        transition: all 0.3s;
        border: 1px solid #fff;

        &:hover {
          background-color: #fcfcfc;
          border: 1px solid #e4e4e4;
        }

        h3 {
          text-decoration: underline;
          font-weight: 600;
          margin-bottom: 20px;
        }

        p {
          font-size: 15px;
          margin-bottom: 15px;
        }

        span {
          font-size: 15px;
          text-decoration: underline;
          font-style: italic;
        }
      }
    }
  }
}
</style>
