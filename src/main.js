import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VuePrlx from 'vue-prlx'
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
// import "@/assets/kecheng.scss"
import "@/assets/shouye.scss"
import Loading1 from "./loading/loading1.vue"
import axios from 'axios'


import VueParticles from 'vue-particles'
// main.js进行全局引入
import Vant from 'vant'
import 'vant/lib/index.css';
Vue.use(Vant)
Vue.use(VueParticles)
Vue.component("Loading", Loading1) 

axios.defaults.withCredentials = true
import VWave from 'v-wave'
Vue.use(VuePrlx);
Vue.use(VWave)
Vue.use(AOS)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
