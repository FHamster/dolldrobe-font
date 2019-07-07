<template>
    <el-container>

        <!--                    @open="handleOpen"-->
        <!--                    @close="handleClose"-->


        <!--                :default-active="activeIndex2"-->

        <el-aside style="width: 60px">


            <el-menu
                    default-active="2"
                    background-color="#fff"
                    text-color="#545c64"
                    :collapse="true"
                    style="width: 59px"
                    active-text-color="#ffd04b"
                    router>

                <el-menu-item index="1">
                    <i class="el-icon-location"></i>
                </el-menu-item>

                <el-menu-item index="ShoppingBag">
                    <i class="el-icon-shopping-cart-full"></i>
                    <span slot="title">我的购物车</span>
                </el-menu-item>
                <el-menu-item index="3">
                    <i class="el-icon-goods"></i>
                    <span slot="title">已购买的宝贝</span>
                </el-menu-item>
                <el-submenu index="4">
                    <template slot="title">
                        <i class="el-icon-tickets"></i>
                    </template>
                    <el-menu-item-group>
                        <template slot="title">我的发票</template>
                        <el-menu-item index="4-1" style="font-size: 10px">开票信息</el-menu-item>
                        <el-menu-item index="4-2" style="font-size: 10px">发票管理</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-menu-item index="BookMark">
                    <i class="el-icon-star-off"></i>
                    <span slot="title">我的收藏</span>
                </el-menu-item>
                <el-menu-item index="6">
                    <i class="el-icon-trophy-1"></i>
                    <span slot="title">我的积分</span>
                </el-menu-item>
                <el-menu-item index="7">
                    <i class="el-icon-money"></i>
                    <span slot="title">我的优惠信息</span>
                </el-menu-item>
                <el-menu-item index="8">
                    <i class="el-icon-document-checked"></i>
                    <span slot="title">评价管理</span>
                </el-menu-item>
                <el-menu-item index="9">
                    <i class="el-icon-view"></i>
                    <span slot="title">我的足迹</span>
                </el-menu-item>
                <el-submenu index="10">
                    <template slot="title">
                        <i class="el-icon-warning-outline"></i>
                    </template>
                    <el-menu-item-group>
                        <template slot="title">退款维权</template>
                        <el-menu-item index="10-1" style="font-size: 10px">退款管理</el-menu-item>
                        <el-menu-item index="10-2" style="font-size: 10px">投诉管理</el-menu-item>
                        <el-menu-item index="10-3" style="font-size: 10px">举报管理</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>

            </el-menu>
        </el-aside>
        <el-main style="padding: 0">
            <el-container>
                <el-header style="padding: 0">
                    <el-menu

                            mode="horizontal"
                            background-color="#545c64"
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
                                <template slot="title" class="userCenter_titleMenu">账户设置</template>
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
                            <div style="float: left; ">
                                <el-input class="userCenter_search  " prefix-icon="el-icon-search" type="text"
                                          v-model="from.search"
                                          :clearable="true" size=mini></el-input>
                                <el-button class="userCenter_btnSearch" size="small" plain @click="user_search">搜索
                                </el-button>
                            </div>
                        </div>
                    </el-menu>
                </el-header>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-main>


    </el-container>
</template>

<script>
    export default {
        name: "UserCenter",
        data: function () {
            return {
                from: {
                    search: '',
                },
            }
        },
        methods: {
            user_search() {

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
        white-space: nowrap;
    }

    .userCenter_titleMenu_font {
        font-size: 13px;
    }

    .userCenter_search {
        width: 200px;
        height: 25px;
        margin-top: 15px;
        border-radius: 0px;
        border-right: 0px;
    }

    .userCenter_btnSearch {
        width: 72px;
        height: 28px;
        padding: 7px;
        margin-top: 15px;
        margin-right: 25px;
        background-color: aliceblue;
        border-radius: 0px;
        float: right;
        border-left: 0px;
    }
</style>
