<template>
<div class="flex-row" style="padding:32px;margin:0 15%;justify-content: center">
    <el-tabs tab-position="left" style="height: auto;" :value=choNum>
        <el-tab-pane disabled="true">
            <span slot="label" disabled="true" style="margin-left: 16px">
                <el-image style="width: 64px;height: 64px;border-radius: 50%" :src="icon_head"/>
            </span>
        </el-tab-pane>
        <el-tab-pane disabled="true"/>
        <el-tab-pane label="个人资料" name="1">
            <PersonDetail ></PersonDetail>
        </el-tab-pane>
        <el-tab-pane label="安全设置" disabled="true">

        </el-tab-pane>
        <el-tab-pane label="成长信息" disabled="true">

        </el-tab-pane>
        <el-tab-pane label="交易信息" disabled="true">

        </el-tab-pane>
        <el-tab-pane label="收货地址" name="2" >
            <UserAddress ></UserAddress>
        </el-tab-pane>
        <el-tab-pane label="分享绑定" disabled="true">

        </el-tab-pane>
        <el-tab-pane label="消息提醒" disabled="true" >

        </el-tab-pane>
    </el-tabs>
    <div style="width: 850px; position: absolute;margin-left: 22%">
        <router-view></router-view>
    </div>
</div>
</template>

<script>
    import PersonDetail from "../BannerModule/PersonDetail";
    import UserAddress from "../Member/UserAddress";
    export default {
        name: "PersonalData",
        components: {UserAddress, PersonDetail},
        data:function () {
            return {
                icon_head:this.$store.state.icon_head,
                choNum:"1",
                from: {
                    search: '',
                },
            }
        },
        methods: {
            user_search() {

            },

            jumpDetail(){
                this.$router.push({path: './PersonDetail'});
            },

            jumpAddress(){
                this.$router.push({path: './UserAddress'});
            },

            getChoNum(){
              if(this.$route.query.nameid != null){
                  this.choNum = this.$route.query.nameid;
              }
            },
        },
        mounted() {
            this.getChoNum();
        },
    }
</script>

<style scoped>


</style>
