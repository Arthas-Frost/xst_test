<template>
  <div>
    <div :class="showTotal ? 'total-introduce' : 'detailed-introduce'">
      <div class="intro-content" :aaa="introduce" ref="desc">
        <span class="merchant-desc" v-if="introduce">
          {{ introduce }}
        </span>
        <div class="unfold" @click="showTotalIntro" v-if="showExchangeButton">
          <p>{{ exchangeButton ? '展开' : '收起' }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	props:["msg"],
  data() {
    return {
      introduce: '',
      // 是否展示所有文本内容
      showTotal: true,
      // 显示展开还是收起
      exchangeButton: true,
      // 是否显示展开收起按钮
      showExchangeButton: false,
      rem: '',
    };
  },
  mounted(){
    this.init()
  },
  activated() {
    this.init();
    // console.log(this.introduce)
  },

  methods: {
    showTotalIntro() {
      this.showTotal = !this.showTotal;
      this.exchangeButton = !this.exchangeButton;
    },
    getRem() {
      console.log('getRem');
      const defaultRem = 16;
      let winWidth = window.innerWidth;
      console.log('winWidth:' + winWidth);
      let rem = (winWidth / 375) * defaultRem;
      return rem;
    },
    init() {
      this.introduce = this.msg
    },
  },
  watch: {
    introduce: function () {
      this.$nextTick(
        function () {
          // 判断介绍是否超过四行
          let rem = parseFloat(this.getRem());
          console.log('watch 中的rem', rem);
          if (!this.$refs.desc) {
            console.log('desc null');
            return;
          }
          let descHeight = window.getComputedStyle(this.$refs.desc).height.replace('px', '');
          console.log('descHeight:' + descHeight);
          console.log('如果 descHeight 超过' + 5.25 * rem + '就要显示展开按钮');
          if (descHeight > 0.5 * rem) {
            console.log('超过了四行');
            // 显示展开收起按钮
            this.showExchangeButton = true;
            this.exchangeButton = true;
            // 不是显示所有
            this.showTotal = false;
          } else {
            // 不显示展开收起按钮
            this.showExchangeButton = false;
            // 没有超过四行就显示所有
            this.showTotal = true;
            console.log('showExchangeButton', this.showExchangeButton);
            console.log('showTotal', this.showTotal);
          }
        }.bind(this)
      );
    },
    msg:function(newval,oldval){
      this.introduce=newval
    }
  },
  
};
</script>

<style lang="less" scoped rel="stylesheet/less">
// p和.merchant-desc是共有样式
p {
    margin: 0;
  line-height: 21px;
  color: #7fbe87;
}
.merchant-desc {
  width: 100%;
  line-height: 21px;
}
// 展示全部的样式
.total-introduce {
  text-align: left;
  height: auto;
  overflow: hidden;
  font-size: 14px;
  color: #434343;
//   margin: 10px;
  .unfold {
    display: block;
    z-index: 11;
    float: right;
    width: 40px;
    height: 21px;
  }
}
// 展示部分的样式
.detailed-introduce {
font-size: 14px;
color: #434343;
position: relative;
overflow: hidden;
// margin: 10px;
.intro-content {
 // 最大高度设为4倍的行间距
  max-height: 84px;
  line-height: 21px;
  word-wrap: break-word;
  /*强制打散字符*/
  word-break: break-all;
  background: #ffffff;
  /*同背景色*/
  color: #ffffff;
  overflow: hidden;
  // 显示最后一行文字
  &:after,
  // 这是展开前实际显示的内容
  &:before {
  content: attr(aaa);
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  color: #434343
  // overflow: hidden;
  }
  // 把最后最后一行自身的上面三行遮住
  &:before {
  display: block;
  overflow: hidden;
  z-index: 1;
  max-height: 63px;
  background: #ffffff;
  }
  &:after {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: 81px;
  /*截取行数*/
  -webkit-line-clamp: 4;
  text-overflow: ellipsis;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  /*行首缩进字符数，值为[(截取行数-1)*尾部留空字符数]*/
  text-indent: -12em;
  /*尾部留空字符数*/
  padding-right: 4em;
  }
  .unfold {
  z-index: 11;
  width: 40px;
  height: 21px;
  outline: 0;
  position: absolute;
  right: 0;
  bottom: 0;
  }
}
}
</style>

