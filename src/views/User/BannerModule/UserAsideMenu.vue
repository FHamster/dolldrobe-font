<template>
    <el-container>
        <el-main class="menu">
            <dl class="fore">
                <dt>订单中心</dt>
                <dd class="menu-item-text">
                    <a >我的订单</a>
                </dd>
                <dd class="menu-item-text">
                    <a>评价晒单</a>
                </dd>
            </dl>
            <dl class="fore">
                <dt >我的钱包</dt>
                <dd class="menu-item-text">
                    <a>优惠券</a>
                </dd>
                <dd class="menu-item-text">
                    <a >积分</a>
                </dd>
            </dl>
            <dl>
                <dt>我的关注</dt>
                <dd class="menu-item-text">
                    <a >关注娃衣</a>
                </dd>
                <dd class="menu-item-text">
                    <a >关注画稿</a>
                </dd>
                <dd class="menu-item-text">
                    <a >关注画手</a>
                </dd>
            </dl>
            <dl >
                <dt >客户服务</dt>
                <dd id="_MYJD_repair">
                    <a >返修退换货</a>
                </dd>
                <dd id="_MYJD_wdfp">
                    <a >我的发票</a>
                </dd>
                <dd id="_MYJD_consultation">
                    <a> 购买咨询</a>
                </dd>
                <dd class="menu-item-text">
                    <a >举报中心</a>
                </dd>
                <dd class="menu-item-text">
                    <a >意见建议</a>
                </dd>
            </dl>
        </el-main>
    </el-container>
</template>

<script>
    export default {
        name: "UserAsideMenu"
    }
</script>

<style scoped>

    .menu {
        width: 170px;
        max-width: 170px;
        background-color: white;
        color: black;
    }

    .menu-item-text{
        position: relative;
        color: #333;
        font-size: 14px;
    }


    dl{
        padding: 15px 20px;
        border-bottom: 1px solid #f3f3f3;
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }

    dt{
        font-size: 16px;
        font-weight: 700;
        display: block;
    }

    dd{
        line-height: 32px;
        display: block;
        margin: 0;
    }

    a{
        text-decoration: none;
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
</style>