<template>
	<form class="content">
		<p class="title">如遇手机号更换的情况，需给账号换绑手机号，第一步需验证原手机号，下一步再验证新手机号，即可完成换绑。</p>
		<p class="tips">
			<span class="tip1">目前绑定手机号</span>
			<span class="tip2">{{bindPhone}}</span>
		</p>
		<div class="validate">
			<p class="validate_l">验证码</p>
			<input type="text" class="validate_m" v-model="validate" @blur="check_validate()" maxlength="5" placeholder="请输入验证码" />
			<div class="validate_r">
				<p class="get_validate" @click="get_validate()">{{codeText}}</p>
			</div>
		</div>
		<router-link to="/user/accountSetting/changePhone/changePhone1" tag="p" class="changePhone">下一步</router-link>
	</form>
</template>

<script>
import host from '../../config'
export default{
	data(){
		return{
			bindPhone:'',
			validate:'',
			codeGetting:false,
        	codeText:"获取验证码",
		}
	},
	mounted(){
		this.bindPhone = sessionStorage.getItem('bindPhone');
	},
	methods:{
		//获取验证码
      	get_validate(){
//    		//倒计时
//    		if(!this.userphone.trim()){
//    			return;
//    		}
//          if(this.codeGetting){
//          	return false;
//          }else{
//          	let that = this;
//	            let count = 60;
//	            this.codeGetting = true;
//	            this.codeText = "60秒后重发";
//	            let timer = setInterval(function () {
//	                count--;
//	                if (count == 0){
//	                    clearInterval(self.codeTime);
//	                    that.codeText = "重发验证码";
//	                    clearInterval(timer)
//	                    that.codeGetting = false;
//	                }
//	                else {
//	                    that.codeText = count+" 秒后重发";
//	                }
//	            }, 1000);
//          };
//          //请求验证码接口
//			this.$http.get(host.host+'/api/sms/'+this.userphone,{})
//			.then(function(response){
//			  	console.log(response);
//			})
//			.catch(function(err){
//			  	console.log(err);
//			});
      	},
	}
}
</script>

<style scoped="scoped" lang="scss">
.content{
	width: 100%;
	height: 100%;
	background: #fff;
	position: absolute;
	padding: 0.4rem 0.56rem 0;
	z-index: 100;
	.title{
		font-size: 0.28rem;
		color: rgb(67,67,67);
		line-height: 0.5rem;
	}
	.tips{
		font-size: 0.32rem;
		margin: 0.7rem 0 0.36rem;
		overflow: hidden;
		.tip1{
			float: left;
		}
		.tip2{
			float: right;
		}
	}
	input{
		font-size: 0.3rem;
		border: 0;
		padding-left: 0.32rem;
	}
	input::-webkit-input-placeholder {
         /* placeholder颜色  */
         color: #ccc;
         /* placeholder字体大小  */
         font-size: 0.3rem;
        /* placeholder位置  */
         /*text-align: right;*/
    }
	.validate{
		display: flex;
		width: 100%;
		height: auto;
		padding-bottom: 0.64rem;
		position: relative;
		.validate_l{
			width: 1.5rem;
			font-size: 0.32rem;
			height: 1rem;
			line-height: 1rem;
		}
		.validate_m{
			flex: auto;
			height: 1rem;
			border: none;
			color: rgb(204,204,204);
			padding-left: 0.2rem;
		}
		.validate_r{
			width: 2rem;
			height: 1rem;
			padding-top: 0.25rem;
			.get_validate{
				text-align: center;
				padding: 0 0.05rem;
				line-height: 0.42rem;
				border-radius: 0.05rem;
				color: rgb(76,159,255);
				border: 0.01rem solid rgb(76,159,255);
				font-size: 0.2rem;
			}
		}
	}
	.changePhone{
		width: 100%;
		height: 0.8rem;
		text-align: center;
		line-height: 0.8rem;
		color: #fff;
		font-size: 0.3rem;
		border-radius: 0.1rem;
		margin-bottom: 0.6rem;
		background: linear-gradient(to right, #62c5fe, #4b9ffa);
	}
}
</style>
