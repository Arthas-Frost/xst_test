<template lang="html">
 <div v-if="isShowLoading" class="lc">
  <div class="lb">
   <img class="loimg" :src="require('@/assets/imgs/loading.png')">
   <!-- 这里content为双花括号 -->
   <!-- <span class="loading-txt">加载中</span> -->
  </div>
 </div>
</template>
 
<script>
export default {
  data() {
    return {
      isShowLoading: false,
      content: ""
    };
  }
};
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
.lc {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0);
  z-index: 10000;
}
.lb {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25vw;
  height: 25vw;
  border-radius: 2vw;
  box-sizing border-box
  padding 3vw
  //background: rgba(0, 0, 0, 0.7);
}
@keyframes rotate {
  0%{
    transform rotate(0)
  }
  50%{
    transform rotate(180deg)
  }
  100%{
    transform rotate(360deg)
  }
}
.loimg {
  //width: px2vw(80);
  //height: px2vw(80);
  width: 50px;
  height: 50px;
  animation rotate 1.5s linear infinite;
}
.loading-txt {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: px2vw(26);
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: px2vw(26);
  margin-top px2vw(20)
}
</style>