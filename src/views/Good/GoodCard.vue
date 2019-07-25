<template>
    <el-card class="cardHover" :body-style="{padding: 0,
        width: '265px',
        height: '360px',
        display: 'flex',
        'flex-direction': 'column',
        'align-content': 'center'}"
             shadow="hover"
               >

        <el-image :src=good.cImg
                  class="image"
                  style="height: 250px;width: 265px"
                  fit="fill">
        </el-image>
        <div style="padding: 10px 10px 0 10px;">
            <div class="GoodName textAlign">{{good.cName}}</div>

            <div class="price_cart" >
                <div class="price" style="margin: 0 auto">￥{{good.cMinmoney}}</div>
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
        <div class="textAlign" style="color: #999;margin-top: 5px">
            sbgx
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

    .price {

        color: #9DBC7A;
    }
    .GoodName {
        word-wrap: break-word;
        cursor: pointer;
    }

    .GoodName:hover{
        color: #9DBC7A;
    }

    .textAlign{
        text-align:center;
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
    }

    hr{
        width: 50%;
        border: 0;
        border-top: 1px solid #e8e8e8;
    }

    .cardHover:hover{
        margin-top: -3px;
        /*box-shadow: black;*/
        background-color: rgba(235,245,197,0.20);
    }

</style>
