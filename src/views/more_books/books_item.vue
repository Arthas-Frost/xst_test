<template>
    <div>
        <!-- 头部工具栏 -->
    <div>
        <v-card flat>
        <v-container fluid>
            <v-row class="child-flex">
            <div>
                <v-toolbar>
                <router-link to="/tuling/" style="text-decoration:none">
                    <v-btn
                        icon
                        class="hidden-xs-only"
                    >
                        <v-icon>mdi-arrow-left</v-icon>
                    </v-btn>
                </router-link>
                <v-toolbar-title>热门图书</v-toolbar-title>
    
                <v-spacer></v-spacer>
                <!-- <v-btn icon>
                    <v-icon>mdi-reply</v-icon>
                </v-btn>
    
                <v-btn icon>
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn> -->
                </v-toolbar>
            </div>
            </v-row>
        </v-container>
        </v-card>
    </div>
    
    <div style="display:flex">
        <!-- <v-card> -->
            <!-- 头部导航区 -->
            <v-tabs>
                <!-- <v-tab v-for="(item,index) in page" :key="index" @click="comname=item.name">{{item.name}}</v-tab> -->
				<v-tab v-for="(item,index) in page" :key="index" @click="aaa(item.name)">{{item.name}}</v-tab>
            </v-tabs>
            <br>
    </div>
    <transition name="component-fade" mode="out-in">
        <component :bookList="comname" is="Booksone"></component>
    </transition>
    </div>
</template>
<script>
import Booksone from './books1.vue'
import Bookstwo from './books2.vue'
import Booksthere from './books3.vue'
import axios from 'axios'
export default{
    components:{
        Booksone,
        Bookstwo,
        Booksthere
    },
    methods:{
		async initData(indexhere){
		const {data:res}=await axios.get('http://43.142.239.198/book/more?index='+indexhere)
		.catch(function (error) { // 请求失败处理
		  console.log(error);
		})
		.then(res=>{
			this.page=res.data
			console.log(this.page);
			this.defaultname(indexhere);
		});
		},
		aaa(shuju){
			this.comname=eval('this.page.'+shuju);
			console.log(this.comname);
		},
		defaultname(indexhere){
			switch (indexhere){
				case 2:
					this.comname=this.page.数学;
					break;
				case 4:
					this.comname=this.page.MISC方向;
					break;
				case 5:
					this.comname=this.page.数据挖掘;
					break;
			}
			// console.log("comname");
			// console.log(this.comname);
		}
    },
	created(){
		let indexhere = JSON.parse(this.$route.query.index)
		console.log(indexhere);
		this.initData(indexhere);
	},
	mounter(){
		
	},
    data(){
        return{
			index:null,
            comname:null,
			listName:null,
			page:{
				
			},
            items1: [
                { title:'Linux命令行及shell脚本的编写' ,imgsrc:'https://file.ituring.com.cn/SmallCover/220536db52404084b677',booksrc:"/book_buy/"},
                { title:'On Java(中文版)',imgsrc:'https://file.ituring.com.cn/SmallCover/22037fea15154973ee4d' ,booksrc:"/book_buy/"},
                { title:'Python语言及其应用',imgsrc:'https://file.ituring.com.cn/SmallCover/22031660cc2c07031e62' ,booksrc:"/book_buy/"},
                { title:'用Go语言自制编译器',imgsrc:'https://file.ituring.com.cn/SmallCover/22051a8999185dfe8e65' ,booksrc:"/book_buy/"},
                { title:'Linux命令行及shell脚本的编写' ,imgsrc:'https://file.ituring.com.cn/SmallCover/220536db52404084b677',booksrc:"/book_buy/"},
                { title:'On Java(中文版)',imgsrc:'https://file.ituring.com.cn/SmallCover/22037fea15154973ee4d' ,booksrc:"/book_buy/"},
                { title:'Python语言及其应用',imgsrc:'https://file.ituring.com.cn/SmallCover/22031660cc2c07031e62',booksrc:"/book_buy/" },
                { title:'用Go语言自制编译器',imgsrc:'https://file.ituring.com.cn/SmallCover/22051a8999185dfe8e65' ,booksrc:"/book_buy/"},
                { title:'Linux命令行及shell脚本的编写' ,imgsrc:'https://file.ituring.com.cn/SmallCover/220536db52404084b677',booksrc:"/book_buy/"},
                { title:'On Java(中文版)',imgsrc:'https://file.ituring.com.cn/SmallCover/22037fea15154973ee4d' ,booksrc:"/book_buy/"},
                { title:'Python语言及其应用',imgsrc:'https://file.ituring.com.cn/SmallCover/22031660cc2c07031e62' ,booksrc:"/book_buy/"},
                { title:'用Go语言自制编译器',imgsrc:'https://file.ituring.com.cn/SmallCover/22051a8999185dfe8e65' ,booksrc:"/book_buy/"},
                { title:'Linux命令行及shell脚本的编写' ,imgsrc:'https://file.ituring.com.cn/SmallCover/220536db52404084b677',booksrc:"/book_buy/"},
                { title:'On Java(中文版)',imgsrc:'https://file.ituring.com.cn/SmallCover/22037fea15154973ee4d' ,booksrc:"/book_buy/"},
                { title:'Python语言及其应用',imgsrc:'https://file.ituring.com.cn/SmallCover/22031660cc2c07031e62' ,booksrc:"/book_buy/"},
                { title:'用Go语言自制编译器',imgsrc:'https://file.ituring.com.cn/SmallCover/22051a8999185dfe8e65' ,booksrc:"/book_buy/"},
            ],
            items2:[
                { title:'Linux命令行及shell脚本的编写' ,imgsrc:'https://file.ituring.com.cn/SmallCover/220536db52404084b677',booksrc:"/book_buy/"},
                { title:'On Java(中文版)',imgsrc:'https://file.ituring.com.cn/SmallCover/22037fea15154973ee4d',booksrc:"/book_buy/" },
                { title:'Python语言及其应用',imgsrc:'https://file.ituring.com.cn/SmallCover/22031660cc2c07031e62' ,booksrc:"/book_buy/"},
                { title:'用Go语言自制编译器',imgsrc:'https://file.ituring.com.cn/SmallCover/22051a8999185dfe8e65' ,booksrc:"/book_buy/"},
            ],
            items3: [
                { title:'Linux命令行及shell脚本的编写' ,imgsrc:'https://file.ituring.com.cn/SmallCover/220536db52404084b677',booksrc:"/book_buy/"},
                { title:'On Java(中文版)',imgsrc:'https://file.ituring.com.cn/SmallCover/22037fea15154973ee4d' ,booksrc:"/book_buy/"},
                { title:'Python语言及其应用',imgsrc:'https://file.ituring.com.cn/SmallCover/22031660cc2c07031e62' ,booksrc:"/book_buy/"},
                { title:'用Go语言自制编译器',imgsrc:'https://file.ituring.com.cn/SmallCover/22051a8999185dfe8e65' ,booksrc:"/book_buy/"},
                { title:'Linux命令行及shell脚本的编写' ,imgsrc:'https://file.ituring.com.cn/SmallCover/220536db52404084b677',booksrc:"/book_buy/"},
                { title:'On Java(中文版)',imgsrc:'https://file.ituring.com.cn/SmallCover/22037fea15154973ee4d' ,booksrc:"/book_buy/"},
                { title:'Python语言及其应用',imgsrc:'https://file.ituring.com.cn/SmallCover/22031660cc2c07031e62',booksrc:"/book_buy/" },
                { title:'用Go语言自制编译器',imgsrc:'https://file.ituring.com.cn/SmallCover/22051a8999185dfe8e65' ,booksrc:"/book_buy/"},
                { title:'Linux命令行及shell脚本的编写' ,imgsrc:'https://file.ituring.com.cn/SmallCover/220536db52404084b677',booksrc:"/book_buy/"},
                { title:'On Java(中文版)',imgsrc:'https://file.ituring.com.cn/SmallCover/22037fea15154973ee4d' ,booksrc:"/book_buy/"},
                { title:'Python语言及其应用',imgsrc:'https://file.ituring.com.cn/SmallCover/22031660cc2c07031e62' ,booksrc:"/book_buy/"},
                { title:'用Go语言自制编译器',imgsrc:'https://file.ituring.com.cn/SmallCover/22051a8999185dfe8e65' ,booksrc:"/book_buy/"},
                { title:'Linux命令行及shell脚本的编写' ,imgsrc:'https://file.ituring.com.cn/SmallCover/220536db52404084b677',booksrc:"/book_buy/"},
                { title:'On Java(中文版)',imgsrc:'https://file.ituring.com.cn/SmallCover/22037fea15154973ee4d' ,booksrc:"/book_buy/"},
                { title:'Python语言及其应用',imgsrc:'https://file.ituring.com.cn/SmallCover/22031660cc2c07031e62' ,booksrc:"/book_buy/"},
                { title:'用Go语言自制编译器',imgsrc:'https://file.ituring.com.cn/SmallCover/22051a8999185dfe8e65' ,booksrc:"/book_buy/"},
            ],
        }
    },


}
</script>
<style>
.component-fade-enter-active,.component-fade-leave-active{
    transition: opacity .3s linear;
}
.component-fade-enter,.component-fade-leave-active{
    opacity :0;
}
</style>
