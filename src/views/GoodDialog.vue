<template>
    <el-container>
        <el-aside>
            <el-carousel :interval="5000" arrow="always" height="300px">
                <el-carousel-item v-for="item in 4" :key="item">
                    <h3>{{ item }}</h3>
                </el-carousel-item>
            </el-carousel>
        </el-aside>
        <el-main>
            <el-header>
                <div>{{goodLabel}}</div>
            </el-header>
            <el-header style="background-color: darkgray">

                <div style="display: inline ;margin: 10px 10px ">
                    <div style="float: left">
                        <div style="display: inline;">衣&nbsp;架&nbsp;:&nbsp;</div>
                        <div style="display:inline;">&nbsp;{{doubleChange(price)}}</div>
                    </div>
                    <div style="float: right">
                        <el-divider direction="vertical" style="float: right"></el-divider>
                        <div style="display: inline; float: right">评&nbsp;论&nbsp;:&nbsp;</div>
                    </div>
                </div>
            </el-header>
            <el-footer>
                <div style="float: left">
                    <div style="display: inline">配送至：</div>
                    <el-select v-model="select" slot="prepend" placeholder="请选择" size="small">
                        <el-option v-for="(o) in 5" :key="o" label="五社区" value="(o)"></el-option>
                    </el-select>
                    &nbsp;
                    <div v-if="sku  == 0 && flag == false" style="display: inline">
                        入定
                    </div>
                    <div v-else-if="sku == 0 && flag">
                        尾款
                    </div>
                    <div v-else>
                        库存&nbsp;:&nbsp;{{sku}}
                    </div>
                </div>
            </el-footer>
            <el-main>
                <el-divider style="margin: 0px"></el-divider>
                <div style="display: inline">
                    <div>款式分类</div>
                    <el-row>
                        <el-col span="4" v-for="index of 5" :key="index">
                            <el-card :body-style="{ padding: '10px' }" shadow="hover"
                                     style="width: 60px;margin-left: 15px ; height: 80px">
                                <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                                     class="image">
                            </el-card>
                        </el-col>
                    </el-row>
                </div>
                <el-divider></el-divider>
            </el-main>
            <el-footer>
                <el-input-number v-model="num" step="1"></el-input-number>
                <el-button plain>加入购物车</el-button>
            </el-footer>
        </el-main>
    </el-container>
</template>

<script>


    export default {
        name: "GoodDialog",
        data: function () {
            return {
                goodLabel: '这只是个测试',
                price: '3.1415',
                sku: 0,
                flag: false,
                num:5,
            }
        },
        methods: {
            doubleChange(x) {
                var f = parseFloat(x);
                if (isNaN(f)) {
                    return false;
                }
                f = Math.round(x * 100) / 100;
                var s = f.toString();
                var rs = s.indexOf('.');
                if (rs < 0) {
                    rs = s.length;
                    s += '.';
                }
                while (s.length <= rs + 2) {
                    s += '0';
                }
                return s;
            }

        }
    }
</script>

<style scoped>
    .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;
    }

    .image {
        width: 100%;
        display: block;
    }
</style>
