<template>
    <el-container style="width: 82%;margin-left: 8%">
        <el-container>
            <el-header height="35px">
                <el-row style="display: inline">
                    <div>
                        <el-button type="text" @click="getCart"
                                   style="width: 70px;margin: 0px;
                               display: inline;
                               font-size: 15px;
                               margin-top: 3px">全部商品&nbsp;
                        </el-button>
                        <div style="display: inline">{{sumCountset()}}</div>
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
                <el-table
                        :data="tableData"
                        style="width: 100%"
                        @selection-change="changeOpt"
                >

                    <el-table-column
                            type="selection"
                            width="45" label="全选"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="skuId"
                            label="商品"
                            width="300"
                    >
                        <template slot-scope="scope">
                        <span style="display: flex; flex-direction: row;justify-content: left ">
                            <el-image :src="scope.row.src" style="width: 80px;height: 80px "></el-image>
                            <div style="display: inline">{{scope.row.label}}</div>
                        </span>
                        </template>
                    </el-table-column>
                    <el-table-column
                            width="170px"
                    >
                        <template slot-scope="scope">
                        <span>
                            {{scope.row.kind}}
                        </span>
                        </template>
                    </el-table-column>
                    <el-table-column
                            prop="cPrice"
                            label="单价"
                            width="160"
                            style="float: right"
                    >
                        <template slot-scope="scope">
                        <span>
                            ￥{{scope.row.price}}
                        </span>
                        </template>
                    </el-table-column>
                    <el-table-column
                            prop="scNum"
                            label="数量"
                            style="text-align: center"
                            width="130px">
                        <template slot-scope="scope">
                        <span>
                            <el-input-number v-model="scope.row.num" :min="1"
                                             style="width: 110px"
                                             size="mini"></el-input-number>
                        </span>
                        </template>
                    </el-table-column>
                    <el-table-column
                            prop="sum"
                            label="小计"
                            style="float: right"
                            width="140">
                        <template slot-scope="scope">
                        <span>
                            ￥{{scope.row.price * scope.row.num}}
                        </span>
                        </template>
                    </el-table-column>
                    <el-table-column
                            width="75"
                            label="操作"
                    >
                        <template slot-scope="scope">
                        <span>
                            <el-button
                                    type="text"
                                    style="padding: 0px"
                                    @click.native.prevent="deleteRow(scope.$index, tableData)"
                            >删除
                            </el-button>
                            <el-button
                                    type="text"
                                    style="margin-left: 0px;padding: 0px "
                            >添加关注
                            </el-button>
                        </span>
                        </template>
                    </el-table-column>
                </el-table>
            </el-container>
            <el-footer height="50px" style="padding-left: 15px">
                <div style="width: 50px;text-align: center;display: inline;margin-right: 2px">
                    <!--@click="setCont"-->
                    <!--<el-checkbox v-model="checked"-->

                    <!--label="全选"></el-checkbox>-->
                </div>
                <el-button type="text">&nbsp;移到关注</el-button>
                <el-button type="text">清理购物车</el-button>


                <div style="float: right">
                    <div style="width: 270px">
                        <div style="display: inline;
                    width: 100px;
                    margin-top: 2px;
                    float: left;font-size: 12px">已选择
                            <div style="display: inline">{{setSunNum()}}</div>
                            件商品
                        </div>
                        <div style="display: inline;width: 50px">
                            <el-col style="display: inline;width: 70px">
                                <div style="display: inline;font-size: 12px">总价：
                                    <div style="display: inline">{{setSumPrice()}}</div>
                                </div>
                                <div style="font-size: 12px">促销：-￥{{ducePrice}}</div>
                            </el-col>
                        </div>
                    </div>

                    <el-button size="media"
                               @click="open()"
                               plain style="float: right">去结算
                    </el-button>
                    <!--<el-button @click="out">out</el-button>-->
                </div>
            </el-footer>
        </el-container>
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
                ducePrice: 0.00,
                sumPrice: 0.00,
                checked: true,
                checkBox: [],
                // tabledata: [{
                //     quanxuan: false,
                //     good: 'test',
                //     price: 17.5,
                //     num: 5,
                //     sum: 17.5 * 5,
                //     caozuo: 'delete'
                // }]
                url: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
                tableData: [{
                    src: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
                    price: 180,
                    label: '汉堡王',
                    num: 10,
                    kind: 'black '
                },
                    {
                        src: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
                        price: 180,
                        label: '汉堡王',
                        num: 10,
                        kind: 'black '
                    },
                    {
                        src: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
                        price: 180,
                        label: '汉堡王',
                        num: 10,
                        kind: 'black '
                    },
                ]

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
            },
            sumCountset() {

                return this.sumCount = this.tableData.length;
            },
            changeOpt(val) {
                console.log(val)
                this.checkBox = val;
            },
            setSunNum() {
                console.log(this.checkBox.length);
                return this.sumNum = this.checkBox.length;
            },
            setSumPrice() {
                let sum = 0;
                for (let i = 0; i < this.checkBox.length; i++) {
                    sum += this.checkBox[i].price * this.checkBox[i].num;
                }
                this.sumPrice = sum;
                return this.sumPrice;
            },
            deleteRow(index, rows) {
                rows.splice(index, 1);
            },
            // 测试专用
            open() {
                if (this.checkBox.length > 0) {
                    this.$alert('付款成功', {
                        confirmButtonText: '确定',
                        callback: action => {
                            this.$message({
                                type: 'info',
                                message: `action: ${action}`
                            });
                        }
                    });
                } else {
                    this.$alert('付款失败', {
                        confirmButtonText: '确定',
                        callback: action => {
                            this.$message({
                                type: 'info',
                                message: `action: ${action}`
                            });
                        }
                    });
                }
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
