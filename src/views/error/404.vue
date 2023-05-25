<template>
  <div id="err404">
    <h1>404 Not Found</h1>
    <br />
    <el-button type="primary" @click="$router.push('/')">返回首页</el-button><br />
    <img src="@/assets/img/errcode/404.png" alt="" />
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
#err404 {
  text-align: center;
}
</style>
