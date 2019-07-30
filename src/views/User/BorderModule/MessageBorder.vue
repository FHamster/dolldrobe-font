<template>
    <el-container>

        <!--        <el-aside width="15%">-->
        <el-menu default-active="1-4-1"
                 class="el-menu-vertical-demo"
                 @open="handleOpen"
                 @close="handleClose"
                 router
                 :collapse="isCollapse">
            <!--   <el-switch
                       style="margin-left: 10px"
                       v-model="isCollapse"
                       active-color="##ff4949"
                       inactive-color="#13ce66">
               </el-switch>-->
            <!--=======================我想这样子==============================-->
            <el-menu-item-group title="系统消息">
                <el-menu-item index="/SystemInform/1">成团通知</el-menu-item>
                <el-menu-item index="/SystemInform/2">打样通知</el-menu-item>
                <el-menu-item index="/SystemInform/3">尾款通知</el-menu-item>
                <el-menu-item index="/SystemInform/4">系统通知</el-menu-item>

            </el-menu-item-group>
            <el-menu-item-group title="系统消息">
                <el-menu-item index="/InteractiveInform/1">评论</el-menu-item>
                <el-menu-item index="/InteractiveInform/2">私信</el-menu-item>
                <el-menu-item index="/InteractiveInform/3">提到我</el-menu-item>
                <el-menu-item index="/InteractiveInform/4">互动提醒</el-menu-item>
            </el-menu-item-group>
            <!--=====================================================-->


            <!--    <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-s-platform"></i>
                        <span slot="title">系统消息</span>
                    </template>
                    <el-menu-item index="/SystemInform/1">成团通知</el-menu-item>
                    <el-menu-item index="/SystemInform/2">打样通知</el-menu-item>
                    <el-menu-item index="/SystemInform/3">尾款通知</el-menu-item>
                    <el-menu-item index="/SystemInform/4">系统通知</el-menu-item>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title">
                        <i class="el-icon-s-comment"></i>
                        <span slot="title">互动消息</span>
                    </template>
                    <el-menu-item-group title="系统消息">
                        <el-menu-item index="/InteractiveInform/1">评论</el-menu-item>
                        <el-menu-item index="/InteractiveInform/2">私信</el-menu-item>
                        <el-menu-item index="/InteractiveInform/3">提到我</el-menu-item>
                        <el-menu-item index="/InteractiveInform/4">互动提醒</el-menu-item>
                        &lt;!&ndash;                        <el-menu-item index="/InteractiveInform/1" @click="changePing">评论</el-menu-item>&ndash;&gt;
                        &lt;!&ndash;                        <el-menu-item index="/InteractiveInform/2" @click="changeSi">私信</el-menu-item>&ndash;&gt;
                        &lt;!&ndash;                        <el-menu-item index="/InteractiveInform/3" @click="changeTi">提到我</el-menu-item>&ndash;&gt;
                        &lt;!&ndash;                        <el-menu-item index="/InteractiveInform/4" @click="changeHu">互动提醒</el-menu-item>&ndash;&gt;
                    </el-menu-item-group>
                </el-submenu>-->


            <!--目前设置没有实际需求，延后开发-->
            <!--<el-menu-item index="3">-->
            <!--<i class="el-icon-setting"></i>-->
            <!--<span slot="title">设置</span>-->
            <!--</el-menu-item>-->
        </el-menu>
        <!--        </el-aside>-->
        <el-main>
            <router-view></router-view>
        </el-main>

    </el-container>

</template>

<script>
    export default {
        name: "MessageBorder",
        data: function () {
            return {
                from: {
                    search: '',
                },
                isCollapse: false,
            }
        },
        methods: {
            user_search() {

            },
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            changePing() {
                this.$router.push({
                    name: 'InteractiveInform',
                    params: {
                        choose: 1,
                    }
                })
                this.myReload();
            },
            changeHu() {
                this.$router.push({
                    name: 'InteractiveInform',
                    params: {
                        choose: 4,
                    }
                })
                this.myReload();
            },
            changeSi() {
                this.$router.push({
                    name: 'InteractiveInform',
                    params: {
                        choose: 2,
                    }
                })
                this.myReload();
            },
            changeTi() {
                this.$router.push({
                    name: 'InteractiveInform',
                    params: {
                        choose: 3,
                    }
                })
                this.myReload();
            },
            myReload() {
                location.reload();
                this.$router.go(0);
            },
            changeCheng() {
                this.$router.push({
                    name: 'SystemInform',
                    params: {
                        choose: 1,
                    }
                })
                this.myReload();
            },
            changeDa() {
                this.$router.push({
                    name: 'SystemInform',
                    params: {
                        choose: 2,
                    }
                })
                this.myReload();
            },
            changeWei() {
                this.$router.push({
                    name: 'SystemInform',
                    params: {
                        choose: 3
                    }
                })
                this.myReload();
            },
            changeSys() {
                this.$router.push({
                    name: 'SystemInform',
                    params: {
                        choose: 4,
                    }
                })
                this.myReload();
            },
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
