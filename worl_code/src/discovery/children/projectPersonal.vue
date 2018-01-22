<template>
	<div class="pp_box">
		<!-- 标题 -->
		<div class="pp_title">
			<img src="../../assets/img/discovery/bgd.png" alt="" style="position: absolute;top: 0;left: 0;width: 100%;height: 100%;opacity:0.5">
      <div class="img">
        <img src="../../assets/img/discovery/logo230x230.png" style="max-height: 100%;height: 100%" alt="">
      </div>
		</div>
	</div>
</template>

<script>
export default {
data(){
	  return {

	  }
	},
	mounted(){

	},
	methods:{

	},
	components:{

	}
}
</script>

<style scoped>
.pp_box{
position: relative;
width: 100%;
height: 100%;
background-color: #B6C5C8
}
.pp_title{
	padding: 0.84rem 0 0.12rem;
  width: 100%;
  position: relative;
  height: 280px;
}
  .pp_title .img{
    position: absolute;
    top:0.84rem;
    left: 0.36rem;
    width: 1.8rem;
    height: 1.8rem;
  }
</style>
