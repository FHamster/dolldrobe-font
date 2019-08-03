<template>
    <el-container>
        <!--<div>{{this.$route.params}}</div>-->
        <el-main v-if="choose === '1'">
            <el-header height="30px">
                <div style="font-size: 20px;color: orangered;display: inline">跟团有关的消息</div>
                <div style="display: inline;color: gray;margin-left: 5px">共{{this.cNum}}条</div>
            </el-header>
            <el-main>
                <div v-if="this.cNum > 0">
                    <el-collapse accordion>
                        <el-collapse-item v-for="it in cList" :key="it" style="padding: 0">
                            <template slot="title">
                                <div style="width: 800px" @click="changeRead(it)">
                                    <el-badge :is-dot="it.isRead">
                                    </el-badge>
                                    <div style="font-family: 黑体 ;font-size: 15px ;padding: 5px 20px; display: inline" v-if="it.flag == 1">
                                        有新的成团通知啦
                                    </div>
                                    <div style="font-family: 黑体 ;font-size: 15px ;padding: 5px 20px; display: inline" v-if="it.flag == -1">
                                        有个悲伤的消息
                                    </div>
                                    <div style="float: right">
                                        {{it.sendDate}}
                                    </div>
                                </div>
                            </template>
                            <div style="margin-top: 5px;margin-left:25px; font-family: 仿宋;font-size: 20px" v-if="it.flag == 1">
                                宝宝，你参与数调的{{it.goodName}}已经成团啦，离出样又近一步啦!!!
                            </div>
                            <div style="margin-top: 5px; margin-left:25px;font-family: 仿宋;font-size: 20px" v-if="it.flag == -1">
                                宝宝很抱歉，你参与数调的{{it.goodName}}成团失败，预付的定金将以积分形式退回至你的账户，请注意查收噢，有问题请联系客服人员。
                            </div>
                            <div style="width: 100%">
                                <el-link :href=it.href style="margin-left:25px;">查看详情</el-link>
                                <el-button type="text" style="float: right;padding: 0">删除消息</el-button>
                            </div>
                        </el-collapse-item>
                    </el-collapse>
                </div>
                <div v-else>
                    <img style="width: 1000px; height: 500px" src="../../../assets/NullMessage.jpg"/>
                </div>
            </el-main>
        </el-main>
        <el-main v-if="choose === '2'">
            <el-header height="30px">
                <div style="font-size: 20px;display: inline">打样通知反馈</div>
                <div style="display: inline;color: gray;margin-left: 5px">共{{this.dNum}}条</div>
            </el-header>
            <el-main>
                <div v-if="this.dNum > 0">
                    <el-collapse accordion>
                        <el-collapse-item v-for="it in dList" :key="it" style="padding: 0">
                            <template slot="title">
                                <div style="width: 800px" @click="changeRead(it)">
                                    <el-badge :is-dot="it.isRead">
                                    </el-badge>
                                    <div style="font-family: 黑体 ;font-size: 15px ;padding: 5px 20px; display: inline"
                                         v-if="it.flag >=0">
                                        有新的打样通知啦
                                    </div>
                                    <div style="font-family: 黑体 ;font-size: 15px ;padding: 5px 20px; display: inline"
                                         v-else>
                                        有新的反馈通知啦
                                    </div>
                                    <div style="float: right">
                                        {{it.sendDate}}
                                    </div>
                                </div>
                            </template>
                            <div style="margin-top: 5px; margin-left:25px;font-family: 仿宋;font-size: 20px" v-if="it.flag > 0">
                                宝宝，{{it.goodName}}的{{it.flag}}样已经出来啦，有什么小建议可以通过下面链接反馈给我们噢。
                            </div>
                            <div style="margin-top: 5px; margin-left:25px;font-family: 仿宋;font-size: 20px" v-if="it.flag == 0">
                                宝宝，{{it.goodName}}的终样出来啦， 请关注补款时间噢。可以通过下面链接去查看噢。
                            </div>
                            <div style="margin-top: 5px; margin-left:25px;font-family: 仿宋;font-size: 20px" v-if="it.flag < 0">
                                宝宝，{{it.goodName}}的打样反馈我们已经收到啦！请期待下一次出样哦！。
                            </div>
                            <div style="width: 100%">
                                <el-link :href=it.href style="margin-left:25px;">了解详情</el-link>
                                <el-button type="text" style="float: right;padding: 0">删除消息</el-button>
                            </div>
                        </el-collapse-item>
                    </el-collapse>
                </div>
                <div v-else>
                    <img style="width: 1000px; height: 500px" src="../../../assets/NullMessage.jpg"/>
                </div>
            </el-main>
        </el-main>
        <el-main v-if="choose === '3'">
            <el-header height="30px">
                <div style="font-size: 20px;display: inline">尾款通知</div>
                <div style="display: inline;color: gray;margin-left: 5px">共{{this.wNum}}条</div>
            </el-header>
            <el-main>
                <div v-if="this.wNum > 0">
                    <el-collapse accordion>
                        <el-collapse-item v-for="it in cList" :key="it" style="padding: 0">
                            <template slot="title">
                                <div style="width: 800px" @click="changeRead(it)">
                                    <el-badge :is-dot="it.isRead">
                                    </el-badge>
                                    <div style="font-family: 黑体 ;font-size: 15px ;padding: 5px 20px; display: inline">
                                        有新的补款通知啦
                                    </div>
                                    <div style="float: right">
                                        {{it.sendDate}}
                                    </div>
                                </div>
                            </template>
                            <div style="margin-top: 5px; margin-left:25px;font-family: 仿宋;font-size: 20px">
                                宝宝定制的{{it.goodName}}已经开始补款啦，截止时间是{{it.otherDate}}，别错过时间噢！
                            </div>
                            <div style="width: 100%">
                                <el-link :href=it.href style="margin-left:25px;">去往衣橱加衣服</el-link>
                                <el-button type="text" style="float: right;padding: 0">删除消息</el-button>
                            </div>
                        </el-collapse-item>
                    </el-collapse>
                </div>
                <div v-else>
                    <img style="width: 1000px; height: 500px" src="../../../assets/NullMessage.jpg"/>
                </div>
            </el-main>
        </el-main>
        <el-main v-if="choose === '4'">
            <el-header height="30px">
                <div style="font-size: 20px;display: inline">系统信息</div>
                <div style="display: inline;color: gray;margin-left: 5px">共{{this.sysNum}}条</div>
            </el-header>
            <el-main>
                <div v-if="this.sysNum > 0">
                </div>
                <div v-else>
                    <img style="width: 1000px; height: 500px" src="../../../assets/NullMessage.jpg"/>
                </div>
            </el-main>
        </el-main>
    </el-container>
</template>

<script>
    export default {
        name: "SystemInform",
        watch: {
            '$route'(to, from) {
                // 对路由变化作出响应...
                console.log("from " + from.params.type);
                console.log("to " + to.params.type);
                this.choose = to.params.type;
            }
        },
        data: function () {
            return {
                choose: '0',

                failSrc: '../../../assets/NullImg.jpg',

                cNum: '0',
                dNum: '0',
                wNum: '0',
                sysNum: '0',

                cList: [{
                    flag:1,//1成团 -1流团
                    goodNum: '0123153',
                    goodName: 'fdsfs',
                    sendDate: '2019-6-12',
                    otherDate: '2019-7-12',
                    href: 'www.baidu.com',
                    isRead: true,
                },{
                    flag:-1,//1成团 -1流团
                    goodNum: '0123153',
                    goodName: 'fdsfs',
                    sendDate: '2019-6-12',
                    otherDate: '2019-7-12',
                    href: 'www.baidu.com',
                    isRead: true,
                }],
                dList: [{
                    flag: 1,//-1反馈 0终样 >0 样次
                    goodNum: '0123153',
                    goodName: 'fdsfs',
                    sendDate: '2019-6-12',
                    otherDate: '2019-7-12',
                    href: 'www.baidu.com',
                    isRead: true,
                }, {
                    flag: 0,//-1反馈 0终样 >0 样次
                    goodNum: '0123153',
                    goodName: 'fdsfs',
                    sendDate: '2019-6-12',
                    otherDate: '2019-7-12',
                    href: 'www.baidu.com',
                    isRead: true,
                }, {
                    flag: -1,//-1反馈 0终样 >0 样次
                    goodNum: '0123153',
                    goodName: 'fdsfs',
                    sendDate: '2019-6-12',
                    otherDate: '2019-7-12',
                    href: 'www.baidu.com',
                    isRead: true,
                }],
                wList: [{
                    goodNum: '0123153',
                    goodName: 'fdsfs',
                    sendDate: '2019-6-12',
                    otherDate: '2019-7-12',
                    href: 'www.baidu.com',
                    isRead: true,
                }],
                sysList: [],
            }
        },
        methods: {
            setChoose() {

            },
            getNum() {
                this.cNum = this.cList.length;
                this.dNum = this.dList.length;
                this.wNum = this.wList.length;
                this.sysNum = this.sysList.length;
            },
            getChoose() {
                this.choose = this.$route.params.choose;
            },
            changeRead(x) {
                // console.log(x);
                x.isRead = false;
            }
        },
        mounted() {
            this.getChoose();
            this.getNum();
        },
    }
</script>

<style scoped>

</style>
