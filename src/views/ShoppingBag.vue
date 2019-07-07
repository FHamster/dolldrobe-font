<template>
    <el-container>
        <el-header height="35px">
            <el-row style="display: inline">
                <div>
                    <!--                    <div style="width: 70px;margin: 0px;display: inline;margin-top: 3px">全部商品</div>-->
                    <!--                    <div style="display: inline">{{sumCount}}</div>-->
                    <div style="float: right;">
                        <div style="display: inline">配送至：</div>
                        <el-select v-model="select" slot="prepend" placeholder="请选择" size="small">
                            <el-option v-for="(o) in 5" :key="o" label="五社区" value="(o)"></el-option>
                        </el-select>
                    </div>
                </div>
            </el-row>
        </el-header>


        <el-container>
            <!-- <el-table
                     :data="cart"
                     style="width: 100% ;padding: auto"

             >
                 <el-table-column
                         type="selection"
                         width="55">
                 </el-table-column>
                 <el-table-column
                         prop="skuId"
                         label="商品"
                 >
                 </el-table-column>
                 <el-table-column
                         prop="cPrice"
                         label="单价"
                         width="200">
                 </el-table-column>
                 <el-table-column
                         prop="scNum"
                         label="数量"
                         width="200">
                 </el-table-column>
                 &lt;!&ndash;  <el-table-column
                           prop="address"
                           label="小计"
                           width="200">
                   </el-table-column>&ndash;&gt;

             </el-table>-->
            <el-table
                    :data="cart"
                    style="width: 100%"
                    show-summary
                    :show-overflow-tooltip="true"
            >
                <el-table-column
                        type="selection"
                        width="55">
                </el-table-column>
                <el-table-column
                        prop="skuId"
                        label="商品"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="cPrice"
                        label="单价"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="scNum"
                        label="数量">
                </el-table-column>
                <el-table-column
                        prop="sum"
                        label="小计"
                        width="200">
                </el-table-column>
            </el-table>
        </el-container>
        <el-footer height="50px">
            <div style="width: 50px;text-align: center;display: inline;margin-right: 2px">
                <el-checkbox v-model="checked" label="全选"></el-checkbox>
            </div>
            <el-button type="text">移到关注</el-button>
            <el-button type="text">清理购物车</el-button>


            <div style="float: right">
                <div style="width: 270px">
                    <div style="display: inline;width: 110px;float: left;font-size: 12px">已选择
                        <div style="display: inline">{{sumNum}}</div>
                        件商品
                    </div>
                    <div style="display: inline;width: 50px">
                        <el-col style="display: inline;width: 70px">
                            <div style="display: inline;font-size: 12px">总价：
                                <div style="display: inline">{{sumPrice}}</div>
                            </div>
                            <div style="font-size: 12px">促销：-￥{{ducePrice}}</div>
                        </el-col>
                    </div>
                </div>

                <el-button size="media" plain style="float: right">去结算</el-button>
            </div>
            <el-button size="media" plain style="float: right" @click="getCart">查看</el-button>
        </el-footer>
    </el-container>
</template>


<script>
    import axios from 'axios';

    export default {
        name: "ShoppingBag",
        data() {
            return {
                select: '',
                cart: [],

                cartList: [],
                sumCount: 0,
                sumNum: 0,
                sumPrice: 0.00,
                ducePrice: 0.00,
                checked: true,
                // tabledata: [{
                //     quanxuan: false,
                //     good: 'test',
                //     price: 17.5,
                //     num: 5,
                //     sum: 17.5 * 5,
                //     caozuo: 'delete'
                // }]

                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]

            }


        },
        methods: {
            getSummaries(param) {
                const {columns, data} = param;
                const sums = [];
                columns.forEach((column, index) => {
                    if (index === 0) {
                        sums[index] = '总价';
                        return;
                    }

                    const values = data.map(item => Number(item[column.property]));
                    if (!values.every(value => isNaN(value))) {
                        sums[index] = values.reduce((prev, curr) => {
                            const value = Number(curr);
                            if (!isNaN(value)) {
                                return prev + curr;
                            } else {
                                return prev;
                            }
                        }, 0);
                        sums[index] += ' 元';
                    } else {
                        sums[index] = 'N/A';
                    }
                });

                // console.log(param);
                return sums;
            },

            getCart() {
                axios.get('/api/Cart/Cart', {
                        headers: {
                            'token': this.$store.getters.getToken
                        }
                    }
                ).then(res => {
                    // console.log(res.data)
                    let Alist = res.data;
                    // console.log(Alist);

                    let cart = [];
                    let temp1;
                    let temp2;
                    for (var i = 0; i < Alist.length; i++) {

                        // console.log(Alist[i]);
                        temp1 = Alist[i].sku.cPrice;
                        temp2 = Alist[i].cart.scNum;

                        cart.push({
                            skuId: Alist[i].sku.skuId,
                            cPrice: Alist[i].sku.cPrice,
                            scNum: Alist[i].cart.scNum,
                            sum: temp1 * temp2
                        });

                    }
                    this.cart = cart;
                });
            }
        }
    }
</script>

<style scoped>

    .el-col {
        border-radius: 4px;
    }

    .bg-purple-dark {
        background: #99a9bf;
    }

    .bg-purple {
        background: #d3dce6;
    }

    .bg-purple-light {
        background: #e5e9f2;
    }

    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }

    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }

</style>
