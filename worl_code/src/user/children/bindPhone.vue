<template>
	<form class="content">
		<div class="user_phone_wrap">
			<label for="userphone">手机号</label>
			<input type="text" v-model="userphone" id="userphone" maxlength="11" placeholder="请输入手机号" />
		</div>
		<div class="user_validate_wrap">
			<label for="validate">验证码</label>
			<input type="text" v-model="validate" id="validate" maxlength="5" placeholder="请输入验证码" />
		</div>
		<p class="tip">手机号只用于安全验证，不会泄露您的任何信息哦</p>
		<p class="bindPhone">绑定手机号</p>
	</form>
</template>

<script>
export default{
	data(){
		return{
			userphone:'',
			validate:''
		}
	},
}
</script>

<style scoped="scoped" lang="scss">
.content{
	width: 100%;
	height: 100%;
	background: #fff;
	position: absolute;
	z-index: 100;
	padding: 0.6rem 0.36rem 0;
	label{
		font-size: 0.32rem;
		line-height: 1rem;
		padding: 0 0.2rem;
	}
	input{
		font-size: 0.3rem;
		flex: auto;
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
	.user_phone_wrap,.user_validate_wrap{
		width: 100%;
		height: 1rem;
		display: flex;
		border-bottom: 0.01rem solid #ccc;
	}
	.tip{
		margin: 0.48rem 0 0.22rem;
		font-size: 0.24rem;
		color: #999;
		text-align: center;
	}
	.bindPhone{
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