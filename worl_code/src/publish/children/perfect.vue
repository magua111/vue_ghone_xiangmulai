<template>
	<div class="content">
		<div class="top">
			<p>
				<router-link to="" tag="a" class="set_title">点击设置标题</router-link>
				<router-link to="" tag="a" class="share"><img src=""/>分享项目</router-link>
			</p>
			<p>
				<router-link to="" tag="a" class="add_music"><img src=""/>添加音乐</router-link>
				<router-link to="" tag="a" class="page_set">页面设置</router-link>
			</p>
		</div>
		<div class="info">
			<div class="nav">
				<div class="introduce">
					
					<img src=""/>
					<div class="describe">
						<h2>新优互动-PP匠</h2>
						<p>专注于将PPT转成H5的平台</p>
						<p>2017-11-2</p>
					</div>
				</div>
			</div>
			<ul class="mess">
				<li class="basic">基本信息</li>
				<li class="business">商业信息</li>
				<li class="team">团队信息</li>
			</ul>
			<div class="add">
				<img src="" class="add_log"/>
				<p class="substance">
					<router-link to="" tag="a" class=""><img src=""/></router-link>
					<router-link to="" tag="a" class=""><img src=""/></router-link>
					<router-link to="" tag="a" class=""><img src=""/></router-link>
				</p>
			</div>
			<div class="basic_mess">
				<router-link to="" tag="p" class="to_reset"><img src=""/></router-link>
				<div class="basic_details">
					<img src="" class="basic_log"/>
					<div class="basic_describe">
						<h2>新优互动-PP匠</h2>
						<p>专注于将PPT转成H5的平台</p>
						<p>
							<router-link to="" tag="a" class=""><img src=""/>TAG</router-link>
							<router-link to="" tag="a" class="">图片照片</router-link>
							<router-link to="" tag="a" class="">工具软件</router-link>
							<router-link to="" tag="a" class="">文件文档</router-link>
						</p>
					</div>
				</div>
				<p class="adress">
					<router-link to="" tag="a" class=""><img src=""/></router-link>
					<router-link to="" tag="a" class="">工具软件>文件文档</router-link>
					<router-link to="" tag="a" class="">湖北·武汉</router-link>
					<router-link to="" tag="a" class="">
						<img src=""/>
						<img src=""/>
						<img src=""/>
					</router-link>
				</p>
			</div>
		</div>
		<router-link to="" tag="p" class="over">完成</router-link>
	</div>
</template>

<!--<script>
import $ from 'jquery'
export default {
	data(){
        return {
        	
        }
    },
    mounted(){
        $('.mainFooter').css({'display':'none'});
        $('.basic_mess').css({'display':'none'});
		window.addEventListener('scroll', this.handleScroll)
    },
    methods:{
      	handleScroll () {
			var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
			console.log(scrollTop)
		}
    },
    computed:{
    	
    },
    components:{
      
    }
}
</script>-->

<!--<style scoped="scoped" lang="scss">
@import "~@/scss/common.scss";
.content{
	@include flexbox();//弹性盒布局
    @include flex-direction(column);
    background: url(../../../static/imgs/bgd_pic.png) no-repeat center;
    background-size: 100% 100%;
    /*头部*/
   	.top{
   		@include rect(100%,1.27rem);
		@include bgcolor(#ccc);
		padding: .13rem .18rem .09rem;
		background: url(../../../static/imgs/icon_top_bg.png) no-repeat center;
		background-size: 3.75rem 1.27rem;
		p{
			@include flexbox();//弹性盒布局
			justify-content: space-between;
			&:nth-child(1){
	       		margin-bottom: .53rem;
	        }
			a{
				display: block;
				@include textcolor(#666);
				@include rect(.9rem,.26rem);
				@include lineheight(0.26rem);
				text-align: center;
				background: rgba(255,255,255,.5);
				border-radius: .04rem;
				img {
					display: inline-block;
					vertical-align: top;
					@include rect(.15rem,.15rem);
					margin-right: .04rem;
					margin-top: .05rem;
				}
			}
			.set_title{
				@include textcolor(#fff);
				font-size: 0.14rem;
				background: none;
			}
			.add_music {
				overflow: hidden;
				text-overflow:ellipsis;
				white-space: nowrap;
			}
		}
		
   	}
   	/*项目信息*/
   	.info {
   		min-height: 14rem;
   		/*项目描述*/
   		.nav {
   			@include rect(100%,1.41rem);
   			padding-top: .2rem;
   			background: rgba(0,0,0,.6);
   			.introduce {
   				@include flexbox();//弹性盒布局
   				@include rect(90%,1.13rem);
   				margin: 0 auto;
   				border: .02rem solid #2c7afa;
   				border-radius: .05rem;
   				@include bgcolor(#ffffff);
   				img{
   					display: block;
   					@include rect(.7rem,.7rem);
   					float: left;
   					margin: .15rem .15rem 0 .16rem;
   				}
   				.describe {
   					float: left;
   					font-size: .12rem;
   					h2{
	   					margin-top: .15rem;
	   					font-size: .2rem;
	   					@include textcolor(#333);
	   				}
	   				p{
	   					@include textcolor(#666);
	   					width: 1.8rem;
				        &:nth-child(2){
				       		font-size: .14rem;
				       		margin-bottom: .16rem;
				       		overflow: hidden;
							text-overflow:ellipsis;
							white-space: nowrap;
				        }
	   				}
   				}
   			}
   		}
   		/*信息分类*/
   		.mess{
   			@include rect(100%,.4rem);
   			padding: 0 5%;
   			background: rgba(0,0,0,.6);
   			margin-bottom: .09rem;
   			li{
   				@include rect(33.3%,.4rem);
   				@include lineheight(0.4rem);
   				text-align: center;
   				float: left;
   				font-size: .18rem;
   				@include textcolor(#fff);
   			}
   			.business{
				background: linear-gradient(to bottom, #396ca8, #3d6ca2);
			}
   		}
   		/*添加信息*/
   		.add{
   			@include rect(2.1rem,.34rem);
   			margin: 0 auto;
   			.add_log{
   				display:block;
				@include rect(.18rem,.18rem);
				float: left;
				margin-right: .1rem;
				margin-top: .08rem;
   			}
   			p{
   				@include flexbox();//弹性盒布局
   				padding: 0 .25rem;
   				justify-content: space-between;
   				@include rect(1.8rem,.34rem);
   				background: rgba(0,0,0,.4);	
   				border-radius: .08rem;
   				img{
   					display:block;
					@include rect(.2rem,.2rem);
					margin-top: .07rem;
   				}
   			}
   		}
   		/*基本信息*/
   		.basic_mess{
   			@include rect(92%,2.06rem);
   			@include bgcolor(#fff);
   			margin: 0 auto;
   			margin-bottom: .7rem;
   			border-radius: .05rem;
   			padding:0 .13rem;
   			.to_reset{
   				@include rect(100%,.4rem);
   				img{
   					display: block;
   					float: right;
   					margin-top: .15rem;
   				}
   			}
   			.basic_details{
   				@include rect(100%,1.14rem);
   				margin-bottom: .14rem;
   				.basic_log{
   					display: block;
   					float: left;
   					@include rect(1rem,1rem);
   					margin-right: .1rem;
   				}
   				.basic_describe {
   					float: left;
   					font-size: .12rem;
   					h2{
   						margin-top: .05rem;
	   					font-size: .2rem;
	   					@include textcolor(#333);
	   				}
	   				p{
	   					@include textcolor(#666);
	   					width: 1.58rem;
				        &:nth-child(2){
				       		font-size: .14rem;
				       		margin-bottom: .25rem;
				       		overflow: hidden;
							text-overflow:ellipsis;
							white-space: nowrap;
				        }
				        &:nth-child(3){
				        	@include flexbox();//弹性盒布局
							justify-content: space-between;
				       		font-size: .1rem;
				       		img{
				       			display: inline-block;
				       			@include rect(.1rem,.1rem);
				       		}
				       		a{
				       			@include textcolor(#005585);
				       		}
				        }
	   				}
   				}
   			}
   			.adress{
   				@include rect(100%,.25rem);
   				@include lineheight(0.25rem);
   				border:1px solid #eee;
   				border-radius: .04rem;
   				font-size: .12rem;
   				
   				img{
   					@include rect(.18rem,.18rem);
   				}
   				a{
   					@include textcolor(#999);
   					&:nth-child(4){
   						float: right;
   						margin-right: .03rem;
   					}
   				}
   			}
   		}
   	}
   	/*页脚*/
   	.over{
   		@include rect(100%, .49rem);
   		@include lineheight(0.49rem);
   		font-size: .18rem;
   		@include textcolor(#fffefe);
   		text-align: center;
   		@include bgcolor(#3770d7);
   		position: fixed;
   		bottom: 0;
   	}
}
</style>-->