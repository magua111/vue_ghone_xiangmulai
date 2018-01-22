<template>
	<div class="content">
		<router-link to="/user/accountSetting" tag="div" class="top">
			<img class="user_pic" :src="info.headPic"/>
			<dl class="user_info">
				<dt class="user_nickName">{{info.nickName?info.nickName:'未设置'}}</dt>
				<dd class="user_signTure">{{info.signature?info.signature:'点击设置个性签名'}}</dd>
			</dl>	
		</router-link>
		<div class="bottom" v-for="(item,index) in list" :key="index" :class="{padding:index==0}">
			<img class="icon" :src="item.url"/>
			<span class="msg">{{item.title}}</span>
		</div>
	</div>
</template>

<script>
import host from '../../config.js'
export default{
	data(){
		return{
			info:null,
			list:[
				{
					url:require('./../../assets/img/user/ico_setting.png'),
					title:'通用设置'
				},
				{
					url:require('./../../assets/img/user/ico_help.png'),
					title:'帮助中心'
				},
				{
					url:require('./../../assets/img/user/ico_like_setting.png'),
					title:'给个好评'
				},
				{
					url:require('./../../assets/img/user/ico_message_setting.png'),
					title:'告诉朋友'
				},
				{
					url:require('./../../assets/img/user/ico_pc_setting.png'),
					title:'项目来电脑版'
				},
				{
					url:require('./../../assets/img/user/ico_about.png'),
					title:'关于项目来'
				},
			]
		}
	},
	mounted(){
		this.$http.get(host.host+'/api/me',{}).then(res=>{
			console.log(res)
			this.info = res.data.data;
		})
		
	},
}
</script>

<style scoped="scoped" lang="scss">
.content{
	width: 100%;
	height: 100%;
	background: #eee;
	padding: 0.4rem 0;
	.top{
		display: flex;
		width: 100%;
		background: #fff url(../../assets/img/user/ico_arrow_right.png) no-repeat 98% center/3% auto;
		padding: 0.35rem 0.36rem;
		.user_pic{
			width: 1rem;
			height: 1rem;
			border-radius: 50%;
		}
		.user_info{
			width: 6rem;
			margin-left: 0.2rem;
			padding-top: 0.1rem;
			.user_nickName{
				font-size: 0.3rem;
				color: #333;
			}
			.user_signTure{
				font-size: 0.24rem;
				color: #999;
				overflow: hidden;
				text-overflow:ellipsis;
				white-space: nowrap;
			}
		}
	}
	.bottom{
		width: 100%;
		height: 0.9rem;
		line-height: 0.9rem;
		display: flex;
		padding: 0 0.36rem;
		background: #fff url(../../assets/img/user/ico_arrow_right.png) no-repeat 98% center/3% auto;
		.icon{
			width: auto;
			height: 50%;
			padding-top: 0.22rem;
		}
		.msg{
			font-size: 0.3rem;
			margin-left: 0.3rem;
			color: #333;
		}
	}
	.padding{
		margin: 0.4rem 0;
	}
}
</style>