<template>
    <el-card :body-style="{padding: 0,
        width: '300px',
        height: '420px',
        display: 'flex',
        'flex-direction': 'column',
        'align-content': 'center'}"
             shadow="hover">

        <el-image :src=good.cImg
                  class="image"
                  style="height: 300px;width: 300px"
                  fit="fill">
        </el-image>
        <div style="padding: 10px;">
            <div class="GoodName">{{good.cName}}</div>

            <div class="price_cart">
                <div class="price">￥{{good.cMinmoney}}</div>
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
}

</style>
