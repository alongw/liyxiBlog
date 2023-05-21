<template>
  <div id="nav">
    <div class="title" @click="gotoHome">
      <h1>LIYXI Blog</h1>
    </div>
    <div class="right">
      <div class="search">
        <el-input placeholder="请输入内容" v-model="searchWors">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </div>

      <ul>
        <li><a href="javascript:;" @click="gotoHome">主页</a></li>
        <li><a href="javascript:;" @click="gotoArticleList">文章</a></li>
        <li><a href="javascript:;" @click="gotoProject">项目</a></li>
        <li><a href="javascript:;" @click="gotoAbout">关于</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchWors: ''
    }
  },
  methods: {
    gotoHome() {
      if (this.$route.name != 'home') {
        this.$router.push('/')
      }
    },

    gotoArticleList() {
      if (this.$route.name != 'ArticleList') {
        this.$router.push('/article')
      }
    },

    gotoProject() {
      if (this.$route.name != 'project') {
        this.$router.push('/project')
      }
    },
    gotoAbout() {
      if (this.$route.name != 'about') {
        this.$router.push('/about')
      }
    }
  }
}
</script>

<style lang="less" scoped>
#nav {
  display: flex;
  padding: 20px 50px;
  justify-content: space-between;
  align-items: center;
  // background-color: pink;
  border-bottom: 2px solid #e4e4e4;

  .title {
    cursor: pointer;

    h1 {
      font-size: 30px;
      color: #3fadff;
    }
  }

  .right {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: right;
  }

  ul {
    margin-left: 25px;

    li {
      cursor: pointer;
      display: inline-block;
      margin: 0 15px;
      color: #43afff;
      font-weight: 700;
    }
  }
}
</style>
