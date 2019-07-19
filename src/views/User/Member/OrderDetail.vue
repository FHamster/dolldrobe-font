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
                        <el-steps :active="1" align-center="">
                            <el-step title="提交订单" icon="el-icon-edit"></el-step>
                            <el-step title="支付定金" icon="el-icon-upload"></el-step>
                            <el-step title="等待打样" icon="el-icon-picture"></el-step>
                            <el-step title="支付尾款" icon="el-icon-picture"></el-step>
                            <el-step title="商品出库" icon="el-icon-picture"></el-step>
                            <el-step title="等待运输" icon="el-icon-picture"></el-step>
                            <el-step title="完成" icon="el-icon-picture"></el-step>
                        </el-steps>
                    </div>
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
            }
        }
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

    .textCss {
        margin-top: 30px;
        margin-left: 320px;
        font-size: 12px;
        color: #888888;
    }

    .stepCss {
        margin-top: 80px;
    }
</style>
