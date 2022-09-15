<template>
    <div class="card">
        <v-card
       class="mx-auto"
       outlined
     >
           <div class="logon-top"></div>
           <div class="logon-tap">
               <v-tabs
               fixed-tabs
               >
                   <v-tab @click="comname='Left'">账号登录</v-tab>
                   <v-tab @click="comname='Right'">手机验证码登录</v-tab>
               </v-tabs>
           </div>
           <component :is="comname"></component>
           <div class="zhuce">
               <div class="zhuce-btn">
                   
                   <div class="tel-zhuce">
                       <img src="../../../assets/imgs/手机.svg" class="wx-icon">
                       <router-link to="/register/">
                       <a>手机号注册</a>
                       </router-link>
                   </div>
                  
               </div>
                <p class="wx-tips">
                       <span>注册即代表享有免费下载学习资料的权限</span>
                       <!-- <a href="" style="text-decoration:none;">《行思堂用户注册协议》</a> -->
                   </p>
           </div>
    
     </v-card>
    </div>
   </template>
   <script>
   import Left from '../../../views/logon/iphone_login/password_login.vue'
   import Right from '../../../views/logon/iphone_login/mobile_login.vue'
   export default{
       components:{
           Left,
           Right
   
       },
       data(){
           return{
               comname:Left
           }
       }
   }
   </script>
   <style scoped>
   @media screen and (min-width:200px) and (max-width:600px){
       .card{
       position: absolute;
       top: 50%;
       left: 0;
       right: 0;
       width: 100%;
       /* width: 25rem; */
       height: 29rem;
       background: #fff;
       -webkit-box-shadow: 0 8px 16px rgb(0 0 0 / 8%);
       box-shadow: 0 8px 16pxrgba(0,0,0,.08);
       border-radius: 4px;
       margin: -232px auto 0;
       
   }
   .logon-tap{
       border-bottom: 1px solid #c3c9d5;
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
   }
   @media screen and (min-width:1000px) {
   .card{
       position: absolute;
       top: 50%;
       left: 0;
       right: 0;
       /* width: 100%; */
       width: 25rem;
       height: 29rem;
       background: #fff;
       -webkit-box-shadow: 0 8px 16px rgb(0 0 0 / 8%);
       box-shadow: 0 8px 16pxrgba(0,0,0,.08);
       border-radius: 4px;
       margin: -232px auto 0;
       
   }
   .logon-tap{
       border-bottom: 1px solid #c3c9d5;
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
   }
   
   </style>