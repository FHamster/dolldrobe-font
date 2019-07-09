<template>
    <el-container>
        <el-header
                height="50px"
                style="margin-bottom: 10px;
                padding: 10px 20px 20px;"
        >
            <div>我的订单</div>

        </el-header>
        <el-main>
            <el-header>
                <div style="display: inline">
                    <el-button type="text" plain>全部订单</el-button>
                    <el-badge :value="12" class="item" :max="10">
                        <el-button size="mini">待付款</el-button>
                    </el-badge>
                    <el-badge :value="0" class="item" :max="10">
                        <el-button size="mini">待收货</el-button>
                    </el-badge>
                    <el-badge :value="12" class="item" :max="10">
                        <el-button size="mini">待评价</el-button>
                    </el-badge>
                    <div style="float: right; ">
                        <el-input class=" " prefix-icon="el-icon-search" type="text"
                                    style="width: 200px"
                                  :clearable="true" size=mini></el-input>
                        <el-button class="" size="small" plain @click="user_search">搜索
                        </el-button>
                    </div>
                </div>
            </el-header>
            <el-table>

            </el-table>
        </el-main>
    </el-container>
</template>

<script>
    export default {
        name: "GoodOrder"
    }
</script>

<style scoped>
    .item {
        margin-top: 10px;
        margin-right: 40px;
    }
</style>
