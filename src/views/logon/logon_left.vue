<template>
    <div>
        <div class="left_logon">
            <div class="input_logon">
                <img src="../../assets/imgs/手机.svg" class="left-icon">
                <div class="input-view">
                        <input type="text" placeholder="请输入电话号码" length="11" class="logon-input" >
                        <p class="input-bottom"></p>
                </div>
            </div>
             <div class="input_logon" style="margin-top:24px">
                <img src="../../assets/imgs/验证码.svg" class="left-icon">
                <div class="input-view">
                        <input type="text" placeholder="请输入验证码" length="6" class="logon-input" >
                        <p class="input-bottom"></p>
                </div>
                <button class="right-btn" v-if="disabled" @click="getcode" >获取验证码</button>
                <button class="right-btn" v-if="!disabled">{{timer}}秒后重试</button>
            </div>
            <div class="logon-btn">
                <v-btn class="next-button" color="#3d5b96">登录</v-btn>
            </div>
            <!-- <a href="#" class="find-pwd">忘记密码</a> -->
        </div>
    </div>
</template>
<script>
  export default{
    data(){
        return{
            disabled:true,
            timer:60
        }
    },
    methods:{
        getcode(){
            this.disabled=false;
             let auth_timer = setInterval(()=>{  //定时器设置每秒递减
            this.timer--;        //递减时间
            if(this.timer<=0){  
              this.disabled = true;    //60s时间结束还原v-show状态并清除定时器
              clearInterval(auth_timer)
            }
          },1000)

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
  
    border-radius: 4px;
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    height: 40px;
    line-height: 40px;
    width: 100%;
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


