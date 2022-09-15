<template>
  <div class="home">
   <v-app id="inspire">
    <!-- <v-navigation-drawer
      v-model="drawer"
      app
    > -->
      <!--  -->
    <!-- </v-navigation-drawer> -->

    <v-app-bar app>
      <!-- <v-app-bar-nav-icon @click="drawer = !drawer">
        
      </v-app-bar-nav-icon> -->
      <img src="../assets/imgs/行思堂.png" style="width:40px; ">
      <div style=" font-family: Fang Song;font-size: 10px;"><img src="../assets/imgs/navbar-title.png" style="width:120px;margin-left:5%;padding-top: 5px;"></div>
      <v-toolbar-title></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="navToAccount()">
        <v-icon style="margin-right:5px" >mdi-account</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon style="margin-right:5px">mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
    <!-- <v-navigation-drawer
      v-model="drawer"
      temporary
      fixed
      >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
        <router-link to="/" style="text-decoration: none; color: #000">
          <v-list-item color="pink">
            <v-list-item-title  v-wave="{ color: 'blue' }">首页</v-list-item-title>
            
          </v-list-item>
        </router-link>

         <router-link to="/kecheng/" style="text-decoration: none; color: #000">
          <v-list-item color="pink">
            <v-list-item-title v-wave="{ color: 'blue' }">课程安排</v-list-item-title>
            
          </v-list-item>
        </router-link>

        <router-link to="/tuling/" style="text-decoration: none; color: #000">
          <v-list-item color="pink">
            <v-list-item-title v-wave="{ color: 'blue' }">图灵社区</v-list-item-title>
            
          </v-list-item>
        </router-link>

        <router-link to="/Basic_Information/" style="text-decoration: none; color: #000">
          <v-list-item>
            <v-list-item-title v-wave="{ color: 'blue' }">基础资料</v-list-item-title>
            
          </v-list-item>
        </router-link>
        <router-link to="/AI_Information/" style="text-decoration: none; color: #000">
          <v-list-item>
            <v-list-item-title v-wave="{ color: 'blue' }">AI技术栈</v-list-item-title>
          </v-list-item>
        </router-link>
          <v-list-item>
            <v-list-item-title v-wave="{ color: 'blue' }">CTF</v-list-item-title>
          </v-list-item>
        
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer> -->
    <v-main>
      <!--  -->
        <transition :name="animate">
          <slot></slot>
        </transition>
      <!-- <Totop></Totop> -->
    </v-main>
  </v-app>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
// import Totop from '@/components/to-top.vue';
//import HelloWorld from '../components/HelloWorld.vue'

export default {
  data () {
      return {
        items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard' },
          { title: 'Photos', icon: 'mdi-image' },
          { title: 'About', icon: 'mdi-help-box' },
        ],
        right: null,
      }
    },
  name: 'Home',
  components: {
    HelloWorld,
    // Totop
  
  },
  methods:{
	  navToAccount()
	  {
		this.$router.replace('/Account')
	  }
  },
  data: () => ({ drawer: null }),
}
</script>
