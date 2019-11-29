<template>
    <div class="logindia">
        <el-collapse-transition v-if="!isRegisterShow">
            <!--登陆border-->
            <LoginBorder ></LoginBorder>
        </el-collapse-transition>
        <el-collapse-transition v-else>
            <!--注册border-->
            <RegisterBorder></RegisterBorder>
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
        data() {
            return {
                isRegisterShow: false
            }
        }
    };
</script>

<style scoped>
    .mymagin {
        margin-right: 5px
    }


    .footer {
        padding-top: 20px;
        align-self: end;
    }
</style>
