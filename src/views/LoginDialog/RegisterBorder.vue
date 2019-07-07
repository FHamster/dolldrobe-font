<template>
    <div class="register-border">
        <el-form :model="reg" status-icon :rules="rules">
            <el-form-item label="帐号" :label-width="formLabelWidth">
                <el-input v-model="reg.uAccountnumber" autocomplete="off" type="text"
                          prefix-icon="el-icon-user"
                          class="login_input_broder"
                          placeholder="会员名/手机号">

                </el-input>
            </el-form-item>
            <el-form-item label="密码" :label-width="formLabelWidth" prop="uPsw">
                <el-input v-model="reg.uPsw" autocomplete="off" type="text"
                          prefix-icon="el-icon-unlock"
                          class="login_input_broder"
                          placeholder="请输入密码"
                          show-password
                ></el-input>
            </el-form-item>
            <el-form-item label="重复密码" :label-width="formLabelWidth" prop="uRePsw">
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
        <el-button type="warning" :round="true" class="login_btn">注册</el-button>
    </div>
</template>

<script>
    import {validatePass, validatePass2} from "./MyValidator";

    export default {
        name: "RegisterBorder",
        data() {
            return {
                //注册表单
                reg: {
                    uAccountnumber: '',
                    uRePsw: '',
                    phone: '',
                    mail: ''
                },

                rules: {
                    uPsw: [
                        {required: true, validator: validatePass, trigger: 'blur'}
                    ],
                    uRePsw: [
                        {required: true, validator: validatePass2, trigger: 'blur'}
                    ]
                }
            };
        },
    }
</script>

<style scoped>
    .login_input_broder {
        width: 80%;
    }

    .register-border {
        /*width: 400px;*/
        /*height: 200px;*/

        /*align-self: center;*/
        display: flex;
        flex-direction: column;
        /*justify-content: center;*/
        align-items: center;

        /*background-color: rgba(230,232,234,0.8)*/
    }


    .login_btn {
        width: 50%;
        font-size: 20px;
        align-self: center;
    }

</style>
