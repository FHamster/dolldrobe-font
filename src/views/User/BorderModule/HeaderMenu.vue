<template>
    <!--<el-header>-->
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
        </el-menu>
    <!--</el-header>-->
</template>
<script>
    export default {
        name: 'headerMenu',
        props: {
            from: {},
            user_search: {}
        }
    }
</script>
<style scoped>
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

    .search {
        position: absolute;
        right: 0;
    }
</style>
