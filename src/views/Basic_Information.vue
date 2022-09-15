<template>
<home>
    <slot>
        <v-app>
            <h3 style="color:grey; margin-top:20px; margin-left:10px">基础资料</h3>
            <p style="color:grey; margin-top:20px; margin-left:10px">提供一些pdf书籍与资料链接</p>

            <v-card>
              <v-tabs
              
              >
                <v-tab v-wave="{ color: 'blue' }">数学</v-tab>
                <v-tab v-wave="{ color: 'blue' }">编程</v-tab>
                <v-tab v-wave="{ color: 'blue' }">算法</v-tab>
                <v-tab-item
                  v-for="n in 3"
                  :key="n"
                >
                  <v-container fluid>
                    <v-row>
                      <v-col
                        v-for="i in 15"
                        :key="i"
                        cols="6"
                        md="3"
                      >
                       <v-card
                      :loading="loading"
                      class="mx-auto"
                      
                    >
                      <template slot="progress">
                        <v-progress-linear
                          color="deep-purple"
                         
                          
                        ></v-progress-linear>
                      </template>

                      <v-img
                        src="../assets/imgs/The_Calculus_Lifesaver.jpeg"
                        
                      ></v-img>

                      <v-card-title style="font-size:17px">普林斯顿微积分</v-card-title>

                      

                      <v-divider class="mx-4"></v-divider>

                      

                      <v-card-actions>
                        <v-btn
                          color="deep-purple lighten-2"
                          text
                          @click="reserve"
                        >
                          下载
                        </v-btn>
                      </v-card-actions>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-container>
              </v-tab-item>
            </v-tabs>
          </v-card>
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
  
  name: 'Basic_Information',
  components: {
    Home
  
  },
  data: () => ({ 
   
  }),

  
  
}
</script>

<style scoped>
  .component-fade-enter-active,.component-fade-leave-active{
      transition: opacity .3s linear;
  }
  .component-fade-enter,.component-fade-leave-active{
      opacity :0;
  }
  </style>
