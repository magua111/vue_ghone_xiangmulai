<template>
	<div class="content">
		<!--头部信息区域-->
		<div class="personal_header" id="header">
			<div class="top">
				<!--用户信息-->
				<div class="user_info">
					<!--账号设置-->
					<router-link to="/user/accountSetting" tag="div" class="user_pic">
						<img :src="info.headPic?info.headPic:headImg"/>
					</router-link>
					<dl class="user_message">
						<dt class="user_id">{{info.nickName?info.nickName:'未设置'}}</dt>
						<dd class="user_sign">{{info.signature?info.signature:'暂未留下签名'}}</dd>
					</dl>
				</div>
				<!--功能区域-->
				<div class="function">
					<router-link to="/user/functionSetting" tag="p">设置</router-link>
					<p>分享</p>
				</div>
			</div>
			<div class="bottom">
				<!--关注-->
				<dl class="concern">
					<dt>{{info.followingCount}}</dt>
					<dd>关注</dd>
				</dl>
				<p class="line"></p>
				<!--粉丝-->
				<dl class="fans">
					<dt>{{info.followerCount}}</dt>
					<dd>粉丝</dd>
				</dl>
			</div>
		</div>
		<!--中部导航区域-->
		<ul class="personal_nav" id="nav">
			<!--消息互动-->
			<li class="message_interaction_wrap">
				<dl class="message_interaction" @click="tip()">
					<dt>
						<img src="../assets/img/user/ico_message_my.png"/>
						<!--互动消息提示-->
						<p class="message_number">3</p>
					</dt>
					<dd>消息互动</dd>
				</dl>
			</li>
			<!--粉丝管理-->
			<li class="fans_management_wrap">
				<dl class="fans_management" @click="tip()">
					<dt>
						<img src="../assets/img/user/ico_follower_my.png"/>
						<!--粉丝关注提示-->
						<p class="fans_number"></p>
					</dt>
					<dd>粉丝管理</dd>
				</dl>
			</li>
			<!--访问统计-->
			<li class="access_statistics_wrap">
				<dl class="access_statistics" @click="tip()">
					<dt><img src="../assets/img/user/ico_stat_my.png"/></dt>
					<dd>访问统计</dd>
				</dl>
			</li>
			<li class="wallet_management_wrap">
				<dl class="wallet_management" @click="tip()">
					<dt><img src="../assets/img/user/ico_wallet_my.png"/></dt>
					<dd>我的钱包</dd>
				</dl>
			</li>
		</ul>
		<!--内容区域-->
		<div class="personal_content">
			<ul class="tab_bar" :style="isScroll?'position: fixed;left: 0;top: 0;':''">
				<li v-for="(item,index) in tabBarList" @click="changeSelected(index)" :class="{active:index==selected}">{{item.title}}</li>
			</ul>
			<div class="tab_bar_content">
				<!--项目集合-->
			  	<div class="project_list">
			  		<!--单个项目-->
			  		<div class="project_item" v-for="(item,index) in info.myProjcts">
			  			<div class="item_top">
			  				<div class="item_top_l">
			  					<div class="support">
			  						<p>{{item.likerCount}}</p>
			  					</div>
			  				</div>
			  				<div class="item_top_r">
			  					<!--浏览-->
			  					<div class="scan">
			  						<div class="scan_info">
			  							<i class="scan_bg"><img src="../assets/img/discovery/ico_eye.png"/></i>
			  							<span class="scan_title">浏览</span>
			  							<span class="scan_number">{{item.pv}}</span>
			  						</div>
			  					</div>
			  					<!--评论-->
			  					<div class="comment">
			  						<div class="comment_info">
			  							<i class="comment_bg"><img src="../assets/img/discovery/ico_message.png"/></i>
			  							<span class="comment_title">评论</span>
			  							<span class="comment_number">{{item.commentCount}}</span>
			  						</div>
			  					</div>
			  				</div>
			  			</div>
			  			<p class="line"></p>
			  			<router-link :to="{path:'/user/editProject',query:{id:item.id}}" tag="div" class="item_middle">
			  				<!--项目主体-->
			  				<div class="item_middle_l">
			  					<div class="project_logo"><img :src="item.logo?item.logo:logoImg"/></div>
			  				</div>
			  				<div class="item_middle_r">
			  					<dl class="project_info">
			  						<dt class="project_title" :title="item.name">{{item.name}}</dt>
			  						<dd class="project_text" :title="item.shortDesc">{{item.shortDesc}}</dd>
			  					</dl>
			  				</div>
			  			</router-link>
			  			<p class="line"></p>
			  			<div class="item_bottom">
			  				<div class="item_bottom_l">
			  					<p>公开</p>
			  					<p>4小时前</p>
			  				</div>
			  				<div class="item_bottom_r">
			  					快速分享
			  				</div>
			  			</div>
			  		</div>
				  	
			  	</div>
			</div>
		</div>

	</div>
</template>

<script>
//引入消息盒
import { MessageBox } from 'mint-ui'
import headImg from '../assets/img/discovery/left_headportrait.png'
import host from '../config'
export default {
	data(){
        return {
        	selected:2,
        	headImg:headImg,
        	logoImg:require('../assets/img/discovery/logo230x230.png'),
        	tabBarList:[
        		{
        			title:'最新互动'
        		},
        		{
        			title:'支持关注的项目'
        		},
        		{
        			title:'我的项目'
        		},
        	],
        	info:{},
        	headPic:headImg,
        	isScroll:false,
        	height:''
        }
    },
    mounted(){
    	let that = this;
        //调用接口，发起用户主页请求
        this.$http.get(host.host+'/api/users/'+localStorage.getItem('userId'),{})
		.then(function(res){
			console.log(res);
			that.info = res.data.data;
		})
		.catch(function(err){
//		  	console.log(err);
		});
//		//解决用户主页信息和个人基本信息不一致的问题
//		this.$http.get(host.host+'/api/me',{})
//		.then(function(res){
//			console.log(res);
//			that.nickName = res.data.data.nickName;
//			that.signature = res.data.data.signature;
//			that.headPic = res.data.data.headPic;
//		})
//		.catch(function(err){
////		  	console.log(err);
//		});
		let header = document.getElementById('header').offsetHeight;
		let nav = document.getElementById('nav').offsetHeight;
		this.height = header+nav;
		window.addEventListener('scroll', this.handleScroll);
    },
    methods:{
    	handleScroll () {
				if(scrollY>this.height){
					this.isScroll = true;
				}else if(scrollY&&scrollY<this.height){
					this.isScroll = false;
				}
	  	},
		//同步领域
			changeSelected(index){
				this.selected = index;
			},
			getMyProject () {
				this.$http.get(host.host+'/api/me/project').then((res)=>{
					console.log(res)
				})
			}
    },
    components:{

    },
		created() {
		  //do something after creating vue instance
		  // this.getMyProject()
		}
}
</script>

<style scoped="scoped" lang="scss">
.content{
	width: 100%;
	height: 100%;
	font-size: 0.2rem;
	/*用户信息*/
	.personal_header{
		width: 100%;
		height: 3rem;
		padding: 0.36rem;
		position: relative;
		/*background: rgba(0,0,0,1) url(../assets/img/discovery/left_headportrait.png) no-repeat center/1000%;*/
		background: rgba(0,0,0,0.8);
		.top{
			overflow: hidden;
			.user_info{
				float: left;
				max-width: 70%;
				.user_pic{
					width: 1.2rem;
					height: 1.2rem;
					float: left;
					border-radius: 50%;
					img{
						width: 100%;
						height: 100%;
						border-radius: 50%;
					}
				}
				.user_message{
					float: left;
					padding-top: 0.2rem;
					margin-left: 0.2rem;
					max-width: 70%;
					overflow: hidden;
					dt{
						font-size: 0.32rem;
						color: #f4f4f4;
						overflow: hidden;
						text-overflow:ellipsis;
						white-space: nowrap;
					}
					dd{
						overflow: hidden;
						text-overflow:ellipsis;
						white-space: nowrap;
						font-size: 0.24rem;
						margin-top: 0.1rem;
						color: rgba(244,244,244,0.6);
					}
				}
			}
			.function{
				float: right;
				overflow: hidden;
				color: #fff;
				p{
					float: left;
					margin-left: 0.2rem;
				}
			}
		}
		.bottom{
			width: 100%;
			height: auto;
			color: #f4f4f4;
			padding-top: 0.4rem;
			text-align: center;
			display: flex;
			dt{
				font-size: 0.36rem;
			}
			dd{
				font-size: 0.24rem;
			}
			.concern{
				flex: 1;
			}
			.line{
				margin-top: 0.2rem;
				width: 1px;
				height: 0.32rem;
				background: #fff;
			}
			.fans{
				flex: 1;
			}
		}
	}
	/*中部导航*/
	.personal_nav{
		width: 100%;
		height: 1.5rem;
		display: flex;
		border-bottom: 0.01rem solid #eee;
		li{
			flex: 1;
			align-items: center;
		    justify-content: center;
		    display: flex;
		    flex-direction: column;
		    dl{
		    	position: relative;
		    	dt{
		    		text-align: center;
		    		img{
		    			width: 40%;
		    			height: 40%;
		    		}
		    		.message_number{
		    			width: 0.2rem;
		    			height: 0.2rem;
		    			border-radius: 50%;
		    			text-align: center;
		    			font-size: 0.06rem;
		    			color: #fff;
		    			line-height: 0.2rem;
		    			background: red;
		    			position: absolute;
		    			right: 10%;
		    			top: 0;
		    		}
		    		.fans_number{
		    			width: 0.16rem;
		    			height: 0.16rem;
		    			border-radius: 50%;
		    			background: red;
		    			position: absolute;
		    			right: 20%;
		    			top: 0;
		    		}
		    	}
		    	dd{
		    		padding-top: 0.1rem;
		    		color: #666;
		    		font-size: 0.24rem;
		    	}
		    }
		}
	}
	/*内容区域*/
	.personal_content{
		background: rgb(244,244,244);
		width: 100%;
		height: auto;
		.tab_bar{
			width: 100%;
			padding: 0 0.28rem;
			display: flex;
			color: #666;
			height:0.88rem;
			line-height:0.88rem;
			font-size:0.28rem;
			background: #fff;
			li{
				margin-right: 0.24rem;
			}
			.active{
				color: #40ad5c;
				border-bottom: 0.01rem solid #40ad5c;
			}
		}
		.tab_bar_content{
			width: 100%;
			height: auto;
			overflow: auto;
			margin-top: 0.2rem;
			margin-bottom: 1rem;
			/*项目集合*/
			.project_list{
				display: flex;
				width: 100%;
				height: auto;
	    		flex-direction: column;
				background: #f4f4f4;
				padding-top: 0.1rem;
				/*单个项目*/
				.project_item{
					display: flex;
	    			flex-direction: column;
					margin-bottom: 0.2rem;
					background: #fff;
					.line{
						border: 1px solid #f4f4f4;
					}
					.item_top{
						width: 100%;
						height: 0.8rem;
						padding: 0.26rem 0.36rem 0;
						overflow: hidden;
						.item_top_l{
							float: left;
							/*支持*/
							.support{
								width: 2rem;
								height: 0.38rem;
								background: url(../assets/img/discovery/un_upport.png) no-repeat left top/100% 100%;
								p{
									color: #ec7d00;
									width: 0.8rem;
									height: 0.38rem;
									float: right;
									/*padding-right: 0.1rem;*/
									text-align:center;
									font-size: 0.24rem;
									line-height: 0.38rem;
								}
							}
						}
						.item_top_r{
							float: right;
							font-size: 0.24rem;
							/*浏览*/
							.scan{
								float: left;
								margin-right: 0.24rem;
								.scan_info{
									display: flex;
									.scan_bg{
										width: 0.32rem;
										height: 0.24rem;
										margin-right: 0.1rem;
										margin-top: 0.03rem;
										img{
											width: 100%;
											height: 100%;
										}
									}
									.scan_title{
										margin-right: 0.1rem;
										color: rgb(102,102,102);
									}
									.scan_number{
										color: rgb(153,153,153);
									}
								}
							}
							/*评论*/
							.comment{
								float: right;
								.comment_info{
									display: flex;
									.comment_bg{
										width: 0.3rem;
										height: 0.26rem;
										margin-top: 0.03rem;
										margin-right: 0.1rem;
										img{
											width: 100%;
											height: 100%;
										}
									}
									.comment_title{
										margin-right: 0.1rem;
										color: rgb(102,102,102);
									}
									.comment_number{
										color: rgb(153,153,153);
									}
								}
							}
						}
					}
					/*项目区域*/
					.item_middle{
						width: 100%;
						height: 2.5rem;
						padding: 0 0.36rem;
						.item_middle_l{
							float:left;
							margin-right: 0.36rem;
							padding-top: 0.34rem;
							/*项目logo*/
							.project_logo{
								width: 1.8rem;
								height: 1.8rem;
								border-radius: 0.2rem;
								background: #fff;
								border: 0.01rem solid rgb(204,204,204);
								img{
									width: 100%;
									height: 100%;
								}
							}
						}
						.item_middle_r{
							float:left;
							padding-top: 0.52rem;
							/*项目文字信息*/
							.project_info{
								width: 4.2rem;
								overflow:hidden;
								.project_title{
									font-size: 0.36rem;
									font-weight: bold;
									color: rgb(51,51,51);
									margin-bottom: 0.2rem;
									overflow: hidden;
									text-overflow:ellipsis;
									white-space: nowrap;
								}
								.project_text{
									color: rgb(102,102,102);
									font-size: 0.28rem;
								}
							}
						}
					}
					.item_bottom{
						width: 100%;
						height: 0.9rem;
						padding: 0.2rem 0.36rem 0;
						overflow: hidden;font-size: 0.24rem;
						color: rgb(153,153,153);
						.item_bottom_l{
							float: left;
							overflow: hidden;
							p{
								float: left;
								margin-top: 0.1rem;
								&:nth-of-type(1){
									width: 0.74rem;
									height: 0.38rem;
									text-align: center;
									line-height: 0.38rem;
									border-radius: 0.1rem;
									border: 1px solid rgb(153,153,153);
								}
								&:nth-of-type(2){
									margin-left: 0.1rem;
								}
							}
						}
						.item_bottom_r{
							float: right;
							width: 1.8rem;
							height: 0.5rem;
							border-radius: 0.25rem;
							line-height: 0.5rem;
							text-indent: 0.2rem;
							border: 1px solid rgb(91,167,253);
							background: url(../assets/img/user/ico_share.png) no-repeat 90% center/20%;
						}
					}
				}
			}
		}
	}
}
</style>
