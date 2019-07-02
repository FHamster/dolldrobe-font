import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//全局作用欲数据
const state = {
    //用户token
    userToken: null,
    //用户名词
    userName: null,
    //用户帐号
    userAccount: null
};

//同步方法
const mutations = {};

//异步方法
//ajax/axios调用只允许出现在这里
const actions = {};

//getter
const getters = {
    getNum: state => state.changableNum
};

//store实例
const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
});

//暴露接口
export default store;
