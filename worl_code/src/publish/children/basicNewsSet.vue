<template>
	<div class="basicNewSet">
    <!--标题-->
    <div class="bNS_title">
      <div class="bNS_title1">编辑基本信息</div>
      <div class="bNS_title2">完善的信息更容易被认可</div>
    </div>
    <!--修改-->
    <div class="bNS_content">
      <!--项目logo-->
      <div class="bNS_news" @click="changeLogo">
        <div>项目 logo</div>
        <div style="color: red;width: 0.16rem">*</div>
        <div style="position: absolute;right: 0.76rem;top: 0.15rem;display: flex;align-items: center;justify-content: center;width: 0.7rem;height: 0.7rem;border-radius: 100%">
          <img :src="info.logo" alt="" style="max-height: 100%;height: 100%">
        </div>
        <img src="../../assets/img/publish/fb20.png" alt="" style="position: absolute;right: 0.36rem;width: 0.24rem;height: 0.24rem;top:0.32rem">
      </div>
      <!--项目名称-->
      <div class="bNS_news" @click="confirmName('请输入项目名称','name',info.name)">
        <div>项目名称</div>
        <div style="color: red;width: 0.16rem">*</div>
        <div class="bNS_news1">
         <div style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;"> {{info.name}}</div>
        </div>
        <img src="../../assets/img/publish/fb20.png" alt="" style="position: absolute;right: 0.36rem;width: 0.24rem;height: 0.24rem;top:0.32rem">
      </div>
      <!--一句话介绍-->
      <div @click="changeShortDesc" class="bNS_news">
        <div>一句话介绍</div>
        <div style="color: red;width: 0.16rem">*</div>
        <div class="bNS_news1">
            <div style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">  {{info.shortDesc}}</div>
        </div>
        <img src="../../assets/img/publish/fb20.png" alt="" style="position: absolute;right: 0.36rem;width: 0.24rem;height: 0.24rem;top:0.32rem">
      </div>
      <!--项目阶段-->
      <div class="bNS_news" @click="projectStage()">
        <div>项目阶段</div>
        <div style="color: red;width: 0.16rem">*</div>
        <div class="bNS_news1">
           <div style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">{{info.stage}}</div>
        </div>
        <img src="../../assets/img/publish/fb20.png" alt="" style="position: absolute;right: 0.36rem;width: 0.24rem;height: 0.24rem;top:0.32rem">
      </div>
      <!--行业领域-->
      <div class="bNS_news" @click="industry()">
        <div>行业领域</div>
        <div style="color: red;width: 0.16rem">*</div>
        <div class="bNS_news1">
          <div style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">{{info.category}}</div>
          
        </div>
        <img src="../../assets/img/publish/fb20.png" alt="" style="position: absolute;right: 0.36rem;width: 0.24rem;height: 0.24rem;top:0.32rem">
      </div>
      <!--添加标签-->
      <div @click="changeTags" class="bNS_news">
        <div>添加标签</div>
        <div style="color: red;width: 0.16rem"></div>
        <div class="bNS_news1" style="display: flex;align-items: center;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">
               <div style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;display: flex;align-items: center;">
                  <div style="padding: 0 0.05rem;" v-for="(item,index) in info.tags" :key="index">{{item?item:'未设置'}}</div>
               </div>
        </div>
        <img src="../../assets/img/publish/fb20.png" alt="" style="position: absolute;right: 0.36rem;width: 0.24rem;height: 0.24rem;top:0.32rem">
      </div>
    </div>
    <div class="bNS_content1">
      <!--所在城市-->
      <div class="bNS_news" @click="chooseCity">
        <div>所在城市</div>
        <div style="color: red;width: 0.16rem">*</div>
        <div class="bNS_news1">
            <div style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">	{{info.province}}-{{info.city}}</div>
        </div>
        <img src="../../assets/img/publish/fb20.png" alt="" style="position: absolute;right: 0.36rem;width: 0.24rem;height: 0.24rem;top:0.32rem">
      </div>
      <!--项目网址-->
      <div class="bNS_news" @click="confirmName('请输入项目网址','website',info.website)">
        <div>项目网址</div>
        <div style="width: 0.16rem"></div>
        <div class="bNS_news1">
           <div style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">{{info.website?info.website:'未设置'}}</div>
          
        </div>
        <img src="../../assets/img/publish/fb20.png" alt="" style="position: absolute;right: 0.36rem;width: 0.24rem;height: 0.24rem;top:0.32rem">
      </div>
      <!--微信二维码-->
      <div class="bNS_news" @click="changeWeixin">
        <div>微信二维码</div>
        <div style="width: 0.16rem"></div>
        <div style="position: absolute;right: 0.76rem;top: 0.15rem;display: flex;align-items: center;justify-content: center;width: 0.7rem;height: 0.7rem;border-radius: 100%">
          <img :src="info.wechatQrCode?info.wechatQrCode:weixinImg" alt="" style="max-height: 100%;height: 100%">
        </div>
        <img src="../../assets/img/publish/fb20.png" alt="" style="position: absolute;right: 0.36rem;width: 0.24rem;height: 0.24rem;top:0.32rem">
      </div>
      <!--微博地址-->
      <div class="bNS_news" @click="confirmName('请输入微博地址','weibo',info.weibo)">
        <div>微博地址</div>
        <div style="width: 0.16rem"></div>
        <div class="bNS_news1">
              <div style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">{{info.weibo?info.weibo:'未设置'}}</div>
        </div>
        <img src="../../assets/img/publish/fb20.png" alt="" style="position: absolute;right: 0.36rem;width: 0.24rem;height: 0.24rem;top:0.32rem">
      </div>
    </div>

    <!--保存按钮-->
    <div class="bNS_btn">
      <div @click="saveClick" class="bNS_btn1">保存</div>
    </div>
	
	<!--个人简介-->
	<short-desc v-show="isShortDesc"></short-desc>
	<!--添加标签-->
	<tags v-show="isTags"></tags>
	
	<!--头像上传-->
	<mt-actionsheet
	  :actions="actions"
	  v-model="sheetVisible">
	</mt-actionsheet>

	<!--微信上传-->
	<mt-actionsheet
	  :actions="actions1"
	  v-model="sheetVisible1">
	</mt-actionsheet>

	<input @change="picLoad" ref="logo" style="display: none;" type="file" accept="image/*">
	<input @change="weixinClick" ref="weixin" style="display: none;" type="file" accept="image/*">
	
	<mt-popup v-model="popupVisible"
		position="bottom">
        <div class="pop-top">
            <p @click="canclePop">取消</p>
            <p @click="confirmProjectStage">确定</p>
        </div>
        <mt-picker :slots="slots1" @change="onValuesChange" v-if="clickId === 0"></mt-picker>
        <mt-picker :slots="slots2" @change="slots2Change" v-if="clickId === 1"></mt-picker>
        <mt-picker :slots="slots3" @change="slots3Change" v-if="clickId === 2"></mt-picker>
        <mt-picker :slots="slots4" @change="slots4Change" v-if="clickId === 3"></mt-picker>
    </mt-popup>
	
	</div>
</template>

<script>
import Vue from 'vue'
import shortDesc from './shortDesc'
import tags from './tags'
import { Actionsheet,MessageBox,Toast,Popup,Picker } from 'mint-ui'
Vue.component(Actionsheet.name, Actionsheet);
import s from '../../assets/js/cities'
import reg from '../../assets/js/regular'
import host from '../../config'
export default {
	data(){
        return {
			info:null,
			isShortDesc:false,
			isTags:false,
			weixinImg:require('../../assets/img/publish/ico_qrcode.png'),
			message:{
				id:null,
				logo:null,
				name:null,
				category:null,
				tags:[],
				shortDesc:null,
				website:null,
				wechatQrCode:null,
				province:null,
				city:null,
				distinct:null,
				weibo:null,
				stage:null
			},
			sheetVisible:false,
			sheetVisible1:false,
			actions:[
        		{
        			name:'从相册中选择',
        			method:this.getLibrary
        		}
        	],
        	actions1:[
        		{
        			name:'从相册中选择',
        			method:this.getWinxin
        		}
        	],
        	qiniuToken:null,
        	popupVisible: false,
            slots1: [{
                flex: 1,
                values: ['已经盈利','上线运营','测试阶段','概念阶段']
              }],
            slots2: [
                {
                    flex: 1,
                    defaultIndex: 1,
                    values: [],
                    className: 'slot1',
                    textAlign: 'center'
                }, {
                    flex: 1,
                    defaultIndex: 1,
                    values: [],
                    className: 'slot3',
                    textAlign: 'center'
                },
            ],
            slots3: [{
                flex: 1,
                values: []
            }],
            slots4: [
                  {
                    flex: 1,
                    defaultIndex: 1,
                    values: Object.keys(s),
                    className: 'slot1',
                    textAlign: 'center'
                  }, {
                    flex: 1,
                    defaultIndex: 1,
                    values: Object.keys(s[Object.keys(s)[0]]),
                    className: 'slot3',
                    textAlign: 'center'
                  }
            ],
            clickId: null,
            category:null,
            stage:null,
            province:null,
            city:null
        }
    },
    created(){
    	this.getProjectCategories()
    },
    mounted(){
    	console.log(this.$refs)
    	let that = this;
		//获取项目的基本信息
		this.$http.get('http://www.xiangmulai.com/api/projects/'+this.$route.query.id,{})
		.then( res=>{
			this.info = res.data.data;
			console.log(this.info)
			this.message.id = this.info.id;
			this.message.logo = this.info.logo;
			this.message.name = this.info.name;
			this.message.category = this.info.category;
			this.message.tags = this.info.tags;
			this.message.shortDesc = this.info.shortDesc;
			this.message.website = this.info.website;
			this.message.wechatQrCode = this.info.wechatQrCode;
			this.message.province = this.info.province;
			this.message.city = this.info.city;
			this.message.distinct = this.info.distinct;
			this.message.weibo = this.info.weibo;
			this.message.stage = this.info.stage;			
		}).catch((err)=>{

		})
		
		//获取七牛云Token
		this.$http.get('http://www.xiangmulai.com/api/qiniu/token',{
			
		})
		.then(function(res){
//			console.log(res)
			that.qiniuToken = res.data.data.token;
		})
    },
    computed(){
    	
    },
    methods:{
    	changeTags(){
    		this.isTags = true;
    	},
    	changeShortDesc(){
    		this.isShortDesc = true;
    	},
    	//上传头像操作
    	getLibrary(){
    		this.$refs.logo.click();
    	},
    	getWinxin(){
    		this.$refs.weixin.click();
    	},
    	changeLogo(){
    		this.sheetVisible = true;
    	},
    	changeWeixin(){
    		this.sheetVisible1 = true;
    	},
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
			formData.append('fileName','projectLogo')
			
	        reader.onload = function (ev) {
				that.$http.post(host.qiniuHost,formData)
				.then((res)=>{
					that.info.logo = host.qiniuDomain+res.data.hash;
					that.message.logo = that.info.logo;
				});
	          	return;
	        };
        	reader.readAsDataURL(file);
    	},
    	weixinClick(ev) {
                let file = ev.target.files[0];
                if(!/^image\//.test(file.type)){
                  this.$options.methods.toast('格式不对，请重新上传图片！');
                  return;
                }
                let _this = this;
                this.isInput = false;
                var reader = new FileReader();
                let formData = new FormData();
                formData.append('token',this.qiniuToken)
                formData.append('file',file)
                formData.append('fileName','weixinImg')
                reader.onload = function (ev) {
                    _this.$http.post(host.qiniuHost,formData).then((res)=>{
                        _this.info.wechatQrCode =host.qiniuDomain+res.data.hash;
                        _this.message.wechatQrCode = _this.info.wechatQrCode;
                    })
                  _this.isInput = true;
                  return;
                };
                reader.readAsDataURL(file);
            },
    	//修改项目名称
    	confirmName(txt,type,value){
    		let that = this;
    		MessageBox.prompt('',{
    			message: txt,
    			inputValue:value,
                confirmButtonText: '确定',
                cancelButtonText: '取消'
    		})
    		.then(value=>{
    			if(type=='name'){
    				that.info.name = value.value.splice(0,8);
    				that.message.name = that.info.name;
    			}else if(type=='website'){
    				that.info.website = value.value;
    				that.message.website = that.info.website;
    			}else if(type=='weibo'){
    				that.info.weibo = value.value;
    				that.message.weibo = that.info.weibo;
    			}
    			
    		})
    	},
    	 // 选择项目阶段
            projectStage () {
                this.popupVisible = true
                this.clickId = 0
            },
            onValuesChange (picker, values) {
                this.stage = values[0]
            },
            // 添加标签
            addTags () {
//          	
            },
            slots3Change (picker, values) {
//              this.stage = values[0]
//              this.message.stage = this.info.stage;
            },
            // 选择城市
            chooseCity () {
                this.popupVisible = true
                this.clickId = 3
            },
            slots4Change(picker, values) {
        // if(values[0] == undefined){
          // this.message.province = Object.keys(s)[0]
                    let shi = Object.keys(s[values[0]])
                    picker.setSlotValues(1, shi)
                    this.province = values[0]
                    this.city = values[1]
          // this.message.city = Object.keys(Object.values(s)[0])
        // }else{
        //   let sheng = Object.keys(s)
        //   let shi = Object.keys(s[values[0]])
        //   picker.setSlotValues(1, shi)
        //   this.idMessages.location = values[0]
        //   this.id_addr_shi = values[1]
        // }
      		},
            // 确定
            confirmProjectStage () {
                switch (this.clickId) {
                    case 0:
                        this.info.stage = this.stage
                        this.message.stage = this.info.stage;
                        break;
                    case 1:
                        this.info.category = this.category;
                        this.message.category = this.info.category;
                        break;
                    case 2:
                        if(this.info.tags.length>3) {
                            Toast({
                                message: '最多添加3个标签'
                            })
                            return
                        }
                        this.info.tags.push(this.tags)
                        
                        break;
                    case 3:
                        this.info.province = this.province;
                        this.message.province = this.info.province; 
                        this.info.city = this.city;
                        this.message.city = this.info.city;
                        break;
                    default:
                        break;
                }
                this.popupVisible = false
            },
    	
    	
    	
    	
    	//过滤敏感字符操作
    		check(){
    			this.info.shortDesc = reg.checkText(this.message.shortDesc)
    			this.message.shortDesc = this.info.shortDesc;
    		},
            canclePop () {
                this.popupVisible = false
            },
            // 获取行业领域
            getProjectCategories () {
                let that = this;
                this.$http.get(host.host+'/api/projectCategories?from=0&size=100')
                .then((res) => {
                    for(let i=0;i<res.data.data.length;i++){
                        that.slots2[0].values.push(res.data.data[i].name);
                        if(res.data.data[i].children){
                            for(let j=0;j<res.data.data[i].children.length;j++){
                                that.slots2[1].values.push(res.data.data[i].children[j].name);
                            }
                        }/*else{
                            that.slots2[2].values.push('');
                        }*/
                    }
                })
                .catch((err) => {
                })
            },
            industry () {
                this.popupVisible = true
                this.clickId = 1
            },
            slots2Change (picker, values) {
                this.category = values[0]+'-'+values[1];
            },
    	
    	
    	
    	
    	//保存修改
      	saveClick(){
	      	if(!this.info.logo){
				Toast({
					message: '请选择项目logo'
				});
				return;
			}else if(!this.info.name){
				Toast({
					message: '请填写项目名称'
				});
				return;
			}else if(!this.info.shortDesc){
				Toast({
					message: '请填写项目简介'
				});
				return;
			}else if(this.info.stage=='请选择项目阶段'){
				Toast({
					message: '请填写项目阶段'
				});
				return;
			}else if(!this.info.category){
				Toast({
					message: '请填写行业领域'
				});
				return;
			}else if(!this.info.province){
				Toast({
					message: '请填写所在城市'
				});
				return;
			}else if(!this.info.city){
				Toast({
					message: '请填写所在城市'
				});
				return;
			}else if(!reg.checkUrl(this.info.website)&&this.info.website!=null){
				Toast({
					message: '请填写正确的项目网址'
				});
				return;
			}
			//发起请求进行项目基本信息的修改
			this.$http.put(host.host+'/api/projects ',this.message)
			.then( res=>{
				if(res.data.ret!=0){
					Toast({
						message: '修改失败'
					});
					return;
				}
				this.$router.push({path:'/publish/nextSet',query:{id:this.message.id}});
			}).catch((err)=>{

			})
		}
    },
    components:{
		'mt-picker': Picker,
		'mt-popup': Popup,
		'mt-actionsheet': Actionsheet,
		'short-desc':shortDesc,
		'tags':tags
    }
}
</script>

<style scoped="scoped" lang="scss">
.basicNewSet{
  position: absolute;
  top: 0;
  left: 0;
  background-color: white;
  width: 100%;
  height: 100%;
  overflow: auto;
}
/*触摸时的样式变化*/
.touchStyle{
	background-color: #f4f4f4;
}
/*标题*/
.bNS_title{
  position: relative;
  height: 1.28rem;
  width: 100%;
  background-color: #F6F6F6;
}
.bNS_title1{
  width: 100%;
  display: flex;
  padding-top: 0.10rem;
  justify-content: center;
  font-size: 0.32rem;
  color: #434343;
}
.bNS_title2{
  width: 100%;
  display: flex;
  padding-top: 0.12rem;
  justify-content: center;
  font-size: 0.24rem;
  color: #666666;
}

  /*修改信息*/
  .bNS_content{
    width: 100%;
    height: auto;
    position: relative;
    padding: 0 0.36rem;
    border-bottom: 0.2rem solid #F6F6F6;
  }
  .bNS_news{
    width: 100%;
    height: 1rem;
    border-bottom: 1px solid #F1F1F1;
    display: flex;
    align-items: center;
    color: #434343;
    font-size: 0.28rem;
    position: relative;
  }
  .bNS_news1{
    position: absolute;
    right: 0.76rem;
    font-size: 0.24rem;
    color: #666666;
    height: 100%;
    display: flex;
    align-items: center;
    max-width: 4rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
.bNS_content1{
  width: 100%;
  height: auto;
  position: relative;
  padding: 0 0.36rem;
}
  .bNS_btn{
    position: relative;
    width: 100%;
    background-color: #F6F6F6;
    padding: 0.6rem 0.36rem;
    display: flex;
    align-items: center;
    justify-content: center;

  }
  .bNS_btn1{
    width: 100%;
    height: 0.9rem;
    background-color: #3770d7;
    color: rgba(255,255,255,0.78);
    font-size: 0.3rem;
    border-radius: 0.12rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
