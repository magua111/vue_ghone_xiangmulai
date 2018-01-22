<template>
	<div class="content">
		<div class="top">
			<p @click="cancle">取消</p>
			<p @click="confirm">确定</p>
		</div>
		<div class="edit">
			<p class="tip">
				<span>已选标签</span>
				<span>( 最多可添加三个标签 )</span>
			</p>
			<p class="addTags" @click="addTags('自定义标签')">
				自定义添加
			</p>
		</div>
		<div class="middle">
		    <p @click="hideTag(item,index)" v-for="(item,index) in showList">{{item.title}}</p>
		</div>
		<div class="content">
			<div class="title">选择标签</div>
			<div class="tags">
				<p @click="showTag(item,index)" ref="tag" class="itemtag" :class="{active:item.isAdd}" v-for="(item,index) in tagsList" :key="index">{{item.title}}</p>
			</div>
		</div>
		
		
	</div>
</template>

<script>
import { MessageBox } from 'mint-ui' 
export default{
	data(){
		return{
			tagsList:[
				{
					title:'IT互联网',
					isAdd:false,
					index:0
				},
				{
					title:'社交',
					isAdd:false,
					index:1
				},
				{
					title:'图片社交',
					isAdd:false,
					index:2
				},
				{
					title:'校园社交',
					isAdd:false,
					index:3
				},
				{
					title:'电子商务',
					isAdd:false,
					index:4
				},
				{
					title:'新零售',
					isAdd:false,
					index:5
				},
				{
					title:'人工智能',
					isAdd:false,
					index:6
				},
				{
					title:'大数据',
					isAdd:false,
					index:7
				},
				{
					title:'VR/AR',
					isAdd:false,
					index:8
				},
				{
					title:'物联网',
					isAdd:false,
					index:9
				},
				{
					title:'文化娱乐',
					isAdd:false,
					index:10
				},
				{
					title:'消费升级',
					isAdd:false,
					index:11
				},
				{
					title:'网红经济',
					isAdd:false,
					index:12
				},
				{
					title:'农业',
					isAdd:false,
					index:13
				},
				{
					title:'体育健身',
					isAdd:false,
					index:14
				},
				{
					title:'教育',
					isAdd:false,
					index:15
				},
				{
					title:'游戏',
					isAdd:false,
					index:16
				},
				{
					title:'金融',
					isAdd:false,
					index:17
				},
				{
					title:'广告营销',
					isAdd:false,
					index:18
				},
				{
					title:'社交工具',
					isAdd:false,
					index:19
				},
				{
					title:'智能硬件',
					isAdd:false,
					index:20
				},
				{
					title:'房产',
					isAdd:false,
					index:21
				},
				{
					title:'智能家居',
					isAdd:false,
					index:22
				},
				{
					title:'O2O',
					isAdd:false,
					index:23
				},
				{
					title:'旅游',
					isAdd:false,
					index:24
				},
				{
					title:'物流',
					isAdd:false,
					index:25
				},
				{
					title:'IT研发',
					isAdd:false,
					index:26
				},
				{
					title:'软件',
					isAdd:false,
					index:27
				},
			],
			showList:[],
		}
	},
	mounted(){
		if(this.$parent.info){
			this.$parent.info.tags.forEach((item,index)=>{
				this.showList.push({
					title:item,
					isAdd:true
				})
				this.tagsList.forEach((item1,index1)=>{
					if(item1.title==item){
						item1.isAdd = true;
					}
				})
			})
		}else{
			let arr = JSON.parse(sessionStorage.getItem('tags'));
			arr.forEach((item,index)=>{
				this.showList.push({
					title:item,
					isAdd:true
				})
				this.tagsList.forEach((item1,index1)=>{
					if(item1.title==item){
						item1.isAdd = true;
					}
				})
			})
		}
	},
	methods:{
		//选择标签
		showTag(item,index){
			if(!item.isAdd){
				if(this.showList.length>2){
					return;
				}
				item.isAdd = true;
				this.showList.push(item);
			}else{
				let aindex;
				item.isAdd = false;
				this.showList.forEach((value,index)=>{
					if(value.title==item.title){
						aindex = index;
					}
				})
				this.showList.splice(aindex,1);
			}
		},
		addTags(txt){
			let that = this;
			if(this.showList.length>2){
				return;
			}
			MessageBox.prompt('',{
    			message: txt,
    			inputPlaceholder:'六个字以内',
                confirmButtonText: '确定',
                cancelButtonText: '取消'
    		})
			.then(value=>{
				let aitem;
				this.tagsList.forEach((item,index)=>{
					if(value.value == item.title){
						aitem = item.title;
					}
				})
				if(aitem==value.value){
					this.tagsList.forEach((item,index)=>{
						if(aitem==item.title){
							item.isAdd = true;
						}
					})
				}
				this.showList.push({
					title:value.value.slice(0,6),
					isAdd:false
				});
			})
		},
		hideTag(item,index){
			this.tagsList.forEach((value1,index1)=>{
				if(value1.title==item.title){
					value1.isAdd = false;
				}
			})
			let aindex;
			this.showList.forEach((value,index)=>{
				if(value.title==item.title){
					aindex = index;
				}
			})
			this.showList.splice(aindex,1);
		},
		//保存
		confirm(){
			let arr = [];
			this.showList.forEach((item,index)=>{
				arr.push(item.title);
			})
			if(this.$parent.info){
				this.$parent.info.tags = arr;
				this.$parent.message.tags = arr;
				this.$parent.isTags = false;
			}else{
				sessionStorage.setItem('tags',JSON.stringify(arr));
				this.$router.back(-1);
			}
		},
		//取消
		cancle(){
			if(this.$parent.info){
				this.$parent.isTags = false;
			}else{
				this.$router.back(-1);
			}
		}
	},
}
</script>

<style scoped="scoped" lang="scss">
.content{
	width: 100%;
	height: 100%;
	position: absolute;
	left: 0;
	top: 0;
	overflow: hidden;
	background: rgb(248,248,248);
	.top{
		width: 100%;
		height: 0.88rem;
		display: flex;
		align-items: center;
		font-size: 0.28rem;
		padding: 0 0.3rem;
		color: rgb(51,51,51);
		p{
			&:nth-of-type(1){
				flex: 1;
			}
			&:nth-of-type(2){
				flex: 1;
				text-align: right;
			}
		}
	}
	.edit{
		width: 100%;
		height: 0.88rem;
		background: #fff;
		display: flex;
		padding: 0 0.3rem;
		align-items: center;
		border-top: 1px solid rgb(238,238,238);
		border-bottom: 1px solid rgb(238,238,238);
		.tip{
			flex: auto;
			span{
				&:nth-of-type(1){
					font-size: 0.32rem;
					color: rgb(51,51,51);
				}
				&:nth-of-type(2){
					font-size: 0.26rem;
					color: rgb(153,153,153);
				}
			}
		}
		.addTags{
			width: 1.72rem;
			height: 0.46rem;
			line-height: 0.46rem;
			color: rgb(153,153,153);
			border: 1px solid rgb(153,153,153);
			border-radius: 0.1rem;
			font-size: 0.24rem;
			text-align: center;
		}
	}
	.middle{
		width: 100%;
		height: 0.88rem;
		padding: 0.15rem 0.3rem 0;
		display: flex;
		p{
			height: 0.54rem;
			line-height: 0.5rem;
			border-radius: 0.3rem;
			padding: 0 0.24rem;
			color: #fff;
			background: rgb(37,155,255);
			margin-right: 0.26rem;
		}
	}
	.content{
		width: 100%;
		position: relative;
		.title{
			height: 0.88rem;
			line-height: 0.88rem;
			padding: 0 0.3rem;
			font-size: 0.32rem;
			color: rgb(51,51,51);
			background: #fff;
			border-bottom: 1px solid rgb(238,238,238);
		}
		.tags{
			padding: 0.24rem 0.3rem 0;
			overflow: hidden;
			.itemtag{
				float: left;
				height: 0.54rem;
				line-height: 0.5rem;
				padding: 0 0.24rem;
				border-radius: 0.3rem;
				color: rgb(37,155,255);
				border: 1px solid rgb(37,155,255);
				margin-right: 0.26rem;
				margin-bottom: 0.24rem;
			}
		}
	}
	.active{
		background: rgb(37,155,255)!important;
		color: #fff!important;
	}
}
</style>