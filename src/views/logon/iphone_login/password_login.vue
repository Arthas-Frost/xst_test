<template>
    <div >
           
   
           <div>
           <div class="left_logon">
               <div class="input_logon">
                   <img src="../../../assets/imgs/昵称.svg" class="left-icon">
                   <div class="input-view">
                           <input type="text" placeholder="请输入您的账号名" class="logon-input" v-model="title">
                           <p class="input-bottom"></p>
                   </div>
               </div>
               <div class="input_logon" style="margin-top:24px">
                   <img src="../../../assets/imgs/密码.svg" class="left-icon">
                   <div class="input-view">
                           <input :type='Pwd' placeholder="请输入密码" length="6" class="logon-input" v-model="password">
                           <p class="input-bottom"></p>
                   </div>
                   <!-- <button class="right-btn">获取验证码</button> -->
                   <div  @click="getpassword">
                       <img :src="Src" class="right-icon">
                   </div>
               </div>
               <div class="logon-btn">
                   <button class="next-button"  @click="denglu()">登录</button>
               </div>
               <!-- <a href="#" class="find-pwd">忘记密码</a> -->
           </div>
           </div>
     
  
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
                   Src:require('../../../assets/imgs/不可见.png'),
                   Pwd:'password',
                   title:"",  //昵称
                   password:"",  //密码
                   repeat_password:"",
                   disabled:true,
                   timer:60
               }
           },
           methods:{
               getpassword(){
                   if (this.Src===require('../../../assets/imgs/不可见.png')){
                       this.Src=require('../../../assets/imgs/可见.png'),
                       this.Pwd='text'
                   }else{
                       this.Src=require('../../../assets/imgs/不可见.png'),
                       this.Pwd='password'
                   }
               },
                denglu(){
                    var that=this
                           axios.post('http://43.142.239.198/user/login', qs.stringify({
                               nickname:that.title , password:that.password 
                               })).then(function(res) {
                                    console.log(res)
                                    if(res.data.code==0){
                                        that.$router.push('/')
                                    }else if(res.data.code==1){
                                        alert('用户名不存在，请检查手机号是否输入有误')
                                    }else if(res.data.code==3){
                                        alert('密码错误，请输入正确的密码')
                                    }
                               })
   
               },
               
               
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