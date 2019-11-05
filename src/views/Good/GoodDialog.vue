<template>
    <el-container>
        <!--走马灯-->
        <el-aside>
            <el-carousel :interval="5000" arrow="always" height="440px" indicator-position="outside">
                <el-carousel-item v-for=" item in skuImage" :key="item">
                    <el-image :src=item></el-image>
                </el-carousel-item>
            </el-carousel>
        </el-aside>

        <!--商品信息主面板-->
        <div class="goodpane">
            <div height="50px">
                <div class="good-lable" style="font-size: 25px;font-weight: bold">{{goodLabel}}</div>
            </div>

            <div class="info-pane" style="text-align: center">
                <!--<div>衣&nbsp;价&nbsp;:&nbsp;&nbsp;{{doubleChange(curSku.cPrice)}}</div>-->
                <div style="text-align: center;color: #999">{{curSku.cSpecification}}</div>
                <!--<div>评&nbsp;价:{{comentNum}}</div>-->
            </div>
            <el-divider></el-divider>
            <div>
                <div class="div-type coment">
                    <div style="line-height: 25px;">累积评价</div>
                    <div style="line-height: 25px;color: #005ea7">{{comentNum}}</div>
                </div>
                <!--<div style="float: right;line-height: 50px">累积评价:{{comentNum}}</div>-->
                <div class="div-type" style="background-color: #f5f3ef">
                    <div class="type-Length left-type">价&nbsp;格</div>
                    <div class="left-type" style="font-size: 25px;color: #f40">￥{{doubleChange(curSku.cPrice)}}</div>
                </div>
                <!--<div>价&nbsp;格&nbsp;:&nbsp;&nbsp;{{doubleChange(curSku.cPrice)}}</div>-->
                <!--<div style="display: inline">配送至：</div>-->
                <!--<el-select v-model="select" slot="prepend" placeholder="请选择" size="small">-->
                <!--<el-option v-for="(o) in 5" :key="o" label="五社区" value="(o)"></el-option>-->
                <!--</el-select>-->
                <div v-if="sku  === 0 && flag === false" style="display: inline">
                    入定
                </div>
                <div v-else-if="sku === 0 && flag">
                    尾款
                </div>
                <div v-else class="div-type">
                    <div class="type-Length left-type">库&nbsp;存</div>
                    <div class="left-type" style="flex: none">{{curSku.cInventory}}</div>
                </div>
                <!--<div v-else style="flex: none">-->
                <!--库存:{{curSku.cInventory}}-->
                <!--</div>-->
            </div>
            <el-divider></el-divider>
            <div>
                <div class="good-info-pane">
                    <div class="type-Length" style="white-space: nowrap">款式分类</div>

                    <div v-for="index of skuList " :key="index.skuId"
                         @click="changeCurGood(index)">
                        <el-card :body-style="{ padding: '3px', }"
                                 shadow="hover"
                                 style="width: 70px;margin: 5px 2px; height: 75px ;border: 1px solid #ccc"
                        >
                            <el-image :src=getImg(index)>
                                <div slot="error">
                                    <i class="el-icon-picture-outline"></i>
                                </div>
                            </el-image>
                        </el-card>
                    </div>
                </div>

            </div>
            <el-divider></el-divider>
            <div style="display: flex;justify-content: space-around">
                <el-input-number v-model="num" :min='1' :step="1"></el-input-number>
                <el-button plain @click="addIntoCart" style="float: right">加入购物车</el-button>
                <el-button icon="el-icon-star-off" circle @click="addFavo(CNum)"></el-button>
<!--                <el-button v-else type="warning" icon="el-icon-star-on" circle @click="isMark=!isMark"></el-button>-->
            </div>

        </div>
    </el-container>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "GoodDialog",
        props: {
            CNum: {type: String},
            CName: {type: String}
        },
        data: function () {
            return {
                isMark: "true",
                GoodNum: '',
                skuList: '',
                skuImage: [],
                curSku: {},

                select: '',

                sku: '',
                comentNum: '20+',

                //当前商品的名称
                goodLabel: '这只是个测试',
                //sku的名称
                skuLabel: '',
                //sku的价格
                price: '',
                //当前商品库存单位的库存
                stack: 0,


                flag: false,
                num: 1,
            };
        },
        methods: {
            addFavo: function (Com) {
                axios.post('/api/Favorities', Com, {
                        headers: {
                            'token': this.$store.getters.getToken
                        }
                    }
                ).then(res => {
                    this.$message.success('成功加入收藏夹啦' + res.statusText);
                }).catch(err => {
                    console.log(err.response.data);
                    this.$message.error('不知道为什么，反正是没加入收藏夹 ' + err.response.data.message);
                });

            },
            changeCurGood(newCur) {
                // console.log(newCur);
                this.curSku = newCur;

            },
            doubleChange(x) {
                let f = parseFloat(x);
                if (isNaN(f)) {
                    return false;
                }
                f = Math.round(x * 100) / 100;
                let s = f.toString();
                let rs = s.indexOf('.');
                if (rs < 0) {
                    rs = s.length;
                    s += '.';
                }
                while (s.length <= rs + 2) {
                    s += '0';
                }
                return s;
            },
            addIntoCart() {
                let skuN = this.num;
                let curSku = this.curSku.skuId;
                // console.log(curSku);
                let cur = {
                    skuId: curSku,
                    scNum: skuN
                };
                axios.post('api/Cart', cur,
                    {
                        headers: {
                            'token': this.$store.getters.getToken
                        }
                    }
                ).then(res => {
                    this.$message.success('添加成功');
                }).catch(err => {
                    this.$message.error('添加失败')
                });
            },
            getSku(cNum) {
                axios.get('api/GoodPage/SKU', {
                    params: {
                        CNum: cNum,
                    }
                }).then(res => {
                    // eslint-disable-next-line no-console
                    // console.log(res.data)
                    let tmplist = res.data;
                    this.skuList = tmplist;
                    // console.log(123);
                    console.log(this.skuList);
                    for (let i = 0; i < this.skuList.length; i++) {
                        this.skuImage[i] = this.skuList[i].skuImg;
                        // console.log(tmplist[i].skuImg);
                    }
                    // console.log(this.skuImage);
                    let list = this.skuList;
                    if (list.length > 0) {
                        this.curSku = list[0];
                    }
                    // eslint-disable-next-line no-unused-vars
                }).catch(err => {

                });
            },
            getImg(value) {
                let i = this.skuList.indexOf(value);
                return this.skuList[i].skuImg;
            }

        },
        watch: {
            CNum: function (newValue) {
                // console.log(newValue);
                this.GoodNum = newValue;
                this.getSku(newValue);
            },
            CName: function (newValuse) {
                this.goodLabel = newValuse;
            }
        },
    }
    //
    // save:function () {
    //
    // }

</script>

<style scoped>
    .el-carousel__item h3 {
        color: #9DBC7A;
        font-size: 18px;
        opacity: 0.75;
        line-height: 440px;
        margin: 0;
    }

    .el-main {
        display: flex;
        flex-direction: column;
    }

    .image {
        width: 100%;
        display: block;
    }

    .el-container {
        width: 100%;
        max-width: 1000px
    }

    .good-lable {
        text-align: center;

        margin: 3px 5px;
    }

    .info-pane {
        /*display: flex;*/
        /*flex-direction: row;*/
        justify-content: space-between;
        flex-wrap: wrap;
        justify-items: start;
    }

    .good-info-pane {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        flex-wrap: wrap;
    }

    .type-Length {
        width: 60px;
        height: 100%;
        text-align: center;
        margin-right: 30px;

    }

    .left-type {
        float: left;
        line-height: 50px
    }

    .div-type {
        width: 100%;
        height: 50px;
    }

    .coment {
        width: 100px;
        text-align: center;
        float: right;
        border-left: 1px solid #e6e6e6;
    }

    .goodpane {
        width: 100%;
        padding: 0 20px;
    }
</style>
