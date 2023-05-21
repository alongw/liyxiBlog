<template>
    <div id="islogin">
        <el-button type="primary" icon="el-icon-user" circle @click="gotouser"></el-button>
        <el-button type="info" icon="el-icon-circle-close" circle @click="loginOut"></el-button>
    </div>
</template>

<script>
export default {
    methods: {
        loginOut() {
            window.localStorage.clear()
            this.$router.push('/loginout')

        },
        gotouser() {
            if (this.$route.name != 'user') {
                this.$router.push('/user')
            }
        }
    },

}
</script>

<style lang="less" scoped>
#islogin {
    // background-color: pink;
    margin-left: 15px;
}
</style>