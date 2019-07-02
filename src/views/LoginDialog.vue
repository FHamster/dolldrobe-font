<template>

    <el-dialog title="登陆" :visible.sync="dialogFormVisible" width="30%">
        <div class="login_border">
            <el-form :model="form">
                <el-form-item label="帐号" :label-width="formLabelWidth">
                    <el-input v-model="form.account" autocomplete="off" type="text" prefix-icon="el-icon-user"
                              class="login_input_broder"
                              placeholder="会员名/手机号"></el-input>
                </el-form-item>
                <el-form-item label="密码" :label-width="formLabelWidth">
                    <el-input v-model="form.psd" autocomplete="off" type="text" prefix-icon="el-icon-unlock"
                              class="login_input_broder"
                              placeholder="请输入密码" show-password></el-input>
                </el-form-item>

                <!--<el-collapse-transition>-->
                <!--<div :v-show="regshow">-->
                <!--<el-form-item label="密码" :label-width="formLabelWidth">-->
                <!--<el-select v-model="form.psd" placeholder="请选择活动区域">-->
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
                <el-button type="primary" @click="login" round="true" class="login_btn" v-on:click.native="login">登录
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
                    account: '',
                    psd: '',

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
                this.axios.post('/User/token', this.form)
                //then成功时候的回传
                //err出现异常的回传
                //     .then((res) => {
                //
                //     })
                //     .catch((err) => {
                //
                //     })

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
