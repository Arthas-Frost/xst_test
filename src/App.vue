<template>
<div>
  <loading v-if="loading"></loading>
  <router-view v-if="!loading"></router-view>
</div>
</template>

<script>


export default {
  name: 'App',
  components:{
  

  },
  data(){
    return{
      loading:true
    }
  },
  watch: { 
    '$route': function(from, to) { 
     this.loading=true;
      setTimeout(() => {
        this.loading=false;
      }, 1000); 
    } 
  },
  mounted(){
      this.loading=true;
      setTimeout(() => {
        this.loading=false;
      }, 1000);  
  }
   
};
</script>


