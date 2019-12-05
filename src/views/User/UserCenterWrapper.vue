<template>
    <div>
        <el-image :src="icon"
                   style="position: fixed;width: 40px;height: 40px"
                   @click="show = !show"/>
        <UserAsideMenu v-show="show" style="margin-top: -168px;position: fixed"></UserAsideMenu>
        <div style="width: 100%; height: 8px;background-color: #C2ADED"></div>
        <router-view></router-view>
    </div>
</template>

<script>
    import UserAsideMenu from "./BannerModule/UserAsideMenu";
    import left from '../../assets/left.png';
    import rig from '../../assets/rig.png';
    export default {
        name: "UserCenterWrapper",
        components: {UserAsideMenu},
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
        data: function (){
          return {
              show:false,
              icon:rig,
          }

        },
        methods: {}
    }
</script>

<style scoped>

</style>