<template>
    <div>
        <el-drawer
                :modal="false"
                size="240"
                :visible.sync="drawer"
                :show-close="false"
                direction="ltr">
            <UserAsideMenu style="margin-top: -18px;position: fixed"></UserAsideMenu>
        </el-drawer>

        <el-button @click="drawer=true"
                   icon="el-icon-arrow-right"
                   circle
                   plain
                   class="sideBut"></el-button>
        <div style="width: 100%; height: 8px;background-color: #C2ADED"></div>
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
                drawer: false
            }
        },
        beforeRouteEnter: (to, from, next) => {
            next(vm => {
                // 通过 `vm` 访问组件实例
                if (vm.$store.state.userToken) {
                    return true;
                } else {
                    vm.$message.error("用户还未登录，无法访问");
                    vm.$router.push(from.fullPath)
                }
            });
        },
        methods: {}
    }
</script>

<style scoped>
    .sideBut {
        margin-top: 10vh;
        position: fixed;
        z-index: 2;
    }
</style>