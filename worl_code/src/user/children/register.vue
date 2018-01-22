<template>
	<div class="content" style="height: 100%;">
		<div class="login_pic">
			<p class="pic_wrap"><img src="../../assets/img/discovery/left_headportrait.png"/></p>
		</div>
		<form class="login_info">
			<div class="phone">
				<p class="phone_l">+86</p>
				<p class="line"></p>
				<input type="text" v-model="userphone" @blur="check_phone()" class="phone_m" maxlength="11" placeholder="请输入您的手机号码" />
				<p class="phone_r"></p>
			</div>
			<div class="password">
				<p class="password_l"></p>
				<p class="line"></p>
				<input :type="pwdType" v-model="password" @blur="check_password()" class="password_m" maxlength="25" placeholder="6-25位字母、数字或下划线" />
				<div class="password_r" @click="change()">
					<p class="eye"><img :src="eyeImg"/></p>
				</div>
			</div>
			<div class="validate">
				<p class="validate_l"></p>
				<p class="line"></p>
				<input type="text" class="validate_m" v-model="validate" @blur="check_validate()" maxlength="5" placeholder="请输入验证码" />
				<div class="validate_r">
					<p class="get_validate" @click="get_validate()">{{codeText}}</p>
				</div>
			</div>
			<p class="register_btn" @click="register_user()">注册</p>
		</form>
		<div class="other_login">
			<div class="line">
				<p class="line_l"></p>
				<p class="title">快速登录</p>
				<p class="line_r"></p>
			</div>
			<div class="login_style">
				<p class="qq" @click="tips()"><img src="../../assets/img/user/ico_weichat_1.png"/></p>
				<p class="weibo" @click="tips()"><img src="../../assets/img/user/ico_weibo_1.png"/></p>
				<p class="weixin" @click="tips()"><img src="../../assets/img/user/ico_qq_1.png"/></p>
			</div>
			<div class="about">
				<router-link to="/protocol" tag="p" class="protocol" >
					<i class="protocol_bg"><img src="../../assets/img/user/ico_checkbox_login_selected.png"/></i>
					<span class="protocol_title">用户协议及隐私政策</span>
				</router-link>
				<router-link to="/passwordLogin" tag="p" class="skip">
					<span class="skip_title">已有账号</span>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
import reg from '../../assets/js/regular.js'
import eyeImg1 from '../../assets/img/user/ico_eye_login_gray_normal.png'
import eyeImg2 from '../../assets/img/user/ico_eye_login_gray_press.png'
//引入弹出层
import { Toast } from 'mint-ui';
import host from '../../config'

export default {
	data(){
        return {
        	pwdType:'password',
        	userphone:'',
        	password:'',
        	validate:'',
        	codeText:"获取验证码",
        	codeGetting:false,
        	codeTime:null,
        	eyeImg1:eyeImg1,
        	eyeImg2:eyeImg2,
        	eyeImg:eyeImg1,
        	warnning:false
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
    	skip(){
    		this.$emit('skip')
    	},
    	skip3(){
    		this.$emit('skip3')
    	},
    	//手机号判断
    	check_phone(){
    		if(!this.userphone.trim()){
    			this.$options.methods.toast('手机号不能为空');
    		}else if(!reg.checkMobile(this.userphone)){
				this.$options.methods.toast('手机号格式不正确');
    		}
    	},
    	//密码判断
    	check_password(){
    		if(!this.password.trim()){
				this.$options.methods.toast('密码不能为空');
    		}else if(!reg.checkPassword(this.password)){
				this.$options.methods.toast('密码格式不正确');
    		}
    	},
    	//验证码判断
    	check_validate(){
    		if(!this.validate.trim()){
				this.$options.methods.toast('验证码不能为空');
    		}else if(!reg.checkValidate(this.validate)){
				this.$options.methods.toast('验证码格式不正确');
    		}
    	},
    	//暂不支持
    	tips(){
			this.$options.methods.toast('暂未开放');
    	},
    	//密码是否可视
    	change(){
    		if(this.pwdType === "password"){
                this.eyeImg = this.eyeImg2;
                this.pwdType = "type";
            }else {
            	this.eyeImg = this.eyeImg1;
                this.pwdType = "password";
            }
    	},
    	//获取验证码
      	get_validate(){
      		//倒计时
      		if(!this.userphone.trim()){
						Toast({
							message: '请输入手机号'
						})
      			return;
      		}
      		if(!reg.checkMobile(this.userphone))
            {
                return;
            }
            if(this.codeGetting){
            	return false;
            }else{
            	let that = this;
	            let count = 60;
	            this.codeGetting = true;
	            this.codeText = "60 秒后重发";
	            let timer = setInterval(function () {
	                count--;
	                if (count == 0){
	                    clearInterval(self.codeTime);
	                    that.codeText = "重发验证码";
	                    clearInterval(timer)
	                    that.codeGetting = false;
	                }
	                else {
	                    that.codeText = count+" 秒后重发";
	                }
	            }, 1000);
            };
            //请求验证码接口
			this.$http.get(host.host+'/api/sms/'+this.userphone,{})
			.then(function(res){
			  	console.log(res);
			})
			.catch(function(err){
			  	console.log(err);
			});
      	},
      	//注册账号
      	register_user(){

      		let that = this;

      		if(this.warnning){
    			return;
    		}
      		if(!this.userphone.trim()){
    			this.$options.methods.toast('手机号不能为空');
    			return;
    		}
      		if(!reg.checkMobile(this.userphone))
            {
            	this.$options.methods.toast('请正确填写手机号');
                return;
            }
            if(!this.password.trim()){
				this.$options.methods.toast('密码不能为空');
				return;
    		}
            if(!reg.checkPassword(this.password))
            {
            	this.$options.methods.toast('请正确填写密码');
                return;
            }
            if(!this.validate.trim()){
				this.$options.methods.toast('验证码不能为空');
				return;
    		}
            if(!reg.checkValidate(this.validate))
            {
            	this.$options.methods.toast('请正确填写验证码');
                return;
            }
            this.warnning = true;
            //调用接口，发起注册请求
            this.$http.post(host.host+'/api/register',{
			  	mobile: this.userphone,
                certCode: this.validate,
                password: this.password
			})
			.then(function(res){
				that.warnning = false;
				console.log(res)
				if(res.data.message=='手机号码已存在'){
			  		that.$options.methods.toast('用户已注册');
			  		return;
			  	}
				if(res.data.message=='无效的验证码'){
			  		that.$options.methods.toast('验证码错误');
			  		return;
			  	}
				localStorage.setItem('userId',res.data.data.id);
			  	localStorage.setItem('token',res.data.data.token);
			  	axios.defaults.headers.common['token'] = localStorage.getItem('token');
//			  	that.$router.push('/discovery');
			})
			.catch(function(err){
			  	console.log(err);
			});
      	}
    },
    components:{

    }
}
</script>

<style scoped="scoped" lang="scss">
.content{
	width: 100%;
	height: 100%;
	background: #eee;
	.login_pic{
		text-align: center;
		width: 100%;
		height: 2.4rem;
		padding-top: 0.6rem;
		background: #eee url(../../assets/img/user/bgd_setting.png) no-repeat left top/100% 100%;
		.pic_wrap{
			img{
				width: 1.5rem;
				height: 1.5rem;
				border: 0.01rem solid #fff;
				border-radius: 50%;
				background: #fff;
			}
		}
	}
	.login_info{
		padding: 0.98rem 0.44rem 0;
		width: 100%;
		height: auto;
		.line{
			width: 0.02rem;
			height: 0.3rem;
			background: #666;
			position: absolute;
			top: 0.28rem;
			left: 1rem;
		}
		input{
			font-size: 0.24rem;
			background: #fff;
		}
		input::-webkit-input-placeholder {
	         /* placeholder颜色  */
	         color: rgb(204,204,204);
	         /* placeholder字体大小  */
	         font-size: 0.24rem;
	        /* placeholder位置  */
	         /*text-align: right;*/
	    }
		.phone{
			display: flex;	//弹性盒布局
			width: 100%;
			height: auto;
			border-radius: 0.1rem;
			background: #fff;
			position: relative;
			margin-bottom: 0.44rem;
			.phone_l{
				width: 1rem;
				height: 0.9rem;
				border-top-left-radius:0.1rem;
				border-bottom-left-radius:0.1rem;
				font-size: 0.24rem;
				text-align: center;
				color: #40AD5C;
				line-height: 0.9rem;
			}
			.phone_m{
				flex: auto;
				height: 0.9rem;
				border: none;
				padding-left: 0.18rem;
			}
			.phone_r{
				width: 1rem;
				height: 0.9rem;
				border-top-right-radius:0.1rem;
				border-bottom-right-radius:0.1rem;
			}
		}
		.password{
			display: flex;
			width: 100%;
			height: auto;
			border-radius: 0.1rem;
			margin-bottom: 0.5rem;
			position: relative;
			background: #fff;
			.password_l{
				width: 1rem;
				height: 0.9rem;
				border-top-left-radius:0.1rem;
				border-bottom-left-radius:0.1rem;
				background: url(../../assets/img/user/ico_password_login_gray.png) no-repeat center/40%;
			}
			.password_m{
				flex: auto;
				height: 0.9rem;
				background: rgba(255,255,255,0.2);
				border: none;
				padding-left: 0.18rem;
			}
			.password_r{
				width: 1.7rem;
				height: 0.9rem;
				background: rgba(255,255,255,0.2);
				border-top-right-radius:0.1rem;
				border-bottom-right-radius:0.1rem;
				padding-top: 0.25rem;
				.eye{
					width: 100%;
					height: 100%;
					padding: 0 0.2rem 0 0;
					img{
						float: right;
						width: 0.32rem;
						height: 0.32rem;
					}
				}
			}
		}
		.validate{
			display: flex;
			width: 100%;
			height: auto;
			border-radius: 0.1rem;
			background: #fff;
			margin-bottom: 0.5rem;
			position: relative;
			align-items: center;
			.validate_l{
				width: 1rem;
				height: 0.9rem;
				border-top-left-radius:0.1rem;
				border-bottom-left-radius:0.1rem;
				background: url(../../assets/img/user/ico_vericode_login_gray.png) no-repeat center/40%;
			}
			.validate_m{
				flex: auto;
				height: 0.9rem;
				background: rgba(255,255,255,0.2);
				border: none;
				padding-left: 0.18rem;
			}
			.validate_r{
				width: 1.7rem;
				height: 0.9rem;
				background: rgba(255,255,255,0.2);
				border-top-right-radius:0.1rem;
				border-bottom-right-radius:0.1rem;
				padding-top: 0.25rem;
				.get_validate{
					width: 1.5rem;
					// height: 0.42rem;
					text-align: center;
					padding: 0 0.05rem;
					line-height: 0.42rem;
					border-radius: 0.2rem;
					color: #40AD5C;
					border: 1px solid #40AD5C;
					font-size: 0.2rem;
				}
			}
		}
		.register_btn{
			width: 100%;
			height: 0.8rem;
			background: #40ad5c;
			text-align: center;
			color: #fff;
			line-height: 0.8rem;
			font-size: 0.3rem;
			border-radius: 0.1rem;
		}
	}
	.other_login{
		margin-top: 0.6rem;
		padding-bottom: 0.4rem;
		position: relative;
		background: #eee;
		.line{
			display: flex;
			.line_l{
				margin-top: 0.2rem;
				width: 38%;
				height: 1px;
				background: #40ad5c;
			}
			.title{
				width: 24%;
				height: auto;
				font-size: 0.28rem;
				text-align: center;
			}
			.line_r{
				margin-top: 0.2rem;
				width: 38%;
				height: 1px;
				background: #40ad5c;
			}
		}
		.login_style{
			padding-top: 0.48rem;
			display: flex;
			p{
				flex: 1;
				text-align: center;
				img{
					width: 0.9rem;
					height: 0.9rem;
				}
				&:nth-of-type(1){
					text-align: right;
				}
				&:nth-of-type(3){
					text-align: left;
				}
			}
		}
		.about{
			padding: 1rem 0.48rem 0.2rem;
			overflow: hidden;
			font-size: 0.24rem;
			.protocol{
				float: left;
				.protocol_bg{
					img{
						width: 0.24rem;
						height: 0.24rem;
					}
				}
			}
			.skip{
				float: right;
			}
		}
	}
}
</style>
