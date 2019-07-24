<template>
    <div class="flex-col shadow-around" style="width: 79%;max-width: 1005px">

        <div class="flex-row" style="justify-content: space-between;align-content: center">
            <div class="btn-pane">
                <el-badge :value="badgePay" class="item" :max="10" :hidden="payIsHidden">
                    <el-button type="text" size="mini">
                        全部订单
                    </el-button>
                </el-badge>

                <el-badge id="pay" :value="badgePay" class="item" :max="10" :hidden="payIsHidden">
                    <el-button @click="isPay" type="text" size="mini">
                        待付款
                    </el-button>
                </el-badge>

                <el-badge :value="badgeGet" class="item" :max="10" :hidden="getIsHidden">
                    <el-button @click="isGet" type="text" size="mini">
                        待收货
                    </el-button>
                </el-badge>
                <!--<el-badge  :value="12" class="item" :max="10" >-->
                <!--<el-button size="mini" type="text">待评价</el-button>-->
                <!--</el-badge>-->
            </div>

            <div>
                <el-input class=" " prefix-icon="el-icon-search" type="text"
                          style="width: 200px"
                          :clearable="true" size=mini></el-input>
                <el-button class="" size="small" plain
                           placeholder="商品名称/商品编号/订单号">
                    搜索
                </el-button>
            </div>
        </div>

        <el-table
                :data="tabledata">
            <el-table-column
                    label="订单"
                    width="540x"
            >
                <template slot-scope="scope">
                    <el-row style="background-image: linear-gradient(135deg, #fdfcfb 20%, #c3cfe2 100%);margin-bottom: 5px">
                        <div style="display: inline; margin-right: 30px">{{scope.row.time}}</div>
                        <div style="display: inline">订单号：&nbsp;{{scope.row.orderNum}}</div>
                    </el-row>
                    <div style="padding: 5px 5px">
                            <span style="display: flex; flex-direction: row;justify-content: left ">
                            <el-image :src="scope.row.src" style="width: 80px;height: 80px "></el-image>
                            <div style="display: inline">{{scope.row.label}}</div>
                            <span>
                            <div>&nbsp;{{scope.row.kind}}</div>
                            </span>
                        </span>
                    </div>
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
                    width="85px"
                    prop="tag"
                    label="筛选"
                    :filters="[{ text: '等待付款', value: '等待付款' }, { text: '等待收货', value: '等待收货' }
                    , { text: '已完成', value: '已完成' }, { text: '已取消', value: '已取消' }]"
                    :filter-method="filterTag"
                    filter-placement="bottom-end">
                <template slot-scope="scope">
                    <el-tag size="mini"
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
                    align="center">
                <div>
                    <el-button type="text">查看发票</el-button>
                    <div>
                        <el-button type="text">晒单</el-button>
                        <el-divider direction="vertical"></el-divider>
                        <el-button type="text">评价</el-button>
                    </div>
                    <el-button plain
                               size="small"
                               icon="el-icon-position">立即购买
                    </el-button>
                </div>
            </el-table-column>
        </el-table>

    </div>
</template>

<script>
    export default {
        name: "GoodOrder",
        data() {
            return {
                badgePay: 0,
                payIsHidden: true,
                badgeGet: 0,
                getIsHidden: true,
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
                        tag: '等待收货'
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
                        tag: '等待收货'
                        // tag: '等待付款'
                    },
                ]
            }
        },
        methods: {
            isPay() {
                // console.log(this.tabledata)
                let cont = 0;
                for (let i = 0; i < this.tabledata.length; i++) {
                    if (this.tabledata[i].tag == "等待付款")
                        cont++;
                }
                // console.log(document.getElementById("pay").hidden );
                if (cont > 0)
                    this.payIsHidden = false;
                // console.log(document.getElementById("pay").hidden );
                this.badgePay = cont;
            },
            isGet() {
                // console.log(this.tabledata)
                let cont = 0;
                for (let i = 0; i < this.tabledata.length; i++) {
                    if (this.tabledata[i].tag == "等待收货")
                        cont++;
                }
                // console.log(document.getElementById("pay").hidden );
                if (cont > 0)
                    this.getIsHidden = false;
                // console.log(document.getElementById("pay").hidden );
                this.badgeGet = cont;
            },
            filterTag(value, row) {
                return row.tag === value;
            },
        },
        mounted() {
            this.isGet();
            this.isPay();
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
