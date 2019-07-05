<template>
    <el-container >
        <LoginDialog :is-vis="dialogVis"></LoginDialog>
        <!--        <el-header style="max-height: 40px">-->
        <el-header style="padding: 0px" >
            <el-menu
                    :default-active="activeIndex2"
                    mode="horizontal"
                    @select="handleSelect"
                    background-color="#efff"
                    text-color="#545c64"
                    active-text-color="#ffd04b"
                    router>
                <el-menu-item
                        class="menu-heigh"
                        index="UserCenter">用户中心
                </el-menu-item>
                <el-submenu index="2" disabled="">
                    <template slot="title" >我的工作台</template>
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
                <el-menu-item index="3" class="el-icon-chat-line-round">消息</el-menu-item>
                <el-menu-item  index="4"><a href="https://www.ele.me" target="_blank">订单管理</a>
                </el-menu-item>
                <el-menu-item
                        index="GoodsPage">商品浏览
                </el-menu-item>
               <!-- <el-menu-item
                        index="ShoppingBag">测试购物车
                </el-menu-item>-->
            </el-menu>
            <!--        </el-header>-->

        </el-header>


        <el-main style="padding: 0">
            <router-view></router-view>
        </el-main>

        <el-footer>
            <el-button @click="changeVuex">按钮测试</el-button>
            <el-button @click="changeDialogVis">显示登陆对话框</el-button>
            <el-button @click="checkToken">检查token有效</el-button>
        </el-footer>
    </el-container>
</template>

<script>
    import LoginDialog from "./views/LoginDialog";
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
            changeDialogVis() {
                this.dialogVis = !this.dialogVis;
            },
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
</style>
