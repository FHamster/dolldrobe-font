<template>
    <div class="flex-col">
        <el-dialog title="商品详情" :visible.sync="isGoodDialogVis" width="1000px">
            <GoodDialog :c-num="curGood" :c-name="curGoodName"></GoodDialog>
        </el-dialog>

        <div style="padding: 0;">
            <el-carousel :interval="5000" arrow="always" style="width: 100%">
                <el-carousel-item v-for="(it,index) in item" :key="index">
                    <el-image :src=it.url style="width: 100%"></el-image>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div>
            <div class="infopane-background">
                <div class="infopane">
                    <div class="info-title">新品首发</div>
                    <el-divider content-position="right">
                        <router-link  to="/GoodsPage" tag="span">
                            <el-link :underline="false">More</el-link>
                        </router-link>
                    </el-divider>

                    <div class="Pane">
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

            <div class="infopane-background" >
                <div class="infopane">
                    <div class="info-title">人气画稿</div>
                    <el-divider content-position="right">
                        <router-link to="/GoodsPage" tag="span">
                            <el-link :underline="false">More</el-link>
                        </router-link>
                    </el-divider>

                    <div class="Pane">
                        <GoodCard v-for="good in sentimentList" :key="good.cNum"
                                  style="margin-left: 20px;margin-top: 15px"
                                  :good="good"/>
                    </div>
                </div>
            </div>

            <div class="infopane-background" >
                <div class="infopane">
                    <div class="info-title">限时抢购</div>
                    <el-divider content-position="right">
                        <router-link to="/GoodsPage" tag="span">
                            <el-link :underline="false">More</el-link>
                        </router-link>
                    </el-divider>
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
    </div>
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
                    url: 'http://139.9.133.60:8072/banner1.png'
                }, {
                    url: 'http://139.9.133.60:8072/banner2.png'
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
                // console.log(viscNum);
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

    .infopane-background {
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        margin: 0;
    }

    .infopane-background:nth-child(odd) {
        background-color: white;

    }

    .infopane-background:nth-child(even) {
        background-color: whitesmoke;
    }

    .infopane-background > .infopane > .Pane {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }



    .infopane-background > .infopane > .title {
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

    .info-title {
        font-size: 28px;
        margin-right: 20px;
        padding-left: 40px;
        color: #303133;
    }
</style>
