<template>
    <el-container>

    </el-container>
</template>

<script>
    export default {
        name: "InteractiveInform",
        data: function () {
            return {
                choose: '0',

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
        },
        mounted() {
            this.getNum();
        },
    }
</script>

<style scoped>

</style>
