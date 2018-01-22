<template>
	<div class="content" ref="contentHeight">
		<img src="../../assets/img/user/login_bg.png" alt="" style="width: 100%;height: 100%;position: absolute;left: 0;top: 0;z-index: -100;pointer-events: none;"/>
		<div class="login_title">
			<p>项目来</p>
			<p>项目早知道，就上项目来</p>
		</div>
		<form class="login_info">
			<div class="phone">
				<p class="phone_l">+86</p>
				<p class="line"></p>
				<input type="text" class="phone_m" v-model="username" @blur="check_phone()" maxlength="11" placeholder="请输入您的手机号码" />
				<p class="phone_r"></p>
			</div>
			<div class="validate">
				<p class="validate_l"></p>
				<p class="line"></p>
				<input type="text" class="validate_m" v-model="validate" @blur="check_validate()" maxlength="5" placeholder="请输入验证码" />
				<div class="validate_r">
					<p class="get_validate" @click="get_validate()">{{codeText}}</p>
				</div>
			</div>
			<div class="help">
				<router-link to="/register" tag="span">注册账号</router-link>
				<router-link to="/forgot" tag="span">忘记密码?</router-link>
			</div>
			<p class="login_btn" @click="login_btn()">登录</p>
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
				<p class="weixin" @click="weixinLogin()"><img src="../../assets/img/user/ico_qq_login.png"/></p>
			</div>
			<div class="about">
				<router-link to="/protocol" tag="p" class="protocol">
					<i class="protocol_bg"><img src="../../assets/img/user/ico_checkbox_login_selected.png"/></i>
					<span class="protocol_title">用户协议及隐私政策</span>
				</router-link>
				<router-link to="/passwordLogin" tag="p" class="skip">
					<span class="skip_title">密码登录</span>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
import reg from '../../assets/js/regular.js'
//引入弹出层
import { Toast } from 'mint-ui';
import host from '../../config'
export default {
	data(){
        return {
        	username:'',
        	validate:'',
        	codeGetting:false,
        	codeText:"获取验证码",
        	warnning:false
        }
    },
    mounted(){
			// let h = document.documentElement.clientHeight
			// this.$refs.contentHeight.style.height = h + 'px'
      //   console.log(this.$router)
    },
    methods:{
      	toast(text){
    		Toast({
			  message: text,
			  position: 'middle',
			  duration: 1000
			});
    	},
    	//手机号判断
    	check_phone(){
    		if(!this.username.trim()){
    			this.$options.methods.toast('手机号不能为空');
    		}else if(!reg.checkMobile(this.username)){
				this.$options.methods.toast('手机号格式不正确');
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
			// 微信登录
			weixinLogin() {

				window.open('https://open.weixin.qq.com/connect/qrconnect?appid=wx470a136043d7a61a&redirect_uri=http://www.xiangmulai.com&response_type=code&scope=snsapi_login&state=STATE#wechat_redirect')
			  // var url = location.search
			  // if (url.indexOf("?") != -1) {
			  //  var str = url.substr(1)
			  //  strs = str.split("=")
			  //  alert(strs[1])
			  // }
			},
    	//获取验证码
      	get_validate(){
      		//倒计时
      		if(!this.username.trim()){
						Toast({
							message: '请输入手机号'
						})
      			return;
      		}
      		if(!reg.checkMobile(this.username))
            {
                return;
            }
            if(this.codeGetting){
            	return false;
            }else{
            	let that = this;
	            let count = 60;
	            this.codeGetting = true;
	            this.codeText = "60秒后重发";
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
			this.$http.get(host.host+'/api/sms/'+this.username,{})
			.then(function(response){
			  	console.log(response);
			})
			.catch(function(err){
			  	console.log(err);
			});
      	},
    	//登录
    	login_btn(){
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
            //调用接口，发起登录请求
            this.$http.post(host.host+'/api/login',{
		  		username: this.username,
                certCode: this.validate
			})
			.then(function(res){
				that.warnning = false;
//				console.log(res)
				if(res.data.ret=='无效的验证码'){
			  		that.$options.methods.toast('无效的验证码');
			  		return;
			  	}
				localStorage.setItem('userId',res.data.data.id);
				localStorage.setItem('token',res.data.data.token);
				axios.defaults.headers.common['token'] = localStorage.getItem('token');
				that.$router.push('/discovery');
//				that.$emit('syncData',res.data.data.token)
			})
			.catch(function(err){
			  	console.log(err);
			});
    	}
    },
    components:{

    },
	created() {
//		var url = window.location
//		let code = null
//		if (url.indexOf("?") != -1) {
//		 var str = url.substr(1)
//		 strs = str.split("=")
//		 code = strs[1]
//		}
//		this.$http.get("https://api.weixin.qq.com/sns/oauth2/access_token?appid=wx470a136043d7a61a&secret=33616b775602e2b847f3526b40645e3b&code="+code+"grant_type=authorization_code").then((res)=>{
//			console.log(res)
//		})
	}
}
</script>

<style scoped="scoped" lang="scss">
.content{
	width: 100%;
	color: #fff;
	.login_title{
		text-align: center;
		padding: 0.9rem 0;
		font-family: '微软雅黑';
		p{
			color: #fefefe;
			&:nth-of-type(1){
				font-size: 0.48rem;
				margin-bottom: 0.4rem;
			}
			&:nth-of-type(2){
				font-size: 0.3rem;
			}
		}
	}
	.login_info{
		padding: 0 0.48rem;
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
		.validate{
			display: flex;
			width: 100%;
			height: auto;
			padding-bottom: 0.5rem;
			position: relative;
			.validate_l{
				width: 1rem;
				height: 0.9rem;
				border-top-left-radius:0.5rem;
				border-bottom-left-radius:0.5rem;
				background: rgba(255,255,255,0.2) url(../../assets/img/user/ico_vericode.png) no-repeat center/40%;
			}
			.validate_m{
				flex: auto;
				height: 0.9rem;
				background: rgba(255,255,255,0.2);
				border: none;
				padding-left: 0.18rem;
				border-radius: 0
			}
			.validate_r{
				width: 1.7rem;
				height: 0.9rem;
				background: rgba(255,255,255,0.2);
				border-top-right-radius:0.5rem;
				border-bottom-right-radius:0.5rem;
				padding-top: 0.25rem;
				.get_validate{
					width: 1.44rem;
					height: 0.42rem;
					text-align: center;
					padding: 0 0.05rem;
					line-height: 0.42rem;
					border-radius: 0.2rem;
					border: 1px solid #fff;
					font-size: 0.2rem;
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
