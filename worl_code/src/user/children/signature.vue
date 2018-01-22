<template>
	<div class="content">
		<textarea maxlength="30" @keyup="check($event)" style="padding: 0.24rem 0.36rem;width: 100%;height: 3rem;border: 0;font-size: 0.28rem;color: rgb(102,102,102);resize:none;" v-model="signature">{{signature}}</textarea>
		<p style="padding: 0.36rem;color: rgb(204,204,204);font-size: 0.24rem;background: rgb(248,248,248);"><span v-model="size">{{size}}</span>/30</p>
		<p style="width: 100%;height: 1rem;background: rgba(44,122,250,0.8);color: #fff;text-align: center;line-height: 1rem;font-size: 0.36rem;" @click="cancleSignature">确定</p>
	</div>
</template>

<script>
import host from '../../config'
export default{
	data(){
		return{
			signature:'',
			size:0
		}
	},
	mounted(){
		let that = this;
		this.$http.get(host.host+'/api/me',{})
		.then(function(res){
			that.signature = res.data.data.signature;
			that.check();
		})
		.catch(function(err){

		});
	},
	methods:{
		//检查字数
    	check(ev){
    		this.size = 30 - this.signature.length;
    	},
    	cancleSignature(){
    		let that = this;
    		this.$http.put(host.host+'/api/me',{
    			signature:this.signature
    		})
			.then(function(res){
				that.$router.push('/user/accountSetting');
			})
			.catch(function(err){

			});
    	}
	},
	created(){
		
	}
}
</script>

<style scoped="scoped" lang="scss">
.content{
	width: 100%;
	height: 100%;
	position: relative;
	background: #fff;
	p{
		&:nth-of-type(2){
			position: absolute;
			bottom: 0;
		}
	}
}
</style>
