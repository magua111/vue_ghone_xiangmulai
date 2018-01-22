<style lang="scss" scoped>
.detail{
	background: #b6c5c8;
}
.content{
	display: flex;
	width: 100%;
	height: 3.8rem;
	flex-direction: column;
	position: relative;
	.bg{
		position: absolute;
		background: url(../../assets/img/discovery/bgd.png) no-repeat;
		opacity: 0.5;
		background-size: cover;
		width: 100%;
		height: 100%;
		z-index: 1;
	}
	img{
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
	.top{
		display: flex;
		flex-direction: row;
		z-index: 9999;
		.top-left{
			width: 1.8rem;
			height: 1.8rem;
			margin-top: 0.84rem;
			margin-left: 0.36rem;
			z-index: 1000;
		}
		.top-right{
			margin-top: 1.14rem;
			margin-left: 0.2rem;
			z-index: 999;
			&>div{
				display: flex;
				flex-direction: row;
				align-items: center;
				h1{
					font-size: 0.36rem;
					color: #434343;
				}
				&>h2{
					margin-left: .2rem;
					width: 1.2rem;
					height: .36rem;
					display: flex;
					justify-content: center;
					align-items: center;
					font-size: .24rem;
					background: #000;
					opacity: 0.2;
					color: #fff;
					border-radius: .18rem;
				}
				.focus{
					background: #40ad5c;
					width: 1.32rem;
					height: .36rem;
					margin-left: .2rem;
					display: flex;
					justify-content: center;
					border-radius: .18rem;
					h3{
						font-size: .24rem;
						color: #fff;
					}
				}
			}
			h4{
				font-size: .24rem;
				color: #666;
				margin-top: .22rem;
			}
		}
	}
	.center{
		width: 100%;
		height: .53rem;
		background: rgba(255,255,255,0.82);
		display: flex;
		flex-direction: row;
		z-index: 999;
		margin-bottom: 1px;
		ul{
			display: flex;
			flex-direction: row;
			margin-left: 2.36rem;
			li{
				display: flex;
				flex-direction: row;
				margin-left: .34rem;
				h3{
					font-size: .3rem;
					color: #434343;
					display: flex;
					align-items: center;
				}
				p{
					font-size: .28rem;
					color: #999;
					margin-left: .08rem;
					display: flex;
					align-items: center;
				}
			}
			padding-bottom: 1px;
		}
	}
	.switch{
		width: 100%;
		height: .55rem;
		z-index: 999;
		background: rgba(255,255,255,0.92);
		margin-bottom: .3rem;
		ul{
			display: flex;
			flex-direction: row;
			align-items: center;
			margin-left: .1rem;
			height: 100%;
			li{
				margin-left: .26rem;
				height: 100%;
				display: flex;
				align-items: center;
				p{
					color: #666;
					height: 100%;
					line-height: .55rem;
				}
				&.active{
					p{
						color: #40ad5c;
						border-bottom: 1px solid #40ad5c;
					}
				}
			}
		}
	}
}
.first{
	padding: 0 .08rem;
	.first-signal{
		padding: .3rem;
		display: flex;
		flex-direction: column;
		background: #fff;
		.f-top{
			display: flex;
			flex-direction: row;
			img{
				width: .8rem;
				height: .8rem;
				border-radius: 50%;
			}
			div{
				margin-left: .24rem;
				h3{
					color: #999;
				}
				p{
					color: #ccc;
				}
				h4{
					margin-top: .04rem;
					font-size: .24rem;
					color: #666;
				}
			}
		}
		.f-bottom{
			background: #f4f4f4;
			margin-top: .1rem;
			&>div{
				margin-left: 1.04rem;
				display: flex;
				flex-direction: column;
				.fb-top{
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					padding: .12rem .2rem .12rem 0;
					align-items: center;
					&>div{
						display: flex;
						flex-direction: row;
						align-items: center;
						p{
							margin-left: .08rem;
						}
						img{
							width: .6rem;
							height: .6rem;
							border-radius: 50%;
						}
					}
					ul{
						display: flex;
						flex-direction: row;
						li{
							margin-left: .4rem;
							h4{
								color: #ccc;
							}
						}
					}
				}
				.fb-bottom{
					display: flex;
					flex-direction: row;
					margin-bottom: .2rem;
					img{
						width: 1rem;
						height: 1rem;
						border-radius: 50%;
					}
					div{
						margin-left: .18rem;
						h3{
							color: #333;
						}
						p{
							color: #999;
							margin-top: .14rem;
						}
					}
				}
			}
		}

	}
}
.second{
	padding: 0 .06rem;
}
.third{
	padding: 0 .08rem;
}
.second-signal{
	background-color: #fff;
	.se-top{
		padding: .18rem .3rem;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		.set-left{
			display: flex;
			flex-direction: row;
		}
		.set-right{
			ul{
				display: flex;
				flex-direction: row;
				li{
					margin-left: .32rem;
					display: flex;
					flex-direction: row;
					p{
						color: #666;
					}
					p:last-child{
						color: #999;
						margin-left: .05rem;
					}
				}
			}
		}
	}
	.se-bottom{
		display: flex;
		flex-direction: row;
		padding: .55rem 0 .59rem .38rem;
		img{
			width: 2.38rem;
			height: 2.38rem;
			border-radius: 50%;
		}
		div{
			margin-left: .39rem;
			h1{
				color: #333;
			}
			p{
				margin-top: .32rem;
				color: #666;
			}
		}
	}
	.se-person{
		border-top: 1px solid #b6c5c8;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 0 .44rem 0 .32rem;
		div{
			display: flex;
			flex-direction: row;
			align-items: center;
			img{
				width: .6rem;
				height: .6rem;
				border-radius: 50%;
			}
			p{
				margin-left: .14rem;
			}
		}
		.pe-right{
			ul{
				display: flex;
				li{
					margin-left: .25rem;
				}
			}
			div{
				margin-left: .34rem;
				display: flex;
				align-items: center;
			}
		}
	}
	.open{
		border-top: 1px solid #b6c5c8;
		height: 1.24rem;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 0 .32rem;
		align-items: center;
		.open-left{
			display: flex;
			flex-direction: row;
			align-items: center;
			p{
				color: #999;
			}
			p:first-child{
				border: 1px solid #999;
				border-radius: 4px;
				padding: .04rem .1rem
			}
			p:last-child{
				margin-left: .2rem;
			}
		}
		.open-right{
			border: 1px solid #5ba7dc;
			border-radius: 100px;
			padding: .08rem .12rem;
			p{
				color: #999;
			}
		}
	}
}
</style>
<template>
	<div class="detail">
		<div class="content">
			<div class="bg">
			</div>
			<div class="top">
				<div class="top-left">
					<img src="../../assets/img/discovery/bgd.png" alt="">
				</div>
				<div class="top-right">
					<div class="">
						<h1>风言</h1>
						<h2>发商信</h2>
						<div class="focus">
							<h2></h2>
							<h3>关注</h3>
						</div>
					</div>
					<h4>梦里花落知多少，花开花落去无情</h4>
				</div>
			</div>
			<div class="center">
				<ul class="center-l">
					<li>
						<h3>184</h3>
						<p>关注</p>
					</li>
					<li>
						<h3>934</h3>
						<p>粉丝</p>
					</li>
				</ul>

			</div>
			<div class="switch">
				<ul>
					<li v-for="(switchData, index) in switchDatas" :class="{active: switchData.active}" @click="switchStatus(index)">
						<p>{{switchData.name}}</p>
					</li>
				</ul>
			</div>
		</div>
		<div class="first" v-if="idx === 0">
			<div class="first-signal">
				<div class="f-top">
					<img src="../../assets/img/discovery/bgd.png" alt="">
					<div class="f-topr">
						<h3>风言风语</h3>
						<p>2016-11-14 15:34</p>
						<h4>构图色彩都太棒了</h4>
					</div>
				</div>
				<div class="f-bottom">
					<div class="">
						<div class="fb-top">
							<div class="">
								<img src="../../assets/img/discovery/bgd.png" alt="">
								<p>水冬青</p>
							</div>
							<ul>
								<li><h4>234</h4></li>
								<li><h4>234</h4></li>
								<li><h4>12</h4></li>
							</ul>
						</div>
						<div class="fb-bottom">
							<img src="../../assets/img/discovery/bgd.png" alt="">
							<div class="">
								<h3>新优互动</h3>
								<p>专注于将PPT转成H5的平台</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="second" v-if="idx === 1">
			<div class="second-signal">
				<div class="se-top">
					<div class="set-left">
						<p>支持</p>
						<p>12</p>
					</div>
					<div class="set-right">
						<ul>
							<li>
								<h3></h3>
								<p>浏览</p>
								<p>12321</p>
							</li>
							<li>
								<h3></h3>
								<p>评论</p>
								<p>23</p>
							</li>
						</ul>
					</div>
				</div>
				<div class="se-bottom">
					<img src="../../assets/img/discovery/bgd.png" alt="">
					<div class="">
						<h1>新优互动-PP匠</h1>
						<p>专注于将PPT转换H5的平台</p>
					</div>
				</div>
				<div class="se-person">
					<div class="pe-left">
						<img src="../../assets/img/discovery/bgd.png" alt="">
						<p>清幽</p>
					</div>
					<div class="pe-right">
						<ul>
							<li>
								<img src="../../assets/img/discovery/bgd.png" alt="">
							</li>
							<li>
								<img src="../../assets/img/discovery/bgd.png" alt="">
							</li>
							<li>
								<img src="../../assets/img/discovery/bgd.png" alt="">
							</li>
							<li>
								<img src="../../assets/img/discovery/bgd.png" alt="">
							</li>
						</ul>
						<div class="">
							<h2></h2>
							<p>23</p>
						</div>
					</div>
				</div>
			</div>

		</div>
		<div class="third" v-if="idx === 2">
			<div class="second-signal">
				<div class="se-top">
					<div class="set-left">
						<p>支持</p>
						<p>12</p>
					</div>
					<div class="set-right">
						<ul>
							<li>
								<h3></h3>
								<p>浏览</p>
								<p>12321</p>
							</li>
							<li>
								<h3></h3>
								<p>评论</p>
								<p>23</p>
							</li>
						</ul>
					</div>
				</div>
				<div class="se-bottom">
					<img src="../../assets/img/discovery/bgd.png" alt="">
					<div class="">
						<h1>新优互动-PP匠</h1>
						<p>专注于将PPT转换H5的平台</p>
					</div>
				</div>
				<div class="open">
					<div class="open-left">
						<p>公开</p>
						<p>4小时前</p>
					</div>
					<div class="open-right">
						<p>快速分享</p>
					</div>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
export default {
data(){
	  return {
			switchDatas: [
				{name: '最新互动', active: true},
			  {name: '支持关注的项目', active: false},
				{name: 'TA的项目', active: false}
		 ],
		 idx: 2
		}
	},
	mounted(){
	},
	methods:{
		switchStatus (_index) {
			for(let i = 0; i < this.switchDatas.length; i++) {
				this.switchDatas[i].active = false
			}
			this.idx = _index
			this.switchDatas[_index].active = true
		}
	},
	components:{

	}
}
</script>
