import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// 首先声明一个状态 state
const state = {
	list:[
		{
			name1:'IT',
			name2:'计算机/互联网/通信',
			bg:'#87bee7'
		},
		{
			name1:'制造',
			name2:'生产/工艺 /制造',
			bg:'#87bee7'
		},
		{
			name1:'医疗',
			name2:'医疗/护理/制药',
			bg:'#87bee7'
		},
		{
			name1:'金融',
			name2:'金融/银行/投资/保险',
			bg:'#f1a662'
		},
		{
			name1:'商业',
			name2:'商业/服务业/个体经营',
			bg:'#f1a662'
		},
		{
			name1:'文化',
			name2:'文化/广告/传媒',
			bg:'#e68b6c'
		},
		{
			name1:'艺术',
			name2:'娱乐/艺术/表演',
			bg:'#e68b6c'
		},
		{
			name1:'律师',
			name2:'律师/法务',
			bg:'#86c8ba'
		},
		{
			name1:'教育',
			name2:'教育/培训',
			bg:'#86c8ba'
		},
		{
			name1:'行政',
			name2:'公务员/行政/事业单位',
			bg:'#86c8ba'
		},
		{
			name1:'模特',
			name2:'模特',
			bg:'#c297cc'
		},
		{
			name1:'空姐',
			name2:'空姐',
			bg:'#c297cc'
		},
		{
			name1:'学生',
			name2:'学生',
			bg:'#dc97ac'
		},
		{
			name1:'其它',
			name2:'其它',
			bg:'purple'
		},
	],
}
// 然后给 actions 注册一个事件处理函数，当这个函数被触发时，将状态提交到 mutaions中处理
const actions = {
}
// 更新状态
const mutations = {
	
}
// 获取状态信息
const getter = {
    
}


// 核心模块，注册才能使用
export default new Vuex.Store({
    state,
    getter,
    mutations,
    actions
})