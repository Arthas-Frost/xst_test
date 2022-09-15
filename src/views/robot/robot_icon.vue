<template>
    <div class="app">
        <div class="ys-float-btn" :style="{'width':itemWidth+'px','height':itemHeight+'px','left':left+'px','top':top+'px'}"
            ref="div"
            @click ="onBtnClicked">
            <!-- <slot name="icon"></slot> -->
            <img src="../../assets/imgs/智能机器人1.png"  
                    :style="{'width':itemWidth+'px','height':itemHeight+'px'}">
        </div>


    </div>
</template>
  
  
<script>
    export default {
        name: "DragIcon",
        props:{
            itemWidth:{
                type:Number,
                default:40
            },
            itemHeight:{
                type:Number,
                default:40
            },
            gapWidth:{
                type:Number,
                default:10
            },
  
            coefficientHeight:{
                type:Number,
                default:0.8
            }
        },
        created(){
            this.clientWidth = document.documentElement.clientWidth;
            this.clientHeight = document.documentElement.clientHeight;
            this.left = this.clientWidth - this.itemWidth - this.gapWidth;
            this.top = this.clientHeight*this.coefficientHeight;
        },
        mounted(){
            this.$nextTick(()=>{
                const div = this.$refs.div;
                div.addEventListener("touchstart",(e)=>{
                    e.stopPropagation();
                    div.style.transition = 'none';
                });
                div.addEventListener("touchmove",(e)=>{
                        e.stopPropagation();
                        if (e.targetTouches.length === 1) {
                            let touch = event.targetTouches[0];
                            this.left = touch.clientX - this.itemWidth/2;
                            this.top = touch.clientY - this.itemHeight/2;
                        }
                    },
                    false
                );
                div.addEventListener("touchend",(e)=>{
                    e.stopPropagation();
                    div.style.transition = 'all 0.3s';
                    if(this.left>this.clientWidth/2){
                        this.left = this.clientWidth - this.itemWidth - this.gapWidth;
                    }else{
                        this.left = this.gapWidth;
                    }
                    if(this.top<=36)
                    {
                        this.top=36+this.gapWidth
                    }
                    else{
                        let bottom=this.clientHeight-50-this.itemHeight-this.gapWidth
                        console.log(bottom,this.top)
                        if(this.top>=bottom)
                        {
                            this.top=bottom
                        }
  
                    }
                });
            });
        },
  
        methods:{
            onBtnClicked(){
                this.$emit("onFloatBtnClicked");
            },
  
        },
        data(){
            return{
                timer:null,
                currentTop:0,
                clientWidth:0,
                clientHeight:0,
                left:0,
                top:0,
            }
        }
    }
</script>
  
<style lang="scss" scoped>
@media screen and (min-width:200px) and (max-width:1200px){
    .card {
    position: absolute;
    float: left;
    width: 200px;
    height: 200px;
    display: none;
    }
    .ys-float-btn{
        // background:rgba(56,181,77,1);
        // box-shadow:0 2px 10px 0 rgba(0,0,0,0.1);
        // border-radius:50%;
        color: #666666;
        z-index: 20;
        transition: all 0.3s;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: fixed;
        bottom: 20vw;

  
        img{
            width: 100%;
            height: 100%;
            object-fit: contain;
            margin-bottom: 3px;
        }
    }
 
    }
    @media screen and (min-width:1200px){
    .card {
        position: absolute;
        float: right;
        width: 200px;
        height: 200px;
    }
    .ys-float-btn{
        background:rgba(56,181,77,1);
        box-shadow:0 2px 10px 0 rgba(0,0,0,0.1);
        border-radius:50%;
        color: #666666;
        z-index: 20;
        transition: all 0.3s;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: fixed;
        bottom: 20vw;
        display: none;
  
        img{
            width: 50%;
            height: 50%;
            object-fit: contain;
            margin-bottom: 3px;
        }
    }
}
</style>