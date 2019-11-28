<template>
    <el-container class="login-border" @keyup.enter.prevent="login">
        <el-form :model="form" label-width="80px" ref="loginForm">
            <el-form-item label="帐号">
                <el-input v-model="form.uAccountnumber"
                          autocomplete="off"
                          type="text"
                          prefix-icon="el-icon-user"
                          class="login_input_broder"
                          placeholder="会员名/手机号">

                </el-input>
            </el-form-item>
            <el-form-item label="密码" ref="psw">
                <el-input v-model="form.uPsw"
                          autocomplete="off"
                          class="login_input_broder"
                          type="text"
                          prefix-icon="el-icon-unlock"
                          placeholder="请输入密码" show-password>
                </el-input>
            </el-form-item>
        </el-form>

        <el-button type="primary"
                   @click="login"
                   :round="true" class="login_btn">登录</el-button>
    </el-container>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "LoginBorder",
        data() {
            return {
                //登陆表单
                form: {
                    uAccountnumber: '',
                    uPsw: '',
                },
            }
        },
        methods: {
            login: function () {
                //TODO 没实现

                /* //使用jwt进行加密
                 // 要生成token的载荷
                 // let payload = this.form;
                 // 这是加密的key（密钥）
                 let secret = "123";
                 // 1小时过期
                 this.form.uPsw = jwt.sign(
                     {
                         psw: this.form.uPsw,
                         iat: Math.floor(Date.now() / 1000) - 30
                     },
                     secret,
                     {algorithm: 'HS512'}
                 );*/

                // console.log(123);


                axios.post('/api/token/token', this.form)
                    .then((res) => {
                        //存储token
                        let token = res.data.tokenid;
                        this.$store.commit("setToken", token);
                        let acc = res.data.uAccountnumber;
                        this.$store.commit("setAccount", acc);

                        //清空输入框
                        this.resetForm();
                        this.$message.success('登录成功了啦');

                        this.$store.commit("loginVisToggle");
                        //强制刷新
                       /* this.$router.ruplace({
                            path: '../MainPage',
                            name: 'MainPage'
                        })*/
                    })
                    .catch((err) => {
                        // eslint-disable-next-line no-console
                        console.log(err);
                        this.$message.error('登录失败了嘤嘤嘤');
                        this.resetForm();
                    });
            },
            resetForm(){
                this.form.uAccountnumber ='';
                this.form.uPsw = '';
            }
        },
        mounted() {
            this.resetForm();
        },
    }
</script>

<style scoped>
    .login_btn {
        width: 50%;
        font-size: 20px;
        align-self: center;
    }


    .login_input_broder {
        width: 90%;
    }

    .login-border {
        display: flex;
        flex-direction: column;
        align-items: center;

    }
</style>
