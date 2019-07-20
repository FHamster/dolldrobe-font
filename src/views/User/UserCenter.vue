<template>
    <el-container>

        <!--                    @open="handleOpen"-->
        <!--                    @close="handleClose"-->


        <!--                :default-active="activeIndex2"-->

        <el-aside width="61px" style="background-image: linear-gradient(to left, #f5f7fa 0%, #c3cfe2 100%); height: 560px" ref="aleft" >
            <el-menu
                    default-active="2"
                    text-color="#547A28"
                    :collapse="true"
                    style="width: 60px;"
                    class="back"
                    :hidden="isPainter"
                    active-text-color="#B3748D"
                    router>

                <el-menu-item index="UserAddress"
                              @click="changeHidden"
                              class="back">
                    <i class="el-icon-location"></i>
                    <span slot="title">我的地址</span>
                </el-menu-item>

                <el-menu-item index="ShoppingBag"
                              @click="changeHidden"
                              class="back">
                    <i class="el-icon-shopping-cart-full"></i>
                    <span slot="title">我的购物车</span>
                </el-menu-item>
                <el-menu-item index="GoodOrder"
                              @click="changeHidden"
                              class="back">
                    <i class="el-icon-goods "></i>
                    <span slot="title">我的订单</span>
                </el-menu-item>
                <el-submenu index="4" class="back">
                    <template slot="title">
                        <i class="el-icon-tickets"></i>
                    </template>
                    <el-menu-item-group class="back">
                        <template slot="title">我的发票</template>
                        <el-menu-item index="4-1" style="font-size: 10px" class="back">开票信息</el-menu-item>
                        <el-menu-item index="4-2" style="font-size: 10px" class="back">发票管理</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <!--<el-menu-item index="4">-->
                <!--<i class="el-icon-tickets"></i>-->
                <!--<span slot="title">我的订单</span>-->
                <!--</el-menu-item>-->
                <el-menu-item index="BookMark" class="back">
                    <i class="el-icon-star-off"></i>
                    <span slot="title">我的收藏</span>
                </el-menu-item>
                <el-menu-item index="6" class="back">
                    <i class="el-icon-trophy-1"></i>
                    <span slot="title">我的积分</span>
                </el-menu-item>
                <el-menu-item index="7" class="back">
                    <i class="el-icon-money"></i>
                    <span slot="title">我的优惠信息</span>
                </el-menu-item>
                <el-menu-item index="8" class="back">
                    <i class="el-icon-document-checked"></i>
                    <span slot="title">评价管理</span>
                </el-menu-item>
                <el-menu-item index="9" class="back">
                    <i class="el-icon-view"></i>
                    <span slot="title">我的足迹</span>
                </el-menu-item>
                <el-submenu index="10" class="back">
                    <template slot="title">
                        <i class="el-icon-warning-outline"></i>
                    </template>
                    <el-menu-item-group class="back">
                        <template slot="title">退款维权</template>
                        <el-menu-item index="10-1" style="font-size: 10px">退款管理</el-menu-item>
                        <el-menu-item index="10-2" style="font-size: 10px">投诉管理</el-menu-item>
                        <el-menu-item index="10-3" style="font-size: 10px">举报管理</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>

            </el-menu>
        </el-aside>

        <el-main>
            <el-container>
                <el-header>
                    <el-menu
                            mode="horizontal"
                            style="background-image: linear-gradient(to right, #f5f7fa 0%, #eef1f5 100%);"
                            text-color="#547A28"
                            active-text-color="#B3748D"
                            router
                            class="user-center-bar">
                        <div class="my_logo">
                            我的
                            <del>冰箱</del>
                            ->衣橱
                        </div>
                        <el-menu-item index="UserCenter">首页</el-menu-item>

                        <el-submenu index="2">
                            <template slot="title">账户设置</template>
                            <el-submenu index="2-1">
                                <template slot="title">安全设置</template>
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

                        <el-menu-item index="3" class="userCenter_title">消息中心</el-menu-item>

                        <div class="search" style="width: 300px;float:right!important;height: 29.6px">
                            <div class="panel">
                                <el-input class="userCenter_search"
                                          prefix-icon="el-icon-search"
                                          type="text"
                                          v-model="from.search"
                                          :clearable="true"
                                          size=mini>
                                </el-input>
                                <el-button class="userCenter_btnSearch"
                                           size="small"
                                           plain
                                           @click="user_search">搜索
                                </el-button>
                            </div>
                        </div>
                        <!--<di>-->
                        <!--<el-switch-->
                        <!--&gt;-->
                        <!--</el-switch>-->
                        <!--</di>-->
                    </el-menu>
                </el-header>
                <el-main>
                    <router-view></router-view>

                </el-main>
            </el-container>
        </el-main>
        <el-aside width="61px" ref="aright"
                  style="height:285px ; float: right;background-image: linear-gradient(to right, #f5f7fa 0%, #c3cfe2 100%);">
            <div style="height: 61px" class="back2">
                <el-tooltip class="item" effect="dark" content="切换画手" placement="left">
                    <el-switch
                            v-model="isPainter"
                            active-color="#13ce66"
                            inactive-color="#888888"
                            style="z-index: 10;margin-left: 10px;margin-top: 20px"
                    >
                    </el-switch>
                </el-tooltip>


            </div>

            <el-menu
                    default-active="2"
                    text-color="#547A28"
                    :collapse="true"
                    style="width: 60px;"
                    class="back2"
                    active-text-color="#B3748D"
                    :hidden="!isPainter"
                    router>

                <el-menu-item index="5" class="back2">
                    <i class="el-icon-user"></i>
                    <span slot="title">个人中心</span>
                </el-menu-item>
                <el-menu-item index="1"
                              @click="changeHidden"
                              class="back2">
                    <i class="el-icon-picture-outline"></i>
                    <span slot="title">发布画稿</span>
                </el-menu-item>
                <el-submenu index="4" class="back2">
                    <template slot="title">
                        <i class="el-icon-bangzhu"></i>
                    </template>
                    <el-menu-item-group class="back2">
                        <template slot="title">画稿控制</template>
                        <el-menu-item index="4-1" style="font-size: 10px" class="back2">修改画稿</el-menu-item>
                        <el-menu-item index="4-2" style="font-size: 10px" class="back2">画稿状态</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <!--<el-menu-item index="4">-->
                <!--<i class="el-icon-tickets"></i>-->
                <!--<span slot="title">我的订单</span>-->
                <!--</el-menu-item>-->

                <el-menu-item index="6" class="back2">
                    <i class="el-icon-star-off"></i>
                    <span slot="title">我的关注</span>
                </el-menu-item>



            </el-menu>
        </el-aside>

    </el-container>
</template>

<script>
    export default {
        name: "UserCenter",
        data: function () {
            return {
                isPainter: false,
                items: [{
                    url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563382908&di=c8042cc7a0825223dc848cb101c51b2a&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.rmb.bdstatic.com%2Fcd2476300bbad8dfcfff1d277b79401a.jpeg'
                },
                    {
                        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562788315988&di=5c03425786b287658469608f493ddc91&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201801%2F13%2F20180113215940_VTkFe.jpeg'
                    },
                    {
                        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562788493857&di=95900b26cd7c834bdd6913e1edd9b9bc&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F9%2F54362d63810ea.jpg'
                    },
                ],
                isHidden: false,
                from: {
                    search: '',
                },
            }
        },
        methods: {
            user_search() {

            },
            changeHidden() {
                this.isHidden = true
            },

        }
    }
</script>

<style scoped>

    .userCenter_titleMenu {

    }

    .userCenter_title {

    }

    .my_logo {
        /*float: left;*/
        /*width: 16%;*/
        font-size: 40px;
        color: #9DBC7A;
        margin-top: 10px;
        margin-left: 10px;
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
        border-radius: 0;
        border-right: 0;
    }

    .userCenter_btnSearch {
        width: 72px;
        height: 28px;
        padding: 7px;
        margin-top: 15px;
        margin-right: 25px;
        background-color: #8BAAFF;
        border-radius: 0;
        float: right;
        border-left: 0;
    }

    .el-main {
        padding: 0;
    }

    .el-aside {
        padding: 0;
        width: 60px;
    }

    .el-header {
        padding: 0;
    }

    .panel {
        display: flex;
        float: right;
        flex-direction: row;
    }

    .user-center-bar {
        display: flex;
        flex-direction: row;
        /*justify-content: center;*/
        /*align-self: center;*/
    }

    .back {
        background-image: linear-gradient(to left, #f5f7fa 0%, #c3cfe2 100%);
    }

    .back2 {
        background-image: linear-gradient(to right, #f5f7fa 0%, #c3cfe2 100%);
    }

    .search {
        position: absolute;
        right: 0;
    }
</style>
