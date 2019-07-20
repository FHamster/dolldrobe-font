<template>
    <el-container style="width: 90%; max-width: 1100px; margin-left: 10%">
        <el-header height="15px" style="margin-top: 20px">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/UserCenter' }">用户中心</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/GoodOrder' }">我的订单</el-breadcrumb-item>
                <el-breadcrumb-item style="font-family: 黑体">订单：&nbsp;{{orderNum}}</el-breadcrumb-item>
            </el-breadcrumb>
        </el-header>
        <el-main>
            <div class="kuang1">
                <div class="kuang2">
                    <div style="text-align: center;margin-top: 30px;font-size: 12px;color: #888888">订单号：&nbsp;{{orderNum}}</div>
                    <div style="font:  700 24px/34px Microsoft YaHei;text-align: center; margin-top:40px ; color: #9DBC7A">
                        {{processStatus}}
                    </div>
                    <div>
                        <div style="margin-top: 40px;align-items: center">
                            <el-button style="width: 100px;text-align: center;margin-left: 100px" size="small"
                                       align="center">查看发票详情
                            </el-button>
                            <br>
                            <el-button style="width: 100px;margin-top: 20px;margin-left: 100px" size="small"
                                       align="center">评价
                            </el-button>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="textCss">订单已经完成，感谢您在京东商城购物，欢迎您对本次交易及所购商品进行评价。</div>
                    <div class="stepCss">
                        <el-steps :active="7" align-center>
                            <el-step title="提交订单" icon="el-icon-edit"></el-step>
                            <el-step title="支付定金" icon="el-icon-coin"></el-step>
                            <el-step title="等待打样" icon="el-icon-more"></el-step>
                            <el-step title="支付尾款" icon="el-icon-money"></el-step>
                            <el-step title="商品出库" icon="el-icon-ship"></el-step>
                            <el-step title="等待运输" icon="el-icon-truck"></el-step>
                            <el-step title="完成" icon="el-icon-check"></el-step>
                        </el-steps>
                    </div>
                </div>

            </div>

            <div class="kuang1" style="height: 270px;margin-top: 50px; border-top-color: lightgray">
                <div class="kuang2" style="height: 270px">
                    <div style="margin-top: 30px">
                        <div class="img1">
                            <el-image :src=url>
                                <a href="#"> </a>
                            </el-image>
                        </div>
                        <div style="font-size: 12px">
                            <div style="padding-top: 5px">送货方式：&nbsp;{{shipMethod}}</div>
                            <div style="padding-top: 5px">承运人：&nbsp;{{carrier}}</div>
                            <div style="padding-top: 5px">货运单号：&nbsp;{{carrierNum}}</div>
                        </div>
                    </div>
                </div>
                <div style="float: right ;width: 690px;overflow: auto;margin-left: 5px" >
                    <router-view></router-view>
                </div>
            </div>

            <div class="kuang1" style="margin-top: 50px;height: 200px ;border-right-color: white;border-bottom-color: white;border-left-color: white">
                <el-collapse v-model="activeNames" style="width: 250px;float: left">
                    <el-collapse-item title="收货人信息" name="1" style="margin-left: 20px; padding-right: 10px">
                        <div style="font-size: 10px">收件人：&nbsp;{{item.peopleName}}</div>
                        <div style="font-size: 10px">地址：&nbsp;&nbsp;&nbsp;&nbsp;{{item.localArea }}{{item.address}}
                        </div>
                        <div style="font-size: 10px">联系方式：&nbsp;{{item.phone}}</div>
                    </el-collapse-item>
                </el-collapse>

                <el-collapse v-model="activeNames" style="width: 250px;float: left">
                    <el-collapse-item title="配送信息" name="2" style="margin-left: 20px;padding-right: 10px">
                        <div style="font-size: 10px">配送方式：&nbsp;{{item.carrier}}</div>
                        <div style="font-size: 10px">运费：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.carrierPrice}}</div>
                    </el-collapse-item>
                </el-collapse>

                <el-collapse v-model="activeNames" style="width: 250px;float: left">
                    <el-collapse-item title="付款信息" name="3" style="margin-left: 20px;padding-right: 10px">
                        <div style="font-size: 10px">付款方式：&nbsp;{{item.payMethod}}</div>
                        <div style="font-size: 10px">付款时间：&nbsp;{{item.payTime}}</div>
                        <div style="font-size: 10px">商品总额：&nbsp;{{item.sumPrice}}</div>
                        <div style="font-size: 10px">支付金额：&nbsp;{{item.payPrice}}</div>
                        <!--<div style="font-size: 10px">-->
                            <!--<el-button type="text" icon="el-icon-caret-bottom" size="mini">更多</el-button>-->
                        <!--</div>-->
                    </el-collapse-item>
                </el-collapse>

                <el-collapse v-model="activeNames" style="width: 250px;float: left">
                    <el-collapse-item title="发票信息" name="4" style="margin-left: 20px;padding-right: 10px">
                        <div style="font-size: 10px">发票类型：&nbsp;{{item.invoiceType}}</div>
                        <div style="font-size: 10px">发票抬头：&nbsp;{{item.invoiceLookup}}</div>
                        <div style="font-size: 10px">发票内容：&nbsp;{{item.invoiceContent}}</div>
                        <div style="font-size: 10px;color: #888888">电子发票与纸质发票具有同等法律效力，可作为用户维权、保修的有效凭据</div>
                        <div style="font-size: 10px">
                            <el-button type="text" icon="el-icon-zoom-in">查看发票详情</el-button>
                            <el-button type="text" icon="el-icon-download">点击下载发票</el-button>
                        </div>
                    </el-collapse-item>
                </el-collapse>
            </div>

            <div class="kuang3">
                <el-table
                        :data="table"
                        style="width: 100%"
                >
                    <el-table-column
                            prop="skuId"
                            label="商品"
                            width="335"
                    >
                        <template slot-scope="scope">
                        <span style="display: flex; flex-direction: row;justify-content: left ">
                            <el-image :src="scope.row.src" style="width: 100px;height: 100px "></el-image>
                            <div style="display: inline;width: 150px">{{scope.row.label}}</div>
                        </span>
                        </template>
                    </el-table-column>
                    <el-table-column
                            width="120px"
                    >
                        <template slot-scope="scope">
                        <span>
                            {{scope.row.kind}}
                        </span>
                        </template>
                    </el-table-column>
                    <el-table-column
                            prop="goodNum"
                            label="商品编号"
                            style="float: right"
                            width="160">
                        <template slot-scope="scope">
                        <span>
                            {{scope.row.goodNum}}
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
<!--                               @focus.prevent="saveCurnum(scope.row.num)"-->
                            {{scope.row.num}}
                        </span>
                        </template>
                    </el-table-column>
                    <el-table-column
                            width="80"
                            label="操作"
                    >
                        <template slot-scope="scope">
                        <span>
                            <el-button
                                    type="text"
                                    style="padding: 0"

                            >申请售后
                            </el-button>
                            <el-button
                                    type="text"
                                    style="margin-left: 0;padding: 0 "
                            >立即购买
                            </el-button>
                        </span>
                        </template>
                    </el-table-column>
                </el-table>
                <div style="float: right;margin-right: 20px;margin-top: 20px;margin-bottom: 10px">
                    <div style="font-family: 黑体">商品总额：&nbsp;&nbsp;{{item.sumPrice}}</div>
                    <div style="font-family: 黑体">运&nbsp;&nbsp;&nbsp;&nbsp;费：&nbsp;&nbsp;{{item.carrierPrice}}</div>
                    <div style="font-family: 黑体;color: red">应付总额：&nbsp;&nbsp;{{item.payPrice}}</div>
                </div>
            </div>
        </el-main>
    </el-container>
</template>

<script>
    export default {
        name: "OrderDetail",
        data() {
            return {
                processStatus: '完成',
                orderNum: 1234567890,
                isActive: 5,
                url: "//img10.360buyimg.com/N4/jfs/t9085/22/907696059/71305/93f88c62/59b85847N20776d8e.jpg",
                shipMethod: '普通快递',
                carrier: '菜鸟',
                carrierNum: '12312434',
                activeNames: ['0'],
                item: {
                    peopleName: '酷酷酷',
                    localArea: '宇宙国地球村宇宙国地球村宇宙国地球村宇宙国',
                    address: 'JMU',
                    phone: '138****1111',
                    carrier: '菜鸟',
                    carrierPrice: '￥0.00',
                    payMethod:'在线支付',
                    payTime:'2019-8-1 17：08：56',
                    sumPrice:'￥3344',
                    payPrice:'￥3344',
                    invoiceType:'电子普通发票',
                    invoiceLookup:'个人',
                    invoiceContent:'商品明细',

                },
                table: [{
                    goodNum: 110101010,
                    src: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
                    price: 180,
                    label: '汉堡王汉堡王汉堡王汉堡王汉堡王汉堡王汉堡王汉堡王汉堡王汉堡王',
                    num:3,
                    kind: 'black ',
                },{
                    goodNum: 110101010,
                    src: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
                    price: 180,
                    num:3,
                    label: '汉堡王汉堡王汉堡王汉堡王汉堡王汉堡王汉堡王汉堡王汉堡王汉堡王',
                    kind: 'black ',
                },{
                    goodNum: 110101010,
                    src: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
                    price: 180,
                    label: '汉堡王汉堡王汉堡王汉堡王汉堡王汉堡王汉堡王汉堡王汉堡王汉堡王',
                    kind: 'black ',
                    num:3,
                },

                ]
            }
        },
        methods: {}
    }
</script>

<style scoped>
    .kuang1 {
        width: 1000px;
        height: 300px;
        border: 2px solid;
        border-top-color: #9DBC7A;
        border-right-color: lightgray;
        border-left-color: lightgray;
        border-bottom-color: lightgray;

        float: left;
        display: inline;
    }

    .kuang2 {
        width: 300px;
        height: 300px;
        float: left;
        border: 1px solid;
        border-right-color: #888888;
        border-top-color: white;
        border-left-color: white;
        border-bottom-color: white;
    }

    .kuang3 {
        width: 1000px;
        border: 2px solid;
        border-top-color: #9DBC7A;
        border-right-color: lightgray;
        border-left-color: lightgray;
        border-bottom-color: lightgray;
        margin-top: 100px;
        float: left;
        display: inline;
    }

    .textCss {
        margin-top: 30px;
        margin-left: 320px;
        font-size: 12px;
        color: #888888;
    }

    .stepCss {
        margin-top: 80px;
    }

    .img1 {
        width: 100px;
        height: 100px;
        box-shadow: 5px -5px 5px #DCDCDC;
        display: inline;
        float: left;
        margin-left: 10px;
        margin-right: 10px;
    }
</style>
