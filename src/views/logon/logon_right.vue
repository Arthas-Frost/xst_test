<template>
    <div>
        <div class="left_logon">
            <div class="input_logon">
                <img src="../../assets/imgs/邮箱.svg" class="left-icon">
                <div class="input-view">
                        <input type="text" placeholder="请输入注册邮箱" length="11" class="logon-input">
                        <p class="input-bottom"></p>
                </div>
            </div>
             <div class="input_logon" style="margin-top:24px">
                <img src="../../assets/imgs/密码.svg" class="left-icon">
                <div class="input-view">
                        <input :type='Pwd' placeholder="请输入密码" length="6" class="logon-input">
                        <p class="input-bottom"></p>
                </div>
                <!-- <button class="right-btn">获取验证码</button> -->
                <div  @click="getpassword">
                    <img :src="Src" class="right-icon">
                </div>
            </div>
            <div class="logon-btn">
                <button class="next-button">登录</button>
            </div>
            <router-link to="/findpwd/">
            <a  class="find-pwd">忘记密码</a>
            </router-link>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                // require获取图片路径
                Src:require('../../assets/imgs/不可见.png'),
                Pwd:'password'
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
            }
        }
    }
</script>

<style scoped>
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
.right-icon{
    width: 24px;
}
</style>
