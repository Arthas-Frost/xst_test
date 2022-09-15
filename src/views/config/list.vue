<template>
	<!-- 整体 -->
	<div class="set">	
		<div class="bgc"></div>
		<div class="head">
			<div class="back">
				<v-icon class="back" @click="navBack()">mdi-arrow-left</v-icon>
			</div>
			<div class="title">
				设置
			</div>
		</div>
		<div class="contain">
			<div class="cell-group">
				<div class="cell" @click="navTo('personal_info')">
					<div class="cell-content">
						<span class="cell-text">
							个人资料
						</span>
						<span class="cell-extra">
							<span style="color:#6b6b6b">></span>
						</span>
					</div>
				<div class="fenge"></div>
				</div>
				<div class="cell">
					<div class="cell-content">
						<span class="cell-text">
							修改密码
						</span>
						<span class="cell-extra">
							<span style="color:#6b6b6b">></span>
						</span>
					</div>
					<div class="fenge"></div>
				</div>
				<div class="cell">
					<div class="cell-content">
						<span class="cell-text">
							账户授权
						</span>
						<span class="cell-extra">
							<span style="color:#6b6b6b">></span>
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {

		};
	},
	onLoad() {
	},
	methods: {
		navBack(){
			this.$router.replace('../Account');
		},
		navTo(route){
			// this.$router.replace(haslogin ? './mydownload' : './logon')
			this.$router.replace(route)
		},
	}
};
</script>

<style lang="scss" scoped>
	
.set{
	font-family: Helvetica Neue, Helvetica, sans-serif;
	.head{
		display:flex;
		width:100%;
		height:44px;
		position:fixed;
		vertical-align: middle;
		background-color: #ffffff;
		z-index:3;
		.back{
			color:rgba($color: #8a8a8a, $alpha: 1.0);
			z-index:1;
			border-radius: 100%;
			width: 40px;
			height:40px;
			position: absolute;
			left:0;
			top:2px;
		}
		.title{
			font-weight: 600;
			width:60%;
			margin: 0 auto; 
			text-align: center;
			align-self:center;
			
		}
	}
	.bgc {
		position: fixed;
		width:100%;
		height:100%;
		z-index:-1;
		background-image: linear-gradient(45deg, #f6f3f6, #fdf8ff);
		color: #ffffff;
	}
	.contain{
		width:100%;
		padding-top:60px;
		.cell-group{
			background-color: #FFFFFF;
			border-radius: 5px;
			box-shadow: 0px 0px 30px 30px rgba(186, 186, 186, 0.1);
			align-items: center;
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
		}
	}
	
}
	
</style>
