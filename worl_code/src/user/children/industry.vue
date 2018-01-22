<template>
	<ul class="content">
		<li class="item" v-for="(item,index) in list" @click="selected(index)" :class="{bg:index==selectedIndex}">
			<span :style="{background:item.bg}" :class="[index==0?'padding':'',index==13?'paddings':'']">{{item.name1}}</span>
			<span>{{item.name2}}</span>
		</li>
	</ul>
</template>

<script>
//引入消息盒
import { MessageBox } from 'mint-ui'
import host from '../../config'
export default{
	data(){
		return{
			selectedIndex:0,
			list:[
				{
					name1:'IT',
					name2:'计算机/互联网/通信',
					bg:'#87bee7'
				},
				{
					name1:'制造',
					name2:'生产/工艺 /制造',
					bg:'#87bee7'
				},
				{
					name1:'医疗',
					name2:'医疗/护理/制药',
					bg:'#87bee7'
				},
				{
					name1:'金融',
					name2:'金融/银行/投资/保险',
					bg:'#f1a662'
				},
				{
					name1:'商业',
					name2:'商业/服务业/个体经营',
					bg:'#f1a662'
				},
				{
					name1:'文化',
					name2:'文化/广告/传媒',
					bg:'#e68b6c'
				},
				{
					name1:'艺术',
					name2:'娱乐/艺术/表演',
					bg:'#e68b6c'
				},
				{
					name1:'律师',
					name2:'律师/法务',
					bg:'#86c8ba'
				},
				{
					name1:'教育',
					name2:'教育/培训',
					bg:'#86c8ba'
				},
				{
					name1:'行政',
					name2:'公务员/行政/事业单位',
					bg:'#86c8ba'
				},
				{
					name1:'模特',
					name2:'模特',
					bg:'#c297cc'
				},
				{
					name1:'空姐',
					name2:'空姐',
					bg:'#c297cc'
				},
				{
					name1:'学生',
					name2:'学生',
					bg:'#dc97ac'
				},
				{
					name1:'其它',
					name2:'其它',
					bg:'purple'
				},
			]
		}
	},
	created(){
		this.selectedIndex = sessionStorage.getItem('selectedIndex');
	},
	mounted(){

	},
	methods:{
		selected(index){
			this.selectedIndex = index;
			let that = this;
	        //调用接口，发起个人基本信息修改请求
	        this.$http.put(host.host+'/api/me',{
	        	familiarFields:index
	        })
			.then(function(res){
				sessionStorage.setItem('selectedIndex',index);
				that.$router.push('/user/accountSetting');
			})
			.catch(function(err){
//			  	console.log(err);
			});
		}
	}
}
</script>

<style scoped="scoped" lang="scss">
.content{
	width: 100%;
	height: 100%;
	background: #fff;
	padding: 0 0.36rem;
	position: absolute;
	z-index: 100;
	.item{
		width: 100%;
		height: 0.9rem;
		line-height: 0.9rem;
		font-size: 0.3rem;
		border-bottom: 0.01rem solid #ddd;
		span{
			padding: 0 0.15rem;
			color: white;
			font-size: 0.24rem;
			border-radius: 0.04rem;
			&:nth-of-type(2){
				color: #434343;
			}
		}
		.padding{
			padding: 0 0.3rem
		}
		.paddings{
			padding: 0 0.15rem;
		}
	}
	.bg{
		background: url(../../assets/img/user/selected.png) no-repeat right center/auto 30%;
	}
}
</style>
