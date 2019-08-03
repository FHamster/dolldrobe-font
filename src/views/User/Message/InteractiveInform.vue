<template>
    <el-container style="margin: 0 auto;">
        <el-header class="site">
            <el-row class="title" type="flex" justify="center">
                <el-col span="3">中国大陆
                    <el-dropdown>
                        <i class="el-icon-arrow-down el-icon--right"></i>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>全球</el-dropdown-item>
                            <el-dropdown-item>中国大陆</el-dropdown-item>
                            <el-dropdown-item>香港</el-dropdown-item>
                            <el-dropdown-item>台湾</el-dropdown-item>
                            <el-dropdown-item>澳门</el-dropdown-item>
                            <el-dropdown-item>韩国</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-col>
                <!--                <template slot="title">我的工作台</template>-->
                <el-col span="4" style="color: red;">亲，请登录</el-col>
                <el-col span="3" class="span">免费注册</el-col>
                <el-col span="3" class="span">手机淘宝</el-col>
                <el-col span="3" offset="6" class="span">我的淘宝
                    <el-dropdown>
                        <i class="el-icon-arrow-down el-icon--right"></i>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>已买到的宝贝</el-dropdown-item>
                            <el-dropdown-item>我的足迹</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-col>
                <el-col span="3" class="span">
                    <i class="el-icon-shopping-cart-2"></i>
                    购物车
                    <el-dropdown>
                        <i class="el-icon-arrow-down el-icon--right"></i>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>已买到的宝贝</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-col>

                <el-col span="3" class="span"><i class="el-icon-star-on"></i>收藏夹
                    <el-dropdown>
                        <i class="el-icon-arrow-down el-icon--right"></i>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>收藏的宝贝</el-dropdown-item>
                            <el-dropdown-item>收藏的店铺</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-col>
                <el-col span="3" class="span">商品分类</el-col>
                <el-col span="4" class="span">千牛卖家中心</el-col>
                <el-col span="3" class="span">联系客服</el-col>
                <el-col span="3" class="span">网站导航</el-col>
            </el-row>
        </el-header>
        <el-main>
            <div class="logo" style="margin-left: 100px;float: left;"></div>
            <el-input v-model="input" placeholder="输入内容进行搜索" class="search" prefix-icon="el-icon-search" suffix-icon="el-icon-camera">
                <el-button slot="append">搜索</el-button>
            </el-input>
            <el-row>
                <el-col span="2">马克杯</el-col>
                <el-col span="2">马克杯</el-col>
                <el-col span="2">马克杯</el-col>
                <el-col span="2">马克杯</el-col>
                <el-col span="2">马克杯</el-col>
            </el-row>
        </el-main>

    </el-container>
</template>

<script>
    export default {
        data() {
            return {
                input: '',
                input1: '',
                input2: '',
                input3: '',
                select: ''
            }
        },

        name: "InteractiveInform"
    }
</script>

<style scoped>
    .site {
        margin: 0 auto;
        height: 35px;
        width: 100%;
        background: #f5f5f5;
        padding: 0 164.6px;
    }

    .site .title {
        margin-top: 22px;
        list-style: none;
        cursor: pointer;
        font-size: 12px;
    }

    .span {
        font-size: 12px;
    }

    .span:hover {
        color: #f40;
    }

    .el-icon-arrow-down {
        font-size: 3px;
    }

    .logo {
        display: block;
        margin-left: 22px;
        padding-top: 58px;
        width: 142px;
        height: 0;
        overflow: hidden;
        text-indent: -9999px;
        background: url(//img.alicdn.com/tfs/TB1_uT8a5ERMeJjSspiXXbZLFXa-143-59.png) 0 0 no-repeat;
    }

    .search {
        margin-top: 12px;
        margin-left: 90px;
        width: 600px;
    }
</style>
