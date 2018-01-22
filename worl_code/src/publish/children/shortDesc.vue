<template>
	<div class="content">
		<textarea maxlength="30" @keyup="check($event)" style="padding: 0.24rem 0.36rem;width: 100%;height: 3rem;border: 0;font-size: 0.28rem;color: rgb(102,102,102);resize:none;" v-model="shortDesc">{{shortDesc}}</textarea>
		<p style="padding: 0.36rem;color: rgb(204,204,204);font-size: 0.24rem;background: rgb(248,248,248);"><span v-model="size">{{size}}</span>/30</p>
		<p style="width: 100%;height: 1rem;background: rgba(44,122,250,0.8);color: #fff;text-align: center;line-height: 1rem;font-size: 0.36rem;" @click="sureShortDesc">确定</p>
	</div>
</template>

<script>
export default{
	data(){
		return{
			shortDesc:null,
			size:0
		}
	},
	mounted(){
		
	},
	methods:{
		//检查字数
    	check(ev){
    		this.size = 30 - this.shortDesc.length;
    	},
    	sureShortDesc(){
    		this.$parent.info.shortDesc = this.shortDesc;
    		this.$parent.message.shortDesc = this.shortDesc;
			this.$parent.isShortDesc = false;  		
    	}
	},
	created(){
		this.shortDesc = this.$parent.info.shortDesc;
		this.check();
	}
}
</script>

<style scoped="scoped" lang="scss">
.content{
	width: 100%;
	height: 100%;
	position: fixed;
	left: 0;
	top: 0;
	z-index: 100;
	background: #fff;
	p{
		&:nth-of-type(2){
			position: absolute;
			bottom: 0;
		}
	}
}
</style>