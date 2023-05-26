<template>
  <div id="editarticle">
    <div class="title">
      <h1 v-if="this.isNewArticle">发布文章</h1>
      <h1 v-else>编辑文章</h1>
    </div>
    <div class="article-info">
      文章标题：<el-input v-model="articleInfo.title"></el-input> <br /><br />
      浏览权限：<el-select v-model="articleInfo.permission" placeholder="请选择">
        <el-option
          v-for="item in permissionList"
          :key="item.permission"
          :label="item.msg"
          :value="item.permission"
        >
        </el-option>
      </el-select>
      <br /><br />
      密码保护：<el-switch
        v-model="articleInfo.usePassword"
        active-color="#13ce66"
        @change="clearPwdIpt"
      >
      </el-switch
      ><el-input
        placeholder="请输入密码"
        v-model="articleInfo.password"
        show-password
        v-if="articleInfo.usePassword"
      ></el-input>
    </div>
    <div class="editipt">
      文章内容：
      <v-md-editor
        v-model="articleInfo.content"
        height="500px"
        ref="textcrea"
      ></v-md-editor>
    </div>
    <div class="pushbtn">
      <el-button type="success" @click="pushBtn">发布</el-button>
      <el-button type="warning" @click="disedit" v-if="!isNewArticle">放弃修改</el-button>
      <el-button type="danger" class="delete" @click="delbtn" v-if="!isNewArticle"
        >删除文章</el-button
      >
    </div>
  </div>
</template>

<script>
import axios from '@/util/request'
export default {
  data() {
    return {
      isNewArticle: false,
      articleInfo: {
        title: '新建文章',
        content: '',
        permission: 0,
        usePassword: false,
        password: '',
        description: ''
      },
      permissionList: [
        {
          permission: 0,
          msg: '游客'
        },
        {
          permission: 1,
          msg: '登录用户'
        }
      ]
    }
  },
  methods: {
    async getArticleInfo() {
      if (!this.$route.params.id) {
        this.isNewArticle = true
        return
      }
      const { data: res } = await axios.post('/api/getActicleInfo', {
        aid: this.$route.params.id
      })
      console.log(res)
      if (res.status == 4035) {
        // 无权限编辑此文章
        this.$notify.error({
          title: '错误',
          message: '您无权编辑此文章'
        })
        this.$router.push('/user')
        return
      }
      if (res.status == 5030) {
        this.$notify.error({
          title: '错误',
          message: '您无权编辑此文章'
        })
        this.$router.push('/user')
        return
      }
      // 渲染信息
      this.articleInfo = res.data
      if (res.data.password) {
        this.articleInfo.usePassword = true
      }
    },
    clearPwdIpt() {
      this.articleInfo.password = ''
    },
    disedit() {
      this.$confirm('你确定要放弃编辑吗？', '警告', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.$message({
            type: 'success',
            message: '放弃修改成功!'
          })
          this.$router.push('/user')
        })
        .catch(() => {})
    },
    async pushBtn() {
      if (this.isNewArticle) {
        // 是新建文章
        if (!this.articleInfo.password) {
          this.articleInfo.password = ''
        }
        // 获取简介
        const getDescription = document.querySelector('.github-markdown-body').innerText
        const editDescription = getDescription.replace(/[\r\n]/g, '').substring(0, 55)
        this.articleInfo.description = editDescription
        // return
        const { data: res } = await axios.post('/api/addActicle', this.articleInfo)
        if (res.status == 200) {
          this.$router.push('/user')
          return this.$notify({
            title: '成功',
            message: '提交成功，请等待审核',
            type: 'success'
          })
        }
        this.$notify.error({
          title: '错误',
          message: '提交失败，请稍后再试'
        })
        console.log(res)
        return
      }
      if (!this.articleInfo.password) {
        this.articleInfo.password = ''
      }
      // 获取简介
      const getDescription = document.querySelector('.github-markdown-body').innerText
      const editDescription = getDescription.replace(/[\r\n]/g, '').substring(0, 55)
      this.articleInfo.description = editDescription
      const { data: res } = await axios.post('/api/editActicle', this.articleInfo)
      if (res.status == 200) {
        return this.$notify({
          title: '成功',
          message: '修改成功，请等待审核（若退出此界面，在审核完成前将不能再修改）',
          type: 'success'
        })
      }
      this.$notify.error({
        title: '错误',
        message: '修改失败，请稍后再试'
      })
      console.log(res)
    },
    delbtn() {
      this.$confirm('此操作将永久删除该文章, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async () => {
          const res = await axios.post('/api/delActicle', {
            aid: this.$route.params.id
          })
          if (res.status == 200) {
            this.$notify({
              title: '成功',
              message: '删除文章成功',
              type: 'success'
            })
            return this.$router.push('/user')
          }
          this.$notify.error({
            title: '错误',
            message: '删除文章失败'
          })
        })
        .catch(() => {})
    }
  },
  created() {
    this.getArticleInfo()
  }
}
</script>

<style lang="less" scoped>
#editarticle {
  .title {
    margin: 50px auto 0 auto;
    max-width: 80%;
    // background-color: pink;
  }
  li {
    list-style-type: space-counter;
  }

  .article-info {
    margin: 20px auto;
    max-width: 80%;
    // background-color: pink;
  }

  .editipt {
    margin: 0 auto;
    max-width: 80%;
  }

  .pushbtn {
    position: relative;
    margin: 20px auto;
    max-width: 80%;

    .delete {
      position: absolute;
      right: 0;
      top: 0;
    }
  }
}
</style>
