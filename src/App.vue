<template>
    <div>
        <el-dialog :visible.sync="dialogVis" width="500px">
            <LoginDialog></LoginDialog>
        </el-dialog>
        <Head/>
        <div style="padding: 0;min-height: 700px">
            <router-view></router-view>
        </div>

        <div>
            <MainFooter/>
        </div>
    </div>
</template>

<script>
    import LoginDialog from "./views/LoginDialog/LoginDialog";
    import axios from 'axios';
    import MainFooter from "./views/MainFooter";
    import Head from "./views/Head";


    export default {
        name: 'app',
        components: {
            Head,
            MainFooter,
            LoginDialog
            // HelloWorld
        },
        beforeCreate: function () {
            document.querySelector('body').setAttribute('style',' margin: 0;')
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
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;

    }

    * {
        margin: 0;
        padding: 0;
    }

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

</style>
