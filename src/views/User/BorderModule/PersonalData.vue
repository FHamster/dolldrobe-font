<template>
<el-container>
    <el-header>
        <el-menu
                mode="horizontal"
                style="background-image: linear-gradient(to right, #f5f7fa 0%, #eef1f5 100%);"
                text-color="#547A28"
                active-text-color="#B3748D"
                router
                class="user-center-bar">
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
                    <el-menu-item index="UserAddress">收货地址</el-menu-item>
                    <el-menu-item index="PersonDetail">修改头像、昵称</el-menu-item>
                    <el-menu-item index="2-1-3">消息提醒设置</el-menu-item>
                </el-submenu>
            </el-submenu>

            <el-menu-item index="3" class="userCenter_title">消息中心</el-menu-item>
        </el-menu>
    </el-header>
    <el-main>
        <el-aside width="20%" style="border: 2px ;position: absolute">
            <div style="float: right">
                <el-image style="width: 100px;height: 100px" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3127190984,2058914612&fm=26&gp=0.jpg"></el-image>
                <div style="width: 20px">
                    <el-button type="text" size="small" style="margin-left: 10px">安全设置</el-button>
                    <el-button type="text" size="small" @click="jumpDetail">个人资料</el-button>
                    <el-button type="text" size="small">个人成长信息</el-button>
                    <el-button type="text" size="small">个人交易信息</el-button>
                    <el-button type="text" size="small" @click="jumpAddress">收货地址</el-button>
                    <el-button type="text" size="small">分享绑定</el-button>
                    <el-button type="text" size="small">消息提醒</el-button>
                </div>
            </div>
        </el-aside>
        <el-main style="width: 850px; position: absolute;margin-left: 22%">
            <router-view></router-view>
        </el-main>
    </el-main>
</el-container>
</template>

<script>
    export default {
        name: "PersonalData",
        data:function () {
            return {
                from: {
                    search: '',
                },
            }
        },
        methods: {
            user_search() {

            },

            jumpDetail(){
                this.$router.push({path: './PersonDetail'});
            },

            jumpAddress(){
                this.$router.push({path: './UserAddress'});
            }
        },
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

    .asideMenu {
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
