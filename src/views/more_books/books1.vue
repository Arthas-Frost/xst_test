<template>
   <div>
        <div style="display:flex" >
            <div style="width:100%;">
                <div class="book-container">
                    <div class="books" style="flex-wrap: wrap;display: flex;">
                        <div class="book-item"
						 v-for="item in bookList.data" 
						 :key="item.id"
						 @click="bookDetail(item.id)">
                            <div class="book-cover">
                                <div>
                                    <v-img contain :src="'http://43.142.239.198'+item.url" loading="lazy" class="img-src" lazy-src="../../assets/imgs/bookcover.jpg"></v-img>
                                    <!-- <img :src="item.imgsrc"  class="img-src"> -->
                                </div>
                            </div>
                            <p>{{item.bookname}}</p>
                        </div>
                    </div>
                </div>
            </div>
        <!-- </v-card> -->
    </div>
   </div>
</template>
<script>
    export default{
		props:["bookList"],
		created(){
		},
        data(){
            return{
				
            }
        },
		methods:{
			bookDetail(id){
				console.log(id);
				this.$router.push({
					name:'book-nuy',
					path:'/book_buy/',
					query: {id: JSON.stringify(id)}
				})
			}
		}
    }
</script>
<style scoped>
.book-container{
    padding-left: 30px;
    padding-right: 15px;
    width: 100%;
}
.book-item{
    padding-bottom: 15px;
        padding-right: 20px;
        width: 33.33333%;
}
.book-cover{
        height: 140px;
    margin-bottom: 10px;
    position: relative;
}
.img-src{
    width: auto;
    width: 90px;
    max-width: 100%;
    height: auto;
    height: 120px;
    border-radius: 2px;
    -webkit-box-shadow: 4px 4px 14px 0 rgb(0 0 0 / 7%), 2px 2px 6px 0 rgb(0 0 0 / 8%);
    box-shadow: 4px 4px 14px 0 rgb(0 0 0 / 7%), 2px 2px 6px 0 rgb(0 0 0 / 8%);
    position: absolute;
    bottom: 0;
    left: 0;
}
</style>
