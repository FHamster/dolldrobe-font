<template>
    <div class="register-border">
        <el-form :model="reg" status-icon :rules="rules" label-width="80px" ref="regForm">
            <el-form-item label="注册帐号" prop="uAccountnumber_reg">
                <el-input v-model="reg.uAccountnumber_reg" autocomplete="off" type="text"
                          prefix-icon="el-icon-user"
                          class="register_input_broder"
                          placeholder="注册帐号"
                          maxlength="20"
                          show-word-limit
                          clearable>
                </el-input>
            </el-form-item>
            <el-form-item label="登录密码" prop="uPsw">
                <el-input v-model="reg.uPsw_reg" autocomplete="off" type="text"
                          prefix-icon="el-icon-unlock"
                          class="register_input_broder"
                          placeholder="请输入密码"
                          show-password
                          clearable>
                </el-input>
            </el-form-item>
            <el-form-item label="重复密码" prop="uRePsw">
                <el-input v-model="reg.uRePsw" autocomplete="off" type="text"
                          prefix-icon="el-icon-unlock"
                          class="register_input_broder"
                          placeholder="请重复密码"
                          show-password
                          clearable>
                </el-input>
            </el-form-item>
            <el-form-item label="绑定手机" prop="phone">
                <el-input v-model="reg.phone" autocomplete="off" type="text"
                          prefix-icon="el-icon-mobile-phone"
                          class="register_input_broder"
                          placeholder="请输入手机号">

                </el-input>
            </el-form-item>
            <el-form-item label="绑定邮箱" prop="mail">
                <el-input v-model="reg.mail" autocomplete="off" type="text"
                          prefix-icon="el-icon-message"
                          class="register_input_broder"
                          placeholder="请输入邮箱">

                </el-input>
            </el-form-item>

            <div class="flex-row">


                <el-button class="register_btn"
                           :round="true"
                           @click="resetForm('reg')"
                           style="margin-left: 20px;">
                    重置
                </el-button>
                <el-button native-type="submit"
                           :round="true"
                           type="primary"
                           class="register_btn"
                           @click="registerUser">
                    注册
                </el-button>

            </div>
        </el-form>

    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "RegisterBorder",
        data() {
            //重复登录密码校验规则
            const validateRePsw = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.reg.uPsw_reg) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            //校验用户名重复
            const validateAcc = (rule, value, callback) => {
                // console.log(this.reg.uAccountnumber_reg);
                axios.get('api/User/UserAccisUnique', {

                    params: {
                        acc: this.reg.uAccountnumber_reg
                    }
                })
                    .then(res => {
                        // console.log(res.data)
                        if (res.data) {
                            callback();
                        } else {
                            callback(new Error('重复的用户名'))
                        }
                    })
            };
            return {
                //注册表单
                reg: {
                    uAccountnumber_reg: '',
                    uPsw_reg: '',
                    uRePsw: '',
                    phone: '',
                    mail: ''
                },
                rules: {
                    uAccountnumber_reg: [
                        {required: true, message: '请输入注册账号', trigger: 'blur'},
                        {min: 6, max: 20, message: '帐号长度应在6到20位', trigger: 'blur'},
                        {pattern: '^[a-zA-Z]\\w{5,19}$', message: '以字母开头 只包含字母 数字和下划线'},
                        {required: true, validator: validateAcc, trigger: 'blur'}
                    ],
                    uPsw: [
                        {required: true, message: '请输入登录密码', trigger: 'blur'},
                        {min: 6, max: 20, message: '密码长度应在6到20位', trigger: 'blur'},
                        {pattern: '^[a-zA-Z]\\w{5,19}$', message: '以字母开头 只包含字母 数字和下划线'}],
                    uRePsw: [
                        {required: true, validator: validateRePsw, trigger: 'blur'}
                    ],
                    phone: [
                        {required: true, message: '请输入手机号码', trigger: 'blur'},
                        {
                            pattern: '^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\\d{8}$',
                            message: '不合法的手机号'
                        }],
                    mail: [
                        {required: true, message: '请输入绑定邮箱', trigger: 'blur'},
                        {
                            pattern: '^[a-zA-Z_0-9]{1,}[0-9]{0,}@(([a-zA-z0-9]-*){1,}\\.){1,3}[a-zA-z\\-]{1,}$',
                            message: '不合法的邮箱'
                        }
                    ]
                }
            };
        },
        methods: {
            registerUser() {
                if (this.submitForm("regForm")) {
                    axios.post('api/User/User', {
                        uAccountnumber: this.reg.uAccountnumber_reg,
                        uPsw: this.reg.uPsw_reg,
                        uTel: this.reg.phone,
                        uEmail: this.reg.mail
                    }).then(res => {
                        this.$message.success('注册成功啦');
                    }).catch(err => {
                        this.$message.error('出了些问题注册失败了');

                    });
                } else {
                    this.resetForm("regForm");
                    this.$message.error('出了些问题注册失败了');
                }
            },
            submitForm(formName) {
                return this.$refs[formName].validate();
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            mounted() {
                // this.resetForm("regForm");
            }
        },
    };
</script>

<style scoped>
    .register_input_broder {
        width: 90%;
    }

    .register-border {

        display: flex;
        flex-direction: column;
        align-items: center;

    }

    .register_btn {
        width: 50%;
        font-size: 20px;
        align-self: center;
    }
</style>
