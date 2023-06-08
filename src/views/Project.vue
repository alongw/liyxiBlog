<template>
  <div id="project" v-loading.fullscreen.lock="fullscreenLoading">
    <div class="title">
      <h1>项目列表</h1>
    </div>
    <ul>
      <div class="project-item">
        <div class="noproject" v-if="!projectList[0]">还没有项目....</div>
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
    </ul>
  </div>
</template>

<script>
import axios from '@/util/request'
export default {
  data() {
    return {
      projectList: null,
      fullscreenLoading: false
    }
  },
  methods: {
    async getProjectList() {
      const time = new Date().getTime()
      if (localStorage.getItem('getProjectTime')) {
        if (time - localStorage.getItem('getProjectTime') < 600000) {
          this.fullscreenLoading = false
          return (this.projectList = JSON.parse(localStorage.getItem('projectList')))
        }
      }
      this.fullscreenLoading = false
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
      this.projectList = res.data.data
      localStorage.setItem('projectList', JSON.stringify(this.projectList))
      localStorage.setItem('getProjectTime', time)
    }
  },
  created() {
    this.fullscreenLoading = true
    this.getProjectList()
  }
}
</script>

<style lang="less" scoped>
#project {
  margin-top: 50px;

  .noproject {
    text-align: center;
  }

  .title {
    text-align: center;
  }

  ul {
    padding: 100px 0;
    text-align: center;

    .project-item {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      user-select: none;

      .project-item-box {
        border: 1px solid #e4e4e4;
        margin: 20px 5px;
        // padding: 15px;
        max-width: 400px;

        &:hover {
          border: 1px solid #bbb;
          transition: all 0.3s;
        }

        img {
          max-width: 100%;
          margin: 20px;
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
}
</style>
