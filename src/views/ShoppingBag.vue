<template>
    <el-container>
        <el-header height="35px">
            <el-row style="display: inline">
                <div>
                    <div style="width: 70px;margin: 0px;display: inline;margin-top: 3px">全部商品</div>
                    <div style="display: inline">{{sumCount}}</div>
                    <div style="float: right;">
                        <div style="display: inline">配送至：</div>
                        <el-select v-model="select" slot="prepend" placeholder="请选择" size="small">
                            <el-option v-for="(o) in 5" :key="o" label="五社区" value="(o)"></el-option>
                        </el-select>
                    </div>
                </div>
            </el-row>
        </el-header>
        <el-container>
            <el-table height="40px" style="background-color: darkgray"
            >
                <el-table-column label="全选" style="width: 140px ;">
                    <el-checkbox v-model="checked" label="全选"></el-checkbox>
                </el-table-column>
                <el-table-column label="商品" style="width: 210px"></el-table-column>
                <el-table-column style="width: 170px"></el-table-column>
                <el-table-column label="单价" style="width: 160px;text-align:right"></el-table-column>
                <el-table-column label="数量" style="width: 80px ;text-align: right"></el-table-column>
                <el-table-column label="小计" style="width: 140px; text-align: right"></el-table-column>
                <el-table-column label="操作" style="width: 75px"></el-table-column>
            </el-table>
        </el-container>
        <el-footer height="50px">
            <div style="width: 50px;text-align: center;display: inline;margin-right: 2px">
                <el-checkbox v-model="checked" label="全选"></el-checkbox>
            </div>
            <el-button type="text" style="margin-left: 1px">删除选中商品</el-button>
            <el-button type="text">移到关注</el-button>
            <el-button type="text">清理购物车</el-button>


            <div style="float: right">
                <div style="width: 270px">
                    <div style="display: inline;width: 110px;float: left;font-size: 12px">已选择
                        <div style="display: inline">{{sumNum}}</div>
                        件商品
                    </div>
                    <div style="display: inline;width: 50px">
                        <el-col style="display: inline;width: 70px">
                            <div style="display: inline;font-size: 12px">总价：
                                <div style="display: inline">{{sumPrice}}</div>
                            </div>
                            <div style="font-size: 12px">促销：-￥{{ducePrice}}</div>
                        </el-col>
                    </div>
                </div>
                <el-button  size="media" plain style="float: right">去结算</el-button>
            </div>
        </el-footer>
    </el-container>
</template>

<script>
    export default {
        name: "ShoppingBag",
        data() {
            return {
                sumCount: 0,
                sumNum: 0,
                sumPrice: 0.00,
                ducePrice: 0.00,
                checked: true,
                // tabledata: [{
                //     quanxuan: false,
                //     good: 'test',
                //     price: 17.5,
                //     num: 5,
                //     sum: 17.5 * 5,
                //     caozuo: 'delete'
                // }]
            }
        },
    }
</script>

<style scoped>

</style>
