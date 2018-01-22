<template>
	<div class="content">
		<textarea maxlength="8"></textarea>
		<p class="action"><span>0</span>/<span>8</span></p>
		<router-link to="" tag="p" class="over">完成</router-link>
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
    textarea{
    	@include rect(100%,2rem);
    	font-size: .16rem;
    	resize:none; 
    	border: none;
    	padding: .05rem;
    	text-indent: .8em;
    	@include textcolor(#333);
    }
    .action{
    	text-indent: 1em;
    	@include textcolor(#ccc);
    	margin-top:.05rem;
    }
    /*页脚*/
   	.over{
   		@include rect(100%, .49rem);
   		@include lineheight(0.49rem);
   		font-size: .18rem;
   		@include textcolor(#fffefe);
   		text-align: center;
   		@include bgcolor(#3770d7);
   		position: fixed;
   		bottom: 0;
   	}
}
</style>-->