<template>
	<div class="teamEditNews">
    <!--标题-->
    <div class="tEN_title">
      <div class="tEN_title1">编辑团队成员信息</div>
      <div class="tEN_title2">完善团队成员信息，更有助于客户了解团队情况</div>
    </div>
    <!--填写-->
    <div class="bEN_content">
      <div class="bEN_Name">
        <div class="bEN_Name1">成员姓名</div>
        <div style="color: red;width: 0.16rem">*</div>
        <input v-model="btnName" :title="btnName" class="bEN_Name2" type="text" placeholder="请输入成员姓名">
      </div>
      <div class="bEN_Name">
        <div class="bEN_Name1">担任职位</div>
        <div style="color: red;width: 0.16rem">*</div>
        <input v-model="btnJob" :title="btnJob" class="bEN_Name2" type="text" placeholder="请输入职位：如CEO">
      </div>
      <div class="bEN_Name">
        <div class="bEN_Name1">成员邮箱</div>
        <div style="width: 0.16rem"></div>
        <input v-model="btnMail" :title="btnMail" class="bEN_Name2" type="text" placeholder="请输入">
      </div>
      <div class="bEN_Describe">
        <div class="bEN_Describe1">经历描述</div>
        <div style="width: 0.16rem"></div>
        <textarea maxlength="100"  v-model="btnDescribe" :title="btnDescribe" class="bEN_Describe2" type="text" placeholder="请简要描述过往经历，亮点成就等信息"></textarea>
      </div>
    </div>
    <div style="height: 0.20rem;background-color: #F6F6F6"></div>
    <div class="bEN_top">
      <div>是否置顶</div>
      <input type="radio" name="team" value="1" style="margin-left: 0.4rem">
      <div style="margin-left: 0.1rem" v-model="selected">是</div>
      <input style="margin-left: 0.72rem" type="radio" name="team" value="2" v-model="selected">
      <div style="margin-left: 0.1rem">否</div>
    </div>
    <div class="bEN_foot">
      <div @click="deleClick" class="bEN_dele">删除</div>
      <!--占个位置-->
      <div style="width: 0.2rem"></div>
      <div @click="saveClick" class="bEN_save">保存</div>
    </div>
	</div>
</template>

<script>
  import { Toast } from 'mint-ui';
	import host from '../../config'
export default {
	data(){
        return {
          btnName: '', //成员姓名
          btnJob: '', //担任职位
          btnMail: '', //成员邮箱
          btnDescribe: '', //经历描述
          selected: 2, //选择，默认为否
					resData: null
        }
    },
  props:['teamObj','type','allData'],
    created(){
      if(this.teamObj){
        this.btnName = this.teamObj.name;
        this.btnJob = this.teamObj.position
        this.btnMail = this.teamObj.btnMail
        this.btnDescribe = this.teamObj.btnDescribe
        this.selected = this.teamObj.selected
      }
    },
    mounted(){
			// console.log(this.allData)
    },
    methods:{
      toast(text){
        Toast({
          message: text,
          position: 'middle',
          duration: 1000
        });
      },
      deleClick(){
        this.$emit('deleSync',this.type)
      },
      saveClick(){
        if(!this.btnName.trim()){
          Toast('成员姓名必填！');
          return;
        }
        if(!this.btnJob.trim()){
          Toast('担任职位必填！');
          return;
        }
        if(this.type == 1){
				this.$http.post(host.host+'/api/projects/'+this.allData.id+'/users',{
					pid: this.$store.state.projectId,
          name: this.btnName,
          position: this.btnJob,
          email: this.btnMail,
          desc: this.btnDescribe,
        }).then((res)=>{
					this.resData = res.data.data
					this.$emit('saveSync',{
	          btnName: this.btnName,
	          btnJob: this.btnJob,
	          btnMail: this.btnMail,
	          btnDescribe: this.btnDescribe,
	          selected: this.selected,
						teamId: this.resData.id,
            createDate: this.resData.createDate,
            creator: this.resData.creator,
            pid: this.resData.pid,
	        },this.type)
				}).catch((res)=>{

				})
        }else{
        	this.$http.put(host.host+'/api/projects/'+this.allData.id+'/users',{
          id:this.teamObj.teamId,
					pid: this.$store.state.projectId,
          name: this.btnName,
          position: this.btnJob,
          email: this.btnMail,
          desc: this.btnDescribe,
          headPic:this.teamObj.url,
        }).then((res)=>{
					this.$emit('saveSync',{
	          btnName: this.btnName,
	          btnJob: this.btnJob,
	          btnMail: this.btnMail,
	          btnDescribe: this.btnDescribe,
	          selected: this.selected,
						teamId: this.teamObj.id,
            createDate: this.teamObj.createDate,
            creator: this.teamObj.creator,
            pid: this.teamObj.pid,
	        },this.type)
				}).catch((res)=>{

				})
        }


      }
    },
    components:{

    }
}
</script>

<style scoped="scoped" lang="scss">
.teamEditNews{
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  width: 100%;
  height: 100%;
  overflow: auto;

}
/*标题*/
  .tEN_title{
    position: relative;
    height: 1.24rem;
    width: 100%;
    background-color: #F6F6F6;
  }
  .tEN_title1{
    width: 100%;
    display: flex;
    padding-top: 0.10rem;
    justify-content: center;
    font-size: 0.32rem;
    color: #434343;
  }
.tEN_title2{
  width: 100%;
  display: flex;
  padding-top: 0.12rem;
  justify-content: center;
  font-size: 0.24rem;
  color: #666666;
}
  /*填写内容*/
  .bEN_content{
    width: 100%;
    height: auto;
    position: relative;
    padding: 0 0.36rem;
  }
  .bEN_Name{
    width: 100%;
    height: 1.1rem;
    border-bottom: 1px solid #F1F1F1;
    display: flex;
    align-items: center;
    color: #434343;
    font-size: 0.28rem;
  }
  .bEN_Name1{

  }
  .bEN_Name2{
    outline: none;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-left: 0.24rem;
    width: 5.2rem;
    border: 0 solid;
  }
  .bEN_Describe{
    width: 100%;
    height: 3.6rem;
    display: flex;
    color: #434343;
    font-size: 0.28rem;
  }
 .bEN_Describe1{
  margin-top: 0.38rem;
 }
  .bEN_Describe2{
    outline: none;
    overflow: hidden;
    margin-left: 0.24rem;
    width: 5.2rem;
    border: 0 solid;
    resize: none;
    padding-top: 0.38rem;
    line-height: 0.4rem;
    color: #434343;
    font-size: 0.28rem;

  }
  /*选择 是或否*/
  .bEN_top{
    height: 0.9rem;
    width: 100%;
    padding-left: 0.36rem;
    font-size: 0.32rem;
    color: #434343;
    display: flex;
    align-items: center;
  }
  /*底部按钮*/
.bEN_foot{
  height: auto;
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 0.36rem;
  color: #ffffff;
  justify-content: center;
  padding: 1.23rem 0;
  background-color: #F6F6F6;
}
.bEN_foot .bEN_dele{
  width: 3.16rem;
  height: 0.84rem;
  background-color: #3770d7;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.42rem;
}
.bEN_foot .bEN_save{
  width: 3.16rem;
  height: 0.84rem;
  background-color: #3770d7;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.42rem;
}

::-webkit-input-placeholder {
  color: #cccccc;
  font-size: 0.24rem;
}
::-moz-placeholder {
  color: #cccccc;
  font-size: 0.24rem;
} /* firefox 19+ */
:-ms-input-placeholder {
  color: #cccccc;
  font-size: 0.24rem;
} /* Internet Explorer 10+ */
:-moz-placeholder {
  color: #cccccc;
  font-size: 0.24rem;
} /* firefox 14-18 */
</style>
