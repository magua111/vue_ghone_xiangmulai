<style lang="scss" scoped>
.item_top_r{
  float: right;
  font-size: 0.24rem;
  /*浏览*/
  .scan{
    float: left;
    margin-right: 0.24rem;
    .scan_info{
      display: flex;
      .scan_bg{
        width: 0.32rem;
        height: 0.24rem;
        margin-right: 0.1rem;
        margin-top: 0.03rem;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .scan_title{
        margin-right: 0.1rem;
        color: rgb(102,102,102);
      }
      .scan_number{
        color: rgb(153,153,153);
      }
    }
  }
  /*评论*/
  .comment{
    float: right;
    .comment_info{
      display: flex;
      .comment_bg{
        width: 0.3rem;
        height: 0.26rem;
        margin-top: 0.03rem;
        margin-right: 0.1rem;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .comment_title{
        margin-right: 0.1rem;
        color: rgb(102,102,102);
      }
      .comment_number{
        color: rgb(153,153,153);
      }
    }
  }
}
</style>

<template>
  <div class="item_top_r">
    <!--浏览-->
    <div class="scan">
      <div class="scan_info">
        <i class="scan_bg"><img src="../../assets/img/discovery/ico_eye.png"/></i>
        <span class="scan_title">浏览</span>
        <span class="scan_number">{{item.pv}}</span>
      </div>
    </div>
    <!--评论-->
    <div class="comment">
      <div class="comment_info">
        <i class="comment_bg"><img src="../../assets/img/discovery/ico_message.png"/></i>
        <span class="comment_title">评论</span>
        <span class="comment_number">{{item.commentCount}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['item'],
  name: "support",
  data: () => ({

  })
}
</script>
