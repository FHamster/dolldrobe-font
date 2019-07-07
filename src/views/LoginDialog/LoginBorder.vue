<template>
    <el-container class="login-border">
        <el-form :model="form" label-width="50px">
            <el-form-item label="帐号">
                <el-input v-model="form.uAccountnumber"
                          autocomplete="off"
                          type="text"
                          prefix-icon="el-icon-user"
                          placeholder="会员名/手机号">

                </el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="form.uPsw"
                          autocomplete="off"
                          type="text"
                          prefix-icon="el-icon-unlock"
                          placeholder="请输入密码" show-password>
                </el-input>
            </el-form-item>
        </el-form>

        <el-button type="primary" @click="login" :round="true" class="login_btn">登录</el-button>
    </el-container>
</template>

<script>
    import axios from 'axios'

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
                //then成功时候的回传
                //err出现异常的回传
                    .then((res) => {
                        let token = res.data.tokenid;
                        this.$store.commit("setToken", token);
                        let acc = res.data.uAccountnumber;
                        this.$store.commit("setAccount", acc);
                        alert('success');
                        //清空输入框
                        this.uAccountnumber = '';
                        this.uPsw = '';

                    })
                    .catch((err) => {
                        alert(err.message);
                    });
            }
        },
    }
</script>

<style scoped>
    .login_btn {
        width: 50%;
        font-size: 20px;
        /*align-self: center;*/
    }

    .login_input_broder {
        width: 80%;
    }

    .login-border {
        display: flex;
        flex-direction: column;
    }
</style>
