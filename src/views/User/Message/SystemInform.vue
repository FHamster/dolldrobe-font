<template>
    <el-container>
        <!--<div>{{this.$route.params}}</div>-->
        <el-main v-if="choose === '1'">
            <el-header height="30px">
                <div style="font-size: 20px;color: orangered;display: inline">成团消息</div>
                <div style="display: inline;color: gray;margin-left: 5px">共{{this.cNum}}条</div>
            </el-header>
            <el-main>
                <div v-if="this.cNum > 0">
                </div>
                <div v-else>
                    <img style="width: 1000px; height: 500px" src="../../../assets/NullMessage.jpg"/>
                </div>
            </el-main>
        </el-main>
        <el-main v-if="choose === '2'">
            <el-header height="30px">
                <div style="font-size: 20px;display: inline">打样通知反馈</div>
                <div style="display: inline;color: gray;margin-left: 5px">共{{this.dNum}}条</div>
            </el-header>
            <el-main>
                <div v-if="this.dNum > 0">
                </div>
                <div v-else>
                    <img style="width: 1000px; height: 500px" src="../../../assets/NullMessage.jpg"/>
                </div>
            </el-main>
        </el-main>
        <el-main v-if="choose === '3'">
            <el-header height="30px">
                <div style="font-size: 20px;display: inline">尾款通知</div>
                <div style="display: inline;color: gray;margin-left: 5px">共{{this.wNum}}条</div>
            </el-header>
            <el-main>
                <div v-if="this.wNum > 0">
                </div>
                <div v-else>
                    <img style="width: 1000px; height: 500px" src="../../../assets/NullMessage.jpg"/>
                </div>
            </el-main>
        </el-main>
        <el-main v-if="choose === '4'">
            <el-header height="30px">
                <div style="font-size: 20px;display: inline">系统信息</div>
                <div style="display: inline;color: gray;margin-left: 5px">共{{this.sysNum}}条</div>
            </el-header>
            <el-main>
                <div v-if="this.sysNum > 0">
                </div>
                <div v-else>
                    <img style="width: 1000px; height: 500px" src="../../../assets/NullMessage.jpg"/>
                </div>
            </el-main>
        </el-main>
    </el-container>
</template>

<script>
    export default {
        name: "SystemInform",
        watch: {
            '$route'(to, from) {
                // 对路由变化作出响应...
                console.log("from " + from.params.type);
                console.log("to " + to.params.type);
                this.choose = to.params.type;
            }
        },
        data: function () {
            return {
                choose: '0',

                failSrc: '../../../assets/NullImg.jpg',

                cNum: '0',
                dNum: '0',
                wNum: '0',
                sysNum: '0',

                cList: [],
                dList: [],
                wList: [],
                sysList: [],
            }
        },
        methods: {
            setChoose() {

            },
            getNum() {
                this.cNum = this.cList.length;
                this.dNum = this.dList.length;
                this.wNum = this.wList.length;
                this.sysNum = this.sysList.length;
            },
            getChoose() {
                this.choose = this.$route.params.choose;
            },
        },
        mounted() {
            this.getChoose();
            this.getNum();
        },
    }
</script>

<style scoped>

</style>
