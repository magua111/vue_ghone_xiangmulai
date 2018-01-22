// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import common from './components'
import router from './router'
import axios from 'axios';
import Mint_ui from 'mint-ui'
import store from './vuex/store'
import animate from 'vue2-animate/dist/vue2-animate.min.css'
import vuescroll from 'vue-scroll'
import vueFeedback from 'vue-feedback'

Object.keys(common).forEach((key) => {
  var name = key.replace(/(\w)/, (v) => v.toUpperCase())
  Vue.component(`v${name}`, common[key])
})

Vue.prototype.$http = axios;
window.axios = axios;
Vue.use(Mint_ui);
Vue.use(animate);
Vue.use(vuescroll)
//触摸反馈自定义指令v-fb
Vue.use(vueFeedback)
Vue.config.productionTip = false
import { MessageBox } from 'mint-ui';

// 添加一个请求拦截器
window.requestMap = new Map();
axios.interceptors.request.use(req => {


  return req;
}, function(err) {
  console.error('被拦截的错误请求:', req);
  return Promise.reject(err);
});
// 添加一个响应拦截器
axios.interceptors.response.use(res => {
  /* // 删除请求记录
  try {
    requestMap.delete(res.config);
  } catch(e) {} */
  return res;
}, err => {
  if (err.response.status === 403) {
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = window.location.href.split('#')[0];
  } 
  return Promise.reject(err);
});



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
//template: `
//  <div style="overflow: auto;width: 100%;height: 100%;">
//			<PhoneLogin @syncData='acceptToken' @skip='skipPhone' @skip1='skipRegister' @skip2='skipForgot' @skip3='skipProtocol'  v-if="isShow === 1"></PhoneLogin>
//			<PasswordLogin @syncData='acceptToken' @skip='skipPassword' @skip1='skipRegister' @skip2='skipForgot' @skip3='skipProtocol' v-else-if="isShow === 2"></PasswordLogin>
//			<Register @syncData='acceptToken' @skip='skipPassword' @skip3='skipProtocol'  v-else-if="isShow === 3"></Register>
//    <App v-else-if="isShow === 4"></App>
//    <Forgot @skip='skipPassword' v-else-if="isShow === 5"></Forgot>
//    <Protocol v-else-if="isShow === 6"></Protocol>
//  </div>`,
//data: {
//  isShow: sessionStorage.getItem('token')?4:1,  //显示哪种状态， 1.验证码登录 2，密码登录 3，注册界面 4.跳转主界面	5.忘记密码界面	6.协议界面
//},
template: '<App/>',
components: {
	App,
//	PhoneLogin,
//	PasswordLogin,
//	Register,
//	Forgot,
//	Protocol
},
//	methods:{
//		acceptToken(token){
//			axios.defaults.headers.common['token'] = token;
//			sessionStorage.setItem('token',token);
//			this.isShow = 4;
//		},
//		skipPhone(){
//			this.isShow = 2;
//		},
//		skipPassword(){
//			this.isShow = 1;
//		},
//		skipRegister(){
//			this.isShow = 3;
//		},
//		skipForgot(){
//			this.isShow = 5;
//		},
//		skipProtocol(){
//			this.isShow = 6;
//		}
//	},
	created(){
		if(localStorage.getItem('token')){
			axios.defaults.headers.common['token'] = localStorage.getItem('token');
//			this.$router.push('/discovery');
		}
	}
})
