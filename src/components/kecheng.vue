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
                    <a href="#" class="nav-list-link active">课程安排</a>
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
                                <td>xxxx课程</td>
                                <td>xxxxxx</td>
                            </tr>
                            <tr>
                                <td>xxxxxx</td>
                                <td>xxxxxx</td>
                            </tr>
                            <tr>
                                <td>xxxxxx</td>
                                <td><a href="https://app6ca5octe2206.h5.xiaoeknow.com/v1/course/alive/l_601cc496e4b05a9e88714463">
                                    <span style="font-size:140%" class="iconfont icon-livestreaming"></span> xxxxxx</a></td>
                            </tr>
                            <tr>
                                <td>xxxxxx</td>
                                <td><a href="https://space.bilibili.com/1567748478">
                                    <span style="font-size:140%" class="iconfont icon-bilibili-fill"></span> xxxxxxx</a></td>
                            </tr>
                            <tr>
                                <td>xxxxxx</td><td><a href="https://zh-v2.d2l.ai/"><span class="iconfont icon-xiaoshuo-copy"></span> xxxxxx</a>
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
                <div class="module" >
                    <v-card
                        class="mx-auto"
                        outlined
                        min-width="744"
                        v-for="item in items"
                        :key="item.text"
                    >
                        <v-list-item three-line>
                        <v-list-item-content>
                            <div class="text-overline mb-4">
                            {{item.title}}
                            </div>
                            <v-list-item-title class="text-h5 mb-1">
                            {{item.text}}
                            </v-list-item-title>
                            <v-list-item-subtitle>xxxx课程</v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-avatar
                            tile
                            size="80"
                            color="grey"
                        ></v-list-item-avatar>
                        </v-list-item>

                        <v-card-actions>
                        <v-btn
                            outlined
                            rounded
                            text
                        >
                            文档
                        </v-btn>
                        <v-btn
                            outlined
                            rounded
                            text
                        >
                            PDF
                        </v-btn>
                        <v-btn
                            outlined
                            rounded
                            text
                        >
                            视频
                        </v-btn>
                        </v-card-actions>
                    </v-card>
                </div>
            </div>
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
    data: () => ({
      
      items: [
        { text: '对深度学习进行介绍', title:'深度学习介绍' },
        { text: '数据操作', title:'数据操作' },
        { text: 'CTF', title:'数据预处理' },
      ],
    }),
    components: {
    Home
    },
    name:'kecheng.vue'
  }
</script>