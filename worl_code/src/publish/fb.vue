
<style scoped="scoped" lang="scss">
.content{
    width: 100%;
    height: auto;
    position: absolute;
    z-index: 100;
    background: #fff;
    /*提示信息*/
    .tips{
        width: 100%;
        height: 1.24rem;
        background: #f4f4f4;
        padding-top: 0.2rem;
        padding-bottom: 0.1rem;
        text-align: center;
        p{
            &:nth-child(1){
           		color: #434343;
           		font-size: 0.32rem;
            }
          	&:nth-child(2){
            	color: #666;
           		font-size: 0.24rem;
          	}
        }
    }
    /*要填写的项目信息*/
    .publish_project_info{
    	padding: 0 0.36rem;
      background: white;
    	/*红色必填*/
    	.red{
    		color: #f00;
    	}
    	label{
    		color: #434343;
    		font-size: 0.3rem;
    	}
    	input{
    		padding-left: 0.24rem;
    		border: 0.01rem solid #dadada;
    		background: #f7f7f7;
            border-radius: 0.04rem;
            color: #666;
            font-size: 0.26rem;
            width: 100%;
            height: 0.72rem;
            margin-top: 0.12rem;
    	}
    	input::-webkit-input-placeholder {
             /* placeholder颜色  */
             color: #ccc;
             /* placeholder字体大小  */
             font-size: 0.26rem;
            /* placeholder位置  */
             /*text-align: right;*/
        }
        /*项目logo信息*/
        .project_logo{
            display: flex;
            line-height: 0.8rem;
            padding-top: 0.24rem;
            padding-bottom: 0.22rem;
            .logo_info{
                display: flex;
                p{
                    position: relative;
                    input{
                        position: absolute;
                        top: 0;
                        left: 0;
                        opacity: 0;
                    }
                    &:nth-of-type(1){
                        margin: 0 0.2rem 0 0.4rem;
                        width: 0.8rem;
                        height: 0.8rem;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                    &:nth-of-type(2){
                        color: rgb(64,173,92);
                        font-size: 0.26rem;
                    }
                }
            }
        }
        /*项目名称*/
        .project_name{
            display: flex;
            flex-direction: column;
            padding-bottom: 0.3rem;
            #name{
            }
        }
        /*项目介绍*/
        .project_introduce{
            padding-bottom: 0.3rem;
            display: flex;
            flex-direction: column;
            #introduce{
            }
        }
        /*项目阶段*/
        .project_stage{
            padding-bottom: 0.26rem;
            display: flex;
            flex-direction: column;
            .stage{
                padding-left: 0.24rem;
                width: 100%;
                height: 0.72rem;
                border: 0.01rem solid #dadada;
                border-radius: 0.04rem;
                font-size: 0.26rem;
                color: #666;
                line-height: 0.64rem;
                margin-top: 0.12rem;
                background: #f7f7f7 url(../assets/img/publish/ico_arror_down.png) no-repeat 96% center/5%;
            }
        }
        /*项目领域*/
        .project_industry{
            display: flex;
            padding-bottom: 0.26rem;
            align-items: center;
            #industry{
                padding-left: 0.21rem;
                img{
                    display: block;
                    width: 0.64rem;
                    height: 0.64rem;
                }
            }
        }
        /*项目标签*/
        .project_tag{
            display: flex;
            padding-bottom: 0.26rem;
            align-items: center;
            #tag{
                padding-left: 0.52rem;
                img{
                    display: block;
                    width: 0.64rem;
                    height: 0.64rem;
                }
            }
        }
        /*项目所在城市*/
        .project_city{
            padding-bottom: 0.26rem;
            display: flex;
            flex-direction: column;
            .city_info{
                display: flex;
                margin-top: 0.12rem;
                p{
                    padding-left: 0.24rem;
                    border: 0.01rem solid #dadada;
                    border-radius: 0.04rem;
                    font-size: 0.26rem;
                    width: 100%;
                    height: 0.72rem;
                    line-height: 0.64rem;
                    color: #666;
                    background: #f7f7f7 url(../assets/img/publish/ico_arror_down.png) no-repeat 96% center/5%;
                    .city_l{
                    }
                    .city_r{
                    }
                }
            }
        }
        /*项目地址*/
        .project_url{
            padding-bottom: 0.26rem;
            display: flex;
            flex-direction: column;
            #url{
                background: #f7f7f7;
                color: #000;
            }
        }
        /*微信二维码*/
        .project_weixin_code{
            padding-bottom: 0.26rem;
            display: flex;
            label{
                padding-top: 0.1rem;
            }
            .code{
                padding-left: 0.28rem;
                position: relative;
                img{
                    display: block;
                    width: 0.7rem;
                    height: 0.7rem;
                }
                input{
                    position: absolute;
                    opacity: 0;
                    top: 0;
                    left: 0
                }
            }
        }
        /*微博*/
        .project_weibo{
            padding-bottom: 0.58rem;
            display: flex;
            flex-direction: column;
            #weibo{
                background: #f7f7f7;
            }
        }
        /*下一步按钮*/
        .next{
            width: 100%;
            height: 0.8rem;
            text-align: center;
            line-height: 0.8rem;
            color: #fff;
            font-size: 0.32rem;
            border-radius: 0.1rem;
            background: #fff linear-gradient(to right, #62c5fe, #4b9ffa);
        }
    }
}
.mint-popup-bottom{
    width: 100%;
}
</style>
<template>
    <div class="content" style="height: 100%;">
        <div class="tips">
            <p>轻松免费发布</p>
            <p>拥有定制级的项目推广分享平台</p>
        </div>
        <form class="publish_project_info">
            <div class="project_logo">
                <label for="logo">项目logo<span class="red">*</span></label>
                <div class="logo_info">
                    <p class="ico">
                        <img :src="defaultImg"/>
                        <input v-if="isInput" @change="imgSelectClick" class="bN_file1" type="file" accept="image/*">
                    </p>
                    <p class="ico_title">没有项目logo?</p>
                </div>
            </div>
            <div class="project_name">
                <label for="name">项目名称<span class="red">*</span></label>
                <input type="text" @blur="setName" id="name" maxlength="8" placeholder="请输入项目名称" v-model="message.name"/>
            </div>
            <div class="project_introduce">
                <label for="introduce">一句话介绍<span class="red">*</span></label>
                <input type="text" @blur="setShortDesc" maxlength="30" @keyup="check" id="introduce" placeholder="尽量简短，能给投资人留下深刻印象，30字内" v-model="message.shortDesc"/>
            </div>
            <div class="project_stage">
                <label for="stage">项目阶段<span class="red">*</span></label>
                <p class="stage" @click="projectStage()">{{message.stage}}</p>
            </div>
            <div class="project_industry">
                <label for="industry">行业领域<span class="red">*</span></label>
                <p style="padding:0 0 0 .2rem;font-size:.28rem;color:#434343;">{{message.category}}</p>
                <p id="industry" @click="industry()"><img src="../assets/img/publish/ico_add_tag.png"/></p>
            </div>
            <div class="project_tag">
                <label for="tag">添加标签</label>
                <router-link to="/publish/tags" tag="p" style="padding:0 0 0 .2rem;font-size:.28rem;color:#434343;" v-for="(tag,index) in message.tags" :key="index">{{tag}}</router-link>
                <router-link to="/publish/tags" tag="p" id="tag" v-show="showTags"><img src="../assets/img/publish/ico_add_tag.png"/></router-link>
            </div>
            <div class="project_city">
                <label for="city">所在城市<span class="red">*</span></label>
                <div class="city_info">
                    <p class="city" @click="chooseCity">
                        <span class="city_l">{{message.province}}</span> -
                        <span class="city_r">{{message.city}}</span>
                        <!-- <span class="city_q">{{message.district}}</span> -->
                    </p>
                </div>
            </div>
            <div class="project_url">
                <label for="url">项目网址</label>
                <input type="text" @blur="setWebsite" id="url" placeholder="http(s)://你的网址" v-model="message.website"/>
            </div>
            <div class="project_weixin_code">
                <label for="code">微信二维码</label>
                <p class="code">
                    <img :src="message.wechatQrCode?message.wechatQrCode:weixinImg" />
                    <input @change="weixinClick"  type="file" accept="image/*">
                </p>
            </div>
            <div class="project_weibo">
                <label for="weibo">微博地址</label>
                <input type="text" @blur="setWeibo" id="weibo" placeholder="请输入" v-model="message.weibo"/>
            </div>
            <div style="padding-bottom: 0.6rem;background: #fff;">
      			<div class="next" @click="nextStep">下一步</div>
      		</div>
        </form>


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
import nextSet from './children/nextSet.vue'
import { Popup,Picker,Toast } from 'mint-ui'
import s from '../assets/js/cities'
import reg from '../assets/js/regular'
import host from '../config'
export default {
    components: {
        'mt-picker': Picker,
        'mt-popup': Popup,
        nextSet
    },
    data(){
        return {
                    qiniuToken: null,
          			isShow: false,
          			isTags:false,
                    message: {
                        logo: null,
                        name: null,
                        category: null,
                        tags: [],
                        shortDesc: null,
                        website: null,
                        wechatQrCode: null,
                        province: null,
                        city: null,
                        district: null,
                        weibo: null,
                        stage: '请选择项目阶段'
                    },
                    isInput: true,
                    defaultImg: require('../assets/img/publish/add_logo.png'),// 默认图片
                    weixinImg: require('../assets/img/publish/ico_qrcode.png'),
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
                    stage: null,
                    category: null,
                    clickId: null,
                    tags: null,
                    province: null,
                    city: null,
                    showTags:true
        }
    },
    mounted(){
		if(sessionStorage.getItem('tags')){
			this.tags = JSON.parse(sessionStorage.getItem('tags'));
			this.message.tags = JSON.parse(sessionStorage.getItem('tags'));
		}
		if(this.message.tags.length==3){
			this.showTags = false;
		}
		//缓存操作
		if(sessionStorage.getItem('logo')){
			this.message.logo = sessionStorage.getItem('logo');
			this.defaultImg = this.message.logo
		}
		if(sessionStorage.getItem('name')){
			this.message.name = sessionStorage.getItem('name');
		}
		if(sessionStorage.getItem('shortDesc')){
			this.message.shortDesc = sessionStorage.getItem('shortDesc');
		}
		if(sessionStorage.getItem('stage')){
			this.message.stage = sessionStorage.getItem('stage');
		}
		if(sessionStorage.getItem('category')){
			this.message.category = sessionStorage.getItem('category');
		}
		if(sessionStorage.getItem('citys')){
			this.message.province = JSON.parse(sessionStorage.getItem('citys')).province;
			this.message.city = JSON.parse(sessionStorage.getItem('citys')).city;
		}
		if(sessionStorage.getItem('website')){
			this.message.website = sessionStorage.getItem('website');
		}
		if(sessionStorage.getItem('wechatQrCode')){
			this.message.wechatQrCode = sessionStorage.getItem('wechatQrCode');
		}
		if(sessionStorage.getItem('weibo')){
			this.message.weibo = sessionStorage.getItem('weibo');
		}
    },
    methods:{
    	
    	//缓存操作
    	setName(){
    		sessionStorage.setItem('name',this.message.name);
    	},
    	setShortDesc(){
    		if(this.message.shortDesc!=null){
    			sessionStorage.setItem('shortDesc',this.message.shortDesc);
    		}
    	},
    	setWebsite(){
    		if(this.message.website!=null){
    			sessionStorage.setItem('website',this.message.website);
    		}
    	},
    	setWeibo(){
    		if(this.message.weibo!=null){
    			sessionStorage.setItem('weibo',this.message.weibo);
    		}
    	},
    		//过滤敏感字符操作
    		check(){
    			this.message.shortDesc = reg.checkText(this.message.shortDesc)
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
            // 获取标签
            getTags () {
                this.$http.get(host.host+'/api/tags?from=0&size=100')
                .then((res) => {
                    for(let i = 0; i < res.data.data.length; i++) {
                        this.slots3[0].values.push(res.data.data[i].name)
                    }
                })
                .catch((err) => {
                })
            },
            imgSelectClick(ev){
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
                        formData.append('fileName','sdafads')
                reader.onload = function (ev) {
                            _this.defaultImg = ev.target.result
                            _this.$http.post(host.qiniuHost,formData).then((res)=>{
                                _this.message.logo = host.qiniuDomain+res.data.key;
                                sessionStorage.setItem('logo',host.qiniuDomain+res.data.key);
                            })
                  _this.isInput = true;
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
                    _this.weixinImg = ev.target.result
                    _this.$http.post(host.qiniuHost,formData).then((res)=>{
                        _this.message.wechatQrCode =host.qiniuDomain+res.data.hash;
                        sessionStorage.setItem('wechatQrCode',_this.message.wechatQrCode);
                    })
                  _this.isInput = true;
                  return;
                };
                reader.readAsDataURL(file);
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
                this.popupVisible = true
                this.clickId = 2
            },
            slots3Change (picker, values) {
                this.tags = values[0]
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
                        this.message.stage = this.stage
                        sessionStorage.setItem('stage',this.message.stage);
                        break;
                    case 1:
                        this.message.category = this.category;
                        sessionStorage.setItem('category',this.message.category);
                        break;
                    case 2:
                        if(this.message.tags.length>=3) {
                            Toast({
                                message: '最多添加3个标签'
                            })
                            return
                        }
                        this.message.tags.push(this.tags)
                        break;
                    case 3:
                        this.message.province = this.province;
                        this.message.city = this.city;
                        let value = {
	                        	province:this.message.province,
	                        	city:this.message.city
	                        }
                        sessionStorage.setItem('citys',JSON.stringify(value))
                        break;
                    default:
                        break;
                }
                this.popupVisible = false
            },
            // 获取七牛云token
            getToken () {
                this.$http.get(host.host+'/api/qiniu/token').then((res) =>{
                    this.qiniuToken = res.data.data.token
                }).catch((err) => {
                })
            },
            // 下一步
            nextStep() {
                //红色标记为必填的信息判断
                if(!this.message.logo){
                    Toast({
                        message: '请选择项目logo'
                    });
                    return;
                }else if(!this.message.name){
                    Toast({
                        message: '请填写项目名称'
                    });
                    return;
                }else if(!this.message.shortDesc){
                    Toast({
                        message: '请填写项目简介'
                    });
                    return;
                }else if(this.message.stage=='请选择项目阶段'){
                    Toast({
                        message: '请填写项目阶段'
                    });
                    return;
                }else if(!this.message.category){
                    Toast({
                        message: '请填写行业领域'
                    });
                    return;
                }else if(!this.message.province){
                    Toast({
                        message: '请填写所在城市'
                    });
                    return;
                }else if(!this.message.city){
                    Toast({
                        message: '请填写所在城市'
                    });
                    return;
                }else if(!reg.checkUrl(this.message.website)&&this.message.website!=null){
                    Toast({
                        message: '请填写正确的项目网址'
                    });
                    return;
                }
                //发起请求进行项目基本信息的添加
                this.$http.post(host.host+'/api/projects',this.message)
                .then( res=>{
                    console.log(res)
                    sessionStorage.removeItem('logo');
                    sessionStorage.removeItem('name');
                    sessionStorage.removeItem('shortDesc');
                    sessionStorage.removeItem('stage');
                    sessionStorage.removeItem('category');
                    sessionStorage.removeItem('citys');
                    sessionStorage.removeItem('website');
                    sessionStorage.removeItem('wechatQrCode');
                    sessionStorage.removeItem('weibo');
                    sessionStorage.removeItem('tags');
                    this.$router.push({path:'/publish/nextSet',query: {id:res.data.data.id}})
                }).catch((err)=>{
                })
            }
        },
        created() {
            this.getProjectCategories()
            this.getTags()
            this.getToken()
        }
}
</script>
