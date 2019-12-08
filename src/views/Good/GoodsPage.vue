<template>
    <div class="flex-col">
        <el-dialog title="商品详情" :visible.sync="isGoodDialogVis" width="1000px">
            <GoodDialog :c-num="curGood" :c-name="curGoodName"></GoodDialog>
        </el-dialog>

        <div id="top" style="width: 100%; height: 8px;background-color: #C2ADED"></div>

        <div style="padding:32px 64px">


            <!--
                            <el-card style="margin-top: 32px">
                                <div slot="header"><span>排序方式</span></div>
                                <div class="flex-col">
                                    <el-button plain disabled>销量排序</el-button>
                                    <el-button plain @click=getPageByC_Num>综合排序</el-button>
                                    <el-button plain @click="getPageByC_MaxMoney">价格排序</el-button>
                                    <el-button plain disabled>评论数量</el-button>
                                    <el-button plain @click="getPageByC_EndTime">上架时间</el-button>
                                </div>
                            </el-card>-->

            <!--     <el-main style="padding: 0;margin-left: 32px">
                     -->
            <!--            <el-card style="padding:16px 0 ">-->


            <div class="flex-row">
                <el-button plain disabled>销量排序</el-button>
                <el-button plain @click=getPageByC_Num>综合排序</el-button>
                <el-button plain @click="getPageByC_MaxMoney">价格排序</el-button>
                <el-button plain disabled>评论数量</el-button>
                <el-button plain @click="getPageByC_EndTime">上架时间</el-button>
            </div>
            <el-divider></el-divider>
            <el-popover
                    placement="top-start"
                    title="提示"
                    width="200"
                    trigger="hover"
                    content="这里可以对商品进行过滤哦">
                <el-button slot="reference" class="sideFixed"
                           icon="el-icon-arrow-right"
                           circle
                           type="info"
                           @click="isSidePaneShow=true"
                           v-show="!isSidePaneShow">
                </el-button>
            </el-popover>
            <!--商品展示面板-->
            <div class="goodPanel">

                <div v-for="good in goodList" :key="good.cNum"
                     style="margin: 8px 16px"
                     @click="visGoodDialog(good.cNum,good.cName)">
                    <GoodCard :good="good"/>
                </div>
            </div>
            <!--   <el-pagination
                       small
                       background
                       @size-change="handleSizeChange"
                       @current-change="handleCurrentChange"
                       :current-page.sync="curPage"
                       :page-size="5"
                       layout="prev, pager, next, jumper"
                       :total="total"
                       style="float: right;margin-top: 50px;margin-right: 100px">
               </el-pagination>-->
            <div class="flex-row" style="justify-content: center">
                <el-pagination
                        background
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page.sync="curPage"
                        :page-size="5"
                        layout="prev, pager, next, jumper"
                        :total="total"
                        style="margin-top: 32px">
                </el-pagination>
            </div>
            <!--            </el-card>-->
            <!-- </el-main>-->
        </div>
        <el-drawer
                :modal="false"
                :show-close="false"
                size="20%"
                :visible.sync="isSidePaneShow"
                custom-class="drawerCustom"
                direction="ltr">

            <!--                <el-card>-->

            <!--         套装
                     帽子
                     上衣
                     下装
                     鞋靴
                     配饰 (口罩眼罩娃用包假发贴纸奶嘴辫子眼镜游泳圈气球滑板跑车)
                     家具
                     -->
            <div style="padding: 0 32px">
                <el-divider content-position="left">Classify</el-divider>
                <el-collapse accordion v-model="activeNames">
                    <el-collapse-item title="全部" name="全部">
                        <div>世界是我的想象</div>
                    </el-collapse-item>
                    <el-collapse-item title="套装" name="套装">
                        <div>波西米亚是一种精神</div>
                    </el-collapse-item>
                    <el-collapse-item title="帽子" name="帽子">
                        <div>奥黛丽赫本式的优雅味道</div>
                    </el-collapse-item>
                    <el-collapse-item title="上衣" name="上衣">
                        <div>翻出新鲜的花样</div>
                    </el-collapse-item>
                    <el-collapse-item title="下装" name="下装">
                        <div>百慕大短裤就像夏天的冰可乐</div>
                    </el-collapse-item>
                    <el-collapse-item title="鞋靴" name="鞋靴">
                        <div>有磨损才会有故事</div>
                    </el-collapse-item>
                    <el-collapse-item title="配饰" name="配饰">
                        <div>小礼帽、红襟花、羊皮长手套</div>
                    </el-collapse-item>
                </el-collapse>

                <el-divider content-position="left">Keyword</el-divider>
                <div class="rowdir">
                    <el-input prefix-icon="el-icon-search" type="text"
                              size=large class="mysearch"
                              v-model="keyWord">
                    </el-input>
                    <el-button @click="getCart">
                        搜索
                    </el-button>
                </div>
                <el-slider
                        v-model="value"
                        range
                        show-stops
                        :max="10">
                </el-slider>

                <!--                </el-card>-->
            </div>
        </el-drawer>

        <!--        <el-button class="sideFixed"
                           icon="el-icon-arrow-right"
                           circle
                           plain
                           type="primary"
                           @click="isSidePaneShow=true"
                           v-show="!isSidePaneShow">
                </el-button>-->
    </div>
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
                isSidePaneShow: false,

                scrollOptions: {
                    container: "body",
                    duration: 700,
                    easing: "ease",
                    offset: 0,
                    cancelable: true,
                    onStart: false,
                    onDone: false,
                    onCancel: false,
                    x: false,
                    y: true
                },
                // 商品对话框当前选中商品cNum
                curGood: '',
                curGoodName: '',
                isGoodDialogVis: false,
                activeNames: '全部',

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
                    // console.log(this.goodList);
                })
            }
        }

    };
</script>

<style scoped>

    .rowdir {
        display: flex;
        flex-direction: row;
        align-items: center;
    }


    .goodPanel {
        /*width: 1350px;*/
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
    }

    .sideFixed {
        margin-top: 10vh;
        margin-left: 24px;
        position: fixed;
        z-index: 2;
    }

    .sideFunPane {

        /* margin-left: 8px;
         margin-top: 64px;*/
        width: 400px;
    }

    .drawerCustom {
        padding-left: 10px;
    }
</style>
