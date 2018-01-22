<style scoped="scoped" lang="scss">
.nextSet{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%!important;
  /*background: url("../../assets/img/publish/fb01.png") 100% 100% no-repeat;*/
  padding-bottom: 0.98rem;
  z-index: 9;
}
/*主题内容 三块*/
.nextSet .n_content{
  position: relative;
  width: 100%;
  height: 100%;
  overflow: auto;
}
/*上面的导航*/
.n_content1{
  position: relative;
  width: 100%;
  height: 2.54rem;
  /*background: url("../../assets/img/publish/fb02.png") 100% 100% no-repeat;*/
 }
.n_content1 .title1{
  position: absolute;
  left: 0.36rem;
  top: 0.26rem;
  font-size: 0.28rem;
  color: #ffffff;
  cursor: pointer;

}
.n_content1 .title2{
  position: absolute;
  bottom: 0.18rem;
  left: 0.36rem;
  width: 1.72rem;
  height: 0.52rem;
  display: flex;
  align-items: center;
  border-radius: 4px;
  font-size: 0.24rem;
  color: #666666;
  cursor: pointer;
  background: url("../../assets/img/publish/fb03.png") 0.2rem center no-repeat rgba(255,255,255,0.5);
  background-size:0.26rem;
  padding-left: 0.54rem;
}
.n_content1 .title3{
  position: absolute;
  bottom: 0.18rem;
  right: 0.36rem;
  width: 1.72rem;
  height: 0.52rem;
  display: flex;
  align-items: center;
  border-radius: 4px;
  font-size: 0.24rem;
  color: #666666;
  cursor: pointer;
  background-color: rgba(255,255,255,0.5);
  display: flex;
  align-items: center;
  justify-content: center;

}
/*中间的图片信息*/
.n_content2{
  position: relative;
  width: 100%;
  padding: 0.4rem 0.36rem 0.16rem;
  background-color: rgba(0,0,0,0.2);
}
.n_picture{
  position: relative;
  width: 100%;
  height: 2.26rem;
  border: 3px solid #2c7afa;
  border-radius: 10px;
  background-color: #ffffff;
  overflow: hidden;
}
.n_picture_1{
  position: absolute;
  width: 1.6rem;
  height: 1.6rem;
  top:0.32rem;
  left: 0.36rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  overflow: hidden;
}
.n_picture_1 > img{
  max-height: 100%;
  max-width: 100%;
  font-size: 0.20rem;
}
.n_picture > .n_text1{
  position: relative;
  left: 2.28rem;
  margin-top: 0.3rem;
  font-size: 0.4rem;
  color: #333333;
}
.n_picture > .n_text2{
  position: relative;
  left: 2.28rem;
  margin-top: 0.14rem;
  font-size: 0.28rem;
  color: #666666;
}
.n_picture > .n_text3{
  position: relative;
  left: 2.28rem;
  margin-top: 0.30rem;
  font-size: 0.24rem;
  color: #666666;
}
.n_select{
  position: relative;
  /*position: -webkit-sticky;*/
  top: 0;
  height: 0.8rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.36rem;
  background-color: #293D4E;
  z-index: 1;

}
.n_select .n_select_1{
  font-size: 0.36rem;
  color: #ffffff;
  flex: 1 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
/*被选中*/
.n_selected{
  background-color: #233646;
}
.nextSet .n_foot{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.98rem;
    background-color: #3770d7;
    font-size: 0.36rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fffefe;
  }
</style>

<template>
	<div class="nextSet">
    <!--背景图-->
    <img src="../../assets/img/publish/fb01.png" alt="" style="width: 100%;height: 100%;position: absolute;top: 0;left: 0;">
    <!--主体内容  分三块-->
    <div class="n_content">
      <div class="n_content1">
        <img src="../../assets/img/publish/fb02.png" alt="" style="width: 100%;height: 100%;position: absolute;top: 0;left: 0;">
        <div class="title1">点击设置标题</div>
        <div class="title2">添加音乐</div>
        <div class="title3">页面设置</div>
      </div>
      <div class="n_content2">
        <div class="n_picture">
          <!--图片占位符-->
          <div class="n_picture_1">
            <img :src="allData.logo" alt="图片加载失败">
          </div>
          <!--以下是文字说明-->
          <div class="n_text1">{{allData.name}}</div>
          <div class="n_text2">{{allData.shortDesc}}</div>
          <div class="n_text3">{{allData.createDate}}</div>
        </div>
      </div>
      <!--选项卡-->
      <div class="n_select">
        <div @click="selectClick(data,index)" :class="{n_selected: index === selecedIndex}" class="n_select_1" v-for="(data,index) in footSelectDatas" v-html="data.name" :title="data.name">
        </div>
      </div>
      <div class="n_content3">
        <basicNews v-show="selecedIndex === 0" :allData="allData"></basicNews>
        <busNews v-show="selecedIndex === 1" :allData="allData"></busNews>
        <teamNews v-show="selecedIndex === 2" :allData="allData"></teamNews>
      </div>
    </div>
    <!--底部-->
    <router-link :to="{path:'/user/editProject',query:{id:projectId}}" tag="div" class="n_foot">
      	完成
    </router-link>
		<!-- <mt-actionsheet
		  :actions="actions"
		  v-model="sheetVisible">
		</mt-actionsheet> -->
	</div>
</template>

<script>
	import { Popup,Actionsheet } from 'mint-ui'
  import basicNews from './basicNews'
  import busNews from './busNews'
  import teamNews from './teamNews'
  import host from '../../config'
	export default {
	data(){
        return {
					sheetVisible: true,
          footSelectDatas:[
            {
              id: 0,
              name: '基本信息'
            },
            {
              id: 1,
              name: '商业信息'
            },
            {
              id: 2,
              name: '团队信息'
            }
          ], //选项卡数据
          selecedIndex: 0 , //默认第1个
					allData: null,
					projectId:null
        }
    },
    mounted(){
			// this.popupVisible = true
			
    },
    methods:{
      selectClick(data,index){
        this.selecedIndex = index;
      },
			getAllData () {
				let getId = this.$route.query.id;
				this.projectId = this.$route.query.id;
				this.$http.get(host.host+'/api/projects/'+getId).then((res)=>{
          this.allData = res.data.data;
				}).catch((err) => {

				})
			}
    },
		created() {
		  //do something after creating vue instance
		  this.getAllData()
		},
    components:{
      basicNews,
      busNews,
      teamNews,
			mtPopup: Popup,
			mtActionsheet:Actionsheet
    }
}
</script>
