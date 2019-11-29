<template>
    <div>
        <div style="width: 100%; height: 8px;background-color: #C2ADED"></div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "UserCenterWrapper",
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

</style>