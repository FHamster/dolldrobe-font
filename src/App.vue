<template>
    <el-container>
        <el-dialog :visible.sync="dialogVis" width="500px">
            <LoginDialog></LoginDialog>
        </el-dialog>
        <!--        <LoginDialog :is-vis="dialogVis"></LoginDialog>-->
        <!--        <el-header style="max-height: 40px">-->
        <!--
        81ceff
        bff199
acc236
4285f4
82b548
99cc33
8baaff h
9dbc7a
        -->
        <el-header>
            <!--<div style="text-align: center;background-color: lightgray">推荐使用谷歌或火狐浏览器</div>-->
            <el-menu
                    :default-active="activeIndex2"
                    mode="horizontal"
                    @select="handleSelect"
                    style="background-image: linear-gradient(to right, #f5f7fa 0%, #c3cfe2 100%);"
                    text-color="#547A28"
                    active-text-color="#B3748D"
                    router
            >
                <el-menu-item @click="dialogVis = !dialogVis" style="background-image: linear-gradient(to left, #f5f7fa 0%, #c3cfe2 100%);" >
                    <template slot="title">
                        <el-avatar>U</el-avatar>
                    </template>
                </el-menu-item>
                <el-menu-item
                        index="UserCenter">用户中心
                </el-menu-item>
                <el-submenu index="2" >
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
                </el-submenu>
                <el-menu-item index="3">消息</el-menu-item>
                <el-menu-item index="4">
                    订单管理
                </el-menu-item>
                <el-menu-item
                        index="GoodsPage">商品浏览
                </el-menu-item>
                <el-menu-item
                        index="MessageBorder">浏览
                </el-menu-item>
                <!--<el-menu-item-->
                        <!--index="Express">Express-->
                <!--</el-menu-item>-->
                <el-menu-item
                        index="PersonDetail">PersonDetail
                </el-menu-item>
                <el-menu-item
                        index="InteractiveInform">InteractiveInform
                </el-menu-item>
            </el-menu>
        </el-header>

        <!--        </el-header>-->
        <el-main style="padding: 0">
            <router-view></router-view>
        </el-main>

        <el-footer>
            <!--            <el-button @click="changeVuex">按钮测试</el-button>-->
            <!--            <el-button @click="dialogVis = !dialogVis">显示登陆对话框</el-button>-->
            <!--            <el-button @click="checkToken">检查token有效</el-button>-->
        </el-footer>
    </el-container>
</template>

<script>
    import LoginDialog from "./views/LoginDialog/LoginDialog";
    import axios from 'axios';

    export default {
        name: 'app',
        components: {
            LoginDialog
            // HelloWorld
        },
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1',
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
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
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
</style>
