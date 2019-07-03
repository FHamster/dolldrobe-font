<template>
    <el-dialog title="登陆" :visible.sync="dialogFormVisible" width="20%">
        <div class="login_border">
            <el-form :model="form">
                <el-form-item label="帐号" :label-width="formLabelWidth">
                    <el-input v-model="form.uAccountnumber" autocomplete="off" type="text" prefix-icon="el-icon-user"
                              class="login_input_broder"
                              placeholder="会员名/手机号"></el-input>
                </el-form-item>
                <el-form-item label="密码" :label-width="formLabelWidth">
                    <el-input v-model="form.uPsw" autocomplete="off" type="text" prefix-icon="el-icon-unlock"
                              class="login_input_broder"
                              placeholder="请输入密码" show-password></el-input>
                </el-form-item>

                <!--<el-collapse-transition>-->
                <!--<div :v-show="regshow">-->
                <!--<el-form-item label="密码" :label-width="formLabelWidth">-->
                <!--<el-select v-model="form.uPsw" placeholder="请选择活动区域">-->
                <!--<el-option label="区域一" value="shanghai"></el-option>-->
                <!--<el-option label="区域二" value="beijing"></el-option>-->
                <!--</el-select>-->
                <!--</el-form-item>-->
                <!--</div>-->
                <!--</el-collapse-transition>-->
            </el-form>


            <div slot="footer" class="dialog-footer" align="center">
                <!--<el-button @click="dialogFormVisible=false" round="true">取 消</el-button>-->
                <!--            <el-button @click="changeRegshow">显示</el-button>-->
                <el-button type="primary" @click="login" :round=true class="login_btn">登录
                </el-button>
            </div>
        </div>
        <div class=" login_foot">
            <el-link icon="el-icon-key" style="margin-right: 5px">忘记密码</el-link>
            <el-link icon="el-icon-s-custom" style="margin-left: 5px">免费注册</el-link>
        </div>
    </el-dialog>

</template>

<script>
    import axios from 'axios'
    import jwt from "jsonwebtoken";

    export default {
        name: "LoginDialog",
        props: {
            IsVis: {
                type: Boolean,
                default: false
            }
        },
        data: function () {
            return {
                dialogFormVisible: false,
                form: {
                    uAccountnumber: '',
                    uPsw: '',

                },
                formLabelWidth: '80px'
            }
        },
        computed: {},
        methods: {
            changeRegshow: function () {
                this.regshow = !this.regshow;
            },
            login: function () {
                //使用jwt进行加密
                // 要生成token的载荷
                // let payload = this.form;
                // 这是加密的key（密钥）
                let secret = "123";
                // 1小时过期
                this.form.uPsw = jwt.sign(
                    {psw: this.form.uPsw},
                    secret,
                    {expiresIn: 60 * 60 * 1}
                );


                axios.post('/api/token/token', this.form)
                //then成功时候的回传
                //err出现异常的回传
                    .then((res) => {


                        let token = res.data.tokenid;
                        this.$store.commit("setToken", token);
                        let acc = res.data.uAccountnumber;
                        this.$store.commit("setAccount", acc);
                        alert('success')
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
    .login_border {
        width: 400px;
        height: 200px;
        /*background-color: rgba(230,232,234,0.8)*/
    }

    .login_btn {
        width: 50%;
        font-size: 20px;
    }

    .login_input_broder {
        width: 80%;
    }

    .login_foot {
        float: right;
        font-size: 12px;
    }
</style>
