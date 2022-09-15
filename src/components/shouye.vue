<template>
    <!-- App.vue -->

<v-app>


   <home>
    <slot>

        <div class="main-continer">


    <!-- 左边栏 -->
   <div class="side-bar">
        
        <nav role="navigation" aria-label="Main" id="site-nav" class="site-nav">
            <ul class="nav-list">
                <li class="nav-list-item active">
                    <a href="https://courses.d2l.ai/zh-v2/" class="nav-list-link active">课程安排</a>
                </li>
            </ul>
        </nav>
   </div>
   <div class="main">
        <div id="main-content-wrap" class="main-content-wrap">
            <div class="main-content" id="main-content">
                <h1>人工智能学习平台</h1>
                <h2>课程摘要</h2>
                <div class="table-wrapper">
                    <table>
                        <tbody>
                            <tr>
                                <td>课时</td>
                                <td>2021年3月20日 — （预计）7月</td>
                            </tr>
                            <tr>
                                <td>直播时间</td>
                                <td>北京时间每周六、日下午 1:00 — 2:30</td>
                            </tr>
                            <tr>
                                <td>直播地址</td>
                                <td><a href="https://app6ca5octe2206.h5.xiaoeknow.com/v1/course/alive/l_601cc496e4b05a9e88714463">
                                    <span style="font-size:140%" class="iconfont icon-livestreaming"></span> 机器之心</a></td>
                            </tr>
                            <tr>
                                <td>视频回放</td>
                                <td><a href="https://space.bilibili.com/1567748478">
                                    <span style="font-size:140%" class="iconfont icon-bilibili-fill"></span> B站</a></td>
                            </tr>
                            <tr>
                                <td>教材</td><td><a href="https://zh-v2.d2l.ai/"><span class="iconfont icon-xiaoshuo-copy"></span> zh-v2.d2l.ai</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>不论是在学术突破还是在工业应用， 深度学习是人工智能在近十年里进展最为迅速的领域。然而，深度学习模型复杂、参数繁多、而且新模型层出不穷，这给学习带来了难度。</p>
                <p>本课程将从零开始教授深度学习。同学们只需要有基础的Python编程和数学基础。我们将覆盖四大类模型：多层感知机、卷积神经网络、循环神经网络、和注意力机制。在此之上，我们将介绍深度学习中的两大应用领域—计算机视觉和自然语言处理—中的典型任务。</p>
                <p>本课程的一大特点是不仅讲述模型算法，同时会将每一处细节都讲述如何用PyTorch进行实现。这样同学们可以在真实数据上获得第一手经验。我们将举办四次课程竞赛，让同学们实践学习到的知识如何解决实际问题。</p>
                <p>本课程的一大特点是不仅讲述模型算法，同时会将每一处细节都讲述如何用PyTorch进行实现。这样同学们可以在真实数据上获得第一手经验。我们将举办四次课程竞赛，让同学们实践学习到的知识如何解决实际问题。</p>
                <p>本课程的一大特点是不仅讲述模型算法，同时会将每一处细节都讲述如何用PyTorch进行实现。这样同学们可以在真实数据上获得第一手经验。我们将举办四次课程竞赛，让同学们实践学习到的知识如何解决实际问题。</p>
                <h2>课程安排</h2>
                <p>目前日程安排为暂定安排，会根据实际进度进行调整。部分内容暂时链接到英文版，中文版会随后更新。</p>
                <h3>深度学习基础</h3>
                <div class="module">
                    <dl >
                        
                    </dl>
                </div>
            </div>
        </div>
   </div>
      </div>

      
     </slot>
   </home>



</v-app>
</template>
<style>
.main-continer{
    display: flex;
}
    .head {
        width: 1500px;
        height: 200px;
        background: rgb(201, 198, 198);
    }
    
    .zuo {
        width: 300px;
        height: 800px;
        background: white;
        float: left;
    }
    
    .gao {
        width: 200px;
        height: 300px;
        background: greenyellow;
        float: left;
        position: fixed;
        left: 100px;
    }
    
    .zhu {
        width: 900px;
        height: 800px;
        background: rgb(223, 196, 179);
        float: left;
    }
    
    .you {
        width: 300px;
        height: 800px;
        background: orange;
        float: left;
    }
    
    .yougao {
        width: 200px;
        height: 300px;
        background: greenyellow;
        float: left;
        position: fixed;
        right: 100px;
    }
    
    .wei {
        float: left;
        width: 1500px;
        height: 200px;
        background: rgb(201, 198, 198);
    }
    .side-bar {
    flex-wrap: nowrap;
    position: fixed;
    width: 248px;
    height: 100%;
    flex-direction: column;
    border-right: 1px solid #eeebee;
    align-items: flex-end;
    
}
.side-bar {
    width: calc((100% - 1064px) / 2 + 264px);
    min-width: 264px;
}
.side-bar {
    z-index: 0;
    display: flex;
    flex-wrap: wrap;
    background-color: #f5f6fa;
}
.site-header {
    height: 60px;
    max-height: 60px;
    border-bottom: 1px solid #eeebee;
    display: flex;
}
.site-header {
    display: flex;
    min-height: 60px;
    align-items: center;
    width: 264px;
}

.site-logo {
    width: 100%;
    height: 100%;
    background-image: url(https://courses.d2l.ai/zh-v2/assets/images/logo-with-text.png);
    background-repeat: no-repeat;
    background-position: left center;
    background-size: contain;
    display:flex;
}
.site-nav {
    display: block;
    padding-top: 3rem;
    padding-bottom: 1rem;
    overflow-y: auto;
    flex: 1 1 auto;
    width: 264px;
}
.nav-list {
    padding: 0;
    margin-top: 0;
    margin-bottom: 0;
    list-style: none;
}
.nav-list .nav-list-item {
    font-size: 14px !important;
}
.nav-list .nav-list-item .nav-list-link:hover, .nav-list .nav-list-item .nav-list-link.active {
    background-image: linear-gradient(-90deg, #ebedf5 0%, rgba(235, 237, 245, 0.8) 80%, rgba(235, 237, 245, 0) 100%);
    font-weight: 600;
    text-decoration: none;
}
.nav-list .nav-list-item .nav-list-link {
    min-height: 2rem;
    line-height: 1.5rem;
    padding-right: 2rem;
    padding-left: 2rem;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    display: block;
}
.main {
    margin-left: calc( (100% - 1064px) / 2 + 264px);
    position: relative;
    max-width: 800px;
    border: 1px solid pink;
}
.main-content-wrap {
    max-width: 800px;
    margin: auto;
    padding-top: 2rem;
    padding-bottom: 2rem;
    padding-right: 2rem;
    padding-left: 2rem;
}
.main-content {
    line-height: 1.6;
}
h1{
    align-items: center;
    font-size: 30px !important;
    line-height: 1.25;
    font-weight: 300;
    color: #27262b;
}
h2{
    align-items: center;
    font-size: 24px !important;
    line-height: 1.25;
    font-weight: 500;
}
.table-wrapper {
    display: block;
    width: 100%;
    max-width: 100%;
    margin-bottom: 1.5rem;
    overflow-x: auto;
    border-radius: 4px;
    box-shadow: 0 1px 2px rgb(0 0 0 / 12%), 0 3px 10px rgb(0 0 0 / 8%);
    margin-top: 1em;

}
table {
    display: table;
    min-width: 100%;
    border:"1";
    text-indent: initial;
    border-spacing: 2px;
    border-color: grey;
    line-height: 1.6;
}
.main-content .module, .module, .announcement {
    border-radius: 4px;
    margin: 1rem 0;
    box-shadow: 0 1px 3px rgb(0 0 0 / 7%), 0 4px 14px rgb(0 0 0 / 5%);
    margin: 1rem -1rem;
    display: flex;
    flex-direction: column;
    min-width: 0;
    padding: 0 1rem;
    position: relative;
    word-wrap: break-word;
}
</style>

 
 <script>
 import Home from '../views/Home.vue'

  export default {
    data: () => ({
      
      items: [
        { text: '简介', icon: 'mdi-clock' },
        { text: '人工智能', icon: 'mdi-account' },
        { text: 'CTF', icon: 'mdi-flag' },
      ],
    }),
    components: {
    Home
    },
    name:'shouye.vue'
  }
</script>