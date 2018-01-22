<template>
  <div class="basicNews">
    <router-link class="baN_box" :to="{path:'/publish/NextSet/basicNewsSet',query:{id:projectId}}" tag="div">
      <div class="baN_box1">
        <!--图片-->
        <div class="baN_img">
          <img :src="allData.logo" alt="">
        </div>
        <!--文字说明-->
        <div class="baN_text">
          <div class="baN_text1">{{allData.name}}</div>
          <div class="baN_text2">{{allData.shortDesc}}</div>
          <div class="baN_text3">
            <img src="../../assets/img/publish/fb15.png" alt="">
            <div class="" style="color: rgb(102,102,102)">TAG</div>
            <div class="baN_text3_1" v-for="tag in allData.tags" :key="tag.key"><p>{{tag}}</p></div>
          </div>
        </div>
        <!--相关信息-->
      </div>
      <div class="baN_foot">
        <img src="../../assets/img/publish/fb16.png" alt="" style="margin-left: 0.28rem">
        <div style="margin-left: 0.08rem">{{allData.category}}</div>
        <img src="../../assets/img/publish/fb20.png" alt="" style="margin-left: 0.08rem">
        <div style="margin-left: 0.04rem"></div>
        <div style="margin-left: 0.2rem">{{allData.province}} . {{allData.city}}</div>

        <div class="baN_foot1">
          <img src="../../assets/img/publish/fb17.png" alt="">
          <img src="../../assets/img/publish/fb18.png" alt="" style="margin-left: 0.24rem">
          <img src="../../assets/img/publish/fb19.png" alt="" style="margin-left: 0.24rem">
        </div>

      </div>
      <img class="baN_imgRn" src="../../assets/img/publish/fb20.png" alt="">
    </router-link>
  </div>
</template>

<script>
export default {
	props: ['allData'],
	data(){
        return {
					projectId:null
      }
    },
    mounted(){
			this.projectId = this.$route.query.id;
    },
    methods:{

    },
    components:{

    }
  }
</script>

<style scoped="scoped" lang="scss">
  .basicNews{
    position: relative;
    width: 100%;
    height: auto;
    padding: 0.2rem;
  }
  .baN_box{
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 0.1rem;
    background-color: rgb(255,255,255);
    padding-bottom: 0.64rem;
  }
  .baN_box1{
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    padding-bottom: 0.2rem;

  }
  /*图片*/
  .baN_img{
    width: 1.8rem;
    height: 1.8rem;
    position: relative;
    border-radius: 100%;
    overflow: hidden;
    margin-top: 0.8rem;
    margin-left: 0.48rem;
  }
  .baN_img > img{
    width: 100%;
    height: 100%;
  }
  .baN_text{
    flex: 1.0 0;
    margin-top: 0.8rem;
    margin-left: 0.28rem;
  }
  /*文字说明*/
  .baN_text1{
    font-size: 0.36rem;
    color: rgb(51,51,51);

  }
  .baN_text2{
    font-size: 0.28rem;
    color: rgb(102,102,102);
    margin-top: 0.2rem;
  }
  .baN_text3{
    display: flex;
    align-items: center;
    padding-top: 0.4rem;
    font-size: 0.24rem;
    color: rgb(0,85,133);
  }
  .baN_text3 > img{
    width: 0.32rem;
    height: 0.32rem;
  }
  .baN_text3_1{
    margin-left: 0.18rem;
  }
  /*相关信息*/
  .baN_foot{
    border-top: 1px solid #F6F6F6;
    border-bottom: 1px solid #F6F6F6;
    padding: 0.1rem 0;
    width: 100%;
    font-size: 0.24rem;
    color: rgb(153,153,153);
    display: flex;
    align-items: center;
    position: relative;
  }
  .baN_foot img{
    width: 0.32rem;
    height: 0.32rem;
  }
  .baN_foot1{
    position: absolute;
    right: 0.32rem;
  }
  .baN_imgRn{
    position: absolute;
    width: 0.4rem;
    height: 0.4rem;
    top: 0.32rem;
    right: 0.32rem;
  }
</style>
