<template>
    <div id="login">
        <h1>登录</h1>
        <div class="input">
            <div class="username">
                <el-input placeholder="输入用户名" v-model="userinput.username">
                    <i slot="prefix" class="el-input__icon el-icon-user"></i>
                </el-input>
            </div>
            <div class="password">
                <el-input placeholder="输入密码" v-model="userinput.password" show-password>
                    <i slot="prefix" class="el-input__icon el-icon-lock"></i>
                </el-input>
            </div>
        </div>
        <div class="myd">
            <el-checkbox v-model="userinput.protocol">我已认证阅读并同意《LiyxiTeam用户协议》</el-checkbox>
        </div>
        <div class="btns">
            <el-button type="primary" :disabled="!userinput.protocol">登录</el-button>
            <el-button type="info">忘记密码</el-button>
            <el-button type="warning">注册账号</el-button>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            userinput: {
                username: '',
                password: '',
                protocol: false
            }
        }
    }
}
</script>

<style lang="less" scoped>
#login {
    max-width: 600px;
    margin: 100px auto;
    // background-color: pink;

    .input {
        div {
            margin: 15px;
        }
    }

    .myd {
        margin: 15px;
    }
}
</style>