<template>
    <div class="menu">
        <div v-for="menuItem in menuList" :key="menuItem.menuTitle"
             class="flex-col"
             style="align-items: flex-start;margin-top: 16px">
            <div class="title">
                {{menuItem.menuTitle}}
            </div>

            <router-link v-for="subMenuItem in menuItem.subMenu"
                         v-show="subMenuItem.isShow"
                         :key="subMenuItem.menuTitle"
                         tag="span" :to="subMenuItem.to"
                         style="margin-bottom: 4px ">
                <el-link :underline="false">
                    {{subMenuItem.menuTitle}}
                </el-link>
            </router-link>
        </div>
        <!--  <dl class="fore">
              <dt>我的钱包</dt>
              <dd class="menu-item-text">
                  <a>优惠券</a>
              </dd>
              <dd class="menu-item-text">
                  <a>积分</a>
              </dd>
          </dl>
          <dl>
              <dt>我的关注</dt>
              <dd class="menu-item-text">
                  <a>关注娃衣</a>
              </dd>
              <dd class="menu-item-text">
                  <a>关注画稿</a>
              </dd>
              <dd class="menu-item-text">
                  <a>关注画手</a>
              </dd>
          </dl>
          <dl style="padding-bottom: 0;">
              <dt>客户服务</dt>
              <dd class="menu-item-text">
                  <a>返修退换货</a>
              </dd>
              <dd class="menu-item-text">
                  <a>我的发票</a>
              </dd>
              <dd class="menu-item-text">
                  <a> 购买咨询</a>
              </dd>
              <dd class="menu-item-text">
                  <a>举报中心</a>
              </dd>
              <dd class="menu-item-text">
                  <a>意见建议</a>
              </dd>
          </dl>-->
    </div>
</template>

<script>
    export default {
        name: "UserAsideMenu",
        data() {
            return {
                menuList: [
                    {
                        menuTitle: "个人中心",
                        subMenu: [
                            {menuTitle: "我的车车", to: "/UserCenter/ShoppingBag", isShow: true},
                            {menuTitle: "个人信息", to: "/UserCenter/PersonalData", isShow: true},
                        ]
                    }, {
                        menuTitle: "订单中心",
                        subMenu: [
                            {menuTitle: "我的订单", to: "/UserCenter/index", isShow: true},
                            {menuTitle: "评价晒单", to: "/UserCenter/index", isShow: true},
                        ]
                    }, {
                        menuTitle: "我的钱包",
                        subMenu: [
                            {menuTitle: "优惠券", to: "/UserCenter/index", isShow: true},
                            {menuTitle: "积分", to: "/UserCenter/index", isShow: true},
                        ]
                    }, {
                        menuTitle: "我的关注",
                        subMenu: [
                            {menuTitle: "关注娃衣", to: "/UserCenter/index", isShow: true},
                            {menuTitle: "关注画稿", to: "/UserCenter/index", isShow: true},
                            {menuTitle: "关注画手", to: "/UserCenter/index", isShow: true},
                        ]
                    }, {
                        menuTitle: "客户服务",
                        subMenu: [
                            {menuTitle: "返修退换货", to: "/UserCenter/index", isShow: true},
                            {menuTitle: "我的发票", to: "/UserCenter/index", isShow: true},
                            {menuTitle: "举报中心", to: "/UserCenter/index", isShow: true},
                            {menuTitle: "意见建议", to: "/UserCenter/index", isShow: false},
                        ]
                    },
                ]
            };
        }
    }
</script>

<style scoped>

    .menu {
        /*width: 170px;*/
        height: auto;
        max-height: 700px;
        max-width: 170px;
        background-color: white;
        color: black;
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
        padding: 8px 96px 8px 16px;
        /*border: 1px solid #a0a8b0;*/
    }

    .menu-item-text {
        position: relative;
        color: #333;
        font-size: 14px;
    }


    dl {
        padding: 10px 20px;
        border-bottom: 1px solid #f3f3f3;
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }

    dt {
        font-size: 16px;
        font-weight: 700;
        display: block;
    }

    dd {
        line-height: 32px;
        display: block;
        margin: 0;
    }

    a {
        text-decoration: none;
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    .title {
        font-size: 16px;
        font-weight: 500;

    }
</style>
