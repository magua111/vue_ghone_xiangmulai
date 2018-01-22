<template>
	<div class="content">
		<p class="head">
			<router-link to="" tag="div" class="select active">选择音乐</router-link>
			<router-link to="" tag="div" class="select">搜索音乐</router-link>
		</p>

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

<style scoped="scoped" lang="scss">
.content{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
}
 .content .head{
   position: relative;
   height: 0.84rem;
   width: 100%;
   display: flex;
   align-self:center;
   background-color: #FFFFFF;
 }
 /*被选中*/
  .active{
    font-size: 0.36rem;
    color: #40ad5c !important;
  }
  .select{
    font-size: 0.36rem;
    color: #434343;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 160rem;
  }

</style>
