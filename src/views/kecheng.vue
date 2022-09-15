<template>
    <v-app>
        <home>
            <slot>
                
                 <div class="main-continer">


                    <!-- 左边栏 -->
                    <div class="side-bar">
                        <!-- <diV style="width:111px; height:100%;display:flex"></diV> -->
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
                                    <h2 style="margin-top:25px;font-size: 1.5rem;color: #27262b;">课程更新</h2>
                                    <div class="module">
                                        <h3 style="margin-top:5px;color: rgb(100,100,100);">第十二周</h3>
                                        <div style="margin-top:15px">
                                            <p>不论是在学术突破还是在工业应用， 深度学习是人工智能在近十年里进展最为迅速的领域。然而，深度学习模型复杂、参数繁多、而且新模型层出不穷，这给学习带来了难度。</p>
                                        </div>
                                    </div>
                                    <h2 style="margin-top:25px;">课程摘要</h2>
                                    <div class="module">
                                            <v-simple-table>
                                                <template v-slot:default>
                                                    <!-- <thead>
                                                    <tr>
                                                        <th class="text-left">
                                                        Name
                                                        </th>
                                                        <th class="text-left">
                                                        Calories
                                                        </th>
                                                    </tr>
                                                    </thead> -->
                                                    <tbody>
                                                    <tr
                                                        v-for="item in plan"
                                                        :key="item.name"
                                                    >
                                                        <td>{{ item.name }}</td>
                                                        <td>{{ item.calories }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>视频地址</td>
                                                        <td><a href="http://www.baidu.com">
                                                            <img src="../assets/imgs/图书.png" style="width:25px;">
                                                        </a></td>
                                                    </tr>
                                                    </tbody>
                                                </template>
                                            </v-simple-table>
                                    </div>
                                        
                                    
                                    <p>不论是在学术突破还是在工业应用， 深度学习是人工智能在近十年里进展最为迅速的领域。然而，深度学习模型复杂、参数繁多、而且新模型层出不穷，这给学习带来了难度。</p>
                                    <p>本课程将从零开始教授深度学习。同学们只需要有基础的Python编程和数学基础。我们将覆盖四大类模型：多层感知机、卷积神经网络、循环神经网络、和注意力机制。在此之上，我们将介绍深度学习中的两大应用领域—计算机视觉和自然语言处理—中的典型任务。</p>
                                    
                                    <h2>课程安排</h2>
                                    <p>目前日程安排为暂定安排，会根据实际进度进行调整。部分内容暂时链接到英文版，中文版会随后更新。</p>
                                    <div v-for="item in items" :key="item.title">
                                        <p style="font-size:16px;">{{item.title}}</p>
                                    <div class="module" >
                                      <v-simple-table>
                                        <template v-slot:default>
                                        <thead>
                                            <tr>
                                            <th class="text-left">
                                                课程
                                            </th>
                                            <th class="text-left">
                                                讲义
                                            </th>
                                            <th class="text-left">
                                                pdf
                                            </th>
                                            <th class="text-left">
                                                讲解
                                            </th>
                                            <th class="text-left">
                                                视频
                                            </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr
                                            v-for="sub in item.desserts" 
                                            :key="sub.name" 
                                            >
                                            <td>{{ sub.name }}</td>
                                            
                                            <td>
                                                <a :href="sub.books">
                                                <img src="../assets/imgs/图书.png" style="width: 30px;">
                                                </a>
                                            </td>
                                            <td>
                                                <a :href="sub.pdf">
                                                <img src="../assets/imgs/pdf.png" style="width: 25px;">
                                                </a>
                                            </td>
                                            <td>
                                                <a :href="sub.operate">
                                                <img src="../assets/imgs/讲解.png" style="width: 20px;">
                                                </a>
                                            </td>
                                            <td>
                                                <a :href="sub.video">
                                                <img src="../assets/imgs/视频.png" style="width: 30px;">
                                                </a>
                                            </td>
                                            
                                            
                                            </tr>
                                        </tbody>
                                        
                                        </template>
                                    </v-simple-table>
                                    
                                    </div>
                                    
                                </div>
                               
                                    </div>
                         </div>
                         <router-link to="/inquirychat/">
                                            <!-- <img class="intellgient" src="../assets/imgs/智能机器人 .png"> -->
                                <Windowsicon class="windows-icon"></Windowsicon>
                                <Robot class="mobile-icon"></Robot>
                        </router-link>
                    </div>
                    
                </div>
                
            </slot>
        </home>
    </v-app>
</template>

 <script>
 import Home from '../views/Home.vue'
 import Robot from '../views/robot/robot_icon.vue'
 import Windowsicon from './robot/windows_icon.vue'

  export default {
    data: () => ({
      
        items:[
            
                {   title:'机器学习学习基础',
                    desserts: [
                            {
                                name: 'dsjfslfhskj',
                                books: 'https://zh-v2.d2l.ai/chapter_introduction/index.html',
                                pdf:'https://courses.d2l.ai/zh-v2/assets/pdfs/part-0_1.pdf',
                                operate:'https://courses.d2l.ai/zh-v2/assets/notebooks/chapter_preliminaries/ndarray.slides.html#/',
                                video:'https://www.bilibili.com/video/BV1oX4y137bC'
                            },
                            {
                                name: '课程安排1',
                                books: 'https://zh-v2.d2l.ai/chapter_introduction/index.html',
                                pdf:'https://courses.d2l.ai/zh-v2/assets/pdfs/part-0_1.pdf',
                                operate:'https://courses.d2l.ai/zh-v2/assets/notebooks/chapter_preliminaries/ndarray.slides.html#/',
                                video:'https://www.bilibili.com/video/BV1oX4y137bC'
                            },
                            {
                                name: '课程安排1',
                                books: 'https://zh-v2.d2l.ai/chapter_introduction/index.html',
                                pdf:'https://courses.d2l.ai/zh-v2/assets/pdfs/part-0_1.pdf',
                                operate:'https://courses.d2l.ai/zh-v2/assets/notebooks/chapter_preliminaries/ndarray.slides.html#/',
                                video:'https://www.bilibili.com/video/BV1oX4y137bC'
                            },
                            {
                                name: '课程安排1',
                                books: 'https://zh-v2.d2l.ai/chapter_introduction/index.html',
                                pdf:'https://courses.d2l.ai/zh-v2/assets/pdfs/part-0_1.pdf',
                                operate:'https://courses.d2l.ai/zh-v2/assets/notebooks/chapter_preliminaries/ndarray.slides.html#/',
                                video:'https://www.bilibili.com/video/BV1oX4y137bC'
                            },
                        
                            ],
                },
                {   title:'人工智能学习基础',
                    desserts: [
                            {
                                name: 'dsjfslfhskj',
                                books: 'https://zh-v2.d2l.ai/chapter_introduction/index.html',
                                pdf:'https://courses.d2l.ai/zh-v2/assets/pdfs/part-0_1.pdf',
                                operate:'https://courses.d2l.ai/zh-v2/assets/notebooks/chapter_preliminaries/ndarray.slides.html#/',
                                video:'https://www.bilibili.com/video/BV1oX4y137bC'
                            },
                            {
                                name: '课程安排1',
                                books: 'https://zh-v2.d2l.ai/chapter_introduction/index.html',
                                pdf:'https://courses.d2l.ai/zh-v2/assets/pdfs/part-0_1.pdf',
                                operate:'https://courses.d2l.ai/zh-v2/assets/notebooks/chapter_preliminaries/ndarray.slides.html#/',
                                video:'https://www.bilibili.com/video/BV1oX4y137bC'
                            },
                            {
                                name: '课程安排1',
                                books: 'https://zh-v2.d2l.ai/chapter_introduction/index.html',
                                pdf:'https://courses.d2l.ai/zh-v2/assets/pdfs/part-0_1.pdf',
                                operate:'https://courses.d2l.ai/zh-v2/assets/notebooks/chapter_preliminaries/ndarray.slides.html#/',
                                video:'https://www.bilibili.com/video/BV1oX4y137bC'
                            },
                            {
                                name: '课程安排1',
                                books: 'https://zh-v2.d2l.ai/chapter_introduction/index.html',
                                pdf:'https://courses.d2l.ai/zh-v2/assets/pdfs/part-0_1.pdf',
                                operate:'https://courses.d2l.ai/zh-v2/assets/notebooks/chapter_preliminaries/ndarray.slides.html#/',
                                video:'https://www.bilibili.com/video/BV1oX4y137bC'
                            },
                        
                            ],
                },
                {   title:'ctf学习基础',
                    desserts: [
                            {
                                name: 'dsjfslfhskj',
                                books: 'https://zh-v2.d2l.ai/chapter_introduction/index.html',
                                pdf:'https://courses.d2l.ai/zh-v2/assets/pdfs/part-0_1.pdf',
                                operate:'https://courses.d2l.ai/zh-v2/assets/notebooks/chapter_preliminaries/ndarray.slides.html#/',
                                video:'https://www.bilibili.com/video/BV1oX4y137bC'
                            },
                            {
                                name: '课程安排1',
                                books: 'https://zh-v2.d2l.ai/chapter_introduction/index.html',
                                pdf:'https://courses.d2l.ai/zh-v2/assets/pdfs/part-0_1.pdf',
                                operate:'https://courses.d2l.ai/zh-v2/assets/notebooks/chapter_preliminaries/ndarray.slides.html#/',
                                video:'https://www.bilibili.com/video/BV1oX4y137bC'
                            },
                            {
                                name: '课程安排1',
                                books: 'https://zh-v2.d2l.ai/chapter_introduction/index.html',
                                pdf:'https://courses.d2l.ai/zh-v2/assets/pdfs/part-0_1.pdf',
                                operate:'https://courses.d2l.ai/zh-v2/assets/notebooks/chapter_preliminaries/ndarray.slides.html#/',
                                video:'https://www.bilibili.com/video/BV1oX4y137bC'
                            },
                            {
                                name: '课程安排1',
                                books: 'https://zh-v2.d2l.ai/chapter_introduction/index.html',
                                pdf:'https://courses.d2l.ai/zh-v2/assets/pdfs/part-0_1.pdf',
                                operate:'https://courses.d2l.ai/zh-v2/assets/notebooks/chapter_preliminaries/ndarray.slides.html#/',
                                video:'https://www.bilibili.com/video/BV1oX4y137bC'
                            },
                        
                            ],
                }
            ],
   
         
         plan: [
        {
          name: '课时',
          calories: '2022.6.7下午5点',
        },
        {
          name: '直播时间',
          calories: '2022.6.7下午5点',
        },
        {
          name: 'Eclair',
          calories: 262,
        },
        {
          name: 'Cupcake',
          calories: 305,
        },
        {
          name: 'Gingerbread',
          calories: 356,
        },
       
       
      ],
    }),
    components: {
    Home,
    Robot,
    Windowsicon
    },
    name:'kecheng.vue'
  }
</script>
<style lang="scss" scoped>
.module{
    border-radius: 4px;
    margin: 1rem 0;
}


@media screen and (min-width:200px) and (max-width:1200px){
    .windows-icon{
        display: none;
    }
    .side-bar {
    z-index: 0;
    display: none;
}

.main-content-wrap {
    max-width: 800px;
    margin: auto;
    padding-right: 1rem;
    padding-left: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
}
.main-content {
    line-height: 1.6;
}
.main-content h1, .main-content h2, .main-content h3, .main-content h4, .main-content h5, .main-content h6 {
    position: relative;
    margin-top: 1.5em;
    margin-bottom: 0.25em;
}
h1, .text-alpha {
    font-size: 32px !important;
    line-height: 1.25;
    font-weight: 300;
}
.main-content .module, .module, .announcement {
    box-shadow: 0 1px 3px rgb(0 0 0 / 7%), 0 4px 14px rgb(0 0 0 / 5%);
    margin: 1rem -1rem;
    display: flex;
    flex-direction: column;
    min-width: 0;
    padding: 0 1rem;
    position: relative;
    word-wrap: break-word;
    box-sizing: border-box;
}
.intellgient{
    position: fixed;
    right :50px;
    bottom:100px;
    width:50px;
}

}
@media screen and (min-width:1200px){
    .mobile-icon{
        display: none;
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
.intellgient{
    position: fixed;
    right :50px;
    bottom:100px;
    width:50px;
}
.side-bar {
    width: calc((100% - 1064px) / 2 + 200px);
    min-width: 16.5rem;
    z-index: 0;
    display: flex;
    border: 0;
    flex-wrap: wrap;
    // background-color: #f5f6fa;
}

// .site-header {
//     height: 60px;
//     max-height: 60px;
//     border-bottom: 1px solid #eeebee;
// }
// .site-header {
//     display: flex;
//     min-height: 60px;
//     align-items: center;
//     width: 264px;
// }


.site-nav {
    display: block;
    padding-top: 3rem;
    padding-bottom: 1rem;
    overflow-y: auto;
    flex: 1 1 auto;
    width: 16.5rem;
    // padding-right:15px;
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
    // background-image: linear-gradient(-90deg, #ebedf5 0%, rgba(235, 237, 245, 0.8) 80%, rgba(235, 237, 245, 0) 100%);
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
    margin-left: calc( (100% - 1064px) / 2 + 200px);
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
    font-weight: 200;
    color: #27262b;
}
h2{
    align-items: center;
    font-size: 24px !important;
    line-height: 1.25;
    font-weight: 500;
}
// .table-wrapper {
//     display: block;
//     width: 100%;
//     max-width: 100%;
//     margin-bottom: 1.5rem;
//     overflow-x: auto;
//     border-radius: 4px;
//     box-shadow: 0 1px 2px rgb(0 0 0 / 12%), 0 3px 10px rgb(0 0 0 / 8%);
//     margin-top: 1em;

// }
// table {
//     display: table;
//     min-width: 100%;
//     border: 1px;
//     text-indent: initial;
//     border-spacing: 2px;
//     border-color: grey;
//     line-height: 1.6;
// }
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

}


</style>