<template>
<home>
    <slot>
        <v-app>
            <h3 style="color:grey; margin-top:20px; margin-left:10px">AI技术栈</h3>
            <p style="color:grey; margin-top:20px; margin-left:10px">提供AI技术的全系列技术资料</p>
           <!-- 机器学习基础篇 -->
            <v-card
            >
                <v-toolbar
                color="teal"
                dark
                >
                <v-app-bar-nav-icon></v-app-bar-nav-icon>

                <v-toolbar-title>机器学习基础</v-toolbar-title>

                <v-spacer></v-spacer>

                <v-btn icon>
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
                </v-toolbar>

                <v-list>
                <v-list-group
                    v-for="item in items"
                    :key="item.title"
                    v-model="item.active"
                    :prepend-icon="item.action"
                    no-action
                >
                    <template v-slot:activator>
                    <v-list-item-content>
                        <v-list-item-title v-text="item.title"></v-list-item-title>
                    </v-list-item-content>
                    </template>

                    <v-list-item
                    v-for="child in item.items"
                    :key="child.title"
                    >
                    <v-list-item-content>
                        <v-list-item-title v-text="child.title">
                        </v-list-item-title>
                    </v-list-item-content>
                    </v-list-item>
                </v-list-group>
                </v-list>
            </v-card>
<!-- 人工智能细分方向 -->
            <v-card
            >
                <v-toolbar
                
                dark
                >
                <v-app-bar-nav-icon></v-app-bar-nav-icon>

                <v-toolbar-title>人工智能细分方向</v-toolbar-title>

                <v-spacer></v-spacer>

                <v-btn icon>
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
                </v-toolbar>

                <v-list>
                <v-list-group
                    v-for="item in AI_DIRECTIONS"
                    :key="item.title"
                    v-model="item.active"
                    :prepend-icon="item.action"
                    no-action
                >
                    <template v-slot:activator>
                    <v-list-item-content>
                        <v-list-item-title v-text="item.title"></v-list-item-title>
                    </v-list-item-content>
                    </template>

                    <v-list-item
                    v-for="child in item.items"
                    :key="child.title"
                    >
                    <v-list-item-content>
                        <v-list-item-title v-text="child.title">
                        </v-list-item-title>
                    </v-list-item-content>
                    </v-list-item>
                </v-list-group>
                </v-list>
            </v-card>
<!-- 前沿研究方向 -->
            <v-card
            >
                <v-toolbar
                color="grey"
                dark
                >
                <v-app-bar-nav-icon></v-app-bar-nav-icon>

                <v-toolbar-title>前沿研究方向</v-toolbar-title>

                <v-spacer></v-spacer>

                <v-btn icon>
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
                </v-toolbar>

                <v-list>
                <v-list-group
                    v-for="item in Fronts_item"
                    :key="item.title"
                    v-model="item.active"
                    :prepend-icon="item.action"
                    no-action
                >
                    <template v-slot:activator>
                    <v-list-item-content>
                        <v-list-item-title v-text="item.title"></v-list-item-title>
                    </v-list-item-content>
                    </template>

                    <v-list-item
                    v-for="child in item.items"
                    :key="child.title"
                    >
                    <v-list-item-content>
                        <v-list-item-title v-text="child.title">
                        </v-list-item-title>
                    </v-list-item-content>
                    </v-list-item>
                </v-list-group>
                </v-list>
            </v-card>
            <router-link to="/inquirychat/">
                <img class="intellgient" src="../assets/imgs/智能机器人 .png">
            </router-link>
        </v-app>
        
    </slot>
</home>
</template>

<script>
// @ is an alias to /src
import Home from '../views/Home.vue'
//import HelloWorld from '../components/HelloWorld.vue'


const pause = ms => new Promise(resolve => setTimeout(resolve, ms))
export default {
  
  name: 'AI_Information',
  components: {
    Home
  
  },
  data: () => ({ 
    items: [
            {
            action: 'mdi-ticket',
            items: [
                { title: 'Pandas',
                },
                { title: 'Numpy' },
                { title: 'Matplotlib' },
                { title: 'Sklearn' },
            ],
            title: '人工智能基础常用库',
            },
            {
            action: 'mdi-vector-triangle',
            //active: true,
            items: [
                { title: '线性回归' },
                { title: '逻辑回归' },
                { title: '朴素贝叶斯' },
                { title: '集成算法与随机森林' },
                { title: 'Kmeans、Dbscan聚类算法' },
                { title: '降维算法-PCA主成分分析' },
                { title: '神经网络' },
            ],
            title: '基础算法',
            },
            {
            action: 'mdi-chart-areaspline',
            items: [
                { title: '视频资源' },
                { title: '文档资源' },
            ],
            title: '学习资料',
            },
            
        ],

    AI_DIRECTIONS: [
            {
            action: 'mdi-drawing-box',
            items: [
                { title: 'Pandas',
                },
                { title: 'Numpy' },
                { title: 'Matplotlib' },
                { title: 'Sklearn' },
            ],
            title: '自然语言处理',
            },
            {
            action: 'mdi-shape',
            //active: true,
            items: [
                { title: '线性回归' },
                { title: '逻辑回归' },
                { title: '朴素贝叶斯' },
                { title: '集成算法与随机森林' },
                { title: 'Kmeans、Dbscan聚类算法' },
                { title: '降维算法-PCA主成分分析' },
                { title: '神经网络' },
            ],
            title: '计算机视觉',
            },
            {
            action: 'mdi-shape-outline',
            items: [
                { title: '视频资源' },
                { title: '文档资源' },
            ],
            title: '图神经网络',
            },
            {
            action: 'mdi-atom',
            items: [
                { title: '视频资源' },
                { title: '文档资源' },
            ],
            title: '贝叶斯神经网络',
            },
            
            
        ],
    Fronts_item: [
            {
            action: 'mdi-atom',
            items: [
                { title: 'Pandas',
                },
                { title: 'Numpy' },
                { title: 'Matplotlib' },
                { title: 'Sklearn' },
            ],
            title: '因果机器学习',
            },
            {
            action: 'mdi-atom',
            //active: true,
            items: [
                { title: '线性回归' },
                { title: '逻辑回归' },
                { title: '朴素贝叶斯' },
                { title: '集成算法与随机森林' },
                { title: 'Kmeans、Dbscan聚类算法' },
                { title: '降维算法-PCA主成分分析' },
                { title: '神经网络' },
            ],
            title: '可解释机器学习',
            },
            {
            action: 'mdi-atom',
            items: [
                { title: '视频资源' },
                { title: '文档资源' },
            ],
            title: '多模态机器学习',
            },
            {
            action: 'mdi-atom',
            items: [
                { title: '视频资源' },
                { title: '文档资源' },
            ],
            title: '强化学习',
            },
            {
            action: 'mdi-atom',
            items: [
                { title: '视频资源' },
                { title: '文档资源' },
            ],
            title: '贝叶斯深度学习',
            },
            {
            action: 'mdi-atom',
            items: [
                { title: '视频资源' },
                { title: '文档资源' },
            ],
            title: '图深度学习',
            },
            {
            action: 'mdi-atom',
            items: [
                { title: '视频资源' },
                { title: '文档资源' },
            ],
            title: '几何深度学习',
            },
            {
            action: 'mdi-atom',
            items: [
                { title: '视频资源' },
                { title: '文档资源' },
            ],
            title: '元学习',
            },
            {
            action: 'mdi-atom',
            items: [
                { title: '视频资源' },
                { title: '文档资源' },
            ],
            title: '生成对抗学习',
            },
            {
            action: 'mdi-atom',
            items: [
                { title: '视频资源' },
                { title: '文档资源' },
            ],
            title: '对比学习',
            },
            {
            action: 'mdi-atom',
            items: [
                { title: '视频资源' },
                { title: '文档资源' },
            ],
            title: '时间序列',
            },
            {
            action: 'mdi-atom',
            items: [
                { title: '视频资源' },
                { title: '文档资源' },
            ],
            title: 'Transforms',
            },
            {
            action: 'mdi-atom',
            items: [
                { title: '视频资源' },
                { title: '文档资源' },
            ],
            title: '知识蒸馏',
            },
            {
            action: 'mdi-atom',
            items: [
                { title: '视频资源' },
                { title: '文档资源' },
            ],
            title: '联邦学习',
            },
            {
            action: 'mdi-atom',
            items: [
                { title: '视频资源' },
                { title: '文档资源' },
            ],
            title: '知识图谱',
            },
            {
            action: 'mdi-atom',
            items: [
                { title: '视频资源' },
                { title: '文档资源' },
            ],
            title: '量子计算',
            },
            
            
            
        ],
  }),
  

  
  
}
</script>

<style scoped>
.intellgient{
    position: fixed;
    right :50px;
    bottom:100px;
    width:50px;
}
</style>
