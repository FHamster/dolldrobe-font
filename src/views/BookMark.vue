<template>
    <el-container>
        <el-header >
        <div style="width: 400px;display: inline ">
            <div class="head_titil">关注的商品</div>
            <div class="head_titil">关注的画稿</div>
            <div class="head_titil">关注的画手</div>
        </div>
            <div style="width: 300px;float:right;height: 29.6px">
                <div style="float: left; ">
                    <el-input class="head_search " prefix-icon="el-icon-search" type="text"

                              clearable="true" size=mini></el-input>
                    <el-button class="" size="mini" plain >搜索
                    </el-button>
                </div>
            </div>
        </el-header>
        <el-container>
        <el-header >
            <div style="display: inline; font-size: 13px">分类&nbsp;：</div>
            <el-button plain size="small">全部商品 </el-button>
            <el-divider style="margin: 5px 0"></el-divider>
            <div style="display: inline">
                <el-row style="margin: 0px">
                    <div style="display: inline; font-size: 13px">筛选条件&nbsp;:</div>
                    <el-button plain autofocus="true" size="mini" class="head_btn">不限</el-button>
                    <el-button plain class="head_btn" size="mini">降价({{jiangjia}})</el-button>
                    <el-button plain class="head_btn" size="mini">满减({{manjian}})</el-button>
                    <el-button plain class="head_btn" size="mini">优惠券({{youhui}}</el-button>
                    <el-button plain class="head_btn" size="mini">下柜({{xiagui}})</el-button>

                    <div style="float: right">
                        <el-checkbox>全选</el-checkbox>
                        <el-button type="text" icon="el-icon-shopping-cart-1">加入购物车</el-button>
                        <el-button type="text" icon="el-icon-star-on">取消关注</el-button>
                    </div>
                </el-row>
            </div>
            <el-divider style="margin: 5px 0"></el-divider>
        </el-header>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        name: "BookMark",
        data(){
            return{
                jiangjia:0,
                manjian:0,
                youhui:0,
                xiagui:0
            }
        },
    }
</script>

<style scoped>
.head_titil{
    display: inline;
    padding: 5px 6px;
}
    .head_search{
        width: 150px;
    }
.head_btn {
    font-size: 13px;
    border-radius: 0px;
    margin: 5px;
    display: inline;
}

</style>
