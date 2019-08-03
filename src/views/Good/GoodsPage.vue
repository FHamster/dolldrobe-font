<template>
    <el-container>
        <el-dialog title="商品详情" :visible.sync="isGoodDialogVis" width="1000px">
            <GoodDialog :c-num="curGood" :c-name="curGoodName"></GoodDialog>
        </el-dialog>
        <el-header class="myhead">
            <div class="flex-row" style="align-items: center">
                <img src="@/assets/icon.png" class="myimg">
                <div class="my_logo">玩偶衣橱</div>
            </div>
            <div class="rowdir">
                <el-input prefix-icon="el-icon-search" type="text"
                          size=large class="mysearch"
                          v-model="keyWord">
                </el-input>
                <el-button @click="getCart">
                    搜索
                </el-button>
            </div>
        </el-header>
        <el-main>
            <!--  <el-aside class="goodaside">
                  <el-col v-for="index of 5" :key="index">
                      &lt;!&ndash;<el-card :body-style="{ padding: '10px' }" shadow="hover" style="width: 250px;margin-left: 15px ;"&ndash;&gt;
                      &lt;!&ndash;@click="isGoodDialogVis = !isGoodDialogVis">&ndash;&gt;
                      &lt;!&ndash;<img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"&ndash;&gt;
                      &lt;!&ndash;class="image">&ndash;&gt;
                      &lt;!&ndash;<div style="padding: 14px;width: 180px">&ndash;&gt;
                      &lt;!&ndash;<span>好吃的汉堡</span>&ndash;&gt;
                      &lt;!&ndash;<div class="bottom clearfix">&ndash;&gt;
                      &lt;!&ndash;<el-button type="text" class="button">加入购物车</el-button>&ndash;&gt;
                      &lt;!&ndash;</div>&ndash;&gt;
                      &lt;!&ndash;</div>&ndash;&gt;
                      &lt;!&ndash;</el-card>&ndash;&gt;
                  </el-col>
              </el-aside>-->

            <!--
            <div class="el-row" height="20px" style="align-text: center">
                <el-button plain class="head_btn" @click=getPageByC_Num>综合排序</el-button>
                <el-button plain class="head_btn">销量</el-button>
                <el-button plain class="head_btn" @click="getPageByC_MaxMoney">价格</el-button>
                <el-button plain class="head_btn">评论数</el-button>
                <el-button plain class="head_btn" @click="getPageByC_EndTime">上架时间</el-button>
            </div>
-->
            <div style="justify-content: center" class="flex-row">
                <!--商品展示面板-->
                <div class="goodPanel">
                    <div v-for="good in goodList" :key="good.cNum"
                         style="margin-left: 10px;margin-top: 5px"
                         @click="visGoodDialog(good.cNum,good.cName)">
                        <GoodCard :good="good"/>
                    </div>
                </div>
            </div>
            <el-pagination
                    background
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page.sync="curPage"
                    :page-size="5"
                    layout="prev, pager, next, jumper"
                    :total="total"
                    style="float: right;margin-top: 50px;margin-right: 100px">
            </el-pagination>

        </el-main>

    </el-container>
</template>

<script>
    import axios from 'axios';
    import GoodDialog from "./GoodDialog";
    import GoodCard from "./GoodCard";


    export default {

        name: "GoodsPage",
        components: {GoodCard, GoodDialog},
        mounted() {
            this.getCart();
        },
        data() {
            return {
                // 商品对话框当前选中商品cNum
                curGood: '',
                curGoodName: '',
                isGoodDialogVis: false,

                total: 200,
                C_Num: "C_Num",
                C_MaxMoney: "C_MaxMoney",
                C_EndTime: "C_EndTime",
                keyWord: '',
                goodList: [],
                curPage: 1,
                pageSize: 24,
                order: '',
                isAsc: true,


            };
        },
        methods: {
            handleSizeChange(val) {
                return (`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                this.curPage = val;
                this.getCart();
            },
            getPageByC_Num() {
                this.order = "C_Num";
                this.getCart();
            },
            getPageByC_MaxMoney() {

                this.order = "C_MinMoney";
                this.getCart();
            },

            getPageByC_EndTime() {
                this.order = "C_EndTime";
                this.getCart();
            },

            visGoodDialog(viscNum, visName) {
                this.curGood = viscNum;
                this.curGoodName = visName;
                // console.log(viscNum);
                this.isGoodDialogVis = true;
            },
            getCart() {
                axios.get('/api/GoodPage/GoodPageByOrder', {
                        params: {
                            keyWord: this.keyWord,
                            startPage: this.curPage,
                            pageSize: this.pageSize,
                            order: this.order,
                            isAsc: this.isAsc
                        }
                    }
                ).then(res => {
                    this.goodList = res.data;
                    console.log(this.goodList);
                })
            }
        }

    };
</script>

<style scoped>

    .good-card {
        padding: 0;
        width: 250px;

        display: flex;
        flex-direction: column;
        align-content: center;
    }

    .my_logo {
        /*position: relative;*/
        /*float: left;*/
        /*width: 200px;*/
        /*height: 65px;*/
        /*font-family: 华文琥珀;*/
        color: #9DBC7A;
        font-size: 40px;
        white-space: nowrap;
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


    .rowdir {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .myhead {
        min-height: 90px;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        background-color: #f5f7fa;
    }

    .myimg {
        /*float: left;*/

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
        background-image: linear-gradient(to bottom, #f5f7fa 0%, #c3cfe2 100%);
        margin: 0px;
    }


    .button {
        padding: auto;
        float: right;
    }


    .goodPanel {
        width: 1350px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
    }

    .goodaside {
        width: 250px;
        border-style: solid;
        border-color: #9DBC7A;
    }


</style>
