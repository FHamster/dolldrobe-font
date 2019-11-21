<template>
    <div class="flex-col">
        <el-dialog title="商品详情" :visible.sync="isGoodDialogVis" width="1000px">
            <GoodDialog :c-num="curGood" :c-name="curGoodName"></GoodDialog>
        </el-dialog>

        <div class="myhead">

        </div>

        <el-container style="padding:24px 80px">
            <el-aside>
                <el-card>
                    <!--         套装
                             帽子
                             上衣
                             下装
                             鞋靴
                             配饰 (口罩眼罩娃用包假发贴纸奶嘴辫子眼镜游泳圈气球滑板跑车)
                             家具-->
                    <el-collapse accordion>
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
                    <el-divider content-position="left">KeyWord</el-divider>
                    <div class="rowdir">
                        <el-input prefix-icon="el-icon-search" type="text"
                                  size=large class="mysearch"
                                  v-model="keyWord">
                        </el-input>
                        <el-button @click="getCart">
                            搜索
                        </el-button>
                    </div>
                </el-card>

                <el-card style="margin-top: 32px">
                    <div slot="header"><span>排序方式</span></div>
                    <el-button plain @click=getPageByC_Num>综合排序</el-button>
                    <el-button plain>销量</el-button>
                    <el-button plain @click="getPageByC_MaxMoney">价格</el-button>
                    <el-button plain>评论数</el-button>
                    <el-button plain @click="getPageByC_EndTime">上架时间</el-button>
                </el-card>

            </el-aside>
            <el-main style="padding: 0;margin-left: 32px">
                <el-card style="padding:16px 0 ">
                    <div style="justify-content: center" class="flex-row">
                        <!--商品展示面板-->
                        <div class="goodPanel">
                            <div v-for="good in goodList" :key="good.cNum"
                                 style="margin: 8px 16px"
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
                </el-card>
            </el-main>

        </el-container>

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
                pageSize: 12,
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
        background-color: whitesmoke;
    }

    .myimg {
        /*float: left;*/

        width: 70px;
        height: 70px;

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


</style>
