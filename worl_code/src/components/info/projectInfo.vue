<style lang="scss" scoped>
.item_middle{
  width: 100%;
  height: 2.5rem;
  padding: 0 0.36rem;
  .item_middle_l{
    float:left;
    margin-right: 0.36rem;
    padding-top: 0.34rem;
    /*项目logo*/
    .project_logo{
      width: 1.8rem;
      height: 1.8rem;
      border-radius: 0.2rem;
      background: #fff;
      overflow: hidden;
      border: 0.01rem solid rgb(204,204,204);
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
  .item_middle_r{
    float:left;
    padding-top: 0.52rem;
    /*项目文字信息*/
    .project_info{
      .project_title{
        font-size: 0.36rem;
        font-weight: bold;
        color: rgb(51,51,51);
        margin-bottom: 0.2rem;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
      }
      .project_text{
        color: rgb(102,102,102);
        font-size: 0.28rem;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
      }
    }
  }
}
</style>

<template>
  <router-link :to="{path: '/discovery/detail',query:{id: item.id}}" tag="div" class="item_middle">
    <!--项目主体-->
    <div class="item_middle_l">
      <div class="project_logo">
        <img :src="item.logo"/></div>
    </div>
    <div class="item_middle_r">
      <dl class="project_info">
        <dt class="project_title">{{item.name}}</dt>
        <dd class="project_text">{{item.shortDesc}}</dd>
      </dl>
    </div>
  </router-link>
</template>
<script>
export default {
  name: "project",
  props: ['item'],
  data: () => ({

  })
}
</script>
