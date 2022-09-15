<template>
  <v-app>


  <home>
    <slot>
      <div class="fangsong">
      <!-- 轮播图部分 -->
      <div class="swipe-content">
        <div style="width:100%;height:100%">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item><img src="../assets/imgs/slders1.jpg" class="swipe-img"></van-swipe-item>
          <van-swipe-item><img src="../assets/imgs/slders2.jpg" class="swipe-img"></van-swipe-item>
          <van-swipe-item><img src="../assets/imgs/slders3.jpg" class="swipe-img"></van-swipe-item>
          <van-swipe-item><img src="../assets/imgs/slders4.jpg" class="swipe-img"></van-swipe-item>
          <van-swipe-item><img src="../assets/imgs/slders5.jpg" class="swipe-img"></van-swipe-item>
        </van-swipe>
      </div>
      </div>
      <!-- 导航区 -->
      <!-- <div class="nav-bar">
        <van-row justify="center" height="100%">
          <van-col span="4" class="navbar-detali">
            
                <div class="navbar-icon">
                    dshdsuh
                </div>
          
          </van-col>
          <van-col span="1"></van-col>
          <van-col span="4">span: 6</van-col>
          <van-col span="1"></van-col>
          <van-col span="4">span: 6</van-col>
          <van-col span="1"></van-col>
          <van-col span="4">span: 6</van-col>
          <van-col span="1"></van-col>
          <van-col span="4">span: 6</van-col>
        </van-row>
      </div> -->
      <div class="nav-bar">
          <ul>
            <li class="nav-detail">
              <div class="nav-icon">
                <img src="../assets/imgs/下载.png" style="height: 100%;padding-top: 12px;padding-bottom: 12px;">
              </div>
              <div class="nav-text">
                资料下载
              </div>
            </li>
            <li class="nav-detail">
              <div class="nav-icon">
                <img src="../assets/imgs/关联语句.png" style="height: 100%;padding-top: 12px;padding-bottom: 10px;">
              </div>
              <div class="nav-text">
                专有名词
              </div>
            </li>
            <li class="nav-detail">
              <div class="nav-icon">
                <img src="../assets/imgs/关联语句.png" style="height: 100%;padding-top: 12px;padding-bottom: 10px;">
              </div>
              <div class="nav-text">
                关联语句
              </div>
            </li>
            <li class="nav-detail">
              <div class="nav-icon">
                <img src="../assets/imgs/理论公式.png" style="height: 100%;padding-top: 12px;padding-bottom: 12px;">
              </div>
              <div class="nav-text">
                理论公式
              </div>
            </li>
            <li class="nav-detail">
              <div class="nav-icon">
                <img src="../assets/imgs/理论研究.png" style="height: 100%;padding-top: 12px;padding-bottom: 12px;">
              </div>
              <div class="nav-text">
                理论研究
              </div>
            </li>
          </ul>
      </div>
      <van-divider />
      
      <!-- 学科分类 -->
      <div class="object-main">
        <div class="object-detail">
          <div class="object-detail-text">
            <span style="width:80px;white-space:nowrap;">推荐学科</span>
            <span><img src='../assets/imgs/更多1.png' align="AbsMiddle" style="width:20px;height:15px; "></span>
            <span style="float: right;"><img src='../assets/imgs/更多.png' align="AbsMiddle" style="height:15px;"></span>
            <!-- <div style="height:100%"><div class="more-text"><img src='../assets/imgs/更多1.png' align="AbsMiddle" style="width:15px;height:15px; "></div></div>
            <div style="width:100%">
              <div class="more-text1">
                <img src='../assets/imgs/更多.png'>
              </div>
            </div> -->
          </div>
        </div>
        
        <div class="object-content">
            <div style="width:33.3%;height: 160px;">
              <div class="object-contents">
                <img src="../assets/imgs/基础学科.png" style="width:100%;height:100%;border-radius: 10px 10px 0 0;box-shadow:4px 4px 7px grey;">
              </div>
              <div class="object-content-text1 object-content-text">
                <p>基础学科</p>
              </div>
            </div>
            <div style="width:33.3%;height: 160px; ">
              <div class="object-contents">
                <img src="../assets/imgs/人工智能.png" style="width:100%;height:100%;border-radius: 10px 10px 0 0;box-shadow:4px 4px 7px grey;">
              </div>
              <div class="object-content-text2 object-content-text">
                <p>人工智能</p>
              </div>
            </div>
          <div style="width:33.3%;height: 160px;">
            <div class="object-contents">
                <img src="../assets/imgs/信息安全.png" style="width:100%;height:100%;border-radius: 10px 10px 0 0;box-shadow:4px 4px 7px grey;">
              </div>
              <div class="object-content-text3 object-content-text">
                <p>信息安全</p>
              </div>
          </div>
        </div>
        <van-divider />
        <!-- <van-grid :border="false" :column-num="3" :gutter="10">
            <van-grid-item >
              <van-image
                :src="require('../assets/imgs/网易云.png')"
              />
            </van-grid-item>
            <van-grid-item>
              <van-image
                src="../assets/imgs/1.png"
              />
            </van-grid-item>
            <van-grid-item>
              <van-image
                src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-3.jpeg"
              />
            </van-grid-item>
          </van-grid> -->
          <div class="zixun-main">
            <div class="object-detail-text">
              <span style="width:80px; white-space:nowrap;">热门资讯</span>
              <span><img src='../assets/imgs/更多1.png' align="AbsMiddle" style="width:20px;height:15px; "></span>
              <span style="float:right;"><img src='../assets/imgs/更多.png' align="AbsMiddle" style="height:15px;"></span>
            </div>
            <van-card
            desc="常出现于小学初中作文、英语、数学题、物理题、化学题和笑话中。
                            此名拥有极为悠久的历史内涵，在中国的各种“名著”上皆有出现，体现了
                            中国丰富的华夏文明，甚至一度代表中国冲出亚洲，成为了”最有影响力的名字“之一。"
              title="标题"
              :thumb="require('../assets/imgs/资讯1.png')"
              class="card-color"
              centered
            />
                

            <van-card
              desc="信息"
              title="标题"
              :thumb="require('../assets/imgs/资讯2.png')"
              class="card-color"
              centered
            />
            <van-card
              desc="信息"
              title="标题"
              :thumb="require('../assets/imgs/资讯3.png')"
              class="card-color"
              centered
            />
            <van-card
              desc="信息"
              title="标题"
              :thumb="require('../assets/imgs/资讯4.png')"
              class="card-color"
              centered
            />
          </div>
          
      </div>
    </div>
    </slot>
  </home>



</v-app>
</template>

<script>
 import Home from '../views/Home.vue'
export default {
  components:{
    Home
  }
}
</script>
<style scoped>
  .fangsong{
    font-family: FangSong;
  }
  .swipe-content {
    /* width: 100%; */
    padding-top: 15px;
    margin-left: 5px;
    margin-right: 5px;
  }
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    /* background-color: #39a9ed; */
    height: 150px;
    width:100%;
  }
  .swipe-img{
    
    display: block;
    width: 100%;
    height: 150px;
    border-radius: 20px;
  }
  .nav-bar{
    width: 100%;
    height: 24vw;
    padding-top: 20px;
    /* display: flex; */
    margin: 0;
    /* padding: 0; */
    border: 0;
    font-size: 100%;
    font-weight: 400;
    vertical-align: baseline;
  }
  .navbar-detali{
    height:75px;
    /* width: 100%; */
    background-color: pink;
  }
  .navbar-icon{
    padding-left: 5px;
    padding-right: 5px;
    background-color: red;
    height: 50px;
  }
  .nav-detail{
    float: left;
    width: 13.333vw;
    height: 20vw;
    margin: 1.333vw 3.333vw;
    line-height: 13.333vw;
    text-align: center;
    vertical-align:middle;
    list-style: none;
  }
  .nav-icon{
    width: 13.333vw;
    height: 13.333vw;
    border-radius: 6.667vw;
    color: #fff;
    background: #fff1f1;
    font-size: 5.333vw;
    font-family: iconfont!important;
    font-size: 2.133vw;
    font-style: normal;
    -webkit-font-smoothing: antialiased;

   
  }
  ul{
    padding: 0;
    width: 100%;
  }
  .nav-text{
    height: 5.333vw;
    line-height: 5.333vw;
    margin-top: 1.333vw;
    font-size: 2.667vw;
    /* font-family: STKaiti; */
  }
  .object-main{
    height: 200px;
    width: 100%;
    /* background-color: pink; */
  }
  .object-detail{
    height: 40px;
    width: 100%;
    /* background-color: red; */
  }
  .object-detail-text{
    height: 100%;
    margin-left: 10px;
    margin-right: 10px;
    /* background-color: #fff; */
    font-size: 20px;
    /* font-family: STKaiti; */
    
  }
  .object-content{
    width: 100%;
    height:160px ;
    display: flex;
  }
  .object-contents{
    margin-top: 5px;
    margin-left: 5px;
    margin-right: 5px;
    /* background-color: blue; */
    height: 110px;
  }
  .object-content-text{
    margin-left: 5px;
    margin-right: 5px;
    /* background-color: yellow; */
    height: 35px;
    text-align: center;
    font-size: 14px;
    padding-top: 10px;
    /* font-family: STKaiti; */
    color: #fff;
    border-radius: 0 0 10px 10px;
  }
  .object-content-text1{
    background-color: #09131c;
  }
  .object-content-text2{
    
    background-color: #6d939c;
    
  }
  .object-content-text3{
   
    background-color: #eadcab;

  }
  .zixun-main{
    margin-top: 15px;
    width: 100%;
  }
  .card-color{
    background-color: #fff;
  }
  .more-text{
    vertical-align: middle;

    height: 100%;

   padding-left: 100px;
    
    display: flex;
  }
  .more-text1{
    
    height: 100%;
    padding-right: 10px;
   float: right;
 
    display: flex;
  }
</style>