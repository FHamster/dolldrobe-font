<template>
    <el-container>
        <el-header class="myhead">
            <img src=".././assets/icon.png" class="myimg">
            <div class="my_logo">玩偶衣橱</div>
            <div class="rowdir">
                <el-input prefix-icon="el-icon-search" type="text"
                          clearable="true" size=large class="mysearch"></el-input>
                <el-button class="Good_btnSerachborder" size="media" plain>搜索</el-button>
            </div>
        </el-header>
        <el-container>
            <el-aside class="goodaside">
                <el-col v-for="index of 5" :key="index">
                    <el-card :body-style="{ padding: '10px' }" shadow="hover" style="width: 250px;margin-left: 15px ;">
                        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                             class="image">
                        <div style="padding: 14px;width: 180px">
                            <span>好吃的汉堡</span>
                            <div class="bottom clearfix">
                                <time class="time">{{ currentDate }}</time>
                                <el-button type="text" class="button">操作按钮</el-button>
                            </div>
                        </div>
                    </el-card>
                </el-col>
            </el-aside>
            <el-container>
                <el-header height="20px" style="align-text: center">
                    <el-row>
                        <el-button plain autofocus="true" class="head_btn">综合排序</el-button>
                        <el-button plain class="head_btn">销量</el-button>
                        <el-button plain class="head_btn">价格</el-button>
                        <el-button plain class="head_btn">评论数</el-button>
                        <el-button plain class="head_btn">上架时间</el-button>
                    </el-row>
                </el-header>
                <el-main>
                    <div class="goodPanel">
                        <el-card
                                v-for="(o) in 20" :key="o"
                                :body-style="{ padding: '0px' }" style="width: 230px;margin-right: 20px;">
                            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                                 class="image">
                            <div style="padding: 14px;">
                                <span>好吃的汉堡</span>
                                <div class="bottom clearfix">
                                    <div class="price_cart">
                                        <div class="price">￥123</div>
                                        <el-button type="text" class="button">加入购物车</el-button>
                                    </div>

                                </div>
                            </div>
                        </el-card>

                    </div>


                    <el-pagination
                            background
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page.sync="currentPage3"
                            :page-size="30"
                            layout="prev, pager, next, jumper"
                            :total="1000"
                            style="float: right"
                    >
                    </el-pagination>
                </el-main>
            </el-container>
        </el-container>

    </el-container>
</template>

<script>
    export default {
        name: "GoodsPage",
        methods: {
            handleSizeChange(val) {
                return (`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                return (`当前页: ${val}`);
            }
        },
        data() {
            return {
                currentPage1: 5,
                currentPage2: 5,
                currentPage3: 5,
                currentPage4: 4
            };
        },
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

    .head_btn {
        font-size: 13px;
        border-radius: 0px;
        margin: 0px;
    }

    /*test*/
    .time {
        font-size: 13px;
        color: #999;
    }

    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .button {
        padding: auto;
        float: right;
    }

    .image {
        width: 100%;
        display: block;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }

    .goodPanel {
        /*width: 100%;*/
        /*height: auto;*/
        display: flex;
        justify-content: flex-start;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .price_cart {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .price {
        color: dodgerblue;
    }

    .goodaside {
        width: 250px;
        border-style: solid;
        border-color: dodgerblue;
    }
</style>
