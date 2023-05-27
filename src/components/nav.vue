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

      <div class="phonenav">
        <hamburger-button theme="outline" size="24" fill="#000" />
        <ul>
          <li><a href="javascript:;" @click="gotoHome">主页</a></li>
          <li><a href="javascript:;" @click="gotoArticleList">文章</a></li>
          <li><a href="javascript:;" @click="gotoProject">项目</a></li>
          <li><a href="javascript:;" @click="gotoAbout">关于</a></li>
        </ul>
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
import { HamburgerButton } from '@icon-park/vue'
import '@icon-park/vue/styles/index.css'
export default {
  data() {
    return {
      searchWors: ''
    }
  },
  components: {
    HamburgerButton
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
  },
  created() {}
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
  .phonenav {
    display: none;
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

// 平板尺寸
@media (max-width: 800px) {
  .search {
    display: none;
  }
}

// 手机尺寸
@media (max-width: 530px) {
  .search {
    display: none;
  }
  .right {
    position: relative;
    .phonenav {
      display: block !important;
      position: absolute;
      right: 0;
      &:hover {
        ul {
          display: flex !important;
        }
      }
    }

    ul {
      display: none !important;
      position: absolute;
      top: 30px;
      // right: -50px;
      right: -40px;
      // background-color: pink;
      width: 150px;
      display: flex;
      flex-direction: column;
      align-items: center;
      border: 1px solid #e4e4e4;
      border-radius: 3px;
      li {
        background-color: #fff;
        width: 100%;
        padding-left: 2em;
        padding-top: 10px;
        padding-bottom: 10px;
        a {
          display: block;
          width: 100%;
        }
      }
    }
  }
}
</style>
