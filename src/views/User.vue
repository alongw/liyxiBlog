<template>
    <div id="user">
        <div class="title">
            <h1>我的文章</h1>
        </div>
        <ul>
            <li>
                <div class="info">
                    <h3>文章标题</h3>
                    <p>文章简介文章简介文章简介文章简介文章简介文章简介文章简介</p>
                </div>
                <el-button type="primary" icon="el-icon-edit" circle></el-button>
            </li>
            <li>
                <div class="info">
                    <h3>文章标题</h3>
                    <p>文章简介文章简介文章简介文章简介文章简介文章简介文章简介</p>
                </div>
                <el-button type="primary" icon="el-icon-edit" circle></el-button>
            </li>
            <li>
                <div class="info">
                    <h3>文章标题</h3>
                    <p>文章简介文章简介文章简介文章简介文章简介文章简介文章简介</p>
                </div>
                <el-button type="primary" icon="el-icon-edit" circle></el-button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
#user {
    max-width: 1000px;
    margin: 50px auto;
    background-color: pink;

    ul {
        margin-top: 20px;

        li {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            margin: 15px;

            h3 {
                margin-right: 15px;
            }
        }
    }
}
</style>