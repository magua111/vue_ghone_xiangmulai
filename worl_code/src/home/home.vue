<template>
  <div>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <div class="footMenu">
      <router-link :to="menu.id" tag="div" class="item" @click.native="acceptIndex(index)" v-for="(menu,index) in footMenu" :key="index">
      	<img :src="footerIndex==index?menu.url1:menu.url" :class="index==1?'top':''" />
        <div v-html="menu.name" :tilte="menu.name"></div>
      </router-link>
    </div>
  </div>
</template>
<script>
import img1 from '../assets/img/discovery/discovery_normal.png'
import img1_1 from '../assets/img/discovery/discovery_selected.png'
import img2 from '../assets/img/discovery/ico_add_tab.png'
import img3 from '../assets/img/discovery/my_normal.png'
import img3_3 from '../assets/img/discovery/my_selected.png'
export default {
  data() {
    return {
      footMenu: [
        {
          id: '/discovery',
          name: '发现',
          url: img1,
          url1:img1_1
        },
        {
          id: '/publish',
          name: '',
          url: img2,
          url1: img2
        },
        {
          id: '/user',
          name: '我的',
          url: img3,
          url1: img3_3
        }
      ],
      footerIndex: 0
    }

  },
  created(){
  	
  },
  mounted(){
  	
  },
  methods: {
		acceptIndex(index){
			this.footerIndex = index;
		}
  },
  watch:{
		$route(to,from){
			if(to.path=='/discovery'){
				this.footerIndex = 0
			}else if(to.path=='/publish'){
				this.footerIndex = 1
			}else if(to.path=='/user'){
				this.footerIndex = 2
			}
		}
	},
}
</script>
<style scoped="scoped" lang="scss">
    .footMenu{
    	width: 100%;
    	height: 0.98rem;
    	font-size: 0.2rem;
    	background: #fff;
    	border-top: 0.01rem solid #eee;
    	position: fixed;
    	bottom: 0;
    	z-index: 1;
    	display: flex;
    	.item{
    		flex: 1;
    		display: flex;
    		flex-direction: column;
    		justify-content: center;
    		align-items: center;
    		img{
    			width: 0.48rem;
    			height: 0.48rem;
    		}
    		.top{
    			width: 0.88rem;
    			height: 0.88rem;
    			position: relative;
    			top: -0.18rem;
    		}
    	}
    }
</style>
