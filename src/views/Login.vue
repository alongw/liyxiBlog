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
                <el-checkbox v-model="userinput.keeplogin">保持我的登录状态（请勿在公共的设备上勾选）</el-checkbox>

            </div>
        </div>
        <div class="myd">
            <el-checkbox v-model="userinput.protocol">我已认证阅读并同意《LiyxiTeam用户协议》</el-checkbox>
        </div>
        <div class="btns">
            <el-button type="primary" :disabled="!userinput.protocol" @click="yzm"
                v-loading.fullscreen.lock="fullscreenLoading">登录</el-button>
            <el-button type="info">忘记密码</el-button>
            <el-button type="warning">注册账号</el-button>
        </div>

    </div>
</template>

<script>
import router from '@/router';
import axios from '@/util/request'
export default {
    data() {
        return {
            userinput: {
                username: '',
                password: '',
                protocol: false,
                keeplogin: false
            },
            fullscreenLoading: false
        }
    },
    methods: {
        tcaptchaCallback(res) {
            // 返回结果
            // ret         Int       验证结果，0：验证成功。2：用户主动关闭验证码。
            // ticket      String    验证成功的票据，当且仅当 ret = 0 时 ticket 有值。
            // CaptchaAppId       String    验证码应用ID。
            // bizState    Any       自定义透传参数。
            // randstr     String    本次验证的随机串，请求后台接口时需带上。
            console.log('callback:', res);
            // res（用户主动关闭验证码）= {ret: 2, ticket: null}
            // res（验证成功） = {ret: 0, ticket: "String", randstr: "String"}
            // res（客户端出现异常错误 仍返回可用票据） = {ret: 0, ticket: "String", randstr: "String",  errorCode: Number, errorMessage: "String"}
            if (res.ret == 0) {
                // 用户通过验证 向自己的服务器发送请求
                axios.post('/api/public/login', {
                    ticket: res.ticket,
                    randstr: res.randstr,
                    username: this.userinput.username,
                    password: this.userinput.password,
                    keeplogin: this.userinput.keeplogin
                }).then(res2 => {
                    if (res2.data.status == 2001 || res2.data.status == 2002) {
                        this.$notify({
                            title: '成功',
                            message: '登录成功',
                            type: 'success'
                        });
                        window.localStorage.setItem('token', res2.data.token)
                        return this.$router.push('/user')
                    }
                    this.$notify.error({
                        title: '错误',
                        message: `登录失败：${res2.data.msg}`
                    });
                    this.fullscreenLoading = false
                }).catch(err => {
                    // 请求发送错误
                    this.$notify.error({
                        title: '错误',
                        message: `登录失败：${err.message}`
                    });
                });
            }
        },
        yzm() {
            // 登录参数不能为空
            if (!this.userinput.username || !this.userinput.password) {
                return this.$notify.error({
                    title: '错误',
                    message: `登录失败：请正确填写表单`
                });
            }
            this.fullscreenLoading = true
            const captchaw = new TencentCaptcha('2046626881', this.tcaptchaCallback);
            captchaw.show();
        },
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