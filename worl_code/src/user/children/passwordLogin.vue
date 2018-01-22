<template>
	<div class="content" ref="contentHeight">
	    <img src="../../assets/img/user/login_bg.png" alt="" style="width: 100%;height: 100%;position: absolute;left: 0;top: 0;z-index: -100;pointer-events: none;background-size: cover;"/>
		<div class="login_pic">
			<p class="pic_wrap"><img src="../../assets/img/discovery/left_headportrait.png"/></p>
		</div>
		<form class="login_info">
			<div class="phone">
				<p class="phone_l">+86</p>
				<p class="line"></p>
				<input type="text" v-model="username" @blur="check_phone()" maxlength="11" class="phone_m" placeholder="请输入您的手机号码" />
				<p class="phone_r"></p>
			</div>
			<div class="password">
				<p class="password_l"></p>
				<p class="line"></p>
				<input :type="pwdType" v-model="password" @blur="check_password()" maxlength="25" class="password_m" placeholder="6-25位字母、数字或者下划线" />
				<div class="password_r" @click="change()">
					<p class="eye"><img :src="eyeImg"/></p>
				</div>
			</div>
			<div class="help">
				<router-link to="/register" tag="span">注册账号</router-link>
				<router-link to="/forgot" tag="span">忘记密码?</router-link>
			</div>
			<p @click="to_login" class="login_btn">登录</p>
		</form>
		<div class="other_login">
			<div class="line">
				<p class="line_l"></p>
				<p class="title">快速登录</p>
				<p class="line_r"></p>
			</div>
			<div class="login_style">
				<p class="qq" @click="tips()"><img src="../../assets/img/user/ico_weichat_login.png"/></p>
				<p class="weibo" @click="tips()"><img src="../../assets/img/user/ico_weibo_login.png"/></p>
				<p class="weixin" @click="tips()"><img src="../../assets/img/user/ico_qq_login.png"/></p>
			</div>
			<div class="about">
				<router-link to="/protocol" tag="p" class="protocol">
					<i class="protocol_bg"><img src="../../assets/img/user/ico_checkbox_login_selected.png"/></i>
					<span class="protocol_title">用户协议及隐私政策</span>
				</router-link>
				<router-link to="/phoneLogin" tag="p" class="skip">
					<span class="skip_title">手机登录</span>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
import reg from '../../assets/js/regular.js'
import eyeImg1 from '../../assets/img/user/ico_eye_login_white_normal.png'
import eyeImg2 from '../../assets/img/user/ico_eye_login_white_press.png'
//引入弹出层
import { Toast } from 'mint-ui';
import host from '../../config'
export default {
	data(){
        return {
        	pwdType:'password',
        	username:'',
        	password:'',
        	eyeImg1:eyeImg1,
        	eyeImg2:eyeImg2,
        	eyeImg:eyeImg1,
        	warnning:false
        }
    },
    created(){

    },
    mounted(){
			// let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
			// this.$refs.contentHeight.style.height = h + 'px'
    },
    methods:{
    	toast(text){
    		Toast({
			  message: text,
			  position: 'middle',
			  duration: 1000
			});
    	},
    	//切换到手机登录
    	skip(){
    		this.$emit('skip')
    	},
    	//跳转到注册界面
    	skip1(){
    		this.$emit('skip1')
    	},
    	//跳转到忘记密码界面
    	skip2(){
    		this.$emit('skip2')
    	},
    	//跳转到协议
    	skip3(){
    		this.$emit('skip3')
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
    	//手机号判断
    	check_phone(){
    		if(!this.username.trim()){
    			this.$options.methods.toast('手机号不能为空');
    		}else if(!reg.checkMobile(this.username)){
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
    	//暂不支持
    	tips(){
			this.$options.methods.toast('暂未开放');
    	},
    	//登录
    	to_login(){
    		console.log(111)
    		let that = this;

    		if(this.warnning){
    			return;
    		}
    		if(!this.username.trim()){
    			this.$options.methods.toast('手机号不能为空');
    			return;
    		}
    		if(!reg.checkMobile(this.username))
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
            this.warnning = true;
            //调用接口，发起登录请求
            this.$http.post(host.host+'/api/login',{
		  		username: this.username,
                password: this.password
			})
			.then(function(res){
				console.log(res)
				that.warnning = false;
			  	if(res.data.message=='用户密码错误'){
			  		that.$options.methods.toast('密码错误');
			  		return;
			  	}
			  	if(res.data.message=='用户不存在'){
			  		that.$options.methods.toast('用户不存在');
			  		return;
			  	}
			  	localStorage.setItem('userId',res.data.data.id);
			  	localStorage.setItem('token',res.data.data.token);
			  	axios.defaults.headers.common['token'] = localStorage.getItem('token');
			  	that.$router.push('/discovery');
//				that.$emit('syncData',res.data.data.token);
			})
			.catch(function(err){
//			  	console.log(err);
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
	color: #fff;
	.login_pic{
		padding: 0.9rem 0 0.8rem;
		font-family: '微软雅黑';
		display: flex;
		justify-content: center;
		.pic_wrap{
			width: 1.5rem;
			height: 1.5rem;
			border-radius: 50%;
			border: 0.01rem solid #fff;
			img{
				width: 100%;
				height: 100%;
				/*border: 0.01rem solid #fff;
				border-radius: 50%;
				background: #fff;*/
			}
		}
	}
	.login_info{
		padding: 0 0.44rem;
		width: 100%;
		height: auto;
		.line{
			width: 0.02rem;
			height: 0.3rem;
			background: #fff;
			position: absolute;
			top: 0.28rem;
			left: 1rem;
		}
		input{
			font-size: 0.24rem;
			color: #fff;
		}
		input::-webkit-input-placeholder {
	         /* placeholder颜色  */
	         color: #fff;
	         /* placeholder字体大小  */
	         font-size: 0.24rem;
	        /* placeholder位置  */
	         /*text-align: right;*/
	    }
		.phone{
			display: flex;	//弹性盒布局
			width: 100%;
			height: auto;
			position: relative;
			padding-bottom: 0.44rem;
			.phone_l{
				width: 1rem;
				height: 0.9rem;
				border-top-left-radius:0.5rem;
				border-bottom-left-radius:0.5rem;
				background: rgba(255,255,255,0.2);
				font-size: 0.24rem;
				text-align: center;
				line-height: 0.9rem;
			}
			.phone_m{
				flex: auto;
				height: 0.9rem;
				background: rgba(255,255,255,0.2);
				border: none;
				padding-left: 0.18rem;
				border-radius: 0
			}
			.phone_r{
				width: 1rem;
				height: 0.9rem;
				background: rgba(255,255,255,0.2);
				border-top-right-radius:0.5rem;
				border-bottom-right-radius:0.5rem;
			}
		}
		.password{
			display: flex;
			width: 100%;
			height: auto;
			padding-bottom: 0.5rem;
			position: relative;
			.password_l{
				width: 1rem;
				height: 0.9rem;
				border-top-left-radius:0.5rem;
				border-bottom-left-radius:0.5rem;
				background: rgba(255,255,255,0.2) url(../../assets/img/user/ico_password_login_white.png) no-repeat center/40%;
			}
			.password_m{
				flex: auto;
				height: 0.9rem;
				background: rgba(255,255,255,0.2);
				border: none;
				padding-left: 0.18rem;
				border-radius: 0
			}
			.password_r{
				width: 1.7rem;
				height: 0.9rem;
				background: rgba(255,255,255,0.2);
				border-top-right-radius:0.5rem;
				border-bottom-right-radius:0.5rem;
				.eye{
					width: 100%;
					height: 100%;
					padding: 0.3rem 0.4rem 0 0;
					img{
						float: right;
						width: 0.32rem;
						height: 0.32rem;
					}
				}
			}
		}
		.help{
			font-size: 0.24rem;
			overflow: hidden;
			padding-bottom: 1rem;
			span{
				&:nth-of-type(1){
					float: left;
				}
				&:nth-of-type(2){
					float: right;
				}
			}
		}
		.login_btn{
			width: 100%;
			height: 0.9rem;
			background: #40ad5c;
			text-align: center;
			line-height: 0.9rem;
			font-size: 0.3rem;
			border-radius: 0.8rem;
		}
	}
	.other_login{
		margin-top: 0.6rem;
		padding-bottom: 0.4rem;
		position: relative;
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
