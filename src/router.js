import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
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
        {
            path: '/ShoppingBag',
            // name: 'ShoppingBag',
            component: () => import( './views/User/Member/ShoppingBag.vue')
        }, {
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
        },

        //test end
        {
            path: '/UserCenter',
            // name: 'UserCenter',
            component: () => import( './views/User/BorderModule/UserCenter'),
            children: [
                //购物车界面写在这里面才会嵌套在用户中心里
                //否则购物车界面会替换掉用户中心界面
                {
                    // 默认页面
                    path: '/',
                    //redirect: "/"
                },
               /* {
                    path: '/ShoppingBag',
                    // name: 'ShoppingBag',
                    component: () => import( './views/User/Member/ShoppingBag.vue')
                }, {
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
                {
                    path: '/MessageBorder',
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
        {
            path: '/OrderDetail',
            name: 'OrderDetail',
            children: [
                {
                    path: '/Express',
                    name: 'Express',
                    component: () => import( './views/User/Scattered/Express')
                }
            ],
            component: () => import( './views/User/Member/OrderDetail')
        },
        /*{
            path: '/Express',
            name: 'Express',
            component: () => import( './views/User/Scattered/Express')
        },*/
        {
            path: '/PersonalData',
            name: 'PersonalData',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            children: [
                {
                    path: '/PersonDetail',
                    name: 'PersonDetail',
                    component: () => import('./views/User/BannerModule/PersonDetail')
                }, {
                    path: '/UserAddress',
                    name: 'UserAddress',
                    component: () => import( './views/User/Member/UserAddress.vue')
                },
            ],
            component: () => import( './views/User/BorderModule/PersonalData')
        },
        {
            path: '/PayFor',
            name: 'PayFor',
            component: () => import( './views/User/Scattered/PayFor')
        },
    ]
})
