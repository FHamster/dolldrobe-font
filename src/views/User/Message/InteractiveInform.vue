<template>
    <el-container >
        <el-main v-if="choose == 1">
            <el-header height="30px">
                <div style="font-size: 20px;color: orangered;display: inline">收到的评论</div>
                <div style="display: inline;color: gray;margin-left: 5px">共{{this.pNum}}条</div>
            </el-header>
            <el-main >
                <div v-if="this.pNum > 0">
                </div>
                <div v-else >
                    <img style="width: 1000px; height: 500px" src="../../../assets/NullMessage.jpg"/>
                </div>
            </el-main>
        </el-main>
        <el-main v-if="choose == 2">
            <el-header height="30px">
                <div style="font-size: 20px;display: inline">私信</div>
                <div style="display: inline;color: gray;margin-left: 5px">共{{this.sNum}}条</div>
            </el-header>
            <el-main >
                <div v-if="this.sNum > 0">
                </div>
                <div v-else >
                    <img style="width: 1000px; height: 500px" src="../../../assets/NullMessage.jpg"/>
                </div>
            </el-main>
        </el-main>
        <el-main v-if="choose == 3">
            <el-header height="30px">
                <div style="font-size: 20px;display: inline">提到我</div>
                <div style="display: inline;color: gray;margin-left: 5px">共{{this.tNum}}条</div>
            </el-header>
            <el-main >
                <div v-if="this.tNum > 0">
                </div>
                <div v-else >
                    <img style="width: 1000px; height: 500px" src="../../../assets/NullMessage.jpg"/>
                </div>
            </el-main>
        </el-main>
        <el-main v-if="choose == 4">
            <el-header height="30px">
                <div style="font-size: 20px;display: inline">互动消息</div>
                <div style="display: inline;color: gray;margin-left: 5px">共{{this.hNum}}条</div>
            </el-header>
            <el-main >
                <div v-if="this.hNum > 0">
                </div>
                <div v-else >
                    <img style="width: 1000px; height: 500px" src="../../../assets/NullMessage.jpg"/>
                </div>
            </el-main>
        </el-main>
    </el-container>
</template>

<script>
    export default {
        name: "InteractiveInform",
        data: function () {
            return {
                choose: '0',

                failSrc:'../../../assets/NullImg.jpg',

                pNum: '0',
                sNum: '0',
                tNum: '0',
                hNum: '0',

                pList: [],
                sList: [],
                tList: [],
                hList: [],
            }
        },
        methods: {
            setChoose() {

            },
            getNum() {
                this.pNum = this.pList.length;
                this.sNum = this.sList.length;
                this.tNum = this.tList.length;
                this.hNum = this.hList.length;
            },
            getChoose(){
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
