<template>
    <div id="app">
        <div class="main">
            <kinesis-container>
                
                <img src="../assets/imgs/行思堂.png" style="width:200px">
                <br><br>
                <kinesis-element :strength="10"> 欢迎来到行思堂学习平台 </kinesis-element>
                <kinesis-element :strength="10" style="font-size:10px"> Welcome to the learning platform of xingsitang </kinesis-element>
                <br>
                <kinesis-element :strength="20"> 让科学研究更简单</kinesis-element>
                <kinesis-element :strength="10" style="font-size:10px"> Make scientific research easier </kinesis-element>
                
            </kinesis-container>
            <br>
            <br>
            <a href="/#/tuling">开始学习</a>
            <p style="font-size:10px"><a href='/#/tuling' >Start learning</a></p>
            
        </div>
        <vue-particles
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
        class="lizi"
      >
      </vue-particles>
</div>
  </template>
  
  <script>
  import { KinesisContainer, KinesisElement } from "vue-kinesis";
  export default {
    name: "App",
    components: {
      KinesisContainer,
      KinesisElement,
    },
  };
  </script>
  <style scoped>
    #app{
        /* background-color: #fce5cd; */
        width:100%;
        height: 100%;
        position:absolute;
    }
    .main{
	text-align: center; /*让p内部文字居中*/
    color: aliceblue;
	/* background-color:#fff; */
	border-radius: 20px;
	width: 300px;
	height: 550px;
	margin: auto;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
    font-size: 25px;
    border-style: none;
}
    .lizi{
        width: 100%;
    height: 100%;
    background: #3E3E3E;
    }
  a{
    text-decoration: none;
    color:aliceblue;
  }
  </style>
  