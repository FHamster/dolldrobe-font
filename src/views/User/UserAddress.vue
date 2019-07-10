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
                <el-collapse-item v-for="it in items" :key="it.adrKey">
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
                    </div>
                </el-collapse-item>
                <!--<el-collapse-item title="反馈 Feedback" name="2">-->
                <!--<div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>-->
                <!--<div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>-->
                <!--</el-collapse-item>-->
                <!--<el-collapse-item  name="3">-->
                <!--<div>简化流程：设计简洁直观的操作流程；</div>-->
                <!--<div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>-->
                <!--<div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>-->
                <!--</el-collapse-item>-->
                <!--<el-collapse-item title="可控 Controllability" name="4">-->
                <!--<div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>-->
                <!--<div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>-->
                <!--</el-collapse-item>-->
            </el-collapse>
        </el-main>
    </el-container>
</template>

<script>
    import AddAddress from "./AddAddress";

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
            },
            moveItem(key) {
                this.items.splice(this.items.indexOf(key), 1);
            }
        },
        mounted() {
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
        height: 140px;
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
