import Cookies from 'js-cookie'
import Config from '@/config'
import {wxLogin} from '@/api/api'


const APPID = "wx20f272d593e29ed2"


export function getCode(path) {
    
  // 关注公众号后静默授权
  
    function getUrlCode(){
        
        // 截取url中的code方法
        var url = location.search
        //this.winUrl = url
        var theRequest = new Object()
        if (url.indexOf("?") != -1) {
            var str = url.substr(1)
            var strs = str.split("&")
            for(var i = 0; i < strs.length; i ++) {
                theRequest[strs[i].split("=")[0]]=(strs[i].split("=")[1])
            }
        }
        return theRequest
    }
    
    let code = ''
    
    var local = window.location.href // 获取页面url
    local = local.substring(0,local.lastIndexOf("#")+1)+path
    
    console.log(local)
    
    code = getUrlCode().code // 截取code
    if (code == null || code === '') { // 如果没有code，则去请求
        window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid="
                                + APPID
                                + "&redirect_uri="
                                //+ local
                                + encodeURIComponent(local)
                                //+ "http%3a%2f%2fhospital2.guyubao.com%2f%23%2findex"
                                + "&response_type=code&scope=snsapi_userinfo&state=STATE"
                                + "&connect_redirect=1#wechat_redirect"
    } else {

        return code
        
    }
}

