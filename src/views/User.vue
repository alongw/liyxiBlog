<template>
  <div id="user">
    <div class="title">
      <h1>我的文章</h1>
    </div>
    <ul>
      <li v-for="item in userInfo.articleList" :key="item.aid">
        <div class="info">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
        <el-button
          type="primary"
          icon="el-icon-edit"
          circle
          @click="$router.push(`/article/${item.aid}/edit`)"
        ></el-button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from '@/util/request'
export default {
  data() {
    return {
      userInfo: {
        articleList: []
      }
    }
  },
  methods: {
    async getuserInfo() {
      const { data: res } = await axios.post('/api/userMain')
      if (res.status == 200) {
        this.userInfo = res.data
      }
    }
  },
  created() {
    this.getuserInfo()
  }
}
</script>

<style lang="less" scoped>
#user {
  max-width: 1000px;
  margin: 50px auto;
  //   background-color: pink;

  ul {
    margin-top: 20px;

    li {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      margin: 15px;

      h3 {
        margin-right: 15px;
      }
    }
  }
}
</style>
