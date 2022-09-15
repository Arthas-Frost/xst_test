<template>
    <div>
     
         <div style="display:flex" >
             <div style="width:100%;">
                 <div class="book-container">
                     <div class="books" style="flex-wrap: wrap;display: flex;">
                         <div class="book-item" v-for="item in books" :key="item.title">
                             <div class="book-cover">
                                 <router-link :to="item.booksrc">
                                     <v-img contain :src="item.imgsrc" loading="lazy" class="img-src" lazy-src="../../assets/imgs/bookcover.jpg"></v-img>
                                     <!-- <img :src="item.imgsrc"  class="img-src"> -->
                                 </router-link>
                             </div>
                             <p>{{item.title}}</p>
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
         data(){
             return{
                 books:[
                     { title:'Linux命令行及shell脚本的编写' ,imgsrc:'https://file.ituring.com.cn/SmallCover/220536db52404084b677',booksrc:"/book_buy/"},
                     { title:'On Java(中文版)',imgsrc:'https://file.ituring.com.cn/SmallCover/22037fea15154973ee4d',booksrc:"/book_buy/" },
                     { title:'Python语言及其应用',imgsrc:'https://file.ituring.com.cn/SmallCover/22031660cc2c07031e62' ,booksrc:"/book_buy/"},
                     { title:'用Go语言自制编译器',imgsrc:'https://file.ituring.com.cn/SmallCover/22051a8999185dfe8e65',booksrc:"/book_buy/" },
                     { title:'Linux命令行及shell脚本的编写1' ,imgsrc:'https://file.ituring.com.cn/SmallCover/220536db52404084b677',booksrc:"/book_buy/"},
                     { title:'On Java(中文版)1',imgsrc:'https://file.ituring.com.cn/SmallCover/22037fea15154973ee4d' ,booksrc:"/book_buy/"},
                     { title:'Python语言及其应用1',imgsrc:'https://file.ituring.com.cn/SmallCover/22031660cc2c07031e62' ,booksrc:"/book_buy/"},
                     { title:'用Go语言自制编译器1',imgsrc:'https://file.ituring.com.cn/SmallCover/22051a8999185dfe8e65' ,booksrc:"/book_buy/"},
                     { title:'Linux命令行及shell脚本的编写' ,imgsrc:'https://file.ituring.com.cn/SmallCover/220536db52404084b677',booksrc:"/book_buy/"},
                     { title:'On Java(中文版)',imgsrc:'https://file.ituring.com.cn/SmallCover/22037fea15154973ee4d' ,booksrc:"/book_buy/"},
                     { title:'Python语言及其应用',imgsrc:'https://file.ituring.com.cn/SmallCover/22031660cc2c07031e62' ,booksrc:"/book_buy/"},
                     { title:'用Go语言自制编译器',imgsrc:'https://file.ituring.com.cn/SmallCover/22051a8999185dfe8e65' ,booksrc:"/book_buy/"},
                     { title:'Linux命令行及shell脚本的编写1' ,imgsrc:'https://file.ituring.com.cn/SmallCover/220536db52404084b677',booksrc:"/book_buy/"},
                     { title:'On Java(中文版)1',imgsrc:'https://file.ituring.com.cn/SmallCover/22037fea15154973ee4d' ,booksrc:"/book_buy/"},
                     { title:'Python语言及其应用1',imgsrc:'https://file.ituring.com.cn/SmallCover/22031660cc2c07031e62',booksrc:"/book_buy/" },
                     { title:'用Go语言自制编译器1',imgsrc:'https://file.ituring.com.cn/SmallCover/22051a8999185dfe8e65' ,booksrc:"/book_buy/"},
                 
                 ]
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
     min-width: 110px;
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