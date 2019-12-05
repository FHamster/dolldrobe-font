<template>
    <div>
        <el-dialog :visible.sync="dialogVis" :before-close="beforeClose" width="500px">
            <LoginDialog></LoginDialog>
        </el-dialog>
        <div class="head-top"></div>

        <div class="head_background flex-row">
            <img width="256" height="80" src="../assets/DollDrobe.png" alt="">
            <!--            <div style="width: 184px;height: 80px;background-color: #C2ADED"></div>-->
         <!--   <div style="width: 320px">
                <el-input
                        placeholder="DollDrobe"
                        v-model="searchString">
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
            </div>-->

            <div class="flex-row" style="align-content: flex-start;">
                <el-dropdown @command="handleCommand">

                    <el-link @click="handleUserCenter" :underline="false">
                        <el-avatar shape="square">U</el-avatar>
                    </el-link>
                    <el-dropdown-menu v-if="Token!==null">
                        <el-dropdown-item command="logout">
                            Logout
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>


                <transition name="el-zoom-in-bottom">
                    <div v-show="Token!==null">

                        <el-badge :value="12" class="item">
                            <el-button style="margin-left: 40px"
                                       @click="handleShopBag"
                                       plain icon="el-icon-goods">
                                ¥{{100}}
                            </el-button>
                        </el-badge>
                    </div>
                </transition>
            </div>
        </div>

        <ul class="flex-row nav-menu">
            <router-link tag="li" to="/MainPage">
                <el-link :underline="false">首页</el-link>
            </router-link>
            <span>|</span>
            <router-link tag="li" to="/GoodsPage">
                <el-link :underline="false">娃衣展示</el-link>
            </router-link>
            <span>|</span>
            <router-link tag="li" to="/">
                <el-link :underline="false">晒娃墙</el-link>
            </router-link>
            <span>|</span>
            <router-link tag="li" to="/">
                <el-link :underline="false">衣橱快报</el-link>
            </router-link>
        </ul>
    </div>
</template>
<script>
    // import '../assets/DollDrobe.png';
    import LoginDialog from "@/views/LoginDialog/LoginDialog";
    import router from "../router";

    export default {
        name: 'Head',
        components: {
            LoginDialog
        },
        data() {
            return {
                searchString: '',
            };
        },
        computed: {
            dialogVis: function () {
                return this.$store.state.isLoginPopVis;
            },
            Token: function () {
                return this.$store.state.userToken;
            }
        },
        methods: {
            beforeClose() {
                this.$store.state.isLoginPopVis = false
            },

            handleUserCenter() {
                if (this.$store.state.userToken) {
                    router.push("/UserCenter/index");
                } else {
                    this.$store.state.isLoginPopVis = true;
                }
            },
            handleShopBag() {
                router.push('/UserCenter/ShoppingBag')
            },
            handleCommand(command) {
                switch (command) {
                    case 'logout':
                        this.$store.state.userToken = null;
                        break;
                    case 'login':
                        this.handleUserCenter;
                        break;


                }
            }
        }
    }
</script>
<style scoped>


    /*   .menu-border {
           padding: 0;
           margin: 0;
           border-top: 20px;
           border-bottom: 20px;

           border-left-width: 0;
           border-right-width: 0;
           border-color: #CADEB3;
           border-style: solid;
       }*/

    .nav-menu {
        margin-left: 80px;
    }

    .nav-menu > li {
        list-style-type: none;
        display: inline-block;
        line-height: 44px;
        padding: 0 54px;
        font-weight: bold;
        font-size: 14px;
        color: #6C7BC1;
    }

    .nav-menu > span {
        display: inline-block;
        line-height: 44px;
        padding: 0;
        font-size: 14px;
        color: #b4b4b4;
    }

    .head_background {
        padding: 0 128px;
        align-items: center;
        justify-content: space-between;
    }

    .head-top {
        width: 100%;
        height: 64px;
        background-color: #C2ADED;
    }
</style>
