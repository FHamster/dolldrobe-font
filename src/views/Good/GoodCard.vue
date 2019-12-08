<template>
    <el-card class="cardHover" :body-style="{padding: 0,
        width: '265px',
        height: '360px',
        display: 'flex',
        'flex-direction': 'column',
        'align-content': 'center'}"
             shadow="hover">

        <el-image :src=good.cImg
                  class="image"
                  style="height: 250px;width: 265px"
                  fit="fill">
        </el-image>
        <div style="padding: 10px 10px 0 10px;">
            <div class="font-color textAlign">{{good.cName}}</div>

            <div class="price_cart">
                <div class="price-color" style="margin: 0 auto">￥{{good.cMinmoney}}</div>
                <!--              <el-button type="warning"
                                         icon="el-icon-star-off"
                                         circle
                                         @click="addFavo(good)">

                              </el-button>-->
                <!--  <el-button type="primary"
                             icon="el-icon-shopping-cart-2"
                             circle
                             @click="visGoodDialog(good.cNum,good.cName)">
                  </el-button>
-->
            </div>
        </div>
        <hr>
        <div class="textAlign font-color"  style="margin-top: 5px">
            假装这是一段商品介绍
        </div>
    </el-card>
</template>
<script>
    export default {
        name: 'GoodCard',
        props: {
            good: {}
        }
    }
</script>
<style scoped>

    .price_cart {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-top: 5px;
    }

    .font-color {
        color: #606266;
    }

    .GoodName {
        word-wrap: break-word;
        cursor: pointer;
    }


    .textAlign {
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    hr {
        width: 50%;
        border: 0;
        border-top: 1px solid #e8e8e8;
    }

    .cardHover:hover {
        margin-top: -3px;
        /*box-shadow: black;*/
        background-color: #DDD1F6;
    }

    .price-color {
        color: #C2ADED;
    }
</style>
