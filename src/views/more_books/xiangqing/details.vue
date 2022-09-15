<template>
    <div>
        <div>
            <v-card 
            flat
            height="75px"
            light
            >
            <v-container fluid>
                <v-row class="child-flex">
                <div>
                    <v-toolbar>
                    <!-- <router-link to="/tuling/" style="text-decoration:none"> -->
                        <v-btn
                            icon
                            class="hidden-xs-only"
                            @click="goback()"
                        >
                            <v-icon>mdi-arrow-left</v-icon>
                        </v-btn>
                    <!-- </router-link> -->
                    <!-- <v-toolbar-title>热门图书</v-toolbar-title> -->
        
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
        <div class="main-details">
            <div class="left-details">
                <div class="main-title">
                    <h3>{{bookInfo.bookname}}</h3>
                </div>
                <div class="details">
                    <div class="anthor-details">
                        <span class="anthor-title">
                            作者
                        </span>
                        <span class="anthor-detail">
                            {{bookInfo.author}}
                        </span>
                    </div>
                    <div v-if="bookInfo.tanslator" class="anthor-details">
                        <span class="anthor-title">
                            译者
                        </span>
                        <span class="anthor-detail">
                            {{bookInfo.translator}}
                        </span>
                    </div>
                    <div class="anthor-details">
                        <span class="anthor-title">
                            简介
                        </span>
                        <span class="anthor-detail">
                            <Spread :msg="bookInfo.desc"></Spread>
                            
                        </span>
                    </div>
                </div>
            </div>
            <div class="right-details">
                <div class="right-img">
                    <v-img :src="'http://43.142.239.198'+bookInfo.image" class="img-src" lazy-src="../../../assets/imgs/bookcover.jpg"></v-img>
                </div>
                <div class="info">
                    <div class="info-wrap">
                        <div class="read-info">
                            <div>
                                <span class="info-title">
                                    下载:
                                </span>
                                <span class="info-details">
                                    {{this.bookInfo.download}}
                                </span>
                            </div>
                                <!-- <v-btn
                                elevation="2"
                                depressed
                                light
                                outlined
                                plain
                                >下载</v-btn> -->
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <v-divider></v-divider>
        
        <div class="book-introduct">
            <v-tabs
                >
                    <v-tab @click="comdetails='book_introductVue'">介绍</v-tab>
                    <v-tab @click="comdetails='Code'">随书下载</v-tab>
                </v-tabs>
                <!-- <van-tabs :active="active" class="mobile-show">
                    <van-tab title="介绍" @click="comdetails='book_introductVue'"></van-tab>
                   
                    <van-tab title="随书下载" @click="codeshow()"></van-tab>
                </van-tabs> -->

            <component :Info="bookInfo" :is="comdetails" :id="bookInfo.id" :bookname="bookInfo.bookname"></component>
        </div>

    </div>
</template>

<script>
import book_introductVue from './more_details/book_introduct.vue'
import Spread from './more_details/shousuo.vue'
import Code from './more_details/source_code.vue'
import axios from 'axios'
export default{
    components:{
        Spread,
        Code,
        book_introductVue
    },
    data(){
        return{
            comdetails:book_introductVue,
			imgsrc:"https://127.0.0.1:8000/book/image?id=3",
            // imgsrc:"https://127.0.0.1:8000/book/image?id"+bookID,
			describe:null,
			isLogin:false,
			bookInfo:{
				
			},
            message:''
        }
    },
    methods:{
        goback(){
            this.$router.go(-1);
        },
		async initData(idhere){
			  const {data:res}=await axios.get('http://43.142.239.198/book/detail?id='+idhere)
			  // const {data:res}=await axios.get('http://127.0.0.1:8000/book/detail?id='+bookID)
			  // 对应的上一页面的传参函数this.$router.push({
					// 					  path: "/book_buy",
					// 					  name: "book-nuy",
					// 					  query: { name: 'name' },
					// 					  params: { usersitelist: 'userlist' }
					// 					});
			  .catch(function (error) { // 请求失败处理
				alert("连接超时");
			  })
			  .then(res =>{
				  this.bookInfo=res.data;
                  console.log(this.bookInfo)
                  console.log(this.bookInfo.id)
				  // this.describe=this.bookInfo.desc;
				  // console.log(this.bookInfo.desc);
				  // console.log("123456");
				  // console.log(this.describe);
			  });
		}
    },
	created(){
		let idhere = JSON.parse(this.$route.query.id)
		// console.log(idhere);
		this.initData(idhere);
		// var bookID = this.$route.params.bookID     取params的bookID
	}
}
</script>

<style scoped>
@media screen and (min-width:200px) and (max-width:1200px){
    .right-details{
    width: 125px;
    margin-top: 50px;
    
    }
}
.main-details{
    padding-bottom: 15px;
    background-color: #fff;
    padding-left: 15px;
    padding-right: 15px;
    display: flex;
}
.left-details{
    /* height: 100px; */
    /* width: 100px; */
    /* background-color: pink; */
    -webkit-box-flex: 1;
    flex-grow: 1;
}
.right-details{
    /* height: 100px; */
    width: 125px;
    /* background-color: red; */
    
}

.main-title{
    line-height: 1;
}

h3{
        font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.4;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: normal;
    display: inline;
}
.details{
    margin-top: 10px;
    font-size: 16px;

}

.anthor-details{
    display: flex;
    font-size: .875rem;
    line-height: 20px;
    margin-top: 5px;
}

.anthor-title{
    font-weight: 500;
    margin-right: 10px;
    flex-shrink: 0;
}
.anthor-detail{
    font-weight: 400;
}

.right-img{
    margin-left: 15px;
    width: 110px;
    flex-shrink: 0;
}
.img-src{
    object-fit: fill;
    border-radius: 2px;
    box-shadow: 0 8px 12px -4px rgb(0 0 0 / 7%), 0 6px 6px -4px rgb(0 0 0 / 8%);
    width: 100%;
    max-height: 100%;
    background: #fff;
}

.info-wrap{
    border: 1px solid var(--pale-blue);
    border-radius: 2px;
    margin-top: 5px;
}
.read-info{
    padding-left: 35px;
    padding-right: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    color: #686c71;
    line-height: 1;
    height: 28px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
}

.info-details{
    padding-left : 5px;
}

.book-introduct{
    margin-top: 10px;
    padding-top: 15px;
    background-color: #fff;
    padding-bottom: 20px;
}
.nav-bar{
        padding-left: 15px;
    padding-right: 15px;
    /* border-bottom: 1px solid var(--pale-blue); */
    display: flex;
}
/* .nav-details{
        padding-bottom: 10px;
    border-bottom: 2px solid blue;
    font-weight: 700;
    margin-right: 20px;
    font-size: .875rem;
    color: var(--charcoal-grey);
    line-height: 20px;
}
.nav-detail{
        margin-right: 20px;
    font-size: .875rem;
    color: var(--charcoal-grey);
    line-height: 20px;
} */
/* @media screen and (min-width:200px) and (max-width:1200px){
    .window-show{
        display: none;
    }
    .mobile-show{

    }
}
@media screen and (min-width:1200px){
    .mobile-show{
        display: none;
}
} */
</style>