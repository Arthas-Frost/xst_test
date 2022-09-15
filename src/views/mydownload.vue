<template>
	<v-card>
	    <v-tabs
	    >
	      <v-tab v-wave="{ color: 'grey' }">基础类</v-tab>
	      <v-tab v-wave="{ color: 'grey' }">人工智能类</v-tab>
	      <v-tab v-wave="{ color: 'grey' }">信息安全类</v-tab>
	      <v-tab-item
	        v-for="n in 3"
	        :key="n"
	      >
	        <v-container fluid>
	          <v-row>
	            <v-col
	              v-for="(item, index) in record"
	              :key="index"
	              cols="6"
	              md="3"
	            >
				<!-- 多数组分类循环
					<v-col
				  v-for="(item, index) in record+'n'"
				  :key="index"
				  cols="6"
				  md="3"
				> -->
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
	              :src="item.imgsrc"
	              
	            ></v-img>
	
	            <v-card-title style="font-size:17px">{{item.title}}</v-card-title>
	
	            
	
	            <v-divider class="mx-4"></v-divider>
	            </v-card>
	          </v-col>
	        </v-row>
	      </v-container>
	    </v-tab-item>
	  </v-tabs>
	</v-card>
</template>

<script>
	import Home from '../views/Home.vue'
	 import Robot from '../views/robot/robot_icon.vue'
	 import Windowsicon from './robot/windows_icon.vue'
	
	export default {
	    name:'tuling',
	    components:{
	        Home,
	        Robot,
	        Windowsicon
	    },
	     data: () => ({
	      
	      record: [
	        { title:'Linux命令行及shell脚本的编写' ,imgsrc:'https://file.ituring.com.cn/SmallCover/220536db52404084b677'},
	        { title:'On Java(中文版)',imgsrc:'https://file.ituring.com.cn/SmallCover/22037fea15154973ee4d' },
	        { title:'Python语言及其应用',imgsrc:'https://file.ituring.com.cn/SmallCover/22031660cc2c07031e62' },
	        { title:'用Go语言自制编译器',imgsrc:'https://file.ituring.com.cn/SmallCover/22051a8999185dfe8e65' },
	        { title:'Linux命令行及shell脚本的编写' ,imgsrc:'https://file.ituring.com.cn/SmallCover/220536db52404084b677'},
	        { title:'On Java(中文版)',imgsrc:'https://file.ituring.com.cn/SmallCover/22037fea15154973ee4d' },
	        { title:'Python语言及其应用',imgsrc:'https://file.ituring.com.cn/SmallCover/22031660cc2c07031e62' },
	        { title:'用Go语言自制编译器',imgsrc:'https://file.ituring.com.cn/SmallCover/22051a8999185dfe8e65' },
	        { title:'Linux命令行及shell脚本的编写' ,imgsrc:'https://file.ituring.com.cn/SmallCover/220536db52404084b677'},
	        { title:'On Java(中文版)',imgsrc:'https://file.ituring.com.cn/SmallCover/22037fea15154973ee4d' },
	        { title:'Python语言及其应用',imgsrc:'https://file.ituring.com.cn/SmallCover/22031660cc2c07031e62' },
	        { title:'用Go语言自制编译器',imgsrc:'https://file.ituring.com.cn/SmallCover/22051a8999185dfe8e65' },
	        { title:'Linux命令行及shell脚本的编写' ,imgsrc:'https://file.ituring.com.cn/SmallCover/220536db52404084b677'},
	        { title:'On Java(中文版)',imgsrc:'https://file.ituring.com.cn/SmallCover/22037fea15154973ee4d' },
	        { title:'Python语言及其应用',imgsrc:'https://file.ituring.com.cn/SmallCover/22031660cc2c07031e62' },
	        { title:'用Go语言自制编译器',imgsrc:'https://file.ituring.com.cn/SmallCover/22051a8999185dfe8e65' },
	      ]
	    }),
	}
</script>

<style lang="scss" scoped>
.tab{
	position: fixed;
	top:0px;
}
</style>
