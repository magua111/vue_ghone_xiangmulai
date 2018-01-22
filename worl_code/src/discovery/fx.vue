<template>
<!--主要内容区-->
<div class="content">
	<!--项目集合-->
	<mt-loadmore style="font-size: 0.3rem;background: #000;color: #fff;" :topMethod="reloadProject" :topDistance="70"
		:topPullText="pullText" :topDropText="dropText" :topLoadingText="loadingText"
		>
  	<div class="project_list" 
  		v-infinite-scroll="loadMore"
  			infinite-scroll-disabled="loading"
  			infinite-scroll-distance="10">
  		<!--单个项目-->
  		<div class="project_item" v-for="(item,index) in list" :key="index">
  			<div class="item_top">
  				<div class="item_top_l">
  					<div @click="support(index)" class="support">
  						<p>{{item.likerCount}}</p>
  					</div>
  				</div>
  				<v-support :item="item"></v-support>
  			</div>
  			<p class="line"></p>
  			<!-- <router-link to="/discovery/detail" tag="div" class="item_middle"> -->
  				<!--项目主体-->
  				<!-- <div class="item_middle_l">
  					<div class="project_logo"><img src="../assets/img/discovery/logo230x230.png"/></div>
  				</div>
  				<div class="item_middle_r">
  					<dl class="project_info">
  						<dt class="project_title">{{item.name}}</dt>
  						<dd class="project_text">{{item.shortDesc}}</dd>
  					</dl>
  				</div> -->
        <v-project-info :item="item"></v-project-info>
        <!-- </router-link> -->
  			<p class="line"></p>
  			<div class="item_bottom">
  				<!--作者信息-->
  				<div class="project_auto">
  					<router-link to="/discovery/projectPersonal" tag="div" class="project_auto_pic">
  						<img src="../assets/img/discovery/left_headportrait.png"/>
  					</router-link>
  					<p class="project_auto_name">清幽</p>
  				</div>
  				<!--支持者-->
  				<div class="project_support">
  					<div class="project_support_list">
  						<i class="project_support_pic">
  							<img src="../assets/img/discovery/right_headportrait.png"/>
  						</i>
  						<i class="project_support_pic">
  							<img src="../assets/img/discovery/right_headportrait.png"/>
  						</i>
  						<i class="project_support_pic">
  							<img src="../assets/img/discovery/right_headportrait.png"/>
  						</i>
  						<i class="project_support_pic">
  							<img src="../assets/img/discovery/right_headportrait.png"/>
  						</i>
  					</div>
  					<!--分享-->
  					<div class="share">
  						<i class="share_bg">
  							<img src="../assets/img/user/ico_share.png"/>
  						</i>
  						<span class="share_number">128</span>
  					</div>
  				</div>
  			</div>
  		</div>
  	</div>
  	</mt-loadmore>
</div>
</template>

<script>
import { Toast,Indicator,InfiniteScroll,Loadmore } from 'mint-ui';
import Vue from 'vue'
//滚动加载更多
Vue.use(InfiniteScroll);
import host from '../config'
export default {
    data(){
        return {
        	list:[],
        	isSupport:false,
        	loading:false,
        	num:0,
        	pullText:'下拉刷新',
        	dropText:'刷新中',
        	loadingText:'刷新成功'
        }
    },
    created(){
    	this.getProject();
    },
    mounted(){

    },
    methods:{
    	toast(text){
    		Toast({
			  message: text,
			  position: 'middle',
			  duration: 1000
			});
    	},
    	//上拉刷新操作
    	reloadProject(){
    		window.location.reload()
    	},
    	//获取数据
    	getProject(){
    		//加载中
    		Indicator.open();
    		let that = this;
    		
    		this.$http({
				method:'get',
				url:host.host+'/api/discovery',
				params:{
					from:this.num,
					size:10
				},
			})
			.then(function(res){
				console.log(res)
				that.num = that.num + 10;
				//加载完成
				Indicator.close();
			  	that.list = that.list.concat(res.data.data);
			})
			.catch(function(err){
//		  		console.log(err);
			});
    	},
    	loadMore() {
		  this.loading = true;
		  this.getProject();
		  this.loading = false;
		},
    	//支持
    	support(index){

    	}
    },
    components:{
		'mt-loadmore':Loadmore 
    }
}
</script>

<style scoped="scoped" lang="scss">
	/*主体内容区*/
	.content{
		width: 100%;
		height: 100%;
		/*项目集合*/
		.project_list{
			display: flex;
			width: 100%;
			height: auto;
    		flex-direction: column;
			background: #f4f4f4;
			padding-top: 0.1rem;
			margin-bottom: 1rem;
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
							background: url(../assets/img/discovery/un_upport.png) no-repeat left top/contain;
							p{
								color: #ec7d00;
								width: 0.8rem;
								height: 0.38rem;
								float:right;
								padding-right: 0.38rem;
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
								overflow: hidden;
								text-overflow:ellipsis;
								white-space: nowrap;
							}
						}
					}
				}
				.item_bottom{
					width: 100%;
					height: 1.2rem;
					padding: 0.3rem 0.36rem 0;
					overflow: hidden;
					/*项目作者*/
					.project_auto{
						float: left;
						.project_auto_pic{
							float: left;
							width: 0.6rem;
							height: 0.6rem;
							img{
								display: block;
								width: 100%;
								height: 100%;
							}
						}
						.project_auto_name{
							float: left;
							margin-left: 0.14rem;
							color: rgb(102,102,102);
							font-size: 0.24rem;
							padding-top: 0.12rem;
						}
					}
					/*项目支持者*/
					.project_support{
						float: right;
						.project_support_list{
							float: left;
							.project_support_pic{
								float: left;
								margin-right: 0.24rem;
								width: 0.52rem;
								height: 0.52rem;
								img{
									display: block;
									width: 100%;
									height: 100%;
								}
							}
						}
						/*分享*/
						.share{
							float: left;
							margin-bottom: 0.34rem;
							margin-top: 0.05rem;
							.share_bg{
								float: left;
								margin-right: 0.1rem;
								width: 0.32rem;
								height: 0.32rem;
								img{
									display: block;
									width: 100%;
									height: 100%;
								}
							}
							.share_number{
								float: left;
								font-size: 0.24rem;
								color: rgb(152,152,152);
							}
						}
					}
				}
			}
		}
	}
</style>
