import Vue from 'vue'
//全局引入vueX
import Vuex from 'vuex';
Vue.use(Vuex)

const state = {
    isLogin: false,
    qrCode: '',
    reservationInfo:[],
    reservationInfo1:[],
}

const mutations = {
    
}

export default new Vuex.Store({
    state,
});