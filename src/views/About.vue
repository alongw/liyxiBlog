<template>
  <div id="about">
    <h1>关于</h1>
    <p>LiyxiBlog - V1.0.0</p>
    <p>
      Github：<a href="https://github.com/liyxiblog" target="_blank"
        >https://github.com/liyxiblog</a
      >
    </p>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
#about {
  max-width: 600px;
  //   background-color: pink;
  margin: 50px auto;
  p {
    margin: 15px;
  }

  a {
    &:hover {
      color: lightpink;
      text-decoration: underline;
    }
  }
}
</style>
