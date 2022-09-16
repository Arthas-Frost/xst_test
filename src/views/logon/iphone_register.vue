<template>
    <div class="card">
           <v-card
           class="mx-auto"
           outlined
           >
           <!-- <div class="logon-top"> <p>注册</p></div> -->
           <div class="logon-tap">
                <div class="wx-zhuce">
                       <!-- <img src="../assets/imgs/微信.svg" class="wx-icon"> -->
                       <p style="margin-top:20px">注册新账号</p>
                   </div>
           </div>
   
           <div>
           <div class="left_logon">
               <div class="input_logon">
                   <img src="../../assets/imgs/昵称.svg" class="left-icon">
                   <div class="input-view">
                           <input type="text" placeholder="请设定昵称"  class="logon-input" v-model="title">
                           <p class="input-bottom"></p>
                   </div>
               </div>
               <div class="input_logon" style="margin-top:24px">
                   <img src="../../assets/imgs/手机.svg" class="left-icon">
                   <div class="input-view">
                           <input type="text" placeholder="请输入电话号码" max="11" class="logon-input" v-model="mobile">
                           <p class="input-bottom"></p>
                   </div>
               </div>
               <div class="input_logon" style="margin-top:24px">
                   <img src="../../assets/imgs/验证码.svg" class="left-icon">
                   <div class="input-view">
                           <input type="text" placeholder="请输入验证码" length="6" class="logon-input" v-model="code">
                           <p class="input-bottom"></p>
                   </div>
                   <button class="right-btn" v-if="disabled" @click="check_phone();getcode();waitcode()">获取验证码</button>
                   <button class="right-btn" v-if="!disabled">{{timer}}秒后重试</button>
               </div>
               <div class="input_logon" style="margin-top:24px">
                   <img src="../../assets/imgs/密码.svg" class="left-icon">
                   <div class="input-view">
                           <input :type='Pwd' placeholder="请输入密码"  class="logon-input" v-model="password">
                           <p class="input-bottom"></p>
                   </div>
                   <!-- <button class="right-btn">获取验证码</button> -->
                   <div  @click="getpassword">
                       <img :src="Src" class="right-icon">
                   </div>
               </div>
               <div class="input_logon" style="margin-top:24px">
                   <img src="../../assets/imgs/密码.svg" class="left-icon">
                   <div class="input-view">
                           <input :type='rePwd' placeholder="请确定密码"  class="logon-input" v-model="repeat_password">
                           <p class="input-bottom"></p>
                   </div>
                   <!-- <button class="right-btn">获取验证码</button> -->
                   <div  @click="getrepassword">
                       <img :src="reSrc" class="right-icon">
                   </div>
               </div>
               <div class="logon-btn">
                   <button class="next-button"  @click="check_info(),zhuce()">注册</button>
               </div>
               <!-- <a href="#" class="find-pwd">忘记密码</a> -->
           </div>
           </div>
     
     </v-card>
    </div>
   </template>
   <script src="https://cdn.bootcss.com/qs/6.7.0/qs.min.js"></script>
   <script>
   // import { defineComponent } from '@vue/composition-api'
   import axios from 'axios'
   import qs from 'qs'
   export default{
           data(){
               return{
                   // require获取图片路径
                   Src:require('../../assets/imgs/不可见.png'),
                   reSrc:require('../../assets/imgs/不可见.png'),
                   Pwd:'password',
                   rePwd:'password',
                   title:"",  //昵称
                   mobile:"",  //号码
                   password:"",  //密码
                   repeat_password:"",
                   code:"", //验证码
                   disabled:true, 
                   timer:60,
                   phone_msg:"",
                   phone_error:false,
                   all_info:true,
                   get_zhuce:true,//判断是否输入信息正确
                   data:{},//存放注册返回的信息
                  
               }
           },
           methods:{
               getpassword(){
                   if (this.Src===require('../../assets/imgs/不可见.png')){
                       this.Src=require('../../assets/imgs/可见.png'),
                       this.Pwd='text'
                   }else{
                       this.Src=require('../../assets/imgs/不可见.png'),
                       this.Pwd='password'
                   }
               },
               getrepassword(){
                   if (this.reSrc===require('../../assets/imgs/不可见.png')){
                       this.reSrc=require('../../assets/imgs/可见.png'),
                       this.rePwd='text'
                   }else{
                       this.reSrc=require('../../assets/imgs/不可见.png'),
                       this.rePwd='password'
                   }
               },
                zhuce(){
                    var that=this
                    if(this.get_zhuce==true){
                           axios.post('http://43.142.239.198/user/register', qs.stringify({
                               nickname:this.title , password:this.password ,report_password:this.repeat_password,code:this.code,mobile:this.mobile
                               })).then(function(res) {
                                    console.log(res)
                                    // this.data=res.data
                                    // alert(res.data.msg)
                                    if(res.data.code==1){
                                        alert('两次密码输入不一致')
                                    }else if(res.data.code==2){
                                        alert('验证码错误')
                                    }else if(res.data.code==0){
                                        console.log('手机号注册成功，请登录')
                                        that.$router.push('/login/iphone')
                                    }else if(res.data.code==3){
                                        if(res.data.msg=="nickname已注册"){
                                            alert('该用户名已被注册，请更换')
                                        }else{
                                            alert('该手机号已经注册')
                                        }
                                        
                                    }
                               })
                    }
   
               },
               waitcode(){
                   console.log(this.mobile)
                   this.disabled=false;
                   let auth_timer = setInterval(()=>{  //定时器设置每秒递减
                   this.timer--;        //递减时间
                   if(this.timer<=0){ 
                   this.timer=60 ;
                   this.disabled = true;    //60s时间结束还原v-show状态并清除定时器
                   clearInterval(auth_timer)
                   }
               },1000)
   
               },
               async getcode(){
                    var that=this
   //                 axios.post('http://43.142.239.198/send_code', "mobile=15237188080", // body参数 // body参数
   // ).then(res=> {
   //                         console.log(res)
   //                         console.log(that.mobile)
   //                         })
                    axios.defaults.withCredentials = true

                    axios.post('http://43.142.239.198/send_code', qs.stringify({
                                   mobile: this.mobile,
   
                            })).then(function(res) {
                                    console.log(res)
                                    
                                    if(res.data.status==1){
                                        alert('验证码发送失败，请检查手机号是否无误，若无误请联系后台工作人员处理')
                                        
                                    }
                               })
                               let arr=document.cookie
                               console.log(arr)
                               console.log(1)
                    
               },
               check_phone() {
                   console.log('检查手机号')
                   var reg = new RegExp(/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/)
                   console.log(this.photo_msg)
                   var that=this
                   if(this.mobile==''){
                       that.photo_msg='手机号不能为空'
                       that.photo_error=true
                       alert("手机号码不能为空")
                       that.timer=0
                   }
                   console.log(that.photo_msg)
                   console.log(that.photo_error)
                   if (!reg.test(that.mobile)){
                       that.photo_msg='手机号格式不正确'
                       that.photo_error=true
                       alert("手机号码格式不正确")
                       that.timer=0
                   }else{ // 检查手机号是否已经注册
                       
                   }
                   
                   // if (!reg.test(this.mobile)) {
                   //     this.phone_msg = '手机号格式不正确'
                   //     this.phone_error = true
                   //     return false
                   // } else {
                   //     // 去后端查用户数量
                   //     user_count({ type: 'phone', data: this.phone }).then((res) => {
                   //     console.log(res)
                   //     if (res.data.count > 0) {
                   //         this.phone_message = '手机号已存在'
                   //         this.phone_error = true
                   //     } else {
                   //         this.phone_message = ''
                   //         this.phone_error = false
                   //     }
                   //     })
                   // }
                   },
                check_info(){
                    if(this.title==''||this.code==''||this.password==''||this.repeat_password==''){
                        alert("信息填写错误")
                        this.get_zhuce=false
                    }
                }
               
           }
       }
   </script>
   
   
   <style scoped>
       .right-icon{
       width: 24px;
   }
   .card{
       position: absolute;
       top: 50%;
       left: 0;
       right: 0;
       width: 400px;
       height: 464px;
       background: #fff;
       -webkit-box-shadow: 0 8px 16px rgb(0 0 0 / 8%);
       box-shadow: 0 8px 16pxrgba(0,0,0,.08);
       border-radius: 4px;
       margin: -232px auto 0;
       
   }
   .logon-tap{
       /* border-bottom: 1px solid #c3c9d5; */
           /* color: #a1adc5; */
       font-size: 14px;
       height: 46px;
       line-height: 44px;
       margin-bottom: 40px;
   }
   .logon-top{
       height: 25px;
   
   }
   
   .zhuce{
       /* position: absolute; */
       bottom: 0;
       left: 0;
       right: 0;
       width: 100%;
       overflow: hidden;
       /* margin-top:30px; */
       
   }
   .zhuce-btn{
       text-align: center;
       color: #1e1e1e;
       /* font-size: 0; */
       height: 30px;
       line-height: 30px;
   }
   .wx-zhuce{
       cursor: pointer;
       float: left;
       margin-left: 40px
   }
   .wx-icon{
           width: 24px;
       height: 24px;
       margin-right: 4px;
       vertical-align: middle;
   }
   .tel-zhuce{
           cursor: pointer;
       float: right;
       margin-right: 40px;
   }
   .wx-tips{
       color: #787878;
       font-size: 12px;
       line-height: 16px;
       height: 16px;
       text-align: center;
       margin: 18px auto 40px;
   }
   a{
       text-decoration:none;
   }
   .left_logon{
       padding: 0 28px;
   }
   .input_logon{
        display: flex;
       -webkit-box-align: start;
   
       align-items: flex-start;
   }
   .left-icon{
       margin-right: 12px;
       width: 24px;
   }
   .input-view{
       -webkit-box-flex: 1;
   
       flex: 1;
   }
   .logon-input{
       /* font-weight: 500;
       font-size: 14px;
       color: #1e1e1e;
       height: 26px;
       line-height: 26px;
       border: none;
       padding: 0;
       display: block;
       width: 100%; */
       border: none;
       outline: none;
       text-decoration: none;
       line-height: 26px;
   
   }
   .input-bottom{
           margin-top: 4px;
       height: 16px;
       line-height: 16px;
       font-size: 12px;
       color: #f62a2a;
   }
   .right-btn{
       width: 68px;
       height: 24px;
       line-height: 24px;
       text-align: right;
       color: #3d5b96;
       font-size: 12px;
       overflow: hidden;
       white-space: nowrap;
       border: none;
       background: transparent;
       outline: none;
   }
   .next-button{
     
       background: #3d5b96;
       border-radius: 4px;
       color: #fff;
       font-size: 14px;
       font-weight: 500;
       height: 40px;
       line-height: 40px;
       text-align: center;
       width: 100%;
       outline: none;
       margin: 20px 0px;
   }
   .find-pwd{
       text-align: center;
       display: block;
       width: 100px;
       overflow: hidden;
       white-space: nowrap;
       height: 36px;
       line-height: 36px;
       margin: 0 auto;
       color: #3d5b96;
       font-size: 12px;
       cursor: pointer;
   }
   </style>