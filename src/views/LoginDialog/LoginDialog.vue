<template>
    <div class="logindia">

        <el-collapse-transition>
            <!--登陆border-->
            <LoginBorder v-show="!isRegisterShow"></LoginBorder>
        </el-collapse-transition>
        <el-collapse-transition>
            <!--注册border-->
            <RegisterBorder v-show="isRegisterShow"></RegisterBorder>
        </el-collapse-transition>

        <div class="footer">
            <el-link icon="el-icon-key" class="mymagin">忘记密码</el-link>
            <el-link icon="el-icon-s-custom" class="mymagin" @click="isRegisterShow = !isRegisterShow">切换注册/登陆</el-link>
        </div>
    </div>
</template>

<script>

    import ElCollapseTransition from "element-ui/lib/transitions/collapse-transition";
    import LoginBorder from "./LoginBorder";
    import RegisterBorder from "./RegisterBorder";

    // import jwt from "jsonwebtoken";

    export default {
        name: "LoginDialog",
        components: {RegisterBorder, LoginBorder, ElCollapseTransition},
        /* props: {
             IsVis: {
                 type: Boolean,
                 default: false
             }
         },*/


        data() {
            return{
                isRegisterShow: false
            }
        }
    };
</script>

<style scoped>
    .mymagin {
        margin-right: 5px
    }

    .logindia {
        display: flex;
        flex-direction: column;
    }

    .footer {
        padding-top: 20px;
        align-self: end;
    }
</style>
