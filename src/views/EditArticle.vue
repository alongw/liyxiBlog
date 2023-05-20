<template>
    <div id="editarticle">
        <div class="title">
            <h1>编辑文章</h1>
        </div>
        <div class="article-info">
            文章标题：<el-input v-model="aritcleInfo.title"></el-input>
            <br><br>
            浏览权限：<el-select v-model="aritcleInfo.permission" placeholder="请选择">
                <el-option v-for="item in permissionList" :key="item.permission" :label="item.msg" :value="item.permission">
                </el-option>
            </el-select>
            <br><br>
            密码保护：<el-switch v-model="aritcleInfo.usePassword" active-color="#13ce66">
            </el-switch><el-input placeholder="请输入密码" v-model="aritcleInfo.password" show-password
                v-if="aritcleInfo.usePassword"></el-input>

        </div>
        <div class="editipt">
            文章内容：
            <v-md-editor v-model="aritcleInfo.text" height="500px"></v-md-editor>
        </div>
        <div class="pushbtn">
            <el-button type="success">发布</el-button>
            <el-button type="warning">放弃修改</el-button>
            <el-button type="danger" class="delete">删除文章</el-button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            aritcleInfo: {
                title: '测试标题',
                text: '# 标题测试  \n测试测试测试\n测试测试测试\n测试测试测试\n测试测试测试\n测试测试测试\n测试测试测试\n测试测试测试\n测试测试测试',
                permission: 0,
                usePassword: false,
                password: 'admin123'
            },
            permissionList: [
                {
                    permission: 0,
                    msg: '游客'
                },
                {
                    permission: 1,
                    msg: '登录用户'
                },
                {
                    permission: 2,
                    msg: '仅自己'
                }
            ]
        }
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