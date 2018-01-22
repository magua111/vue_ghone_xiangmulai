<template>
	<div class="content">
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
				<input :type="pwdType" v-model="password" @blur="check_password()" class="password_m" maxlength="25" placeholder="请输入您的新密码" />
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
			<p class="register_btn" @click="register_user()">重置密码</p>
		</form>
		<div class="about">
			<router-link to="/phoneLogin" tag="p" class="skip">
				<span class="skip_title">已有账号</span>
			</router-link>
		</div>
	</div>
</template>

<script>
import reg from '../../assets/js/regular.js'
import eyeImg1 from '../../assets/img/user/ico_eye_login_gray_normal.png'
import eyeImg2 from '../../assets/img/user/ico_eye_login_gray_press.png'
//引入弹出层
import { Toast } from 'mint-ui';
//引入消息盒
import { MessageBox } from 'mint-ui'
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
			  duration: 2000
			});
    	},
    	//跳转到手机登录
    	skip(){
    		this.$emit('skip')
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
							message: "请输入手机号"
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
			.then(function(response){
//			  	console.log(response);
			})
			.catch(function(err){
			  	console.log(err);
			});
      	},
      	//重置密码
      	register_user(){
      		let that = this;

      		if(this.warnning){
    			return;
    		}

      		if(!reg.checkMobile(this.userphone))
            {
            	this.$options.methods.toast('请正确填写手机号');
                return;
            }
            if(!reg.checkPassword(this.password))
            {
            	this.$options.methods.toast('请正确填写密码');
                return;
            }
            if(!reg.checkValidate(this.validate))
            {
            	this.$options.methods.toast('请正确填写验证码');
                return;
            }

            this.warnning = true;
            //调用接口，发起重置密码请求
            this.$http.post(host.host+'/api/resetPwd',{
			  	mobile: this.userphone,
                certCode: this.validate,
                password: this.password
			})
			.then(function(res){
				that.warnning = false;
				if(res.data.ret=='1'){
			  		that.$options.methods.toast('重置密码失败');
			  		return;
			  	}
				MessageBox.confirm('', {
	                message: '密码修改成功',
	                title: '提示',
	                confirmButtonText: '去登录',
	                cancelButtonText: '取消'
	            })
				.then(action => {
	                //跳转到密码登录，用户需要再次登录
					that.$router.push('/passwordLogin');
	            })
				.catch(err => {

	            });
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
				width: 1.3rem;
				height: 1.3rem;
				border: 0.01rem solid #fff;
				border-radius: 50%;
				background: #fff;
			}
		}
	}
	.login_info{
		padding: 0.98rem 0.5rem 0;
		width: 100%;
		height: auto;
		.line{
			width: 0.02rem;
			height: 0.32rem;
			background: rgb(204,204,204);
			position: absolute;
			top: 0.24rem;
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
			width: 100%;
			height: auto;
			display: flex;
			position: relative;
			padding-bottom: 0.44rem;
			.phone_l{
				width: 1rem;
				height: 0.8rem;
				border-top-left-radius:0.1rem;
				border-bottom-left-radius:0.1rem;
				background: rgba(255,255,255,0.2);
				font-size: 0.24rem;
				text-align: center;
				background: #fff;
				color: rgb(64,173,92);
				line-height: 0.9rem;
			}

			.phone_m{
				background: rgba(255,255,255,0.2);
				border: 0;
				flex: auto;
				border-radius: 0;
				padding-left: 0.18rem;
				background: #fff;
			}
			.phone_r{
				width: 1rem;
				height: 0.8rem;
				background: rgba(255,255,255,0.2);
				border-top-right-radius:0.1rem;
				border-bottom-right-radius:0.1rem;
				background: #fff;
			}
		}
		.password{
			display: flex;
			padding-bottom: 0.36rem;
			position: relative;
			.password_l{
				width: 1rem;
				height: 0.8rem;
				border-top-left-radius:0.1rem;
				border-bottom-left-radius:0.1rem;
				background: rgb(255,255,255) url(../../assets/img/user/ico_password_login_gray.png) no-repeat center/40%;
			}
			.password_m{
				background: rgba(255,255,255,0.2);
				border: 0;
				flex: auto;
				border-radius: 0;
				padding-left: 0.18rem;
				background: #fff;
			}
			.password_r{
				width: .6rem;
				height: 0.8rem;
				background: rgba(255,255,255,0.2);
				border-top-right-radius:0.1rem;
				border-bottom-right-radius:0.1rem;
				padding-top: 0.2rem;
				background: #fff;
				.eye{
					width: 100%;
					height: 100%;
					padding: 0 0.4rem 0 0;
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
			padding-bottom: 1.2rem;
			position: relative;
			.validate_l{
				width: 1rem;
				height: 0.8rem;
				border-top-left-radius:0.1rem;
				border-bottom-left-radius:0.1rem;
				background: rgb(255,255,255) url(../../assets/img/user/ico_vericode_login_gray.png) no-repeat center/35%;
			}
			.validate_m{
				width: 2.6rem;
				height: 0.8rem;
				background: rgb(255,255,255);
				border: 0;
				flex: auto;
				border-radius: 0;
				padding-left: 0.18rem;
			}
			.validate_r{
				width: 2rem;
				height: 0.8rem;
				background: rgb(255,255,255);
				border-top-right-radius:0.1rem;
				border-bottom-right-radius:0.1rem;
				padding-top: 0.2rem;
				.get_validate{
					width: 1.6rem;
					height: 0.42rem;
					text-align: center;
					margin-left: 0.2rem;
					border-radius: 0.2rem;
					color: rgb(64,173,92);
					border: 1px solid rgb(64,173,92);
					font-size: 0.2rem;
					display: flex;
					align-items: center;
					justify-content: center;
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
	.about{
		padding: 3rem 0.48rem 0.6rem;
		font-size: 0.24rem;
		color: rgb(102,102,102);
		background: #eee;
		.skip{
			float: right;
		}
	}
}
</style>
