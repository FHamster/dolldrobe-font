<template>
<div class="flex-row" style="padding:32px;margin:0 15%">
    <el-tabs tab-position="left" style="height: auto;" value="1">
        <el-tab-pane disabled="true">
            <span slot="label" disabled="true">
                <el-image style="width: 80px;height: 80px;border-radius: 50%" :src="icon_head"/>
            </span>
        </el-tab-pane>
        <el-tab-pane disabled="true"/>
        <el-tab-pane label="个人资料" name="1">
            <PersonDetail ></PersonDetail>
        </el-tab-pane>
        <el-tab-pane label="安全设置" disabled="true">

        </el-tab-pane>
        <el-tab-pane label="成长信息" disabled="true">

        </el-tab-pane>
        <el-tab-pane label="交易信息" disabled="true">

        </el-tab-pane>
        <el-tab-pane label="收货地址" >
            <UserAddress ></UserAddress>
        </el-tab-pane>
        <el-tab-pane label="分享绑定" disabled="true">

        </el-tab-pane>
        <el-tab-pane label="消息提醒" disabled="true">

        </el-tab-pane>
    </el-tabs>
    <div style="width: 850px; position: absolute;margin-left: 22%">
        <router-view></router-view>
    </div>
</div>
</template>

<script>
    import PersonDetail from "../BannerModule/PersonDetail";
    import UserAddress from "../Member/UserAddress";
    export default {
        name: "PersonalData",
        components: {UserAddress, PersonDetail},
        data:function () {
            return {
                icon_head:this.$store.state.icon_head,
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
