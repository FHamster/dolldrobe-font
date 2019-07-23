import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            path: '/UserCenter',
            name: 'UserCenter',
            children: [
                //购物车界面写在这里面才会嵌套在用户中心里
                //否则购物车界面会替换掉用户中心界面
                {
                    path: '/ShoppingBag',
                    name: 'ShoppingBag',
                    component: () => import( './views/User/Member/ShoppingBag.vue')
                }, {
                    path: '/BookMark',
                    name: 'BookMark',
                    component: () => import( './views/User/Member/BookMark.vue')
                }, {
                    path: '/GoodOrder',
                    name: 'GoodOrder',
                    component: () => import( './views/User/Member/GoodOrder.vue')
                }, {
                    path: '/UserAddress',
                    name: 'UserAddress',
                    component: () => import( './views/User/Member/UserAddress.vue')
                },
                {
                    path: '/OrderDetail',
                    name: 'OrderDetail',
                    component: () => import( './views/User/Member/OrderDetail.vue')
                }
            ],
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import( './views/User/UserCenter')

        },
        {
            path: '/GoodsPage',
            name: 'GoodsPage',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import( './views/Good/GoodsPage')
        },
        {
            path: '/ShoppingBag',
            name: 'ShoppingBag',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import( './views/User/Member/ShoppingBag')
        },
        {
            path: '/GoodDialog',
            name: 'GoodDialog',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import( './views/Good/GoodDialog')
        },
        {
            path: '/GoodOrder',
            name: 'GoodOrder',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import( './views/User/Member/GoodOrder')
        },
        {
            path: '/UserAddress',
            name: 'UserAddress',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import( './views/User/Member/UserAddress')
        },
        {
            path: '/OrderDetail',
            name: 'OrderDetail',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            children: [
                {
                    path: '/Express',
                    name: 'Express',
                    component: () => import( './views/User/Scattered/Express')
                }
            ],
            component: () => import( './views/User/Member/OrderDetail')
        },
        {
            path: '/Express',
            name: 'Express',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import( './views/User/Scattered/Express')
        },
        {
            path: '/PersonalData',
            name: 'PersonalData',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            children:[
                {
                    path:'/PersonDetail',
                    name:'PersonDetail',
                    component:() => import('./views/User/BannerModule/PersonDetail')
                }
            ],
            component: () => import( './views/User/BannerModule/PersonalData')
        },{
            path:'/PersonDetail',
            name:'PersonDetail',
            component:() => import('./views/User/BannerModule/PersonDetail')
        }
    ]
})
