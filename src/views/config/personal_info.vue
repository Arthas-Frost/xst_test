<template>
	<div class="userinfo">
	<!-- 头像+背景 -->
		<div class="user-section">
			<div class="portrait-box">
				
			</div>
		</div>
	</div>
</template>

<script>
export default{
	methods:{
		
	}
}
</script>

<style lang="scss" scoped>
.userinfo {
	.user-section {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 320upx;
		padding: 40upx 30upx 0;
		overflow: hidden;
		position: relative;
		.bg {
			position: absolute;
			left: 0;
			top: 0;
			width: 100vw;
			opacity: 0.84;
		}

		.portrait-box {
			clear: both;
			z-index: 2;
		}

		.portrait {
			position: relative;
			width: 200upx;
			height: 200upx;
			border-radius: 50%;
			border: 6upx solid #fff;
		}

		.yticon {
			position: absolute;
			line-height: 1;
			z-index: 5;
			font-size: 48upx;
			color: #fff;
			padding: 4upx 6upx;
			border-radius: 6upx;
			background: rgba(0, 0, 0, 0.4);
		}

		.pt-upload-btn {
			right: 0;
			bottom: 10upx;
		}

		.bg-upload-btn {
			right: 20upx;
			bottom: 16upx;
		}
	}

	.input-content {
		padding: 40upx 60upx;

		.input-item {
			display: flex;
			padding: 0 30upx;
			// background: ;
			height: 80upx;
			line-height: 80upx;
			border-radius: 4px;
			margin-bottom: 30upx;

			&:last-child {
				margin-bottom: 0;
			}

			.tit {
				width: 100upx;
				font-size:  + 2upx;
				// color: ;
			}

			.input {
				width: calc(100% - 100upx);
				height: 80upx;
				line-height: 80upx;
				font-size:  + 2upx;
				// color: ;
			}

			.date {
				height: 80upx;
				line-height: 80upx;
				font-size:  + 2upx;
				// color: ;
			}

			.gender-item {
				margin-right: 20upx;

				.gender-item-text {
					padding-left: 10upx;
				}

				.radio .wx-radio-input.wx-radio-input-checked {
					// background: ;
					// border-color: ;
				}
			}
		}
	}
}
</style>
