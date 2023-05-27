<template>
  <div id="home">
    <div class="banner">
      <div class="nr">
        <h1>我的技术笔记分享</h1>
        <h3>我的个人主页</h3>
        <h4>阿巴阿巴...</h4>
        <el-button class="morebtn" type="primary" round @click="$router.push('/article')"
          >查看更多
          <share theme="outline" size="18" fill="#fff" />
        </el-button>
      </div>
      <img src="@/assets/img/banner.png" alt="" />
    </div>

    <div class="project-list">
      <h1>项目列表</h1>

      <h3><router-link to="/project">查看更多</router-link></h3>
      <share theme="outline" size="18" fill="#000" />
      <div class="project-item">
        <a :href="item.projectlink" v-for="item in projectList" :key="item.pid">
          <div class="project-item-box">
            <img :src="item.img" alt="" />
            <h3>{{ item.projectname }}</h3>
            <p>
              {{ item.projectinfo }}
            </p>
          </div>
        </a>
      </div>
    </div>

    <div class="subbanner">
      <h2>{{ msg }}</h2>
      <div class="btngroup">
        <el-button type="primary" @click="toTop">返回顶部</el-button>
        <el-button type="primary" plain @click="toLogin">登录账号</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/index.css'
import { Share } from '@icon-park/vue'
import '@icon-park/vue/styles/index.css'
import axios from '@/util/request'
import axiosw from 'axios'

export default {
  data() {
    return {
      projectList: '',
      msg: ''
    }
  },
  components: {
    Share
  },
  methods: {
    async getProjectList() {
      if (localStorage.getItem('getProjectTime')) {
        return (this.projectList = JSON.parse(localStorage.getItem('projectList')).splice(
          0,
          3
        ))
      }
      const res = await axios.get('/api/public/getProject?re=true').catch((err) => {
        return this.$notify.error({
          title: '错误',
          message: err.message
        })
      })
      if (!res.data.data) {
        return this.$notify.error({
          title: '错误',
          message: '获取数据失败！'
        })
      }
      this.projectList = res.data.data.splice(0, 3)
    },
    toLogin() {
      this.$router.push('/login')
    },
    toTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    async getYiYan() {
      const res = await axiosw.get('https://v1.hitokoto.cn/')
      this.msg = res.data.hitokoto
    }
  },
  created() {
    this.getProjectList()
    this.getYiYan()
  }
}
</script>

<style lang="less" scoped>
#home {
  .banner {
    // margin-top: 100px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 100px auto;

    .nr {
      h1 {
        font-size: 50px;
        margin-bottom: 30px;
      }

      h3 {
        font-size: 30px;
        margin-bottom: 30px;
        font-weight: 500;
      }

      h4 {
        font-size: 25px;
        margin-bottom: 30px;
        font-weight: 500;
      }

      .morebtn {
        font-size: 18px;
      }
    }

    img {
      max-width: 100%;
    }
  }

  .project-list {
    padding: 100px 0;
    border-top: 2px solid #e4e4e4;
    text-align: center;

    h3 {
      display: inline-block;
      font-weight: 500;
    }

    .project-item {
      display: flex;
      justify-content: center;
      margin-top: 50px;

      .project-item-box {
        border: 1px solid #e4e4e4;
        margin: 10px;
        // padding: 15px;
        max-width: 400px;

        img {
          max-width: 100%;
          // margin: 20px;
          padding: 20px;
        }

        h3 {
          display: block;
          font-size: 30px;
          font-weight: 800;
        }

        p {
          font-size: 18px;
          padding: 25px;
        }
      }
    }
  }

  .subbanner {
    background-color: #edf5fb;
    height: 250px;
    text-align: center;
    padding: 60px;

    h2 {
      font-size: 35px;
      color: #3fadff;
      margin-bottom: 50px;
    }
  }
}

@media (max-width: 800px) {
  #home {
    .banner {
      padding: 15px;
    }
    .project-list {
      .project-item {
        flex-wrap: wrap;
        .project-item-box {
          margin: 10px 0;
        }
      }
    }
    .subbanner {
      h2 {
        font-size: 20px;
        // margin-bottom: 10px;
      }
    }
  }
}
</style>
