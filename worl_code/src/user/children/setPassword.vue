<template>
	<form class="content">
		<div class="old_password">
			<p class="old_password_title">原密码</p>
			<input class="old_password_title" v-model="oldPassword" type="password" placeholder="请输入原密码" maxlength="25" />
		</div>
		<div class="new_password">
			<p class="new_password_title">新密码</p>
			<input class="new_password" v-model="newPassword" type="password" placeholder="请输入新密码" maxlength="25" />
		</div>
		<div class="password_sure">
			<p class="password_sure_title">确认密码</p>
			<input class="password_sure" v-model="surePassword" type="password" placeholder="请再输一次" maxlength="25" />
		</div>
		<!--<p class="tip">设置密码后您可以直接用项目号 + 密码登录</p>-->
		<p class="sure" @click="makeSure()">设置</p>
	</form>
</template>

<script>
import reg from '../../assets/js/regular.js'
import { Toast } from 'mint-ui';
import host from '../../config'
//引入消息盒
import { MessageBox } from 'mint-ui'
export default{
	data(){
		return{
			oldPassword:'',
			newPassword:'',
			surePassword:''
		}
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
    	makeSure(){
    		let that = this;

    		if(this.warnning){
    			return;
    		}

    		if(!this.oldPassword.trim()){
				this.$options.methods.toast('密码不能为空');
				return;
    		}
    		if(!reg.checkPassword(this.oldPassword)){
				this.$options.methods.toast('密码格式不正确');
    		}
    		if(!this.newPassword.trim()){
				this.$options.methods.toast('新密码不能为空');
				return;
    		}
    		if(!reg.checkPassword(this.newPassword)){
				this.$options.methods.toast('新密码格式不正确');
    		}
    		if(!this.surePassword.trim()){
				this.$options.methods.toast('确认密码不能为空');
				return;
    		}
    		if(!reg.checkPassword(this.surePassword)){
				this.$options.methods.toast('确认密码格式不正确');
    		}
    		if(this.newPassword!==this.surePassword){
    			this.$options.methods.toast('两次输入的密码不一致，请重新输入');
				return;
    		}
    		this.warnning = true;
    		//调用接口，发起修改密码请求
            this.$http.post(host.host+'/api/changePwd',{
		  		oldPwd: this.oldPassword,
                password: this.newPassword,
                confirmedPwd: this.surePassword
			})
			.then(function(res){
				that.warnning = false;
				console.log(res);
				if(res.data.ret=='1'){
			  		that.$options.methods.toast('请正确输入密码');
			  		return;
			  	}
				MessageBox.confirm('密码修改成功').then(action => {
				  that.$router.push('/user');
				});

			})
			.catch(function(err){
			  	console.log(err);
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
	position: absolute;
	z-index: 100;
	padding: 0.6rem 0.36rem 0;
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
    .old_password,.new_password,.password_sure{
    	display: flex;
    	height: 1rem;
    	line-height: 1rem;
    	p{
    		font-size: 0.32rem;
    		width: 1.5rem;
    	}
    }
    .tip{
    	margin: 0.48rem 0 0.22rem;
		font-size: 0.24rem;
		color: #999;
		text-align: center;
    }
	.sure{
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
