<template>
    <el-dialog title="登陆" :visible.sync="dialogFormVisible" width="500px">

        <!--登陆border-->
        <el-collapse-transition>
            <div class="border" v-show="!isRegisterShow">


                <el-form :model="form">
                <span>
                <el-form-item label="帐号" :label-width="formLabelWidth">
                    <el-input v-model="form.uAccountnumber" autocomplete="off" type="text"
                              prefix-icon="el-icon-user"
                              class="login_input_broder"
                              placeholder="会员名/手机号"></el-input>

                </el-form-item>
                </span>

                    <span>
                <el-form-item label="密码" :label-width="formLabelWidth">
                    <el-input v-model="form.uPsw" autocomplete="off" type="text" prefix-icon="el-icon-unlock"
                              class="login_input_broder"
                              placeholder="请输入密码" show-password>

                    </el-input>
                </el-form-item>
            </span>
                </el-form>


                <el-button type="primary" @click="login" :round="true" class="login_btn">登录</el-button>


            </div>
        </el-collapse-transition>
        <el-collapse-transition>
            <!--注册border-->
            <div class="border" v-show="isRegisterShow">
                <el-form :model="reg" :rules="rules">
                    <el-form-item label="帐号" :label-width="formLabelWidth">
                        <el-input v-model="reg.uAccountnumber" autocomplete="off" type="text"
                                  prefix-icon="el-icon-user"
                                  class="login_input_broder"
                                  placeholder="会员名/手机号">

                        </el-input>
                    </el-form-item>
                    <el-form-item label="密码" :label-width="formLabelWidth" prop="pass">
                        <el-input v-model="reg.uPsw" autocomplete="off" type="text"
                                  prefix-icon="el-icon-unlock"
                                  class="login_input_broder"
                                  placeholder="请输入密码" show-password></el-input>
                    </el-form-item>
                    <el-form-item label="重复密码" :label-width="formLabelWidth" prop="checkPass">
                        <el-input v-model="reg.uRePsw" autocomplete="off" type="text"
                                  prefix-icon="el-icon-unlock"
                                  class="login_input_broder"
                                  placeholder="请输入密码" show-password></el-input>
                    </el-form-item>
                    <el-form-item label="手机号" :label-width="formLabelWidth">
                        <el-input v-model="reg.phone" autocomplete="off" type="text"
                                  prefix-icon="el-icon-mobile-phone"
                                  class="login_input_broder"
                                  placeholder="请输入手机号"></el-input>
                    </el-form-item>
                    <el-form-item label="邮箱" :label-width="formLabelWidth">
                        <el-input v-model="reg.mail" autocomplete="off" type="text"
                                  prefix-icon="el-icon-message"
                                  class="login_input_broder"
                                  placeholder="请输入邮箱"></el-input>
                    </el-form-item>
                </el-form>
                <el-button type="warning" @click="changeRegisterShow" :round="true" class="login_btn">注册</el-button>
            </div>
        </el-collapse-transition>

        <span slot="footer" class="dialog-footer">
            <el-link icon="el-icon-key" class="mymagin">忘记密码</el-link>
            <el-link icon="el-icon-s-custom" class="mymagin" @click="changeRegisterShow">切换注册/登陆</el-link>
        </span>
    </el-dialog>
</template>

<script>
    import axios from 'axios'
    import ElCollapseTransition from "element-ui/lib/transitions/collapse-transition";
    // import jwt from "jsonwebtoken";

    export default {
        name: "LoginDialog",
        components: {ElCollapseTransition},
        props: {
            IsVis: {
                type: Boolean,
                default: false
            }
        },
        data: function () {
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.reg.checkPass !== '') {
                        this.$refs.reg.validateField('checkPass');
                    }
                    callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm.pass) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                dialogFormVisible: false,

                isRegisterShow: false,
                //登陆表单
                form: {
                    uAccountnumber: '',
                    uPsw: '',
                },
                //注册表单
                reg: {
                    uAccountnumber: '',
                    uPsw: '',
                    phone: '',
                    mail: ''
                },
                formLabelWidth: '80px',
                rules: {
                    pass: [
                        {validator: validatePass, trigger: 'blur'}
                    ],
                    checkPass: [
                        {validator: validatePass2, trigger: 'blur'}
                    ]
                }
            };
        },
        computed: {},
        methods: {

            changeRegisterShow() {
                this.isRegisterShow = !this.isRegisterShow;
            },


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
        watch: {
            IsVis: function (newValue) {
                this.dialogFormVisible = newValue;
            }
        },

    };
</script>

<style scoped>
    .border {
        /*width: 400px;*/
        /*height: 200px;*/

        /*align-self: center;*/
        display: flex;
        flex-direction: column;

        /*background-color: rgba(230,232,234,0.8)*/
    }

    .login_btn {
        width: 50%;
        font-size: 20px;
        align-self: center;
    }

    .login_input_broder {
        width: 80%;
    }

    .login_foot {
        float: right;
        font-size: 12px;

    }

    .mydialog {
        display: flex;
        flex-direction: column;
        align-self: center;
    }

    .mymagin {
        margin-right: 5px
    }
</style>
