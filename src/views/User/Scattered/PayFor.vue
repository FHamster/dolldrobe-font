<template>
    <el-container style="margin: auto;max-width: 1000px;height: 500px;border: 2px solid whitesmoke;">
        <el-header height="25px" style="border: 2px  ;background-color: #d7d9db">
            <div style="float: left;display: block; font-size: 15px;font-family: '微软雅黑 Light';margin-top: 3px">
                支付方式
            </div>
        </el-header>
        <el-main>
            <el-header height="50px">
                <div style="width: 200px;height: 25px  ;display: block;float: left;line-height:50px">
                    支付金额&nbsp;：
                    <div style="display: inline;color: orange;font-size: 20px">
                        {{money}}元
                    </div>
                </div>
                <div style="width:600px;height: 25px; display: block;float: left;line-height:50px">
                    请您在
                    <div style="display: inline;color: orange;font-size: 16px">
                        {{this.t_show}}
                    </div>
                    内完成支付，否则订单自动取消。
                </div>
            </el-header>
            <el-main style="border: 2px solid honeydew;height: 350px">
                <el-tabs type="border-card" style="height: 300px">
                    <el-tab-pane label="支付宝支付">
                        <div style="width: 450px;margin: auto">
                            <el-image :src=z_src style="height: 200px;width: 200px ;display: block;float: left">
                            </el-image>
                            <div class="box" v-if="!isFalse">
                                二维码已失效
                            </div>
                            <div class="box" style="background-color: rgba(255,255,255,0.8);color: green" v-if="isSuccess">
                                扫码成功
                            </div>
                            <div style="display: block;float: left;margin-top: 10px;font-size: 15px;color: #141f2a;margin-left: 35px">
                                请使用支付宝扫码完成付款
                            </div>
                            <div class="formText" style="margin-top: 13px">
                                订单编号：&nbsp;{{orderNum}}
                            </div>
                            <div class="formText">
                                订单内容：&nbsp;{{orderCont}}
                            </div>
                            <div class="formText">
                                支付方式：&nbsp;支付宝
                            </div>
                            <div class="formText">
                                支付金额：&nbsp;{{money}}元
                            </div>
                            <div class="formText">
                                支付日期：&nbsp;{{getDate()}}
                            </div>
                            <div style="margin-top: 10px;margin-left: 35px; display: block;float: left">
                                <el-button size="small" style="background-color: #ff994d" @click="successFunction">
                                    支付成功
                                </el-button>

                                <el-button size="small" style="background-color: #00b8b4" @click="rePayFunction">
                                    重新支付
                                </el-button>
                            </div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="微信支付">
                        <div style="width: 450px;margin: auto">
                            <el-image :src=w_src style="height: 200px;width: 200px ;display: block;float: left">
                            </el-image>
                            <div class="box" v-show="!isFalse">
                                二维码已失效
                            </div>
                            <div class="box" style="background-color: rgba(255,255,255,0.8);color: darkgreen" v-if="isSuccess">
                                扫码成功
                            </div>
                            <div style="display: block;float: left;margin-top: 10px;font-size: 15px;color: #141f2a;margin-left: 35px">
                                请使用支付宝扫码完成付款
                            </div>
                            <div class="formText" style="margin-top: 13px">
                                订单编号：&nbsp;{{orderNum}}
                            </div>
                            <div class="formText">
                                订单内容：&nbsp;{{orderCont}}
                            </div>
                            <div class="formText">
                                支付方式：&nbsp;微信
                            </div>
                            <div class="formText">
                                支付金额：&nbsp;{{money}}元
                            </div>
                            <div class="formText">
                                支付日期：&nbsp;{{getDate()}}
                            </div>
                        </div>
                    </el-tab-pane>
                </el-tabs>
            </el-main>
            <el-footer height="30px" style=";float: bottom;background-color: lightgray">
                <div style="line-height: 30px;text-align: center">
                    如果支付遇到问题，请联系客服小姐姐
                </div>
            </el-footer>
        </el-main>
    </el-container>
</template>
src="https://ssl.ptlogin2.qq.com/ptqrshow?appid=716027609&amp;e=2&amp;l=M&amp;s=3&amp;d=72&amp;v=4&amp;t=0.5286219520035389&amp;daid=383&amp;pt_3rd_aid=100495085"
<script>
    import QR from "@/assets/test.jpg";
    export default {
        name: "PayFor",
        data: function () {
            return {
                money: 100.00,
                t_s: 10,
                t_show: '',
                z_src: QR,
                // z_src: 'https://p2.music.126.net/JL_id1CFwNJpzgrXwemh4Q==/109951164172892390.jpg?param=130y130',
                w_src: 'https://p2.music.126.net/JL_id1CFwNJpzgrXwemh4Q==/109951164172892390.jpg?param=130y130',
                orderNum: '132515641561',
                orderCont: '莓兔兔',
                isSuccess: false,
                isFalse: true,
            }

        },
        methods: {
            changeTime() {
                if (this.t_s >= 0) {
                    let t_min = Math.floor(this.t_s / 60);
                    let t_ss = this.t_s % 60;
                    if (t_min < 10)
                        t_min = '0' + t_min;
                    if (t_ss < 10)
                        t_ss = '0' + t_ss;
                    this.t_show = t_min + ':' + t_ss;
                    this.t_s--;
                    if (this.t_s < 0) {
                        this.isFalse = false;
                        // console.log(this.isFalse);
                    }
                }
            },
            timeFunction() {
                let go;
                if (this.t_s >= 0) {
                    go = setInterval(this.changeTime, 1000);
                } else {
                    clearInterval(go);
                }

            },
            getDate() {
                var myDate = new Date();
                return myDate.getFullYear() + "." + myDate.getMonth() + "." + myDate.getDate() + " " + myDate.getHours() + ':' + myDate.getMinutes();
            },
            successFunction() {

            },
            rePayFunction() {

            }
        },
        mounted: function () {
            // this.timeFunction();
        }
    }
</script>

<style scoped>
    .formText {
        display: block;
        float: left;
        margin-left: 40px;
        margin-top: 6px;
        font-size: 12px;
        color: #141f2a;
        width: 170px;
        color: rgba(28, 28, 38, 0.8)
    }

    .box {
        width: 200px;
        height: 200px;
        display: block;
        position: absolute;
        /*border: 2px solid rosybrown;*/
        background-color: rgba(28, 28, 28, 0.7);
        color: whitesmoke;
        text-align: center;
        line-height: 200px;
        z-index: 10;
    }
</style>
