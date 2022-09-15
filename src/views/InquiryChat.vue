<template>
 <div class="wrapper" ref="box" id="box">
    <v-card flat>
    <v-container fluid>
      <v-row class="child-flex">
        <div>
          <v-toolbar>
            <v-btn
              icon
              class="hidden-xs-only"
              @click="$router.go(-1)"
            >
              <v-icon>mdi-arrow-left</v-icon>
            </v-btn>

            <v-toolbar-title>智能机器人</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn
              icon
              class="hidden-xs-only"
            >
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
          </v-toolbar>
        </div>
        
      </v-row>
    </v-container>
  </v-card>
    <div class="header">
        <div class="doctor"><img class='img-intel' src="../assets/imgs/智能机器人 .png" /></div>
        
        <div class="tri"></div>
        <div class="welcome">让科学研究更简单</div>
    </div>
    <div class="q-a" >
    
        <!-- 问题一 -->
        <div class="question">
            <div class="question-content">
               机器学习怎么入门
            </div>
        </div>
        <div class="answer">
            <div class="answer-content">
                <div class="answer-title">您可以尝试以下学习步骤</div>
                <div class="answer-content-item">
                    1.数学基础知识；2.数学基础知识；3.数学基础知识；
                </div>
            </div>
        </div>
        
        <!-- 问题二 -->
        <div class="question">
            <div class="question-content">
               深度学习资料
            </div>
        </div>
        <div class="answer">
            <div class="answer-content">
                <div class="answer-title">深度学习资料您可以通过以下方法查询</div>
                
                <div class="answer-content-item">
                    1.登录网站，在导航栏里找到深度学习板块<br /><br />
                    2.在板块内查找自己需要的内容
                </div>
                <br />
               
            </div>
        </div>
        
        <!-- 叶开泰推荐 开始 -->
        
        
        <!-- 叶开泰推荐  结束-->
        
        
        
        <!-- js控制 开始 -->
        <div v-for="item in chatList" :key="item">
            
            <div class="question" v-if="typeof(item)=='string'">
                <div class="question-content">
                   {{item}}
                </div>
            </div>
            <div class="answer" v-if="typeof(item)=='number'">
                <div class="answer-content">
                    <div class="answer-title">
                        您的问题有点复杂哦，小AI还没有学习到这个知识点～
                    </div>
                </div>
                
                
            </div>
            <div v-if="typeof(item)=='object'">

                    <!-- <div class="answer" v-if="Array.isArray(item)"  v-for="i in item" :key="i"   @click="createDetail(i)"> -->
                    <div class="answer"   v-for="i in item" :key="i"   @click="createDetail(i)">
                        <div class="answer-content">
                            <div class="answer-title">{{i.title}}</div>
                            <div class="answer-content-item-two">
                                {{i.content}}
                            </div>
                        </div>

                    </div>

                    <div class="answer ee" v-if="!Array.isArray(item)">
                        <div class="answer-content" >
                            <div class="answer-title">{{item.title}}</div>
                            <div class="answer-content-item">
                                {{item.content}}
                            </div>
                        </div>
                    </div>

                
            </div>
           
            
        </div>
        <!-- js控制 结束 -->
        <!-- 智能机器人图标 -->
        
        
    </div>

    <!-- <img class="intellgient" src="../assets/imgs/智能机器人 .png"> -->

    <div class="bottom">
        <div class="for-input">
            <form action="">
                <input type="text" v-model="ques" ref="input" @click="shuru" placeholder="请简短描述您的问题" />
            </form>
        </div>
        <div class="for-submit" @click.prevent="chat">
            <v-btn
                rounded
                color="indigo"
                
                
                outlined
                >
                发送
                </v-btn>
        </div>
    </div>
    
 </div>
</template>
 
<script>
import { showLoad,hideLoad } from '@/utils/request'
import { InquiryResult } from '@/api/api'

export default {
  data() {
    return {
      chatList:[],
      ques:'',
      result_list:[],
      //subicon:'/static/up_green.svg',
      
    }
  },
  created(){
    document.title = "智能问答"
    let loading = document.getElementById('loading')
    if(loading){
        document.body.removeChild(loading)
    }
  },
  computed:{
    subicon(){
        if(this.ques.trim()){
            return '/static/up_gray.svg'
        }else{
            return '/static/up_green.svg'
        }
    }
    
  },
  mounted(){
    //this.$refs.input.focus()
  },
  methods:{
    chat(){
        showLoad()
        if(this.ques.trim()){
            this.chatList.push(this.ques)
            
            var box = this.$refs.box
            
            setTimeout(()=>{
                            box.scrollTop = box.scrollHeight
                        },0)
            this.getResult()
            this.$refs.input.focus()
            return false
        }else{
            hideLoad()
        }
        // console.log(this.$refs.input)
        this.$refs.input.focus()
        return false
    },
    createDetail(i){
        this.chatList.push(i)
        var box = this.$refs.box
        setTimeout(()=>{
                            box.scrollTop = box.scrollHeight
                        },0)
    },
    getResult(){
        let that = this
        
        InquiryResult({
            key: that.ques
        }).then(function(res){
            if (res.code == 0){
                if (res.data.length > 1){
                    that.chatList.push(res.data)
                }else if(res.data.length < 1){
                    that.chatList.push(3)
                }else {
                    that.chatList.push(res.data[0])
                }
                
            }
            hideLoad()
            that.ques = ''
            var box = that.$refs.box
            setTimeout(()=>{
                            box.scrollTop = box.scrollHeight
                        },0)
            console.log(that.chatList)
        })
    },
    shuru(){
        var box = this.$refs.box
        setTimeout(()=>{

                        box.scrollTop = box.scrollHeight
                    },300)
    },
  },
}
</script>
 
<style lang="stylus" scoped>
.wrapper
    background-color #f3f4f5
    width 100%
    overflow-y scroll
    //overflow-y auto
    box-sizing border-box
    height 100vh
   
    .q-a
        width 100%
        padding-bottom 27vw
        //overflow-y auto
        //height 100vw
        
        .question
            box-sizing border-box
            padding 0 10px
            margin-top 18px
            display flex
            justify-content flex-end
            .question-content
                background-color #1857e4
                color #fff
                padding 10px 15px
                border-radius 12px 12px 3px 12px
                font-size 16px
                line-height 1.6
                max-width 80%
        .answer
            box-sizing border-box
            padding 0 10px
            margin-top 18px
            .answer-content
                box-sizing border-box
                padding 6px 14px
                border-radius 12px
                background-color #fff
                line-height 1.6
                .answer-title
                    font-size 16px
                    color #111
                    font-weight 700
                .answer-content-item
                    padding-top 9px
                    font-size 16px
                    line-height 26px
                    color #4b4b4b
                .answer-content-item-two
                    padding-top 6px
                    font-size 16px
                    line-height 26px
                    color #1857e4
                    height 52px
                    overflow hidden
                    border-top 1px dashed #e8e8e8
                    margin-top 2.5vw
        .ykt
            box-sizing border-box
            padding 0 10px
            margin-top 14px
            .ykt-content
                box-sizing border-box
                padding 6px 14px
                padding-bottom 10px
                border-radius 12px
                background-color #fff
                line-height 1.6
                .title-wrapper
                    height 10vw
                    padding-top 2vw
                    .ykt-title
                        background darkgray
                        font-size 4.1vw
                        height 7vw
                        line-height 7vw
                        text-indent 3vw
                        color white
                        border-radius 4vw
                        width fit-content
                        float left
                        padding-right 3vw
                    .ykt-title1
                        font-size 4.1vw
                        font-size 16px
                        height 7vw
                        //font-weight bold
                        line-height 7vw
                        //text-indent 3vw
                        color black
                        border-radius 4vw
                        width fit-content
                        float left
                        padding-right 3vw
                    .symptom
                        float left
                        height 6.5vw
                        line-height 7vw
                        margin-left 3vw
                        margin-right 2vw
                        //box-sizing border-box
                        padding 0 2vw
                        font-size 4vw
                        color #ffad33
                        border-radius 1.5vw
                        border 1px solid #ffad33
                .ykt-advice-title
                    width 100%
                    height 10vw
                    font-size 4.1vw
                    font-size 16px
                    font-weight bold
                    //height 7vw
                    line-height 7vw
                    //text-indent 3vw
                    color #969393
                    color black
                    border-radius 4vw
                    //width fit-content
                    //float left
                    padding-right 3vw
                .ykt-advice
                    font-size 16px
                    font-weight bold
                    line-height 1.6
                    text-indent 1vw
                    
            .icon
                width 6vw
                height 5vw
                img
                    width 100%
    
            
.intellgient{
    position: fixed;
    right :50px;
    bottom:100px;
    width:50px;
}
@media screen and (min-width:200px) and (max-width:1200px){
    .bottom{
        width 100%
        //height 30vw
        position absolute
        position fixed
        left 0
        right 0
        bottom 0
        background-color white
        display flex
        padding 10px
        box-sizing border-box
    }
        .for-input{
            width 83%
        }
            input{
                width 100%
                min-height 40px
                background #fbfafa
                border .5px solid #e8e8e8
                border-radius 4px
                color #111
                box-sizing border-box
                font-size 16px
                outline-style none
                outline-width 0
                text-shadow none
                -webkit-appearance none
                padding 0 8px
            }
            input::-webkit-input-placeholder{
                color:#c7c6c6;
                //font-size:20px;
            }
        .for-submit{
            width 10%
            padding-left 40px
            height 40px
            width 30px
            display flex
            justify-content center
        }
         .header{
        width 100%
        height 30vw
        box-sizing border-box
        padding 3vw 5vw
        color white
        display flex
        -webkit-box-align center
        align-items center
        background linear-gradient(45deg, blue, transparent)
        background linear-gradient(45deg, #59945b, #8BC34A)
        background linear-gradient(45deg, #2121c1, #2940b3a8)
        //background-color #fff
         }
        .doctor{
            width 13vw
            height 13vw
            border-radius 50%
            overflow hidden
            background white
        }
            .img-intel{
                width 13vw
                height 13vw
            }
        .tri{
            width 0
            height 0
            border 7px solid transparent
            border-right 7px solid #fff
            opacity 0.2
        }
        .welcome{
            background hsla(0,0%,100%,.2)
            line-height 10vw
            height 10vw
            font-size 4vw
            text-align center
            padding-left 8px
            border-radius 3px
        }
}
@media screen and (min-width:1200px){
    .bottom{
        width 100%
        //height 30vw
        position absolute
        position fixed
        left 0
        right 0
        bottom 0
        background-color white
        display flex
        padding 10px
        box-sizing border-box
    }
        .for-input{
            width 90%
        }
            input{
                width 100%
                min-height 40px
                background #fbfafa
                border .5px solid #e8e8e8
                border-radius 4px
                color #111
                box-sizing border-box
                font-size 16px
                outline-style none
                outline-width 0
                text-shadow none
                -webkit-appearance none
                padding 0 8px
            }
            input::-webkit-input-placeholder{
                color:#c7c6c6;
                //font-size:20px;
            }
        .for-submit{
            width 10%
            padding-left 50px
            height 40px
            width 30px
            display flex
            justify-content center
        }
        .header{
        width 100%
        height 30vw
        box-sizing border-box
        padding 3vw 5vw
        color white
        display flex
        -webkit-box-align center
        align-items center
        //background linear-gradient(45deg, blue, transparent)
        //background linear-gradient(45deg, #59945b, #8BC34A)
        //background linear-gradient(45deg, #2121c1, #2940b3a8)
        background-color #fff
        }
        .doctor{
            width 13vw
            height 13vw
            border-radius 50%
            overflow hidden
            background white
        }
            .img-intel{
                width 13vw
                height 13vw
            }
        .tri{
            width 0
            height 0
            border 7px solid transparent
            border-right 7px solid blue
            opacity 0.2
            
        }
        .welcome{
            //background hsla(0,0%,100%,.2)
            line-height 10vw
            height 10vw
            font-size 4vw
            text-align center
            padding-left 8px
            border-radius 20px
            background-color #1857E4
        }
}
</style>