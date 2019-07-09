<template>
    <el-container style="width: 90%;margin-left: 5%">
        <el-main>
            <el-header>
                <div class="btn-pane">
                    <div style="display: inline ;margin-top: 20px">
                        <el-button type="text" size="mini"
                                   style="margin-right: 10px; padding-top:17px;
                                    float: left">
                            全部订单
                        </el-button>
                    </div>
                    <el-badge :value="12" class="item" :max="10">
                        <el-button type="text" size="mini">待付款</el-button>
                    </el-badge>
                    <el-badge :value="0" class="item" :max="10">
                        <el-button type="text" size="mini">待收货</el-button>
                    </el-badge>
                    <el-badge :value="12" class="item" :max="10">
                        <el-button size="mini" type="text">待评价</el-button>
                    </el-badge>
                </div>

                <div>
                    <el-input class=" " prefix-icon="el-icon-search" type="text"
                              style="width: 200px"
                              :clearable="true" size=mini></el-input>
                    <el-button class="" size="small" plain
                               placeholder="商品名称/商品编号/订单号"
                    >搜索
                    </el-button>
                </div>
            </el-header>
            <el-table
                    :data="tabledata"
                    border="1px"
            >
                <el-table-column
                        label="订单"
                        width="550px"
                >
                    <template slot-scope="scope">
                        <el-row style="background-color: lightgray;margin-bottom: 5px">
                            <div style="display: inline; margin-right: 30px">{{scope.row.time}}</div>
                            <div style="display: inline">订单号：&nbsp;{{scope.row.orderNum}}</div>
                        </el-row>
                        <span style="display: flex; flex-direction: row;justify-content: left ">
                            <el-image :src="scope.row.src" style="width: 80px;height: 80px "></el-image>
                            <div style="display: inline">{{scope.row.label}}</div><span>
                            <div>&nbsp;{{scope.row.kind}}</div>
                        </span>
                        </span>
                    </template>
                </el-table-column>
                <el-divider direction="vertical"></el-divider>
                <el-table-column
                        label="收货人"
                        width="100px"
                        align="center"
                >
                    <template slot-scope="scope">
                        <el-popover trigger="hover"
                                    placement="top">
                            <p> {{ scope.row.name }}</p>
                            <p> {{ scope.row.address }}</p>
                            <p> {{ scope.row.phone}}</p>
                            <div slot="reference" class="name-wrapper">
                                <el-tag
                                        align="center"
                                        color="white"
                                        size="medium">{{ scope.row.name }}
                                    <el-icon class="el-icon-user"></el-icon>
                                </el-tag>

                            </div>
                        </el-popover>
                    </template>
                </el-table-column>
                <el-table-column
                        label="金额"
                        width="110px"
                        align="center"
                >
                    <template slot-scope="scope">
                        <span>
                            <div>
                                总额&nbsp;￥{{scope.row.price}}
                            </div>
                        </span>

                    </template>
                </el-table-column>
                <el-table-column
                        width="200px"
                        prop="tag"
                        label="筛选"
                        :filters="[{ text: '等待付款', value: '等待付款' }, { text: '等待收货', value: '等待收货' }
                    , { text: '已完成', value: '已完成' }, { text: '已取消', value: '已取消' }]"
                        :filter-method="filterTag"
                        filter-placement="bottom-end">
                    <template slot-scope="scope">
                        <el-tag
                                disable-transitions>{{scope.row.tag}}
                        </el-tag>
                        <el-button type="text">
                            订单详情
                        </el-button>
                    </template>
                </el-table-column>
                <el-table-column
                        label="操作"
                        width="125px"
                        align="center"
                >
                    <div>
                        <el-button type="text">查看发票</el-button>
                        <el-button type="text">晒单</el-button>
                        <el-divider direction="vertical"></el-divider>
                        <el-button type="text">评价</el-button>
                        <el-button plain="true" icon="el-icon-position">立即购买</el-button>
                    </div>
                </el-table-column>
            </el-table>
        </el-main>
    </el-container>
</template>

<script>
    export default {
        name: "GoodOrder",
        data() {
            return {
                tabledata: [{
                    time: '2019-7-7',
                    orderNum: 110101010,
                    src: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
                    price: 180,
                    label: '汉堡王汉堡王汉堡王汉堡王汉堡王汉堡王汉堡王汉堡王汉堡王汉堡王',
                    kind: 'black ',
                    name: '林先森',
                    phone: '138****0101',
                    address: '宇宙国地球省中国区',
                    tag: '已完成'
                },
                    {
                        time: '2019-7-7',
                        orderNum: 110101010,
                        src: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
                        price: 180,
                        label: '汉堡王',
                        kind: 'black ',
                        name: '林先森',
                        phone: '138****0101',
                        address: '宇宙国地球省中国区',
                        tag: '已完成'
                    },
                    {
                        time: '2019-7-7',
                        orderNum: 110101010,
                        src: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
                        price: 180,
                        label: '汉堡王',
                        kind: 'black ',
                        name: '林先森',
                        phone: '138****0101',
                        address: '宇宙国地球省中国区',
                        tag: '已完成'
                    },
                ]
            }
        }
    }
</script>

<style scoped>
    .item {
        margin-top: 10px;
        margin-right: 40px;
    }

    .input_inner {
        border: 0 !important;
        outline: none !important;
        padding: 0 !important;
        width: 80px;
    }

    .el-header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .btn-pane {
        align-items: center;
    }
</style>
