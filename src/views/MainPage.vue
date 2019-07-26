<template>
    <el-container>
        <el-header style="padding: 0;" height="300px">
            <el-carousel :interval="5000" arrow="always" style="width: 100%; height: 300px">
                <el-carousel-item v-for="it in item" :key="it">
                    <el-image :src=it.url style="width: 100%;height: 420px"></el-image>
                </el-carousel-item>
            </el-carousel>
        </el-header>
        <el-main>
            <el-main style="height: 560px ; display: flex; justify-content: center; flex-wrap: wrap" >
                <el-header height="30px" style="width: 1100px">
                    <div style="font-size: 28px; font-family: 黑体;display: inline;margin-right: 20px">新品首发</div>
                    <div style="font-size: 14px;display: inline">衣橱里总觉得少一件</div>
                    <el-button type="text" style="float: right">更多新品</el-button>
                </el-header>
                <div style="height: 490px;width: 1200px;display: flex; justify-content: center;" :interval="4000">
                    <el-carousel arrow="never" height="365px" indicator-position="outside"
                                 style="width: 1140px;justify-content: center">
                        <el-carousel-item v-for="goods in newList" :key="goods">
                            <span v-for="good in goods" :key="good.cNum">
                                <GoodCard class="card" :good="good"/>
                            </span>
                        </el-carousel-item>
                    </el-carousel>
                </div>
            </el-main>
            <el-main class="a-block" style="background-color: #e2cdb1">
                <el-header height="30px" style="width: 1100px">
                    <div style="font-size: 28px; font-family: 黑体;display: inline;margin-right: 20px">人气画稿</div>
                    <div style="font-size: 14px;display: inline">快去看看，说不定就做出来了呢</div>
                    <el-button type="text" style="float: right">更多画稿</el-button>
                </el-header>
                <el-main style="height: 560px;width: 1200px;display: flex; justify-content: center;">
                    <div >
                        <GoodCard style="width: 390px; height: 530px;margin-top: 5px" :good="sentimentList[6]"/>
                    </div>
                    <div style="width: 800px;display: flex;flex-wrap: wrap">
                        <div v-for="good in sentimentList" v-if="good.num == 1" :key="good" style="display: flex;flex-wrap: wrap;">
                            <div style="display: flex;flex-wrap: wrap;" >
                                <GoodCard style="width: 223px;height: 260px; margin-left: 10px;margin-top: 5px" :good="good"/>
                            </div>
                        </div>
                    </div>
                </el-main>
            </el-main>
        </el-main>
    </el-container>
</template>

<script>
    import axios from 'axios';
    import GoodDialog from "./Good/GoodDialog";
    import GoodCard from "./Good/GoodCard";

    export default {
        name: "MainPage",
        components: {GoodCard, GoodDialog},
        data: function () {
            return {
                curGood: '',
                curGoodName: '',
                isGoodDialogVis2: true,

                item: [{
                    url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564047462046&di=416866d09fa13a973ff69861166420ee&imgtype=0&src=http%3A%2F%2Ftour.btggl.com%2Fupfile%2FC_CABEBCCEBBDHDAJBIHJ%2F2014122618175598.jpg'
                }, {
                    url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564047511077&di=58ecae960761e006304e0e8a6dd02668&imgtype=0&src=http%3A%2F%2Fwww.goodmorningtenerife.com%2Fwp-content%2Fuploads%2F2015%2F02%2F01b_slide_excursions_GM_Tenerife-1920x420.jpg'
                }
                ],
                sentimentList: [{
                    cImg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564047462046&di=416866d09fa13a973ff69861166420ee&imgtype=0&src=http%3A%2F%2Ftour.btggl.com%2Fupfile%2FC_CABEBCCEBBDHDAJBIHJ%2F2014122618175598.jpg',
                    cName: 'kjfkdsjfsd',
                    cMinmoney: '44.12',
                    num: 0,
                }, {
                    cImg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564047511077&di=58ecae960761e006304e0e8a6dd02668&imgtype=0&src=http%3A%2F%2Fwww.goodmorningtenerife.com%2Fwp-content%2Fuploads%2F2015%2F02%2F01b_slide_excursions_GM_Tenerife-1920x420.jpg',
                    cName: 'kjfkdsjfsfsd',
                    cMinmoney: '44.12',
                    num: 1,
                }, {
                    cImg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564047462046&di=416866d09fa13a973ff69861166420ee&imgtype=0&src=http%3A%2F%2Ftour.btggl.com%2Fupfile%2FC_CABEBCCEBBDHDAJBIHJ%2F2014122618175598.jpg',
                    cName: 'kjfkdsjfsd',
                    cMinmoney: '44.12',
                    num: 1,
                }, {
                    cImg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564047511077&di=58ecae960761e006304e0e8a6dd02668&imgtype=0&src=http%3A%2F%2Fwww.goodmorningtenerife.com%2Fwp-content%2Fuploads%2F2015%2F02%2F01b_slide_excursions_GM_Tenerife-1920x420.jpg',
                    cName: 'kjfkdsjfsfsd',
                    cMinmoney: '44.12',
                    num: 1,
                }, {
                    cImg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564047462046&di=416866d09fa13a973ff69861166420ee&imgtype=0&src=http%3A%2F%2Ftour.btggl.com%2Fupfile%2FC_CABEBCCEBBDHDAJBIHJ%2F2014122618175598.jpg',
                    cName: 'kjfkdsjfsd',
                    cMinmoney: '44.12',
                    num: 1,
                }, {
                    cImg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564047511077&di=58ecae960761e006304e0e8a6dd02668&imgtype=0&src=http%3A%2F%2Fwww.goodmorningtenerife.com%2Fwp-content%2Fuploads%2F2015%2F02%2F01b_slide_excursions_GM_Tenerife-1920x420.jpg',
                    cName: 'kjfkdsjfsfsd',
                    cMinmoney: '44.12',
                    num: 1,
                }, {
                    cImg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564047462046&di=416866d09fa13a973ff69861166420ee&imgtype=0&src=http%3A%2F%2Ftour.btggl.com%2Fupfile%2FC_CABEBCCEBBDHDAJBIHJ%2F2014122618175598.jpg',
                    cName: 'kjfkdsjfsd',
                    cMinmoney: '44.12',
                    num: 1,
                },],
                newList: [
                    [{
                        cImg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564047462046&di=416866d09fa13a973ff69861166420ee&imgtype=0&src=http%3A%2F%2Ftour.btggl.com%2Fupfile%2FC_CABEBCCEBBDHDAJBIHJ%2F2014122618175598.jpg',
                        cName: 'kjfkdsjfsd',
                        cMinmoney: '44.12',
                        num:0,
                    }, {
                        cImg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564047511077&di=58ecae960761e006304e0e8a6dd02668&imgtype=0&src=http%3A%2F%2Fwww.goodmorningtenerife.com%2Fwp-content%2Fuploads%2F2015%2F02%2F01b_slide_excursions_GM_Tenerife-1920x420.jpg',
                        cName: 'kjfkdsjfsfsd',
                        cMinmoney: '44.12',
                        num:1,
                    },{
                        cImg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564047462046&di=416866d09fa13a973ff69861166420ee&imgtype=0&src=http%3A%2F%2Ftour.btggl.com%2Fupfile%2FC_CABEBCCEBBDHDAJBIHJ%2F2014122618175598.jpg',
                        cName: 'kjfkdsjfsd',
                        cMinmoney: '44.12',
                        num: 0,
                    }, {
                        cImg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564047511077&di=58ecae960761e006304e0e8a6dd02668&imgtype=0&src=http%3A%2F%2Fwww.goodmorningtenerife.com%2Fwp-content%2Fuploads%2F2015%2F02%2F01b_slide_excursions_GM_Tenerife-1920x420.jpg',
                        cName: 'kjfkdsjfsfsd',
                        cMinmoney: '44.12',
                        num: 1,
                    },],
                    [{
                        cImg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564047462046&di=416866d09fa13a973ff69861166420ee&imgtype=0&src=http%3A%2F%2Ftour.btggl.com%2Fupfile%2FC_CABEBCCEBBDHDAJBIHJ%2F2014122618175598.jpg',
                        cName: 'kjfkdsjfsd',
                        cMinmoney: '44.12',
                        num: 0,
                    }, {
                        cImg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564047511077&di=58ecae960761e006304e0e8a6dd02668&imgtype=0&src=http%3A%2F%2Fwww.goodmorningtenerife.com%2Fwp-content%2Fuploads%2F2015%2F02%2F01b_slide_excursions_GM_Tenerife-1920x420.jpg',
                        cName: 'kjfkdsjfsfsd',
                        cMinmoney: '44.12',
                        num: 1,
                    }, {
                        cImg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564047462046&di=416866d09fa13a973ff69861166420ee&imgtype=0&src=http%3A%2F%2Ftour.btggl.com%2Fupfile%2FC_CABEBCCEBBDHDAJBIHJ%2F2014122618175598.jpg',
                        cName: 'kjfkdsjfsd',
                        cMinmoney: '44.12',
                        num: 0,
                    }, {
                        cImg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564047511077&di=58ecae960761e006304e0e8a6dd02668&imgtype=0&src=http%3A%2F%2Fwww.goodmorningtenerife.com%2Fwp-content%2Fuploads%2F2015%2F02%2F01b_slide_excursions_GM_Tenerife-1920x420.jpg',
                        cName: 'kjfkdsjfsfsd',
                        cMinmoney: '44.12',
                        num: 1,
                    },],
                ],
            }
        },
        methods: {
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
        float: left;
        margin-left: 15px
    }

    .a-block {
        height: 560px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap
    }
</style>
