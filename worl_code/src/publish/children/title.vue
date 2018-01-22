<template>
	<div class="content">
		<div>
			<router-link to="" tag="p" class=""><span>标题<i>Title</i></span><img src=""/></router-link>
			<router-link to="" tag="p" class=""><span>关键词<i>Keywords</i></span><img src=""/></router-link>
			<router-link to="" tag="p" class=""><span>关键词<i>Keywords</i></span><img src=""/></router-link>
		</div>
		<router-link to="" tag="a" class="">保存</router-link>
	</div>
</template>

<!--<script>
import $ from 'jquery'
export default {
	data(){
        return {
        	
        }
    },
    mounted(){
        $('.mainFooter').css({'display':'none'});
    },
    methods:{
      
    },
    components:{
      
    }
}
</script>-->

<!--<style scoped="scoped" lang="scss">
@import "~@/scss/common.scss";
.content{
	@include flexbox();//弹性盒布局
    @include flex-direction(column);
    @include rect(100%,100%);
    @include bgcolor(#f8f8f8);
    padding-top: .12rem;
    div{
    	@include rect(100%,1.5rem);
    	padding:0 .13rem;
    	@include bgcolor(#ffffff);
    }
    p{
    	@include flexbox();//弹性盒布局
    	justify-content: space-between;
    	@include rect(100%,.5rem);
    	@include lineheight(0.5rem);
    	border-bottom: 1px solid #eee;
    	&:nth-child(3){
    		border-bottom: none;
    	}
    	img{
    		display:inline-block;
    		@include rect(.12rem,.24rem);
    		margin-top: .1rem;
    	}
    	span{
    		font-size: .16rem;
    		@include textcolor(#333);
    		i{
    			@include textcolor(#999);
    			margin-left: .03rem;	
    		}
    	}
    }
    a{
    	display: block;
    	@include rect(.8rem,.3rem);
    	@include lineheight(0.3rem);
    	text-align: center;
    	@include bgcolor(#61b651);
    	margin: 0 auto;
    	margin-top: .1rem;
    	@include textcolor(#fff);
    	border-radius: .04rem;
    }
}
</style>-->