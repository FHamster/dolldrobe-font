<template>
    <el-container>

        <el-dialog title="商品详情" :visible.sync="isGoodDialogVis" width="1000px">
            <GoodDialog :c-num="curGood" :c-name="curGoodName"></GoodDialog>
        </el-dialog>

        <el-header class="myhead">
            <img src="../../assets/icon.png" class="myimg">
            <div class="my_logo">玩偶衣橱</div>
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
        <el-container>
            <el-aside class="goodaside">
                <el-col v-for="index of 5" :key="index">
                    <!--<el-card :body-style="{ padding: '10px' }" shadow="hover" style="width: 250px;margin-left: 15px ;"-->
                             <!--@click="isGoodDialogVis = !isGoodDialogVis">-->
                        <!--<img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"-->
                             <!--class="image">-->
                        <!--<div style="padding: 14px;width: 180px">-->
                            <!--<span>好吃的汉堡</span>-->
                            <!--<div class="bottom clearfix">-->
                                <!--<el-button type="text" class="button">加入购物车</el-button>-->
                            <!--</div>-->
                        <!--</div>-->
                    <!--</el-card>-->
                </el-col>
            </el-aside>
            <el-container>
                <el-header height="20px" style="align-text: center">
                    <el-row>
                        <el-button :autofocus="true" class="head_btn" plain @click=getPageByC_Num>综合排序
                        </el-button>
                        <el-button plain class="head_btn">销量</el-button>
                        <el-button plain class="head_btn" @click="getPageByC_MaxMoney">价格</el-button>
                        <el-button plain class="head_btn">评论数</el-button>
                        <el-button plain class="head_btn" @click="getPageByC_EndTime">上架时间</el-button>
                    </el-row>
                </el-header>
                <el-main>

                    <!--商品展示面板-->
                    <div class="goodPanel">
                        <el-card v-for="o in goodList" :key="o.cNum"
                                 :body-style="{ padding: '0px' }"
                                 style="width: 230px;margin-right: 20px;"
                                 shadow="hover"

                        >
                            <img :src=o.cImg
                                 class="image"
                                 @click="visGoodDialog(o.cNum,o.cName)"
                            >
                            <div style="padding: 14px;">
                                <span class="GoodName">{{o.cName}}</span>
                                <div class="bottom clearfix">
                                    <div class="price_cart">
                                        <div class="price">￥{{o.cMaxmoney}}</div>
                                        <el-button type="warning"
                                                   icon="el-icon-star-off"
                                                   circle
                                                   @click="addFavo(o)">

                                        </el-button>
                                        <el-button type="primary"
                                                   icon="el-icon-shopping-cart-2"
                                                   circle
                                                   @click="visGoodDialog(o.cNum,o.cName)">
                                        </el-button>
                                    </div>
                                </div>
                            </div>
                        </el-card>
                    </div>


                    <el-pagination
                            background
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page.sync="curPage"
                            :page-size="5"
                            layout="prev, pager, next, jumper"
                            :total="total"
                            style="float: right"
                    >
                    </el-pagination>
                </el-main>
            </el-container>
        </el-container>

    </el-container>
</template>

<script>
    import axios from 'axios';
    import GoodDialog from "./GoodDialog";


    export default {

        name: "GoodsPage",
        components: {GoodDialog},
        mounted() {
            this.getCart();
        },
        data() {
            return {
                // 商品对话框当前选中商品cNum
                curGood: '',
                curGoodName: '',

                total: 200,
                C_Num: "C_Num",
                C_MaxMoney: "C_MaxMoney",
                C_EndTime: "C_EndTime",
                keyWord: '',
                goodList: [],
                curPage: 1,
                pageSize: 18,
                order: '',
                isAsc: true,

                isGoodDialogVis: false
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

                this.order = "C_MaxMoney";
                this.getCart();
            },

            getPageByC_EndTime() {
                this.order = "C_EndTime";
                this.getCart();
            },

            addFavores() {
                this.$message({
                    message: '成功加入收藏夹啦',
                    type: 'success'
                });
            },
            addFavoerr() {
                this.$message({
                    showClose: true,
                    message: '不知道为什么，反正是没加入收藏夹',
                    type: 'error'
                });
            },

            addFavo: function (Com) {
                axios.post('/api/Favorities/addFavorities', Com, {
                        headers: {
                            'token': this.$store.getters.getToken
                        }
                    }
                ).then(res => {
                    this.addFavores();
                }).catch(err => {
                    this.addFavoerr();
                });

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
                    // console.log(this.goodList);
                })
            }
        }

    };
</script>

<style scoped>
    .my_logo {
        /*position: relative;*/
        /*float: left;*/
        /*width: 200px;*/
        /*height: 65px;*/
        font-family: 华文琥珀;
        color: #9DBC7A;
        font-size: 40px;
        margin-top: 20px;
        margin-bottom: 7px;
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
        background-image: linear-gradient(to bottom, #f5f7fa 0%, #c3cfe2 100%);
        margin: 0px;
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
        color: #9DBC7A;
    }

    .goodaside {
        width: 250px;
        border-style: solid;
        border-color: #9DBC7A;
    }

    .GoodName {
        white-space: nowrap;
    }

</style>
