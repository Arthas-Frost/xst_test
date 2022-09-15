<template>
<v-app>
    <home>
        <slot>
            <div >
                <v-card
                    class="mx-auto"
                    min-height="285"
                    outlined
                >
                    <!-- <v-list-item three-line class="v-list" > -->
					<v-list-item-content
					v-for="(item) in mainpage"
					:key='item.name'>
					    <div class="card-header"
						>
					        <!-- <img src="../assets/imgs/图书.png" class="img-icon"> -->
					        <P style="text-align:center;margin-bottom:0px">{{item.name}}</P>
					        
					        
					        <div class="card-more">
					            <div style="text-decoration:none">
					                <v-btn depressed
					                rounded
					                small
									@click="moreBook(item.index)"
					                >
					                更多
					                </v-btn>
					            </div>
					        </div>
					    </div>
					    <div class="card-main">
					        <div class="book-item"
					        v-for="(itemOne) in item.data"
					        :key="itemOne"
							@click="bookDetail(itemOne.id)"
					        >
					            <div class="book-img">
					                <div>
					                    <v-img class="imgs" :src="'http://43.142.239.198'+itemOne.url" lazy-src="../assets/imgs/bookcover.jpg"></v-img>
					                </div>
					            </div>
					            <h4>{{itemOne.bookname}}</h4>
					        </div>
					       
					    </div>
					</v-list-item-content>

                    
                    <!-- </v-list-item> -->

                </v-card>
                <!-- <router-link to="/inquirychat/">
                        <Windowsicon class="windows-icon"></Windowsicon>
                        <Robot class="mobile-icon"></Robot>
                </router-link> -->
            </div>
        </slot>
    </home>
</v-app>
</template>

<script>
 import Home from '../views/Home.vue'
 import Robot from '../views/robot/robot_icon.vue'
 import Windowsicon from './robot/windows_icon.vue'
 import axios from 'axios'

export default {
    name:'tuling',
    components:{
        Home,
        Robot,
        Windowsicon
    },
     data: () => ({
      mainpage:{

	  }
	  
    }),
	methods:{
	    async initbooks(){
	        const {data:res}=await axios.get('http://43.142.239.198/mainpage')
		.catch(function (error) { // 请求失败处理
	      console.log(error);
	    })
		.then(res=>{
			this.mainpage=res.data
			console.log(this.mainpage);
		});
			
		
	       
	    },
		moreBook(index){
			this.$router.push({
				name:'more_books',
				path:'/more_books/',
				query: {index: JSON.stringify(index)}
			})
			// this.$router.push('/more_books/'+index)
		},
		bookDetail(id){
			console.log(id);
			this.$router.push({
				name:'book-nuy',
				path:'/book_buy/',
				query: {id: JSON.stringify(id)}
			})
		}
	},
	created(){
	this.initbooks()
	
	}
}
</script>

<style scoped>
@media screen and (min-width:200px) and (max-width:1200px){
    .windows-icon{
        display: none;
    }
}
@media screen and (min-width:1200px){
    .mobile-icon{
        display: none;
    }
}
.card-header{
    padding-top: 25px;
    margin-bottom: 0;
    margin-left: 15px;
    margin-right: 15px;
    -webkit-box-pack: justify;
    justify-content: space-between;
    align-items: center;
    display: flex;
    border-width: 0;

}
.card-more{
    padding-right: 15px;
    padding-left: 15px;

    border-radius: 99px;
    height: 26px;
    display: flex;
}
.card-btn{
    background-color: var(--white-three);
}

.card-main{
    padding-left: 15px;
    /* white-space: nowrap; */
    overflow-x: auto;
    overflow-y: hidden;
    padding-top: 15px;
    display: flex;
}

.book-item{
    display: inline-block;
    width: 5.69rem;
    min-width: 110px;
    padding-right: 15px;
    height: 215px;
    padding-top: 50px;
}
.book-img{
    height: 4.375rem;
    margin-bottom: 0.625rem;
    position: relative;

}
.imgs{
    width: auto;
    max-width: 100%;
    height: auto;
    max-height: 120px;
    border-radius: 2px;
    -webkit-box-shadow: 4px 4px 14px 0 rgb(0 0 0 / 7%), 2px 2px 6px 0 rgb(0 0 0 / 8%);
    box-shadow: 4px 4px 14px 0rgba(0,0,0,.07),2px 2px 6px 0rgba(0,0,0,.08);
    position: absolute;
    bottom: 0;
    left: 0;
    
}
h4 {
    font-weight: 500;
    max-height: 40px;
    overflow: hidden;
    white-space: normal;
    line-height: 1.5;
    color: var(--charcoal-grey);
    margin-bottom: 5px;
    font-size: .875rem;
}
.img-icon{
    margin-right: 6px;
    width: 1.875rem;
}
/* .v-list{
    padding: 0,0px !important
} */
.intellgient{
    position: fixed;
    right :50px;
    bottom:100px;
    width:50px;
}
</style>
