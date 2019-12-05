<template>
    <div>
        <el-drawer
                style="background-color:rgba(0, 0, 0, -1) "
                size="200px"
                :modal="false"
                :visible.sync="drawer"
                :show-close="false"
                direction="ltr">
            <div class="flex-row" style="justify-content: center">
                <UserAsideMenu></UserAsideMenu>
            </div>
        </el-drawer>

        <el-button @click="drawer=true"
                   v-show="!drawer"
                   icon="el-icon-arrow-right"
                   circle
                   plain
                   class="sideBut"></el-button>
        <!--        <div style="width: 100%; height: 8px;background-color: #C2ADED"></div>-->
        <div class="page-head-wrapper">
            <el-page-header @back="goBack" :content="currentPageName"></el-page-header>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    import UserAsideMenu from "./BannerModule/UserAsideMenu";

    export default {
        name: "UserCenterWrapper",
        components: {UserAsideMenu},
        data() {
            return {
                drawer: false,
                currentPageName: ''
            }
        },
        beforeRouteEnter: (to, from, next) => {
            next(vm => {
                // 通过 `vm` 访问组件实例
                if (vm.$store.state.userToken) {
                    return true;
                } else {
                    vm.$message.error("用户还未登录，无法访问");
                    vm.$router.push(from.fullPath);
                    // vm.$router.back();
                }
            });
        },
        methods: {
            goBack() {
                this.$router.back();
            },
            setHead(to) {
                this.currentPageName = to.name;
            }
        }
    }
</script>

<style scoped>
    .sideBut {
        margin-left: 32px;
        margin-top: 10vh;
        position: fixed;
        z-index: 2;
    }

    /*    el-drawer >>> header {
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            color: #72767b;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            margin-bottom: 32px;
            !* padding: 20px; *!
            padding-bottom: 0;
        }*/


    .page-head-wrapper {
        padding: 8px 64px;
        border-top: #C2ADED solid 4px;
        /*border-bottom: #C2ADED solid 1px;*/
    }
</style>

<style lang="scss" scoped>
    /deep/ .el-drawer {
        /*background-color: white;*/
        background-color: rgba(0, 0, 0, -1);
        box-shadow: 0 0 0 0;
        -webkit-box-shadow: 0 0 0 0;
    }

</style>