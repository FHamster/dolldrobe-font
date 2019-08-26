<template>
    <div>
        <el-dialog :visible.sync="dialogVis" width="500px">
            <LoginDialog></LoginDialog>
        </el-dialog>
      <!--  81ceff
        bff199
acc236
4285f4
82b548
99cc33
8baaff h
9dbc7a-->

            <!--<div style="text-align: center;background-color: lightgray">推荐使用谷歌或火狐浏览器</div>-->
        <!-- style="background-image: linear-gradient(to right, #f5f7fa 0%, #c3cfe2 100%);"
                    text-color="#547A28"
                    active-text-color="#B3748D"-->
        <div class="menu-border">
            <el-menu
                    :default-active="activeIndex2"
                    mode="horizontal"
                    text-color="#547A28"
                    active-text-color="#B3748D"
                    @select="handleSelect"
                    router>
                <el-menu-item @click="dialogVis = !dialogVis">
                    <template slot="title">
                        <el-avatar>U</el-avatar>
                    </template>
                </el-menu-item>
                <el-menu-item
                        index="/MainPage">首页
                </el-menu-item>
                <el-menu-item
                        index="/UserCenter">用户中心
                </el-menu-item>
                <!--   <el-submenu index="2">
                       <template slot="title">我的工作台</template>
                       <el-menu-item index="2-1">选项1</el-menu-item>
                       <el-menu-item index="2-2">选项2</el-menu-item>
                       <el-menu-item index="2-3">选项3</el-menu-item>
                       <el-submenu index="2-4">
                           <template slot="title">选项4</template>
                           <el-menu-item index="2-4-1">选项1</el-menu-item>
                           <el-menu-item index="2-4-2">选项2</el-menu-item>
                           <el-menu-item index="2-4-3">选项3</el-menu-item>
                       </el-submenu>
                   </el-submenu>-->

                <el-menu-item
                        index="/GoodsPage">商品浏览
                </el-menu-item>
               <!-- <el-menu-item
                        index="MessageBorder">浏览
                </el-menu-item>-->
                <!--    <el-menu-item
                            index="Express">Express
                    </el-menu-item>-->
            </el-menu>
        </div>

        <!--        </el-header>-->
        <el-container style="padding: 0;justify-content: center;margin-top: 20px;min-height: 700px">
            <router-view></router-view>
        </el-container>

        <div>
            <MainFooter/>
        </div>
    </div>
</template>

<script>
    import LoginDialog from "./views/LoginDialog/LoginDialog";
    import axios from 'axios';
    import MainFooter from "./views/MainFooter";

    export default {
        name: 'app',
        components: {
            MainFooter,
            LoginDialog
            // HelloWorld
        },
        data() {
            return {
                activeIndex: '1',
                activeIndex2: 'GoodsPage',
                dialogVis: false
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                // eslint-disable-next-line no-console
                console.log(key, keyPath);
            },
            changeVuex() {
                // eslint-disable-next-line no-console
                // console.log(this.$store.state.changableNum++);
                // eslint-disable-next-line no-console
                console.log(this.$store.getters.getNum);
            },
            /*     changeDialogVis() {
                     this.dialogVis = !this.dialogVis;
                 },*/
            checkToken() {

                let obj = {k1: 'k', k2: 't'}
                axios.post('/api/token/checktoken', obj, {

                        headers: {
                            'token': this.$store.getters.getToken
                        }
                    }
                ).then(res => {
                    // eslint-disable-next-line no-console
                    console.log(res.data);
                })
            }


        }

    };
</script>

<style scoped>


    #app {
        font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
        background-color: #42b983;
    }

    .con {
        min-width: 700px;
        width: 50%;

    }

    .el-header {
        padding: 0;
    }


    .avatar-panel {
        align-self: center;
    }

    .menu-border {
        padding: 0;
        margin: 0;
        border-top: 20px;
        border-bottom: 20px;
        border-left-width: 0;
        border-right-width: 0;
        border-color: #CADEB3;
        border-style: solid;
    }
</style>
