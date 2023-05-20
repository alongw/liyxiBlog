<template>
    <div id="article">
        <div class="title">
            <h1>文章标题</h1>
        </div>
        <div class="viewwindow"><v-md-editor class="view" :value="articleItem" mode="preview"></v-md-editor></div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            articleItem: "# 标题测试  \n测试测试测试\n测试测试测试\n测试测试测试\n测试测试测试\n测试测试测试\n测试测试测试\n测试测试测试\n测试测试测试\n测试测试测试\n测试测试测试",
        }
    }
}
</script>

<style lang="less" scoped>
#article {
    .title {
        text-align: center;
        margin: 50px;
    }

    .viewwindow {
        border-bottom: 1px solid #E4E4E4;
    }

}
</style>