<template>
 <div class="card" >
        <v-card
        class="mx-auto"
        outlined
        >
        <!-- <div class="logon-top"> <p>注册</p></div> -->

        <div class="logon-tap">
             <div class="wx-zhuce">
                    <!-- <img src="../assets/imgs/微信.svg" class="wx-icon"> -->
                    <p style="margin-top:20px">通过手机号找回密码</p>
                </div>
        </div>

        <div>
        <div class="left_logon">
            
            <div class="input_logon" style="margin-top:24px">
                <img src="../../assets/imgs/手机.svg" class="left-icon">
                <div class="input-view">
                        <input type="text" placeholder="请输入电话号码" length="11" class="logon-input">
                        <p class="input-bottom"></p>
                </div>
            </div>
             <div class="input_logon" style="margin-top:24px">
                <img src="../../assets/imgs/验证码.svg" class="left-icon">
                <div class="input-view">
                        <input type="text" placeholder="请输入验证码" length="6" class="logon-input">
                        <p class="input-bottom"></p>
                </div>
                <button class="right-btn">获取验证码</button>
            </div>
            <div class="logon-btn">
                <button class="next-button">下一步</button>
            </div>
            <router-link to="/logon/">
            <a  class="find-pwd">返回登录</a>
            </router-link>
        </div>
        </div>
  
  </v-card>
 </div>
</template>


<style scoped>
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