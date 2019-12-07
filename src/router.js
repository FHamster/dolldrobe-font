import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);


let dollRouter = new Router({
    routes: [
        {
            // 默认页面
            path: '/',
            redirect: "/MainPage"
        },
        {
            // 未找到页面
            path: '*',
            // name: 'MainPage',
            component: () => import( './views/404.vue')
        },

        {
            path: '/MainPage',
            // name: 'MainPage',
            component: () => import( './views/MainPage')
        },
        //test start
        /* {
             path: '/BookMark',
             // name: 'BookMark',
             component: () => import( './views/User/Member/BookMark.vue')
         }, {
             path: '/GoodOrder',
             // name: 'GoodOrder',
             component: () => import( './views/User/Member/GoodOrder.vue')
         }, {
             path: '/UserAddress',
             // name: 'UserAddress',
             component: () => import( './views/User/Member/UserAddress.vue')
         },
         {
             path: '/OrderDetail',
             // name: 'OrderDetail',
             component: () => import( './views/User/Member/OrderDetail.vue')
         },
         {
             path: '/PersonDetail',
             // name: 'PersonDetail',
             component: () => import('./views/User/BannerModule/PersonDetail')
         },*/

        //test end
        {
            path: '/UserCenter',
            name: 'UserCenter',
            component: () => import( './views/User/UserCenterWrapper'),

            children: [
                //购物车界面写在这里面才会嵌套在用户中心里
                //否则购物车界面会替换掉用户中心界面
                {
                    // 默认页面
                    path: '/',
                    redirect: "/UserCenter/index",

                }, {
                    path: '/UserCenter/index',
                    name: 'index',
                    component: () => import( './views/User/BorderModule/UserCenter'),
                }, {
                    path: '/UserCenter/ShoppingBag',
                    // name: 'ShoppingBag',
                    component: () => import( './views/User/Member/ShoppingBag.vue')
                }, {
                    path: '/UserCenter/BookMark',
                    // name: 'BookMark',
                    component: () => import( './views/User/Member/BookMark.vue')
                }, {
                    path: '/UserCenter/GoodOrder',
                    // name: 'GoodOrder',
                    component: () => import( './views/User/Member/GoodOrder.vue')
                }, {
                    path: '/UserCenter/UserAddress',
                    name: 'UserAddress',
                    component: () => import( './views/User/Member/UserAddress.vue')
                },
                {
                    path: '/UserCenter/OrderDetail',
                    // name: 'OrderDetail',
                    component: () => import( './views/User/Member/OrderDetail.vue')
                },
                {
                    path: '/UserCenter/PersonDetail',
                    // name: 'PersonDetail',
                    component: () => import('./views/User/BannerModule/PersonDetail')
                },
                {
                    path: '/UserCenter/PersonalData',
                    component: () => import( './views/User/BorderModule/PersonalData')
                },
                {
                    path: '/UserCenter/OrderDetail',
                    name: 'OrderDetail',
                    component: () => import( './views/User/Member/OrderDetail')
                },
                {
                    path: '/UserCenter/Express',
                    name: 'Express',
                    component: () => import( './views/User/Scattered/Express')
                },

                {
                    path: '/UserCenter/PayFor',
                    name: 'PayFor',
                    component: () => import( './views/User/Scattered/PayFor')
                },
                {
                    path: '/UserCenter/MessageBorder',
                    // name: 'MessageBorder',
                    component: () => import('./views/User/BorderModule/MessageBorder'),
                    children: [
                        {
                            path: '/InteractiveInform/:type',
                            component: () => import('./views/User/Message/InteractiveInform')
                        },
                        {
                            path: '/SystemInform/:type',
                            name: 'SystemInform',
                            component: () => import('./views/User/Message/SystemInform')
                        }
                    ],
                }
            ],
        },
        {
            path: '/GoodsPage',
            name: 'GoodsPage',
            component: () => import( './views/Good/GoodsPage')
        },
/*
        {
            path: '/OrderDetail',
            name: 'OrderDetail',
            component: () => import( './views/User/Member/OrderDetail')
        },
        {
            path: '/Express',
            name: 'Express',
            component: () => import( './views/User/Scattered/Express')
        },

        {
            path: '/PayFor',
            name: 'PayFor',
            component: () => import( './views/User/Scattered/PayFor')
        },
*/

        /*{
            path: '/UserAsideMenu',
            name: 'UserAsideMenu',
            component: () => import( './views/User/BannerModule/UserAsideMenu')
        },*/
    ]
});

export default dollRouter;
