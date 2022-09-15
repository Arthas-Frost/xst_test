<template>
    <div class="drag">
      <div class="back_box" ref="back_box">

        <div
          class="drag_box"
          draggable="true"
          @dragstart="dragstart($event)"
          @dragend="dragend($event)"
          :style="`left:${elLeft}px;top:${elTop}px`"
        >
          <img src="../../assets/imgs/智能机器人1.png" style="width:90px">
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "HelloWorld",
    props: {
      msg: String,
    },
    data() {
      return {
        initWidth: 0, // 父元素的宽-自适应值
        initHeight: 0, // 父元素的高-自适应值
        startclientX: 0, // 元素拖拽前距离浏览器的X轴位置
        startclientY: 0, //元素拖拽前距离浏览器的Y轴位置
        elLeft: 0, // 元素的左偏移量
        elTop: 0, // 元素的右偏移量
      };
    },
    methods: {
      // 页面初始化
      initBodySize() {
        this.initWidth = this.$refs.back_box.clientWidth; // 拿到父元素宽
        // this.initHeight = this.initWidth * (1080 / 1920);
        this.initHeight = this.initWidth * ((1080 * 0.88) / (1920 - 1080 * 0.02)); // 根据宽计算高实现自适应
      },
      // 拖拽开始事件
      dragstart(e) {
        console.log(e);
        this.startclientX = e.clientX; // 记录拖拽元素初始位置
        this.startclientY = e.clientY;
      },
      // 拖拽完成事件
      dragend(e) {
        console.log(e);
        let x = e.clientX - this.startclientX; // 计算偏移量
        let y = e.clientY - this.startclientY;
        this.elLeft += x; // 实现拖拽元素随偏移量移动
        this.elTop += y;
      },
    },
    mounted() {
      // console.log(this.$el);
      this.initBodySize();
    },
  };
  </script>
  
  <style scoped>
  .back_box {
    /* background: #ccc; */
    width: 50vw;
    height: 50vh;
    position: fixed;

    right :50px;
    bottom:100px;
    /* transform: translate(-50%, -30%); */
  }
  
  .drag_box {
    width: 100px;
    height: 100px;
    /* background: skyblue; */
    position: absolute;
    padding-left: 700px;
    padding-top: 300px;
    /* z-index: 100; */
    user-select: none; /* 不可选中,为了拖拽时不让文字高亮 */
  }
  </style>
  