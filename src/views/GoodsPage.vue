<template>
    <el-container>
        <el-header class="myhead">
            <img src=".././assets/icon.png" class="myimg">
            <div class="my_logo">玩偶衣橱</div>
            <div class="rowdir">
                <el-input prefix-icon="el-icon-search" type="text"
                          clearable="true" size=large class="mysearch">   </el-input>
                <el-button class="Good_btnSerachborder" size="media" plain>搜索</el-button>

            </div>

        </el-header>
    </el-container>
</template>

<script>
    export default {
        name: "GoodsPage"
    }
</script>

<style scoped>
    .my_logo {
        /*position: relative;*/
        /*float: left;*/
        width: 200px;
        height: 65px;
        font-family: 华文琥珀;
        color: rgba(193, 135, 207, 0.7);
        font-size: 40px;
        margin-top: 20px;
        margin-bottom: 7px;
    }

    .el-input__inner5 {
        /*width: 40%;*/
        /*margin-top: 12px;*/
        /*border-color: red;*/
        /*border-width: 1px;*/
        /*margin-left: 20px;*/
        /*border-radius: 0px;*/
        /*background-color: rgba(192,192,192,0.5);*/
    }

    .Good_btnSerachborder {
        background-color: orangered;
        font-family: 宋体;
        font-weight: bold;
        color: aliceblue;
        border-radius: 0px;
        align-items: center;
    }

    .rowdir {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 0px 250px;
    }

    .myhead {
        min-height: 90px;
        padding: 0;
        display: flex;
        flex-direction: row;
        justify-self: center;
        margin-left: 40px;
        margin-right: 40px;
    }

    .myimg {
        /*float: left;*/
        margin-top: 10px;
        width: 70px;
        height: 70px;

    }

    .mysearch {
        width: 50%;
        min-width: 300px;
        max-width: 600px;

    }
</style>
