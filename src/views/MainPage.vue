<template>
    <el-container>
        <el-dialog title="商品详情" :visible.sync="isGoodDialogVis" width="1000px">
            <GoodDialog :c-num="curGood" :c-name="curGoodName"></GoodDialog>
        </el-dialog>

        <el-header style="padding: 0;" height="300px">
            <el-carousel :interval="5000" arrow="always" style="width: 100%; height: 300px">
                <el-carousel-item v-for="(it,index) in item" :key="index">
                    <el-image :src=it.url style="width: 100%;height: 420px"></el-image>
                </el-carousel-item>
            </el-carousel>
        </el-header>
        <div>
            <div class="a-block" style="background-color: white">
                <div class="infopane">
                    <div class="title">
                        <div class="maintitle">
                            <div style="font-size: 28px; margin-right: 20px">新品首发</div>
                            <div style="font-size: 14px;">衣橱里总觉得少一件</div>
                        </div>
                        <router-link to="/GoodsPage">
                            <el-button type="text">更多新品</el-button>
                        </router-link>
                    </div>
                    <div class="Pane">
                        <!--                        <el-carousel arrow="never" height="365px" indicator-position="outside" :interval="4000" style="width: 1140px;">-->
                        <el-carousel arrow="never"
                                     height="365px"
                                     indicator-position="outside"
                                     :interval="4000"
                                     style="width: 100%;">
                            <el-carousel-item v-for="(goods,index) in newList" :key="index"
                                              class="card">
                                <div v-for="good in goods" :key="good.cNum"
                                     @click="visGoodDialog(good.cNum,good.cName)">
                                    <GoodCard :good="good" style=" margin-left: 15px;"/>
                                </div>
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </div>
            </div>

            <div class="a-block" style="background-color: #e2cdb1">
                <div class="infopane">
                    <div class="title">
                        <div class="maintitle">
                            <div style="font-size: 28px; margin-right: 20px">人气画稿</div>
                            <div style="font-size: 14px;">快去看看，说不定就做出来了呢</div>
                        </div>
                        <router-link to="/GoodsPage">
                            <el-button type="text">更多画稿</el-button>
                        </router-link>
                    </div>

                    <div class="Pane">
                        <GoodCard v-for="good in sentimentList" :key="good.cNum"
                                  style="margin-left: 20px;margin-top: 15px" :good="good"/>
                    </div>
                </div>
            </div>

            <div class="a-block" style="background-color: white">
                <div class="infopane">
                    <div class="title">
                        <div class="maintitle">
                            <div style="font-size: 28px; margin-right: 20px">限时抢购</div>
                            <div style="font-size: 14px;">抢抢看喽，反正也抢不完</div>
                        </div>
                        <router-link to="/GoodsPage">
                            <el-button type="text">更多成品</el-button>
                        </router-link>
                    </div>

                    <div class="Pane">
                        <div v-for="good in sentimentList" :key="good.cNum"
                             @click="visGoodDialog(good.cNum,good.cName)">
                            <GoodCard
                                    style="margin-left: 20px;margin-top: 15px" :good="good"/>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </el-container>
</template>

<script>
    import axios from 'axios';
    import GoodCard from "./Good/GoodCard";
    import GoodDialog from "./Good/GoodDialog";

    export default {
        name: "MainPage",
        components: {GoodDialog, GoodCard},
        mounted() {
            this.getNewList();
            this.getSentimentList();
        },
        data: function () {
            return {
                curGood: '',
                curGoodName: '',
                isGoodDialogVis: false,

                item: [{
                    url: 'http://localhost:8083/file/banner1'
                }, {
                    url: 'http://localhost:8083/file/banner2'
                }
                ],
                sentimentList: [],
                newList: [],
            };
        },
        methods: {
            getSentimentList() {
                this.sentimentList = [];
                axios.get('/api/GoodPage/GoodPageByOrder', {
                        params: {
                            keyWord: 'hot',
                            startPage: 0,
                            pageSize: 8,
                            order: this.order,
                            isAsc: this.isAsc
                        }
                    }
                ).then(res => {
                    this.sentimentList = res.data;
                });
            },
            getNewList() {
                //清空新品
                this.newList = [];
                let tmplist1 = [];
                // 设置页数
                let pagenum = 6;
                axios.get('/api/GoodPage/GoodPageByOrder', {
                        params: {
                            keyWord: 'new',
                            startPage: 0,
                            pageSize: pagenum * 4,
                            order: this.order,
                            isAsc: this.isAsc
                        }
                    }
                ).then(res => {
                    for (let i = 0; i < pagenum; i++) {
                        tmplist1 = res.data.slice(i * 4, (i * 4) + 4);
                        this.newList.push(tmplist1);
                    }
                });


            },
            visGoodDialog(viscNum, visName) {
                this.curGood = viscNum;
                this.curGoodName = visName;
                console.log(viscNum);
                this.isGoodDialogVis = true;
            },
        }
    }

</script>

<style scoped>
    .el-carousel-item {
        width: 200px;
    }

    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
        width: 200px;
    }

    .card {
        /*width: 265px;*/
        /*height: 345px;*/
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .a-block {
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        margin: 0;
    }

    .a-block > .infopane > .Pane {
        display: flex;
        justify-content: center;
        flex-wrap: wrap
    }

    .a-block > .infopane > .title {
        display: flex;
        justify-content: space-between;
        padding: 0 75px;
        margin: 5px;
    }

    .infopane {
        width: 1200px;
        margin: 30px 0;
    }

    .maintitle {
        display: flex;
        align-items: baseline;
    }
</style>
