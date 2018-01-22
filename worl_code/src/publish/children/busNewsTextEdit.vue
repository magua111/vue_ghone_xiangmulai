<template>
  <div class="busNewsTextEdit">
    <!--编辑文字-->
    <div class="bn_textarea">
      <textarea v-model="textContent" :maxlength="maxLength" class="textarea"></textarea>
    </div>
    <!--剩余文字说明-->
    <div class="textSurplus">
      <div v-html="textContent.length"></div>
      <div>/</div>
      <div v-html="maxLength"></div>
    </div>
    <!--完成按钮-->
    <div @click="finishClick" class="teFoot_finish">
      完成
    </div>
  </div>
</template>

<script>

  export default {

    data(){
      return {
        textContent: '', //手动输入在文字
      }
    },
    /*
     * maxLength 输入文字最大长度
     * type: 类型
     * textVal：值
     * */
    props:['maxLength','type','textVal'],
    mounted(){
      this.textContent = this.textVal
    },
    methods:{
      finishClick(){
        this.$emit('syncData',this.textContent,this.type);
      }
    },
    watch:{
      textVal(a){
        this.textContent = a;
        console.log(a)
      }
    },
    components:{

    }
  }
</script>

<style scoped="scoped" lang="scss">
  .busNewsTextEdit{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 9;
    background-color: white;
  }
  .bn_textarea{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding-bottom: 1.83rem;
  }
  .textarea{
    border: 0 solid transparent;
    position: relative;
    width: 100%;
    height: 100%;
    resize: none;
    padding: 0.1rem 0.36rem;
    font-size: 0.24rem;
    line-height: 0.44rem;
    color: #666666;
  }
  .textSurplus{
    position: absolute;
    bottom: 0.85rem;
    left: 0;
    width: 100%;
    height: 0.98rem;
    background-color: #E6E6E6;
    font-size: 0.30rem;
    display: flex;
    align-items: center;
    color: #fffefe;
    padding-left: 0.2rem;
  }
  .teFoot_finish{
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
    color: #CECECE;
  }
</style>
