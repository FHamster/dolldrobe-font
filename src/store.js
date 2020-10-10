import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

//全局作用欲数据
const state = {
    //用户token
    userToken: '1',
    //用户名
    userName: '1',
    //用户帐号
    userAccount: '1',
    //登录框是否显示
    isLoginPopVis: false,
    //头像路径
    icon_head:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3127190984,2058914612&fm=26&gp=0.jpg",
};

//同步方法
const mutations = {
    setToken(state, token) {
        state.userToken = token;
    },
    setName(state, Name) {
        state.userName = Name;
    },
    setAccount(state, Acc) {
        state.userAccount = Acc;
    },

    loginVisToggle() {
        state.isLoginPopVis = !state.isLoginPopVis;
    }
};

//异步方法
//ajax/axios调用只允许出现在这里
const actions = {};

//getter
const getters = {
    getToken: state => state.userToken
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
