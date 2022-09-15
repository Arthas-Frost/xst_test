<template>
    <!-- App.vue -->

<v-app>


   <home>
    <slot>

        <div class="md-continer">
        <main class="md-main">
            <div class="md-main__inner md-grid">
                <div class="md-sidebar">
                    <div class="md-sidebar2">
                        
                        <ul class="md-nav">
                            <li class="md-nav-item md-nav-color">
                                <a href="#" class="md-nav-link">项目介绍</a>
                            </li>
                            <li class="md-nav-item">
                                <a href="#" class="md-nav-link">人工智能学习资料</a>
                            </li>
                            <li class="md-nav-item">
                                <a href="#" class="md-nav-link">CTF学习资料</a>
                            </li>
                            <li class="md-nav-item">
                                <a href="#" class="md-nav-link">智能机器人</a>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div class="md-content">
                    <article class="md-content__inner md-typeset">
                        <h1>简介</h1>
                        <p></p>
                        <h2>欢迎来到行思堂网络学习平台</h2>
                        <p>本学习平台致力于辅助计算机专业学生或有意于学习计算机相关知识的同学规划学习路线，了解学习方法等。</p>
                        <p>随着网络技术的飞速发展，网络上的学习资料数不胜数，但学习方向和学习路线又成为了一大难题本平台的一个核心功能之一就是使用者可以从本平台找到某一知识点的学习路线和相应学习资料，从而达到快速入门的效果。</p>
                        <p>本学习平台致力于*****</p>
                        <p>本学习平台致力于*****</p>
                        <p>本学习平台致力于*****</p>
                        <p>本学习平台致力于*****</p>
                        <p>本学习平台致力于*****</p>
                        <p>本学习平台致力于*****</p>
                        <p>本学习平台致力于*****</p>
                        <p>本学习平台致力于*****</p>
                        <p>本学习平台致力于*****</p>
                        <p>本学习平台致力于*****</p>
                        <p>本学习平台致力于*****</p>
                        <p>本学习平台致力于*****</p>


                    </article>
                </div>
                <div class="md-sidebar md-sidebar3" data-md-component="toc">
                    <ul class="md-nav">
                        <li class="md-nav-item md-nav-color">
                            <a href="#" class="md-nav-link">目录</a>
                        </li>
                        <li class="md-nav-item">
                            <a href="#" class="md-nav-link">简介</a>
                        </li>
                        <li class="md-nav-item">
                            <a href="#" class="md-nav-link">项目介绍</a>
                        </li>
                        <li class="md-nav-item">
                            <a href="#" class="md-nav-link">项目介绍</a>
                        </li>
                    </ul>
                </div>
                <router-link to="/inquirychat/">
                    <img class="intellgient" src="../assets/imgs/智能机器人 .png">
                </router-link>
            </div>
        </main>
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
        { text: '简介', icon: 'mdi-clock' },
        { text: '人工智能', icon: 'mdi-account' },
        { text: 'CTF', icon: 'mdi-flag' },
      ],
    }),
    components: {
    Home
    },
    name:'shouye.vue',
    
  }
</script>

<style lang="scss">

@media screen and (min-width:200px) and (max-width:600px) {
    .md-nav {
    display: none;
    
}
.md-main__inner {
    display: flex;
    height: 100%;
    margin-top: 1.5rem;
}
.md-content {
    flex-grow: 1;
    overflow: hidden;
    scroll-padding-top: 51.2rem;
}
.md-content__inner {
    margin: 0 0.8rem 1.2rem;
    padding-top: 0.6rem;
}
.md-typeset {
    font-size: .8rem;
    line-height: 1.6;

}
}
@media screen and (min-width:600px) {
    .md-container {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}
.md-main {
    flex-grow: 1;
}
.md-main__inner {
    display: flex;
    height: 100%;
    margin-top: 1.5rem;
}
.md-grid {
    max-width: 61rem;
    margin-right: auto;
    margin-left: auto;
}
.md-sidebar {
    position: -webkit-sticky;
    position: sticky;
    top: 2.4rem;
    flex-shrink: 0;
    align-self: flex-start;
    width: 12.1rem;
    height: 0;
    padding: 1.2rem 0;
}
.md-sidebar2 {
    margin: 0 0.2rem;
    overflow-y: auto;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    scrollbar-width: thin;
    scrollbar-color: var(--md-default-fg-color--lighter) transparent;
}
.md-sidebar3 {
    display: none;
    order: 2;
}
.md-sidebar3:not([hidden]) {
    display: block;
}
.md-content {
    flex-grow: 1;
    overflow: hidden;
    scroll-padding-top: 51.2rem;
}

.md-content__inner {
    margin: 0 0.8rem 1.2rem;
    padding-top: 0.6rem;
}
.md-typeset {
    font-size: .8rem;
    line-height: 1.6;

}
.md-nav {
    margin: 0;
    padding: 0;

}
.md-nav-item{
    padding-right: 0;
    display: block;
    padding: 0 0.6rem;
    line-height: 1.8;
    display: grid;
}
a {
    color: inherit;
    text-decoration: none;
}
.md-nav-color{
    color: red;
}
.md-nav__link {
    display: block;
    margin-top: 0.625em;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
    transition: color 125ms;
    scroll-snap-align: start;
}
}
.intellgient{
    position: fixed;
    right :50px;
    bottom:100px;
    width:50px;
}

</style>