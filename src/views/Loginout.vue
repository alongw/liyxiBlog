<template>
    <div id="loginout">
        <h1>您已成功退出登录，你最好关闭浏览器的所有窗口。</h1>
    </div>
</template>

<script>

export default {
    methods: {
        exit() {
            setTimeout(() => {
                window.location.href = '/'
            }, 2000);
        }
    },
    created() {
        this.exit()
    }

}
</script>

<style lang="less" scoped>
#loginout {
    margin: 100px;
    text-align: center;
}
</style>