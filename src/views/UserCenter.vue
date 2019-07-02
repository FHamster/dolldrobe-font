<template>

    <el-container>


        <el-side style="width: 44px">
            <el-menu
                    default-active="2"
                    class="el-menu-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    background-color="#545c64"
                    text-color="#fff"
                    collapse=false

                    active-text-color="#ffd04b">
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>导航一</span>
                    </template>
                    <el-menu-item-group>
                        <template slot="title">分组一</template>
                        <el-menu-item index="1-1">选项1</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                        <el-menu-item index="1-3">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="1-4">
                        <template slot="title">选项4</template>
                        <el-menu-item index="1-4-1">选项1</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                    <span slot="title">导航二</span>
                </el-menu-item>
                <el-menu-item index="3" disabled>
                    <i class="el-icon-document"></i>
                    <span slot="title">导航三</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <i class="el-icon-setting"></i>
                    <span slot="title">导航四</span>
                </el-menu-item>
            </el-menu>
        </el-side>
        <el-container>
            <el-header>
                <el-menu
                        :default-active="activeIndex2"
                        class="el-menu-demo"
                        mode="horizontal"
                        @select="handleSelect"
                        background-color="#698B69"
                        text-color="#fff"
                        active-text-color="black"
                        router
                >
                    <div class="my_logo">
                        我的衣橱
                    </div>
                    <el-menu-item index="UserCenter" class="userCenter_title">首页</el-menu-item>
                    <el-menu-item index="1">
                        <el-submenu index="2">
                            <template slot="title" class="userCenter_titleMenu" >账户设置</template>
                            <el-submenu index="2-1">
                                <template slot="title" class="userCenter_titleMenu ">安全设置</template>
                                <el-menu-item index="2-1-1">修改登录密码</el-menu-item>
                                <el-menu-item index="2-1-2">手机绑定</el-menu-item>
                                <el-menu-item index="2-1-3">密保问题设置</el-menu-item>
                                <el-menu-item index="2-1-4">其他</el-menu-item>
                            </el-submenu>
                            <el-submenu index="2-2">
                                <template slot="title">个人设置</template>
                                <el-menu-item index="2-1-1">收获地址</el-menu-item>
                                <el-menu-item index="2-1-2">修改头像、昵称</el-menu-item>
                                <el-menu-item index="2-1-3">消息提醒设置</el-menu-item>
                            </el-submenu>
                        </el-submenu>
                    </el-menu-item>
                    <el-menu-item index="3" class="userCenter_title">消息中心</el-menu-item>
                    <div style="width: 300px;float:right;height: 29.6px">
                        <!--<div class="userCenter_search">-->
                        <el-input  class="userCenter_search" prefix-icon="el-icon-search" type="text" v-model="from.search"
                        clearable="true" size="small" > </el-input>
                        <!--</div>-->
                        <el-button class="userCenter_btnSearch"  size="small" plain @click="user_search">搜索</el-button>
                    </div>
                </el-menu>
            </el-header>
        </el-container>


    </el-container>

</template>

<script>
    export default {
        name: "UserCenter",
        data:function () {
            return{
                from:{
                    search:'',
                },
            }
        },
        methods:{
            user_search(){

            },
        }
    }
</script>

<style scoped>

    .userCenter_titleMenu {
        font-size: 16px;
        color: #3aac8a;
    }

    .userCenter_title {
        font-size: 16px;
        color: black;
    }

    .my_logo {
        float: left;
        width: 16%;
        font-size: 40px;
        position: relative;
        color: rgba(230, 232, 234, 0.8);
        margin-top: 8px;
        margin-left: 10px;
        overflow: hidden;
        font-family: 华文琥珀;
    }

    .userCenter_titleMenu_font {
        font-size: 13px;
    }
    .userCenter_search{
        width: 200px;
        height: 25px;
        margin-top: 15px;
        border-radius: 0px;
        border-right: 0px;
    }
    .userCenter_btnSearch{
        width: 72px;
        height: 29.6px;
        padding: 7px;
        margin-top: 15px;
        margin-right: 25px;
        background-color: aliceblue;
        border-radius: 0px;
        float: right;
        border-left: 0px;
    }
</style>
