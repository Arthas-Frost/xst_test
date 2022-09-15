<template>
<home>
    <slot>
        <v-app>
            <v-col>
                <h2 style="margin-top:20px">基础资料</h2>
                    <v-row no-gutters>
                        
                        <v-card
                        color="#385F73"
                        dark
                        class="mx-auto"
                        max-width="350"
                       
                        >
                            <v-card-title>
                                <p class="font-size:2em">普林斯顿微积分</p>
                            </v-card-title>

                            <v-card-subtitle >
                                <v-row no-gutters>
                                    <v-col>
                                        <v-img
                                        src="../assets/imgs/The_Calculus_Lifesaver.jpeg"
                                        class="grey darken-4"
                                        ></v-img>
                                    </v-col>
                                </v-row>
                            </v-card-subtitle>
                            <v-card-actions>
                            <v-btn text>
                                下载
                            </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-row>
                </v-col>
        </v-app>
    </slot>
</home>
</template>

<script>
// @ is an alias to /src
import Home from '../views/Home.vue'
// import AOS from "aos"
//import HelloWorld from '../components/HelloWorld.vue'

export default {
  
  name: 'Book_Details.vue',
  components: {
    Home
  
  },
  data: () => ({ drawer: null }),
 
}
</script>
