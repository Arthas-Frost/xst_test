<template>
	<!-- 整体 -->
	<div class="user">
		<div class="bgc"></div>
		<!--头部 -->
		<div class="user-section">
			<v-icon class="back" @click="navBack()">mdi-arrow-left</v-icon>
			<v-icon class="config" @click="SetNavTo('/config/list')">mdi-brightness-7</v-icon>
			<!--用户信息-->
			<!-- 正常使用请用此段代码替代，根据是否登录选择跳转不同页面
			<div class="user-info-box">
				<div
					class="portrait-box"
					@click="userInfo()"
				>
					<image
						class="portrait"
						:src="haslogin.head_portrait || headImg"
					></image>
					<span class="username">
						{{
							userInfo.nickname ||
							userInfo.realname ||
								'登录/注册'
						}}
					</span>
				</div>
			</div> -->
			<div class="user-info-box">
				<div
					class="portrait-box"
				>
					<img
						class="portrait"
						src="../assets/imgs/missing-face.png"
					></img>
					<span class="username">
						登录/注册
					</span>
				</div>
			</div>
		</div>
		<!--内容 -->
		<div class ="contain-section">
			<!-- 我的消息 -->
			<div class="cell-group">
				<div class="cell">
					<div class="cell-content">
						<span class="cell-icon">
							<v-icon  color="#61bff9">mdi-tooltip</v-icon>
						</span>
						<span class="cell-text">
							我的消息
						</span>
						<span class="cell-extra">
							<span style="color:#6b6b6b">></span>
						</span>
					</div>
					<div class="fenge"></div>
				</div>
				<div class="tj-section">
					<div
						class="tj-item"
						v-for="item in amountList"
						:key="item.title"
					>
						<span class="num">
							{{ item.value }}
						</span>
						<span>{{ item.title }}</span>
					</div>
				</div>
			</div>
			<!-- 我的服务 -->
			<div class="cell-group">
				<div class="cell">
					<div class="cell-content">
						<span class="cell-icon">
							<v-icon  color="#61bff9">mdi-hexagon-multiple</v-icon>
						</span>
						<span class="cell-text">
							我的服务
						</span>
						<span class="cell-extra">
							<span style="color:#6b6b6b">> </span>
						</span>
					</div>
					<div class="fenge"></div>
				</div>
				<div class="category-list">
					<div 
						class="category" 
						v-for="(item, index) in settingList"
						:key="index"
						@click="SetNavTo(item.url)">
						<div class="img">
							<span>
								<v-icon large class="iconfont">{{item.icon}}</v-icon>
							</span>
						</div>
						<div class="text">{{item.text}}</div>
					</div>
				</div>
			</div>
			<div class="cell-group">
				<div class="cell">
					<div class="cell-content">
						<span class="cell-icon">
							<v-icon  color="#61bff9">mdi-monitor</v-icon>
						</span>
						<span class="cell-text">
							功能1
						</span>
						<span class="cell-extra">
							<span style="color:#6b6b6b">></span>
						</span>
					</div>
					<div class="fenge"></div>
				</div>
				<div class="cell">
					<div class="cell-content">
						<span class="cell-icon">
							<v-icon  color="#61bff9">mdi-cloud-download</v-icon>
						</span>
						<span class="cell-text">
							功能2
						</span>
						<span class="cell-extra">
							<span style="color:#6b6b6b">></span>
						</span>
					</div>
				</div>
			</div>
			<div class="cell-group">
				<div class="cell">
					<div class="cell-content">
						<span class="cell-icon">
							<v-icon  color="#61bff9">mdi-hexagon-slice-4</v-icon>
						</span>
						<span class="cell-text">
							功能1
						</span>
						<span class="cell-extra">
							<span style="color:#6b6b6b">></span>
						</span>
					</div>
				</div>
			</div>
		</div>
<!-- 	<div class="Mydownload" @click="navToMydownload()"><img class="iconxiazai" src="../assets/imgs/下载.png"></img></div> -->
	</div>
</template>

<script>
export default {
	data(){
	    return{
			amountList:[
				{
					index:0,
					title:'回复',
					value:0
				},
				{
					index:1,
					title:'收藏',
					value:0
				},
				{
					index:2,
					title:'消息',
					value:0
				}
			],
	       settingList:[
				{ 	
					index:0,
					icon:'mdi-share',
					text:'分享',
					url:''
				},
				{
					index:1,
					icon:'mdi-download',
					text:'我的下载',
					url:'./mydownload'
				},
				{
					index:2,
					icon:'mdi-dots-horizontal',
					text:'敬请期待',
					url:''
				},
				{
					index:3,
					icon:'mdi-dots-horizontal',
					text:'敬请期待',
					url:''
				},
				{
					index:4,
					icon:'mdi-dots-horizontal',
					text:'敬请期待',
					url:''
				},
				{
					index:5,
					icon:'mdi-dots-horizontal',
					text:'敬请期待',
					url:''
				},
				{
					index:6,
					icon:'mdi-dots-horizontal',
					text:'敬请期待',
					url:''
				}
	       	]
	    }
	},
	// data() {
	// 	return {
	// 		haslogin:true,
	// 		ceshi:1345,//是否已登录
	// 		
	// 	}
	// },
	methods:{
		navBack(){
			this.$router.back();
		},
	    userInfo(){
	        // this.$router.replace(haslogin ? './userinfo' : './logon')
	
	    },
		SetNavTo(route){
			// this.$router.replace(haslogin ? './mydownload' : './logon')
			this.$router.replace(route)
		},
		// navTo(route) {
		// 	if (!route) return;
		// 	if (route === '/pages/index/notice/notice') {
		// 		this.$mRouter.push({ route });
		// 	} else if (!this.hasLogin) {
		// 		uni.removeStorageSync('backToPage');
		// 		this.$mRouter.push({ route: '/pages/public/logintype' });
		// 	} else {
		// 		this.$mRouter.push({ route });
		// 	}
		// },
	
	}
	
}
</script>

<style lang="scss" scoped>

.user {
	// background-color: rgb(246,246,246);
	font-family: Helvetica Neue, Helvetica, sans-serif;
	font-weight: 200;
	.bgc {
		position: fixed;
		width:100%;
		height:100%;
		z-index:-1;
		background-image: linear-gradient(45deg, #f6f3f6, #fdf8ff);
		// background-color:rgb(246,246,246);
		color: #ffffff;
	}
	.user-section {
		height: 22vh;
		padding: 10px 10px 0;
		position: relative;
		// background-color:rgb(246,246,246);
		z-index:1;
		.config{
			float:right;
			color:rgba($color: #8a8a8a, $alpha: 1.0);
			z-index:1;	
			border-radius: 100%;
			width: 40px;
			height:40px;
		}
		.bg {
			position: absolute;
			left: 0;
			top: 0;
			width: 100vw;
			height: 40vw;
			z-index:0;
			opacity: 0.84;
		}
		.user-info-box {
			height: 99px;
			display: flex;
			align-items: center;
			position: relative;
			z-index: 1;
			justify-content: space-between;
			left:10px;
		
			.portrait-box {
				display: flex;
				align-items: center;
		
				.portrait {
					width: 68px;
					height: 68px;
					border: 2px solid #cfcfcf;
					border-radius: 50%;
				}
		
				.username {
					font-size:20px;
					color: #3e3e3e;
					margin-left: 10px;
				}
			}
		}
	}
	.contain-section{
		height:80vh;
		// background-color: rgb(246,246,246);
		padding:10px 20px;
		.cell-group{
			background-color: #FFFFFF;
			border-radius: 5px;
			box-shadow: 0px 0px 30px 30px rgba(186, 186, 186, 0.1);
			align-items: center;
			margin-top: 20px;
			z-index:1;
			.cell{
				position:relative;
				height:55px;
				padding: 16px 10px 16px;
				z-index:2;
				.cell-content{
					font-size:16px;
					.cell-icon{
						position: relative;
						bottom:2px;
					}
					.cell-text{
						align-items: center;
						margin-left:15px;
					}
					.cell-extra{
						float:right;
						margin-right: 20px;
					}
				}
				.fenge{
					background-color: #cccccc;
					height:0.5px;
					width:96%;
					position:absolute;
					bottom:0;
					margin-left:1%;
				}
			}
			.category-list {
				width: 100%;
				padding: 0 0 30px 0;
				border-bottom: solid 2px #f6f6f6;
				display: flex;
				flex-wrap: wrap;
				.category {
					width: 33.3%;
					margin-top: 20px;
					display: flex;
					justify-content: center;
					flex-wrap: wrap;
					.img {
						width: 100%;
						display: flex;
						justify-content: center;
			
						.iconfont {
							font-size:24px;
							background-image: -webkit-linear-gradient(left bottom, #61bff9, #a7ecf9);
							-webkit-background-clip: text;
							color:transparent;
						}
					}
			
					.text {
						width: 100%;
						display: flex;
						justify-content: center;
						font-size: 16px;
						color: #3c3c3c;
						font-weight: 100;
					}
					.share-btn {
						height: 42px;
						text-align: left;
						background: none;
						padding: 0;
						margin: 0;
					}
			
					.share-btn:after {
						border: none;
						border-radius: none;
					}
				}
			}
			.tj-section {
				@extend %section;
				display: flex;
			
				.tj-item {
					@extend %flex-center;
					flex: 1;
					flex-direction: column;
					margin: 25px 0;
					font-size: 14.4px;
					color: #75787d;
					
				.num {
					font-size: 16.8px;
				}
			
				.red {
					color: red;
				}
			}
		}
	}
	.back{
		color:rgba($color: #8a8a8a, $alpha: 1.0);
		z-index:1;
		border-radius: 100%;
		width: 40px;
		height:40px;
	}
	
	.cover-container {
		margin-top: -150upx;
		padding: 0 30upx 20upx;
		position: relative;
		background-color: grey;
	
		.arc {
			position: absolute;
			left: 0;
			top: -34upx;
			width: 100%;
			height: 36upx;
		}
	}
}
.Mydownload{
	position: fixed;
	display:flex;
	right:20px;
	bottom:40px;
	width:60px;
	height:60px;
	box-shadow: 5px 5px 5px gray;
	border-radius:50px;
	text-align:center;
	background-color: #97fffc;
	vertical-align: middle;
}
%flex-center {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
%section {
	justify-content: space-around;
	display: flex;
	align-content: center;
	background: #fff;
	border-radius: 5px;
}
}
</style>
