<template>
	<div class="content">
		<mt-header title="账号设置">
		  <router-link to="/user" slot="left">
		    <mt-button icon="back"></mt-button>
		  </router-link>
		</mt-header>
		<ul class="user_info">
			<li class="user_pic_wrap">
				<p class="user_pic_title">头像</p>
				<p class="user_pic">
					<img v-model="sheetVisible" @click="changePic" :src="defaultImg"/>
				</p>
			</li>
			<li class="user_id_wrap" @click="changeInfo('请输入昵称','nickName',nickName)">
				<p class="user_id_title">昵称</p>
				<p class="user_id" v-model="nickName">{{nickName}}</p>
			</li>
			<li class="user_name_wrap" @click="changeInfo('请输入真实姓名','realName',realName)">
				<p class="user_name_title">真实姓名</p>
				<p class="user_name" v-model="realName">{{realName}}</p>
			</li>
			<!--<li class="user_pid_wrap">
				<p class="user_pid_title">项目号</p>
				<p class="user_pid">775852</p>
			</li>-->
			<li class="user_sex_wrap" @click="changeMsg('gender')">
				<p class="user_sex_title">性别</p>
				<p class="user_sex" v-model="gender">{{gender}}</p>
			</li>
			<li class="user_city_wrap" @click="changeMsg('region')">
				<p class="user_city_title">所在地</p>
				<p class="user_city" v-model="citys">{{citys}}</p>
			</li>
			<li class="user_industry_wrap">
				<p class="user_industry_title">熟悉领域</p>
				<router-link to="/user/accountSetting/industry" tag="p" class="user_industry">
					<span :style="{background:industry.bg}">{{industry.name1}}</span>
					<span>{{industry.name2}}</span>
				</router-link>
			</li>
			<router-link to="/user/accountSetting/signature" tag="li" class="user_style_wrap" @click="changeSignature">
				<p class="user_style_title">个人风格介绍</p>
				<p class="user_style">{{signature}}</p>
			</router-link >
		</ul>
		<ul class="user_information">
			<li class="weixin_code_wrap" @click="changeWeixin">
				<p class="weixin_code_title">微信二维码</p>
				<p class="weixin_code">
					<img :src="info.wechatQRCode?info.wechatQRCode:weixinImg"/>
				</p>
			</li>
			<li class="user_phone_wrap" @click="phone()">
				<p class="user_phone_title">
					绑定手机号
					<span>可换绑</span>
				</p>
				<p class="user_phone">{{info.bindingMobile?info.bindingMobile:'未设置'}}</p>
			</li>
			<li class="weixin_account_wrap">
				<p class="weixin_account_title">绑定微信账号</p>
				<p class="weixin_account" @click="switchPic1()">
					<img :src="img1"/>
				</p>
			</li>
			<li class="weibo_account_wrap">
				<p class="weibo_account_title">绑定微博账号</p>
				<p class="weibo_account" @click="switchPic2()">
					<img :src="img2"/>
				</p>
			</li>
			<li class="user_email_wrap" @click="changeInfo('请输入email','email',email)">
				<p class="user_email_title">电子邮箱</p>
				<p class="user_email" v-model="email">{{email}}</p>
			</li>
			<router-link to="/user/accountSetting/setPassword" tag="li" class="user_password_wrap">
				<p class="user_password_title">密码</p>
				<p class="user_password">修改密码</p>
			</router-link>
		</ul>
		<div class="cancle_login_wrap" @click="cancle_login()">
			<p class="cancle_login">退出账号</p>
		</div>
		<!--城市选择-->
		<mt-popup style="width: 100%;" v-model="popupVisible" position="bottom" popup-transition="popup-fade">
			    <div class="pop-top">
				    <p @click="canclePopup('region')">取消</p>
				    <p @click="confirmPopup('region')">确定</p>
				</div>
			  	<mt-picker :slots="myAddressSlots" @change="onMyAddressChange"></mt-picker>
		</mt-popup>

		<!--性别选择-->
		<mt-actionsheet1
		  :actions="actions1"
		  v-model="popupVisible2">
		</mt-actionsheet1>
		<!--头像上传-->
		<mt-actionsheet
		  :actions="actions"
		  v-model="sheetVisible">
		</mt-actionsheet>
		<!--微信图片上传-->
		<mt-actionsheet2
		  :actions="actions2"
		  v-model="sheetVisible1">
		</mt-actionsheet2>

		<input @change="picLoad" ref="camera" style="display: none;" type="file" accept="image/*" capture="camera">
		<input @change="picLoad" ref="picture" style="display: none;" type="file" accept="image/*">
		<input @change="weixinLoad" ref="weixin" style="display: none;" type="file" accept="image/*">
	</div>
</template>

<script>
import Vue from 'vue'
import headImg from '../../assets/img/discovery/left_headportrait.png'
import swichImgOn from '../../assets/img/user/ico_switch_list_on.png'
import swichImgOff from '../../assets/img/user/ico_switch_list_off.png'
//引入头部,引入消息盒,引入弹出层,引入popup,引入picker
import { Actionsheet,Header,MessageBox,Toast,Popup,Picker } from 'mint-ui'
Vue.component(Actionsheet.name, Actionsheet);
Vue.component(Header.name, Header);
import myaddress from '../../assets/js/cities.js'
import host from '../../config'
export default {
	data(){
        return {
        	swichImgOn:swichImgOn,
        	swichImgOff:swichImgOff,
        	headImg:headImg,
        	img1:swichImgOn,
        	img2:swichImgOff,
        	industry:{},
        	info:{},
        	myaddress:myaddress,
        	popupVisible:false,
        	popupVisible1:false,
        	popupVisible2:false,
        	sheetVisible:false,
        	sheetVisible1:false,
        	actions:[
        		{
        			name:'拍照',
        			method:this.getCamera
        		},
        		{
        			name:'从相册中选择',
        			method:this.getLibrary
        		}
        	],
        	actions1:[
        		{
        			name:'男',
        			method:this.confirmMan
        		},
        		{
        			name:'女',
        			method:this.confirmWoman
        		}
        	],
        	actions2:[
        		{
        			name:'从相册中选择',
        			method:this.getWeixin
        		},
        	],
        	myAddressSlots: [
	          {
	            flex: 1,
	            defaultIndex: 1,
	            values: Object.keys(myaddress),  //省份数组
	            className: 'slot1',
	            textAlign: 'center'
	          },/* {
	            divider: true,
	            content: '-',
	            className: 'slot2'
	          }, */{
	            flex: 1,
	            values: Object.keys(myaddress[Object.keys(myaddress)[0]]),
	            className: 'slot3',
	            textAlign: 'center'
	          },
	        ],
	        myAddressProvince:'所在省',
	        myAddressCity:'所在市',
	        citys:'未设置',
	        signature:'未设置',
	        nickName:'未设置',
	        realName:'未设置',
	        email:'未设置',
	        gender:'男',
	        defaultImg:headImg,
	        weixinImg:require('../../assets/img/publish/ico_qrcode.png'),
	        qiniuToken:'',
        }
    },
    created(){
    	if(sessionStorage.getItem('selectedIndex')){
    		this.industry = this.$store.state.list[sessionStorage.getItem('selectedIndex')];
    	}
    },
    mounted(){
    	let that = this;
        //调用接口，发起个人基本信息请求
        this.$http.get(host.host+'/api/me',{})
		.then(function(res){
			console.log(res)
			that.info = res.data.data;
			that.info.headPic?that.defaultImg = that.info.headPic:that.headImg;
			that.info.region?that.citys = that.info.region:'未设置';
			that.info.gender?that.gender = that.info.gender:'男';
			that.info.signature?that.signature = that.info.signature:'未设置';
			that.info.nickName?that.nickName = that.info.nickName:'未设置';
			that.info.realName?that.realName = that.info.realName:'未设置';
			that.info.email?that.email = that.info.email:'未设置';
			if(res.data.data.familiarFields){
				that.industry = that.$store.state.list[res.data.data.familiarFields];
				sessionStorage.setItem('selectedIndex',res.data.data.familiarFields);
			}else{
				that.industry = that.$store.state.list[0];
				sessionStorage.setItem('selectedIndex',0);
			}
		})
		.catch(function(err){
//		  	console.log(err);
		});
		//获取七牛云Token
		this.$http.get(host.host+'/api/qiniu/token',{

		})
		.then(function(res){
			console.log(res)
			that.qiniuToken = res.data.data.token;
		})
    },
    methods:{
    	//头像上传
    	picLoad(ev){
    		let file = ev.target.files[0];
	        if(!/^image\//.test(file.type)){
	          	this.message('格式不对，请重新上传图片！');
	          	return;
	        }
	        let that = this;
	        var reader = new FileReader();

	        let formData = new FormData();
			formData.append('token',this.qiniuToken)
			formData.append('file',file)
			formData.append('fileName','headPic')

	        reader.onload = function (ev) {
	        	//同步头像
				that.defaultImg = ev.target.result;
				//提交信息到后台
				that.$http.post(host.qiniuHost,formData).then((res)=>{
					console.log(res)
					that.upLoad({'headPic':host.qiniuDomain+res.data.hash});
				})
	          	return;
	        };
        	reader.readAsDataURL(file);
    	},
    	weixinLoad(ev){
    		let file = ev.target.files[0];
	        if(!/^image\//.test(file.type)){
	          	this.message('格式不对，请重新上传图片！');
	          	return;
	        }
	        let that = this;
	        var reader = new FileReader();
	        
	        let formData = new FormData();
			formData.append('token',this.qiniuToken)
			formData.append('file',file)
			formData.append('fileName','wechatQrCode')
			
	        reader.onload = function (ev) {
	        	//同步微信图片
				that.weixinImg = ev.target.result;
				//提交信息到后台
				that.$http.post('http://upload.qiniu.com',formData).then((res)=>{
					that.upLoad({'wechatQrCode':'http://p280n68q1.bkt.clouddn.com/'+res.data.hash});
				})
	          	return;
	        };
        	reader.readAsDataURL(file);
    	},
    	changeWeixin(){
    		this.sheetVisible1 = true;
    	},
    	getWeixin(){
    		this.$refs.weixin.click();
    	},
    	//调起摄像头和相册
    	changePic(){
    		this.sheetVisible = true;
    	},
    	getCamera(){
		    this.$refs.camera.click();
    	},
    	getLibrary(){
    		this.$refs.picture.click();
    	},
    	//信息提示
    	message(txt){
    		MessageBox({
			  // title: '提示',
			  message: txt,
			});
    	},
    	//信息提示
    	toast(txt){
    		Toast({
			  message: txt,
			  iconClass: 'icon icon-success',
			  duration: 1000
			});
    	},
    	//修改信息
    	changeInfo(txt,type,value){
    		let that = this;
    		MessageBox.prompt('',{
    			message: txt,
    			inputValue:value,
                confirmButtonText: '确定',
                cancelButtonText: '取消'
    		})
    		.then(value => {
    			if (type == 'nickName') {
    				if(value.value==null){
    					that.upLoad({'nickName':'未设置'});
    					that.nickName = '未设置';
    				}else{
    					that.upLoad({'nickName':value.value.splice(0,8)});
    					that.nickName = value.value;
    				}
                }else if(type == 'realName'){
                	if(value.value==null){
    					that.upLoad({'realName':'未设置'});
    					that.realName = '未设置';
    				}else{
    					that.upLoad({'realName':value.value.splice(0,5)});
                		that.realName = value.value;
    				}
                }else if(type == 'email'){
                	if(value.value==null){
    					that.upLoad({'email':'未设置'});
    					that.email = '未设置';
    				}else{
    					that.upLoad({'email':value.value});
                		that.email = value.value;
    				}
                }
			});
    	},
    	//调用接口，发起个人基本信息修改请求
    	upLoad(obj){
    		let that = this;
	        this.$http.put(host.host+'/api/me',obj)
			.then(function(res){
				console.log(res)
				if(res.data.ret==0){
					that.toast('修改成功');
				}
				that.popupVisible = false;
				that.popupVisible1 = false;
				that.popupVisible2 = false;
			})
			.catch(function(err){
				that.toast('修改失败');
				that.popupVisible = false;
				that.popupVisible1 = false;
				that.popupVisible2 = false;
			});
    	},
    	//调起弹出层
    	changeMsg(type){
    		if(type=='signature'){
    			this.popupVisible1 = true;
    		}else if(type=='region'){
    			this.popupVisible = true;
    		}else if(type=='gender'){
    			this.popupVisible2 = true;
    		}
    	},
    	changeSex(picker, values){
    		this.gender = values[0];
    	},
    	//城市遍历展示
    	onMyAddressChange(picker, values) {
	       if(myaddress[values[0]]){  //这个判断类似于v-if的效果（可以不加，但是vue会报错，很不爽）
	          picker.setSlotValues(1,Object.keys(myaddress[values[0]])); // Object.keys()会返回一个数组，当前省的数组
	          picker.setSlotValues(2,myaddress[values[0]][values[1]]); // 区/县数据就是一个数组
	          this.myAddressProvince = values[0];
	          this.myAddressCity = values[1];
	          this.myAddresscounty = values[2];
//	          this.citys = this.myAddressProvince+"-"+this.myAddressCity;
	        }
	    },
	    //修改城市
	    confirmPopup(type){
	    	if(type=='region'){
	    		this.upLoad({'region':this.myAddressProvince+"-"+this.myAddressCity});
	    		this.citys = this.myAddressProvince+"-"+this.myAddressCity;
	    	}else if(type=='signature'){
	    		if(!this.signature.trim()){
	    			this.upLoad({'signature':'未设置'});
	    			this.signature = '未设置'
	    		}else{
	    			this.upLoad({'signature':this.signature});
	    		}
	    	}
	    },
	    //修改性别
	    confirmMan(){
	    	this.gender = '男';
	    	this.upLoad({'gender':'男'});
	    },
	    confirmWoman(){
	    	this.gender = '女';
	    	this.upLoad({'gender':'女'});
	    },
	    //个人风格介绍
	    changeSignature(){
	    	this.isSignature = true;
	    },
	    cancleSignature(){
	    	this.isSignature = false;
	    },
	    //内容还原操作
	    canclePopup(type){
	    	if(type=='region'){
	    		this.popupVisible = false;
	    		this.citys = this.info.region;
	    	}else if(type=='signature'){
	    		this.popupVisible1 = false;
	    		this.signature = this.info.signature;
	    	}
	    },
    	//退出账号
      	cancle_login(){
      		let that = this;
			MessageBox.confirm('',{
				message:'您确认退出登录吗?'
			})
			.then(action => {
	      		//登出接口
				this.$http.post(host.host+'/api/logout',{})
				.then(function(res){
				  	sessionStorage.clear();
				  	localStorage.clear();
				  	that.$router.push('/passwordLogin');
				})
				.catch(function(err){
				  	that.message('登出失败');
				});
			});

      	},
      	//绑定或换绑手机
      	phone(){
      		if(this.info.bindingMobile){
      			this.$router.push('/user/accountSetting/changePhone');
      		}else{
      			this.$router.push('/user/accountSetting/bindPhone');
      		}
      		sessionStorage.setItem('bindPhone',this.info.bindingMobile)
      	},
      	switchPic1(){
      		if(this.img1==this.swichImgOn){
      			this.img1 = this.swichImgOff
      		}else{
      			this.img1 = this.swichImgOn
      		}
      	},
      	switchPic2(){
      		if(this.img2==this.swichImgOff){
      			this.img2 = this.swichImgOn
      		}else{
      			this.img2 = this.swichImgOff
      		}
      	}
    },
    components:{
      	'mt-picker': Picker,
      	'mt-picker1': Picker,
      	'mt-popup': Popup,
      	'mt-popup1': Popup,
      	'mt-actionsheet': Actionsheet,
      	'mt-actionsheet1': Actionsheet,
      	'mt-actionsheet2': Actionsheet,
    }
}
</script>

<style scoped="scoped" lang="scss">
.content{
	background: rgb(244,244,244);
	width: 100%;
	height: auto;
	position: absolute;
	z-index: 100;
	.mint-header{
		background: rgb(244,244,244);
		width: 100%;
		height: 0.8rem;
		line-height: 0.8rem;
		font-size: 0.36rem;
		color: rgb(51,51,51);
	}
	li{
		width: 100%;
		height: 0.9rem;
		line-height: 0.9rem;
		border-bottom: 1px solid #eee;
		background: url(../../assets/img/user/ico_arrow_right.png) no-repeat 98% center/3% auto;
	}
	.user_info{
		padding: 0 0 0 0.32rem;
		background: #fff;
		width: 100%;
		height: auto;
		.user_pic_wrap{
			height: 1.4rem;
			line-height: 1.4rem;
			overflow: hidden;
			.user_pic_title{
				float: left;
				font-size: 0.28rem;
				color: #434343;
			}
			.user_pic{
				float: right;
				padding-top: 0.2rem;
				margin-right: 0.5rem;
				img{
					width: 1rem;
					height: 1rem;
					border-radius: 50%;
				}
			}
		}
		.user_id_wrap{
			overflow: hidden;
			.user_id_title{
				float: left;
				font-size: 0.28rem;
				color: #434343;
			}
			.user_id{
				float: right;
				color: #666;
				font-size: 0.26rem;
				margin-right: 0.5rem;
				max-width: 60%;
				text-align: right;
				overflow: hidden;
				text-overflow:ellipsis;
				white-space: nowrap;
			}
		}
		.user_name_wrap{
			overflow: hidden;
			.user_name_title{
				float: left;
				font-size: 0.28rem;
				color: #434343;
			}
			.user_name{
				float: right;
				color: #666;
				font-size: 0.26rem;
				margin-right: 0.5rem;
				max-width: 60%;
				text-align: right;
				overflow: hidden;
				text-overflow:ellipsis;
				white-space: nowrap;
			}
		}
		/*.user_pid_wrap{
			overflow: hidden;
			.user_pid_title{
				float: left;
				font-size: 0.28rem;
				color: #434343;
			}
			.user_pid{
				float: right;
				color: #666;
				width: 50%;
				text-align: right;
				font-size: 0.26rem;
				margin-right: 0.5rem;
			}
		}*/
		.user_sex_wrap{
			overflow: hidden;
			.user_sex_title{
				float: left;
				font-size: 0.28rem;
				color: #434343;
			}
			.user_sex{
				float: right;
				color: #666;
				text-align: right;
				font-size: 0.26rem;
				margin-right: 0.5rem;
			}
		}
		.user_city_wrap{
			overflow: hidden;
			.user_city_title{
				float: left;
				font-size: 0.28rem;
				color: #434343;
			}
			.user_city{
				float: right;
				color: #666;
				text-align: right;
				font-size: 0.26rem;
				margin-right: 0.5rem;
			}
		}
		.user_industry_wrap{
			overflow: hidden;
			.user_industry_title{
				float: left;
				font-size: 0.28rem;
				color: #434343;
			}
			.user_industry{
				float: right;
				color: #666;
				text-align: right;
				font-size: 0.26rem;
				margin-right: 0.5rem;
				overflow: hidden;
				span{
					&:nth-of-type(1){
						padding: 0 0.15rem;
						color: white;
						border-radius: 0.04rem;
						background: #87bee7;
					}
					&:nth-of-type(2){

					}
				}
			}
		}
		.user_style_wrap{
			overflow: hidden;
			.user_style_title{
				float: left;
				font-size: 0.28rem;
				color: #434343;
			}
			.user_style{
				float: right;
				color: #666;
				font-size: 0.26rem;
				margin-right: 0.5rem;
				max-width: 60%;
				text-align: right;
				overflow: hidden;
				text-overflow:ellipsis;
				white-space: nowrap;
			}
		}
	}
	.user_information{
		padding: 0 0 0 0.32rem;
		width: 100%;
		height: auto;
		margin-top: 0.2rem;
		background: #fff;
		color: #434343;
		overflow: hidden;
		.weixin_code_wrap{
			overflow: hidden;
			.weixin_code_title{
				float: left;
				font-size: 0.28rem;
			}
			.weixin_code{
				float: right;
				padding-top: 0.1rem;
				margin-right: 0.5rem;
				img{
					width: 0.68rem;
					height: 0.68rem;
				}
			}
		}
		.user_phone_wrap{
			overflow: hidden;
			.user_phone_title{
				float: left;
				font-size: 0.28rem;
				span{
					color: #999;
					font-size: 0.26rem;
				}
			}
			.user_phone{
				color: #666;
				float: right;
				width: 50%;
				text-align: right;
				margin-right: 0.5rem;
			}
		}
		.weixin_account_wrap{
			overflow: hidden;
			.weixin_account_title{
				float: left;
				font-size: 0.28rem;
			}
			.weixin_account{
				float: right;
				padding-top: 0.15rem;
				margin-right: 0.5rem;
				img{
					float: right;
					width: 50%;
					height: auto;
				}
			}
		}
		.weibo_account_wrap{
			overflow: hidden;
			.weibo_account_title{
				float: left;
				font-size: 0.28rem;
			}
			.weibo_account{
				float: right;
				padding-top: 0.15rem;
				margin-right: 0.5rem;
				img{
					float: right;
					width: 50%;
					height: auto;
				}
			}
		}
		.user_email_wrap{
			overflow: hidden;
			.user_email_title{
				float: left;
				font-size: 0.28rem;
			}
			.user_email{
				color: #666;
				float: right;
				max-width: 60%;
				overflow: hidden;
				text-overflow:ellipsis;
				white-space: nowrap;
				text-align: right;
				margin-right: 0.5rem;
			}
		}
		.user_password_wrap{
			overflow: hidden;
			.user_password_title{
				float: left;
				font-size: 0.28rem;
			}
			.user_password{
				color: #666;
				float: right;
				width: 50%;
				text-align: right;
				margin-right: 0.5rem;
			}
		}
	}
	.cancle_login_wrap{
		width: 100%;
		height: auto;
		.cancle_login{
			padding: 0 0.32rem;
			width: 100%;
			height: 0.9rem;
			line-height: 0.9rem;
			text-align: center;
			background: #fff;
			color: #434343;
			font-size: 0.28rem;
		}
	}
}
</style>
