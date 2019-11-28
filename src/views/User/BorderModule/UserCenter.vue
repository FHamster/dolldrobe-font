<template>
    <el-container class="user-center-con flex-col">
        <el-dialog title="商品详情" :visible.sync="isGoodDialogVis" width="1000px">
            <GoodDialog :c-num="curGood" :c-name="curGoodName"></GoodDialog>
        </el-dialog>
        <div style="width: 100%; height: 8px;background-color: #C2ADED"></div>


        <div class="info-pane_background">
            <div>
                <div class="user-card">
                    <div class="user-card-box1 flex-col">
                        <div style="height: 60px;font-size:50px;
                        text-align:center;color: rgba(255,255,255,0.4);">
                            玩偶衣橱
                        </div>
                        <div class="user-card-avater">
                            <el-image :src="headicon"
                                      style="border-radius: 50%;width: 64px;height: 64px"/>
                        </div>
                        <div class="user-card-username">
                            <div style="font: 700 18px/20px Arial; color: #fff;">
                                {{username}}
                            </div>
                        </div>
                        <div style="align-self: center">
                            <el-button round plain>
                                OPEN
                            </el-button>
                        </div>
                    </div>
                    <div class="user-card-box2">
                        <div class="user-card-box2-purse">
                            <div style="float: left ">
                                我的钱包
                            </div>
                            <el-tooltip :content=card_tool_content placement="bottom" effect="light">
                                <img :src="icon_select" style="width: 20px;height: 20px;float: right;margin: 18px auto"
                                     @click="changeTooltip">
                            </el-tooltip>
                        </div>
                        <div style="max-width: 750px;height: 169px;">
                            <div class="user-card-box3">
                                <div style="width: 350px;height:100%;margin-right: 10px;display: block;background-color: white">
                                    <el-container style="height: 129px;width: 36px;">
                                        <el-header height="36px" style="display: block;">
                                            <div style="padding-top: 10px; height: 24px;line-height: 24px;
                                                    font-size: 22px;font-weight: 700;margin-bottom: 15px">
                                                {{couNum}}
                                            </div>
                                            <div style="font-size: 12px;height: 20px;line-height: 20px;margin-bottom: 10px">
                                                优惠券
                                            </div>
                                            <el-button type="text"
                                                       style="font-size: 12px;height: 20px;line-height: 20px">
                                                领券
                                            </el-button>
                                        </el-header>
                                    </el-container>
                                </div>
                                <div style="width: 350px;height:100%;background-color: white">
                                    <el-container style="height: 129px;">
                                        <el-header style="display: block;">
                                            <div style="padding-top: 10px; height: 24px;line-height: 24px;
                                                    font-size: 22px;font-weight: 700;margin-bottom: 15px">
                                                {{intNum}}
                                            </div>
                                            <div style="font-size: 12px;height: 20px;line-height: 20px;margin-bottom: 10px">
                                                积分
                                            </div>
                                            <el-button type="text"
                                                       style="font-size: 12px;height: 20px;line-height: 20px">
                                                领积分
                                            </el-button>
                                            <el-divider direction="vertical"></el-divider>
                                            <el-button type="text"
                                                       style="font-size: 12px;height: 20px;line-height: 20px">
                                                花积分
                                            </el-button>
                                        </el-header>
                                    </el-container>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <el-container>
                <el-main>
                    <el-card :body-style="{width:'100%',height: '300px'}">
                        <div v-for="it in ['/PersonDetail','PersonalData','/OrderDetail','/ShoppingBag','/UserAddress','/GoodOrder','/BookMark',]"
                             :key="it">

                            <router-link :to="it">
                                <el-button type="primary" icon="el-icon-edit" circle></el-button>
                            </router-link>
                        </div>
                    </el-card>
                    <el-card style="margin-top: 16px" :body-style="{padding:'0px'}">
                        <div slot="header">
                            我的订单
                        </div>
                        <div class="user-order-con">
                            <!--按钮面板-->
                            <div class="flex-row con-pane">
                                <div class="flex-col"
                                     @mouseout="mouseMv(icon_fukuan)"
                                     @mouseover="mouseHov(icon_fukuan)">
                                    <el-badge :value=fknum v-if="fknum > 0" max="20"/>
                                    <el-image :src="icon_fukuan" class="user-order-card-img"/>
                                    <span class="user-order-card-text">待付款</span>
                                </div>
                                <div class="flex-col"
                                     @mouseout="mouseMv(icon_shouhuo)"
                                     @mouseover="mouseHov(icon_shouhuo)">
                                    <el-badge :value=shnum v-if="shnum > 0" class="badge-item" max="20"/>
                                    <el-image :src="icon_shouhuo" class="user-order-card-img"/>
                                    <span class="user-order-card-text">待收货</span>
                                </div>
                                <div class="flex-col"
                                     @mouseout="mouseMv(icon_pingjia)"
                                     @mouseover="mouseHov(icon_pingjia)">
                                    <el-badge :value=pjnum v-if="pjnum > 0" class="badge-item" max="20"/>
                                    <el-image :src="icon_pingjia" class="user-order-card-img"/>
                                    <span class="user-order-card-text">待评价</span>
                                </div>
                                <div class="flex-col"
                                     @mouseout="mouseMv(icon_shouhou)"
                                     @mouseover="mouseHov(icon_shouhou)">
                                    <el-badge :value=sonum v-if="sonum > 0" class="badge-item" max="20"/>
                                    <el-image :src="icon_shouhou" class="user-order-card-img"/>
                                    <span class="user-order-card-text">售后服务</span>
                                </div>
                                <div class="flex-col"
                                     @mouseout="mouseMv(icon_gengduo)"
                                     @mouseover="mouseHov(icon_gengduo)">
                                    <el-image :src="icon_vgengduo" class="user-order-card-img"/>
                                    <span class="user-order-card-text">全部订单</span>
                                </div>
                            </div>
                            <!--表格-->
                            <div class="user-order-table" v-if="tableNum > 0">
                                <el-table :data="tableData">
                                    <el-table-column prop="skuId" label="商品" min-width="200">
                                        <template slot-scope="scope">
                                        <span style="display: flex; flex-direction: row;justify-content: space-between ">
                                            <el-image :src="scope.row.src" style="width: 80px;height: 80px "></el-image>
                                            <div class="user-order-table-text" style="float: left">
                                                {{scope.row.label}}
                                            </div>
                                        </span>
                                        </template>
                                    </el-table-column>
                                    <el-table-column min-width="80px" label="款式">
                                        <template slot-scope="scope">
                                        <span class="user-order-table">
                                            {{scope.row.kind}}
                                        </span>
                                        </template>
                                    </el-table-column>
                                    <el-table-column prop="scNum" label="数量"
                                                     style="text-align: center" min-width="64">
                                        <template slot-scope="scope">
                                        <span style="font-size: 12px;color: #696969;text-align: center">
                                            {{scope.row.num}}
                                        </span>
                                        </template>
                                    </el-table-column>
                                    <el-table-column min-width="100px" label="最近物流">
                                        <template slot-scope="scope">
                                        <span class="user-order-table-text">
                                            {{scope.row.direction}}
                                        </span>
                                        </template>
                                    </el-table-column>
                                    <el-table-column min-width="75px" label="操作">
                                        <template>
                                        <span>
                                            <el-button type="text" size="small" tyle="margin-left: 0;padding: 0 ">
                                                查看详情
                                            </el-button>
                                        </span>
                                        </template>
                                    </el-table-column>
                                </el-table>

                            </div>
                            <div v-else class="user-order-empty">
                                <el-image :src="icon_yichu" class="user-order-empty-img"/>
                                衣橱里好久没有添加新衣服了，快去逛逛吧！
                            </div>
                        </div>
                    </el-card>
                </el-main>
                <el-aside style="margin-left: 16px">
                    <el-card>
                        <div slot="header">
                            我的关注
                        </div>
                        <div style="display: flex;justify-content: space-between;padding: 20px;height: 60px">
                            <el-button type="text" class="user-aside-mark-li">
                                <div class=" user-aside-mark-num">
                                    {{goodMark}}
                                </div>
                                <div type="text" class="user-aside-mark-text">
                                    画稿关注
                                </div>
                            </el-button>
                            <el-button type="text" class="user-aside-mark-li">
                                <div class=" user-aside-mark-num">
                                    {{paintMark}}
                                </div>
                                <div class="user-aside-mark-text">
                                    画手关注
                                </div>
                            </el-button>
                            <el-button type="text" class="user-aside-mark-li">
                                <div class=" user-aside-mark-num">
                                    {{numMark}}
                                </div>
                                <div class="user-aside-mark-text">
                                    我的收藏
                                </div>
                            </el-button>
                        </div>
                    </el-card>
                    <el-card style="margin-top: 16px">
                        <div slot="header">
                            浏览记录
                            <el-button type="text" class="user-browse-icon">
                                更多<i class=" el-icon-d-arrow-right"></i>
                            </el-button>
                        </div>
                        <div style="width: 100%;height: 280px;">
                            <el-carousel :interval="5000"
                                         height="260px"
                                         arrow="hover"
                                         style="margin: auto 10px"
                                         indicator-position="outside">
                                <el-carousel-item v-for="(goods,index) in newList" :key="index"
                                                  style="display: flex;flex-direction: row;ustify-content: center;">
                                    <div v-for="good in goods" :key="good.cNum"
                                         @click="visGoodDialog(good.cNum,good.cName)">
                                        <GoodCard :good="good" style="height: 250px;width: 260px;margin: 10px 0"/>
                                    </div>
                                </el-carousel-item>
                            </el-carousel>
                        </div>
                    </el-card>
                </el-aside>
            </el-container>
        </div>


        <router-view></router-view>
    </el-container>

</template>

<script>
    import axios from 'axios';
    import GoodCard from "../../Good/GoodCard";
    import GoodDialog from "../..//Good/GoodDialog";

    import view from '../../../assets/view.png'
    import view_off from '../../../assets/view-off.png'
    import fukuan from "../../../assets/iconblack/fukuan.png";
    import gengduo from '../../../assets/iconblack/gengduo.png';
    import pingjia from '../../../assets/iconblack/pingjia.png';
    import shouhou from '../../../assets/iconblack/shouhou.png';
    import shouhuo from '../../../assets/iconblack/shouhuo.png';
    import fukuanr from '../../../assets/iconred/fukuan.png';
    import gengduor from '../../../assets/iconred/gengduo.png';
    import pingjiar from '../../../assets/iconred/pingjia.png';
    import shouhour from '../../../assets/iconred/shouhou.png';
    import shouhuor from '../../../assets/iconred/shouhuo.png';
    import yichu from '../../../assets/yichu.png';


    export default {
        name: "UserCenter",
        components: {GoodDialog, GoodCard},
        data: function () {
            return {
                isPainter: false,
                username: "NONE",
                icon_select: view,
                card_show: true,
                card_tool_content: "隐藏金额",
                couNum: 0,
                intNum: 0,
                intNumTrue: 0,
                goodMark: 0,
                paintMark: 0,
                numMark: 0,

                headicon: "http://storage.360buyimg.com/i.imageUpload/465f4c5f5a31343233383930323933373032_mid.jpg",

                icon_yichu: yichu,
                icon_fukuan: fukuan,
                icon_gengduo: gengduo,
                icon_pingjia: pingjia,
                icon_shouhou: shouhou,
                icon_shouhuo: shouhuo,

                fknum: 0, //付款
                pjnum: 0, //评价
                shnum: 0, //收货
                sonum: 0, //售后

                tableData: [
                    {
                        src: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
                        label: '汉堡王汉堡王汉堡王',
                        num: 10,
                        direction: "南山南北山北同住地球村",
                        kind: 'black '
                    },
                    {
                        src: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
                        label: '汉堡王',
                        num: 10,
                        direction: "南山南北山北同住地球村",
                        kind: 'black '
                    },
                ],
                tableNum: 2,
                // items: [{
                //     url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563382908&di=c8042cc7a0825223dc848cb101c51b2a&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.rmb.bdstatic.com%2Fcd2476300bbad8dfcfff1d277b79401a.jpeg'
                // },
                //     {
                //         url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562788315988&di=5c03425786b287658469608f493ddc91&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201801%2F13%2F20180113215940_VTkFe.jpeg'
                //     },
                //     {
                //         url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562788493857&di=95900b26cd7c834bdd6913e1edd9b9bc&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F9%2F54362d63810ea.jpg'
                //     },
                // ],
                isHidden: false,
                from: {
                    search: '',
                },

                curGood: '',
                curGoodName: '',
                isGoodDialogVis: false,
                newList: [],
            }
        },
        methods: {
            user_search() {

            },
            changeHidden() {
                this.isHidden = true
            },
            changeTooltip() {
                this.card_show = !this.card_show;
                if (this.card_show == true) {
                    this.intNum = this.intNumTrue;
                    this.icon_select = view;
                    this.card_tool_content = "隐藏金额";
                } else {
                    this.intNum = "****"
                    this.icon_select = view_off;
                    this.card_tool_content = "显示金额";
                }
            },
            getNewList() {
                //清空新品
                this.newList = [];
                let tmplist1 = [];
                // 设置页数
                let pagenum = 3;
                axios.get('/api/GoodPage/GoodPageByOrder', {
                        params: {
                            keyWord: 'new',
                            startPage: 0,
                            pageSize: 5,
                            order: this.order,
                            isAsc: this.isAsc
                        }
                    }
                ).then(res => {
                    for (let i = 0; i < pagenum; i++) {
                        tmplist1 = res.data.slice(i, i + 1);
                        this.newList.push(tmplist1);
                    }
                    //console.log(this.newList);
                });


            },
            visGoodDialog(viscNum, visName) {
                this.curGood = viscNum;
                this.curGoodName = visName;
                this.isGoodDialogVis = true;
            },

            mouseHov(iconName) {
                let temp = iconName;
                switch (temp) {
                    case fukuan:
                        this.icon_fukuan = fukuanr;
                        break;
                    case shouhuo:
                        this.icon_shouhuo = shouhuor;
                        break;
                    case pingjia:
                        this.icon_pingjia = pingjiar;
                        break;
                    case shouhou:
                        this.icon_shouhou = shouhour;
                        break;
                    case gengduo :
                        this.icon_gengduo = gengduor;
                        break;
                }
            },

            mouseMv(iconName) {
                let temp = iconName;
                switch (temp) {
                    case fukuanr:
                        this.icon_fukuan = fukuan;
                        break;
                    case shouhuor:
                        this.icon_shouhuo = shouhuo;
                        break;
                    case pingjiar:
                        this.icon_pingjia = pingjia;
                        break;
                    case shouhour:
                        this.icon_shouhou = shouhou;
                        break;
                    case gengduor :
                        this.icon_gengduo = gengduo;
                        break;
                }
            }

        },
        mounted() {
            this.getNewList();
        },
    }
</script>


<style scoped>

    .userCenter_titleMenu {

    }

    .my_logo {
        /*float: left;*/
        /*width: 16%;*/
        font-size: 40px;
        color: #9DBC7A;
        margin-top: 10px;
        margin-left: 10px;
        font-family: 华文琥珀;
        white-space: nowrap;
    }

    .userCenter_titleMenu_font {
        font-size: 13px;
    }

    .userCenter_search {
        width: 200px;
        height: 25px;
        margin-top: 15px;
        border-radius: 0;
        border-right: 0;
    }

    .userCenter_btnSearch {
        width: 72px;
        height: 28px;
        padding: 7px;
        margin-top: 15px;
        margin-right: 25px;
        background-color: #8BAAFF;
        border-radius: 0;
        float: right;
        border-left: 0;
    }

    .el-main {
        padding: 0;
        margin: 0;

    }

    .el-aside {
        padding: 0;
        width: 60px;
    }

    .el-header {
        padding: 0;
    }

    .panel {
        display: flex;
        float: right;
        flex-direction: row;
    }

    .user-center-bar {
        display: flex;
        /*flex-direction: row;*/
        /*justify-content: center;*/
        /*align-self: center;*/
    }

    .asideMenu {
        background-image: linear-gradient(to left, #f5f7fa 0%, #c3cfe2 100%);
    }

    .back2 {
        background-image: linear-gradient(to right, #f5f7fa 0%, #c3cfe2 100%);
    }

    .search {
        position: absolute;
        right: 0;
    }

    .centerClass {
        justify-content: center;
    }

    /*.user-center-con {*/
    /*width: 90%;*/
    /*max-width: 1200px;*/
    /*display: flex;*/
    /*justify-content: center;*/
    /*margin-right: 5%;*/
    /*margin-left: 5%;*/

    /*}*/
    .user-center-con {
        /*width: 90%;*/
        /*max-width: 1200px;*/
        /*justify-content: center;*/
        align-items: center;
        /*margin-right: 5%;*/
        /*margin-left: 5%;*/
        background-color: whitesmoke;
    }

    .user-center-aside {
        width: 16%;
        max-width: 170px;
        float: left;
        margin-right: 20px;
        background-color: white;
    }

    .user-center-main {
        width: 84%;
        max-width: 1000px;
    }

    .user-card {
        width: auto;
        max-width: 1000px;
        height: 243px;
        max-height: 254px;
        padding: 20px 0;
    }

    .user-card-box1 {
        width: 25%;
        max-width: 250px;
        height: 243px;
        float: left;
        background-color: #C2ADED;
        /*background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);*/
    }

    .user-card-box2 {
        width: 75%;
        max-width: 750px;
        height: 225px;
        margin: 9px 0 9px 250px;
        background-color: white;
        overflow: visible;
    }

    .user-card-avater {
        display: block;
        position: relative;
        z-index: 2;
        margin-top: -15px;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 20px;
        border-radius: 100%;
        border: 4px solid #fff;
        -webkit-box-shadow: 3px 2px 10px 0 rgba(79, 5, 1, .84);
        box-shadow: 3px 2px 10px 0 rgba(79, 5, 1, .84);
        overflow: hidden;
        width: 64px;
        height: 64px;
    }

    .user-card-username {
        margin-bottom: 10px;
        height: 20px;
        align-items: center;
        overflow: hidden;
        text-align: center;
    }

    .user-card-bottom {
        padding: 10px 20px;
        height: 36px;
        background-color: #232331;
        display: flex;
    }

    .user-card-box2-purse {
        padding: 0 20px;
        height: 55px;
        line-height: 55px;
        border-bottom: 1px solid #f0f3ef;
        overflow: visible;
        background-color: white;
    }

    .user-card-box3 {
        padding: 20px;
        width: auto;
        height: 76.3%;
        display: flex;
        justify-content: left;
    }

    .user-con-box {
        width: 70%;
        max-width: 700px;
        float: left;
        height: auto;
    }

    .user-order {
        width: 100%;
        max-width: 700px;
        height: auto;
        float: left;
        background-color: white;
    }

    .user-box-aside {
        float: right;
        width: 28%;
        max-width: 280px;
    }

    .user-box-aside-box1 {
        /*float: right;*/
        width: 100%;
        max-width: 280px;
        background-color: white;
        height: 150px;
        margin: 5px 0 20px 0;
    }

    .user-aside-Title {
        padding: 0 20px;
        max-width: 280px;
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid #f0f3ef;
        overflow: visible;
    }

    .user-aside-mark-li {
        height: 60px;
        line-height: 30px;
        color: #333;
        font-size: 16px;
        padding: 0;
    }

    .user-aside-mark-num {
        margin: 0;
        padding: 0;
        text-align: left;
    }

    .user-aside-mark-text {
        font-size: 12px;
        color: #363636;
    }

    .user-box-aside-box2 {
        /*width: 100%;*/
        max-width: 280px;
        height: 340px;
        background-color: white;
        margin: 5px 0 20px 0;
        display: inline-block;
    }

    .user-browse-icon {
        float: right;
        color: #666;
        font-size: 13px;
        padding: 18px 0;
    }

    .user-con-title {
        padding: 0 20px;
        height: 55px;
        line-height: 55px;
        border-bottom: 1px solid #f0f3ef;
        overflow: visible;
    }

    .user-order-con {
        min-height: 350px;
        height: auto;
    }

    .user-order-card {
        float: left;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        padding: 13px 0 0;
        margin: 0 20px;
        width: 90px;
        height: 90px;
        text-align: center;
        color: #333;
        -webkit-transition: all .4s ease;
        -o-transition: all .4s ease;
        transition: all .4s ease;
        border: 0;
    }

    .user-order-card-text {
        padding-top: 10px;
        height: 16px;
        line-height: 16px;
        font-size: 12px;
        color: darkgray;
    }

    .user-order-card-img {
        width: 32px;
        height: 32px;
    }

    .badge-item {
        z-index: 1;
        position: absolute;
        margin-left: 50px;
    }

    .user-order-table {
        padding: 0 16px;
    }

    .user-order-table-text {
        font-size: 12px;
        color: #696969;
        text-align: center;
        word-wrap: break-word;
        max-height: 80px;
    }

    .user-order-empty {
        padding: 60px 0 90px;
        color: #999;
        text-align: center;
        background-color: #fff;
    }

    .user-order-empty-img {
        display: inline-block;
        margin-right: 20px;
        overflow: hidden;
        vertical-align: middle;
    }

    .info-pane_background {
        width: 84%;
        max-width: 1000px;
    }

    .con-pane {
        /*height: 120px;*/
        padding: 64px 32px;
        justify-content: space-around;
        align-items: center;
    }

    .con-pane > .flex-col {
        align-items: center;
    }
</style>
