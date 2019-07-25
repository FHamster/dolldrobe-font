<template>
    <div class="mark-class shadow-around">
        <div class="flex-row" style="justify-content: space-between">
            <div>
                <el-button type="text" class="head_titil">关注的商品</el-button>
                <el-button type="text" class="head_titil">关注的画稿</el-button>
                <el-button type="text" class="head_titil">关注的画手</el-button>
            </div>
            <div>
                <el-input class="head_search"
                          prefix-icon="el-icon-search"
                          type="text"
                          :clearable="true"
                          size=mini>
                </el-input>
                <el-button size="mini" plain>搜索</el-button>
            </div>
        </div>


        <el-divider></el-divider>

        <div>

            <div class="goodPanel" style="margin-left: 20px">
                <el-card v-for="o in favo" :key="o.cNum"
                         :body-style="{ padding: '0px' }"
                         style="width: 230px;margin-right: 20px;"
                         shadow="hover"
                >
                    <img :src=o.cImg
                         class="image">
                    <div style="padding: 14px;">
                        <span class="GoodName">{{o.cName}}</span>
                        <div class="bottom clearfix">
                            <div class="price_cart">
                                <div class="price">￥{{o.cMinmoney}}</div>
                                <el-button type="text" class="button">加入购物车</el-button>
                            </div>

                        </div>
                    </div>
                </el-card>
            </div>
        </div>
        <el-divider></el-divider>

        <el-footer>
            <div style="display: inline">
                <el-row style="margin: 0">
                    <div style="display: inline; font-size: 13px">筛选条件&nbsp;:</div>
                    <el-button plain :autofocus="true" size="mini" class="head_btn">不限</el-button>
                    <el-button plain class="head_btn" size="mini">降价({{jiangjia}})</el-button>
                    <el-button plain class="head_btn" size="mini">满减({{manjian}})</el-button>
                    <el-button plain class="head_btn" size="mini">优惠券({{youhui}}</el-button>
                    <el-button plain class="head_btn" size="mini">下柜({{xiagui}})</el-button>

                    <div style="float: right">
                        <el-checkbox>全选</el-checkbox>
                        <el-button type="text" icon="el-icon-shopping-cart-1">加入购物车</el-button>
                        <el-button type="text" icon="el-icon-star-on">取消关注</el-button>
                    </div>
                </el-row>
            </div>
        </el-footer>
    </div>
</template>

<script>

    import axios from 'axios';

    export default {

        name: "BookMark",
        data() {
            return {
                jiangjia: 0,
                manjian: 0,
                youhui: 0,
                xiagui: 0,
                favo: []
            }
        },
        mounted() {
            this.getFavorities();
        },
        methods: {
            getFavorities() {
                axios.get('/api/Favorities/Favorities', {
                        headers: {
                            'token': this.$store.getters.getToken
                        }
                    }
                ).then(res => {
                    // console.log(res.data)

                    this.favo = res.data;

                });
            }
        }
    };
</script>

<style scoped>
    .head_titil {
        display: inline;
        padding: 15px 10px;
    }

    .head_search {
        width: 150px;
        padding: 10px 0px;
    }

    .head_btn {
        font-size: 13px;
        border-radius: 0px;
        margin: 5px;
        display: inline;
    }

    .image {
        width: 100%;
        display: block;
    }

    .GoodName {
        white-space: nowrap;
    }

    .price_cart {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .goodPanel {
        /*width: 100%;*/
        /*height: auto;*/
        display: flex;
        justify-content: flex-start;
        flex-direction: row;
        flex-wrap: wrap;
    }


    .mark-class {
        display: flex;
        flex-direction: column;

        width: 85%;
        max-width: 1050px;
        margin-top: 20px;
    }
</style>
