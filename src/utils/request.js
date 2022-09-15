import axios from 'axios'
import router from '@/router'
import { getToken,removeToken } from '@/utils/auth'
import Loading from '@/components/Loading/loading'
import Config from '@/config'
import store from '@/store/store'
import { Toast } from 'vant'
import Vue from 'vue'
Vue.use(Toast)
Vue.use(Loading)
// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url
  timeout: Config.timeout // 请求超时时间
})
let loadingCount = 0
// request拦截器
service.interceptors.request.use(
  
  config => {
    if (getToken()) {
      config.headers['Authorization'] = 'JWT ' + getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    config.headers['Content-Type'] = 'application/json'

    let str = '?'
    // for (let key in config.data) {
      // str += key + '=' + config.data[key] + "&"
      // console.log(str)
    // }
    str = str.slice(0,-1)
    if (config.method == 'get') {
      config.url = config.baseURL + config.url+str
    }
    // showLoad()
    return config
  },
  error => {
    // hideLoad()
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
  
    const code = response.status
    if (code < 200 || code > 300) {
      Notification.error({
        title: response.message
      })
      return Promise.reject('error')
    } else {
           //hideLoad()
      return response.data
    }
  },
  error => {
    let code = 0
    hideLoad()
    try {
        console.log(error)
      code = error.response.status
      console.log(error.response.status)
    } catch (e) {
      if (error.toString().indexOf('Error: timeout') !== -1) {
        Toast('网络请求超时')
        return Promise.reject(error)
      }
    }
    
    if (code === 401) {
      removeToken()
      store.state.isLogin = false
      
    } else if (code === 403) {
    } else {
      const errorMsg = error.response.data.message
      if (errorMsg !== undefined) {
        Notification.error({
          title: errorMsg,
          duration: 2500
        })
      }
    }
    return Promise.reject(error)
  }
)

export function showLoad() {
  //console.log('loadingShow')
  Vue.prototype.$loading.show()
  // if (loadingCount === 0) {
  //   Vue.prototype.$loading.show()
  // }
}
export function hideLoad() {
  //console.log('loadingHide')
  // if (loadingCount <= 0) return
  // loadingCount--
  // if (loadingCount === 0) {
  //   Vue.prototype.$loading.hide()
  // }
  Vue.prototype.$loading.hide()
}
export default service
