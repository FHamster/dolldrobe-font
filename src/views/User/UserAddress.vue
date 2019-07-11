<template>
    <el-container style="background-color: #f5f7fa;width: 65%;margin-left: 15%;max-width: 1005px">
        <el-dialog :visible.sync="isAddAdrDialogVis" width="760px">
            <AddAddress slot="title"></AddAddress>
        </el-dialog>
        <el-header height="55px" style="margin-top: 15px">
            <div style="margin: 10px">
                <el-button size="small" plain type="success" style="display: inline"
                           @click="isAddAdrDialogVis=!isAddAdrDialogVis">新增收货地址
                </el-button>
<!--                <el-button @click="runFun">123</el-button>-->
                <div style="display: inline">
                    您已创建
                    <div class="header_num">{{nowNum}}</div>
                    个收货地址，&nbsp;最多可创建
                    <div class="header_num">{{maxNum}}</div>
                    个
                </div>


            </div>
        </el-header>
        <el-main>
            <el-collapse v-model="activeName" accordion>
                <el-collapse-item v-for="it in items" :key="it.adrKey" :v-if="items.length != 0">
                    <template slot="title">
                        <div style="font-family: 黑体 ;font-size: 15px ;padding: 5px 20px">
                            {{it.peopleName}}
                        </div>
                        <el-button size="mini"
                                   plain type="warning"
                                   style="font-size: 9px"
                                   v-if="it.isDefault == true"
                                   autofocus
                        >默认地址
                        </el-button>
                    </template>
                    <div class="card">
                        <div style="width: 450px">
                            <div class="card_span ">收货人：&nbsp;</div>
                            <div class="card_main">{{it.peopleName}}</div>
                            <div class="clr"></div>
                        </div>
                        <div style="width: 450px">
                            <div class="card_span ">所在地区：&nbsp;</div>
                            <div class="card_main">{{it.localArea}}</div>
                            <div class="clr"></div>
                        </div>
                        <div style="width: 450px">
                            <div class="card_span ">地址：&nbsp;</div>
                            <div class="card_main">{{it.address}}</div>
                            <div class="clr"></div>
                        </div>
                        <div style="width: 450px">
                            <div class="card_span ">手机：&nbsp;</div>
                            <div class="card_main">{{it.phone}}</div>
                            <div class="clr"></div>
                        </div>
                        <div style="width: 450px">
                            <div class="card_span ">固定电话：&nbsp;</div>
                            <div class="card_main">{{it.telephone}}</div>
                            <div class="clr"></div>
                        </div>
                        <div style="width: 450px">
                            <div class="card_span ">电子邮箱：&nbsp;</div>
                            <div class="card_main">{{it.email}}</div>

                        </div>
                        <div style="float: right">
                            <el-button type="text"
                                       @click="setDefault(it)"
                                       v-if="it.isDefault != true"
                                       size="mini">设为默认
                            </el-button>
                            <el-button type="text" size="mini"
                                       @click="isAddAdrDialogVis=!isAddAdrDialogVis"
                            >编辑
                            </el-button>
                            <el-button type="text"
                                       @click="moveItem(it)"
                                       size="mini">删除
                            </el-button>
                        </div>
                        <div class="clr"></div>
                    </div>
                </el-collapse-item>
            </el-collapse>
        </el-main>
    </el-container>
</template>

<script>
    import AddAddress from "./AddAddress";
    import axios from 'axios';

    let fun = async function getRegionById(RegId) {
        let temp;
        await axios.get('/api/Region/RegionName', {
            params: {RegionId: RegId.toString()}
        }).then(res => {
            temp = res.data;
        }).catch(err => {
            this.$message.error("查询区域出错");
        });
        return temp;
    };


    export default {
        name: "UserAddress",
        components: {AddAddress},

        data: function () {
            return {
                nowNum: 0,
                maxNum: 20,
                activeName: 1,
                isAddAdrDialogVis: false,
                items: [{
                    peopleName: '酷酷酷',
                    localArea: '宇宙国地球村',
                    address: 'JMU',
                    phone: '138****1111',
                    telephone: '',
                    email: '',
                    isDefault: true,
                    adrKey: 0
                }, {
                    peopleName: '酷酷酷',
                    localArea: '宇宙国地球村',
                    address: 'JMU',
                    phone: '138****1111',
                    telephone: '',
                    email: '',
                    isDefault: false,
                    adrKey: 1
                }, {
                    peopleName: '酷酷酷',
                    localArea: '宇宙国地球村',
                    address: 'JMU',
                    phone: '138****1111',
                    telephone: '',
                    email: '',
                    isDeefault: false,
                    adrKey: 2
                }
                ],
            };

        },
        methods: {

            /* getRegionById(RegId) {
                 let temp;
                 axios.get('/api/Region/RegionName', {
                     params: {RegionId: RegId.toString()}
                 }).then(res => {
                     temp = res.data;
                 }).catch(err => {
                     this.$message.error("查询区域出错");
                 });
                 return temp;
             },*/

            runFun: async function () {
                let a;
                await fun("2343").then(value => a = value);

                console.log(a);


            },

            getAddress() {
                axios.get('/api/Address/Address', {
                    headers: {
                        'token': this.$store.getters.getToken
                    }
                }).then(res => {
                    this.items = res.data.map(it => ({
                        peopleName: it.saName,
                        localAreaId: it.arNum,
                        localArea: it.arNum,
                        address: it.saDetail,
                        phone: it.saPhone,
                        telephone: it.saTelphone,
                        email: it.saEmail,
                        isDefault: false,
                        adrKey: it.saNum
                    }));
                    this.setNowNum();
                }).catch(err => {
                    this.$message.error("获取收货地址列表失败");
                });
            },

            setNowNum() {
                this.nowNum = this.items.length;
            },
            setDefault(key) {
                // console.log(this.items);
                for (let i = 0; i < this.items.length; i++) {
                    this.items[i].isDefault = false;
                    if (this.items.indexOf(key) == i) {
                        this.items[i].isDefault = true;
                    }
                }
                this.items.sort(function (a, b) {
                    return b.isDefault - a.isDefault
                });
            },

            moveItem(key) {
                this.items.splice(this.items.indexOf(key), 1);
            }
        },
        mounted() {
            this.getAddress();
            this.setNowNum();
        },
    }
</script>

<style scoped>
    .header_num {
        color: #9DBC7A;
        display: inline;
        font-size: 13px;
    }

    .card {
        margin: 5px 10px;
        padding: 5px 10px;
        border: 2px solid #e2ebf0;
        height: 150px;
    }

    .card_span {
        float: left;
        width: 70px;
        color: #999;
        display: inline;
        text-align: right;
    }

    .card_main {
        width: 360px;
        margin: 0;
        display: inline;
    }

    .clr {
        display: block;
        overflow: hidden;
        clear: both;
        height: 0;
        line-height: 0;
        font-size: 0;
    }
</style>
