<template>
	<div class="teamNews">
    <!--选择-->
    <div class="tN_selectSet">
      <img class="tN_selectSet1" src="../../assets/img/publish/fb04.png" alt="">
      <div @click="isPopup = 2,teamObj = '',type1 = 1" class="tN_selectSet2">
        <img src="../../assets/img/publish/fb12.png" alt="">
      </div>
      <div @click="addTeamdvantageAClick" class="tN_selectSet2" style="margin-left: 0.6rem">
        <img src="../../assets/img/publish/fb13.png"  alt="">
      </div>
    </div>

    <!--相关内容区域-->
    <div class="tNcontent">
      <div class="tNbigBox"  v-for="(data,index) in addToDatas">
        <!--内容-->
        <div class="tNcontent_1">
          <div v-if="data.isNoDele" class="tNcontent_2">
            <!--图片-->
            <div class="img">
              <img :src="data.url" alt="">
              <input v-if="(data.id === 3 || data.id === 4) && isInput " @change="replaceImgClick($event,index)" type="file" accept="image/*">
            </div>
            <!--文字说明-->
            <div v-if=" data.id === 3" @click="isPopup = 2,zIndex = index,teamObj = data,type1 = 2" class="text">
              <div style="display: flex;align-items: center">
                <div v-html="data.name" :title="data.name" style="font-size: 0.36rem;color: #333333"></div>
                <div  v-html="data.position" :title="data.position" style="font-size: 0.30rem;color: #434343;margin-left: 0.2rem"></div>
              </div>
              <div  v-html="data.text" :title="data.text" style="font-size: 0.28rem;color: #666666;overflow: hidden;text-overflow: ellipsis; display: -webkit-box;
    -webkit-line-clamp: 2;-webkit-box-orient: vertical;margin-top: 0.1rem"></div>
            </div>
            <div v-if=" data.id === 4" @click="isPopup = 1,type = 1,maxLength = 1000,zIndex = index,textVal = data.text" class="text" v-html="data.text" :title="data.text"></div>
          </div>
          <div  class="tNcontent_2" v-for="(childData,index1) in data.children" style="margin-top: 0.2rem">
            <!--图片-->
            <div class="img">
              <img :src="childData.url" alt="">
              <input v-if="(data.id === 3 || data.id === 4) && isInput " @change="replaceImgClick($event,index,index1)" type="file" accept="image/*">
            </div>
            <!--文字说明-->
            <div v-if=" data.id === 3" @click="isPopup = 2,zIndex = index,cIndex = index1,teamObj = childData,type1 = 3" class="text">
              <div style="display: flex;align-items: center">
                <div v-html="childData.name" :title="childData.name" style="font-size: 0.36rem;color: #333333"></div>
                <div  v-html="childData.position" :title="childData.position" style="font-size: 0.30rem;color: #434343;margin-left: 0.2rem"></div>
              </div>
              <div  v-html="childData.text" :title="childData.text" style="font-size: 0.28rem;color: #666666;overflow: hidden;text-overflow: ellipsis; display: -webkit-box;
    -webkit-line-clamp: 2;-webkit-box-orient: vertical;margin-top: 0.1rem"></div>
            </div>
            <div v-if=" data.id === 4" @click="isPopup = 1,type = 2,maxLength = 1000,cIndex = index1,zIndex = index,textVal = childData.text" class="text" v-html="childData.text" :title="childData.text"></div>
          </div>
          <!--加号-->
          <div @click="addThisDataClick(data.id,index)" class="bN_add">
            <img src="../../assets/img/publish/fb08.png" alt="加载失败">
          </div>
        </div>
        <!--项目介绍-->
        <div class="bN_project">
          <div  @click="textVal = data.title,isPopup = 1,maxLength = 8,zIndex = index,type = 3" style="position: relative;display: flex;align-items: center">
            <!--文字说明-->
            <div class="bN_title" v-html="data.title" :title="data.title"></div>
            <!--修改名称-->
            <img class="bN_img1" src="../../assets/img/publish/fb09.png" alt="加载图片失败">
          </div>

          <!--删除-->
          <img @click="deleClick(index)" class="bN_img2" src="../../assets/img/publish/fb10.png" alt="加载图片失败">
        </div>
      </div>
    </div>


    <!--修改名称-->
    <busNewsTextEdit v-if="isPopup === 1" :maxLength="maxLength" :type="type" @syncData="finishEditClick" :textVal="textVal"></busNewsTextEdit>
    <!--编辑团队信息-->
    <teamEditNews v-if="isPopup === 2" @deleSync="teamEditDeleClick" @saveSync="teamEditSaveClick" :teamObj="teamObj" :type="type1" :allData="allData"></teamEditNews>

	</div>
</template>

<script>
  import teamEditNews from './teamEditNews';
  import img1 from '../../assets/img/publish/fb14.png';
  import img2 from '../../assets/img/publish/fb11.png';
  import busNewsTextEdit from './busNewsTextEdit';
	import { MessageBox } from 'mint-ui'
	import host from '../../config'
export default {
	props: ['allData'],
	data(){
        return {
          isPopup: false,
          addToDatas: [],  //添加的数据
          isInput: true,  //选择图片后，消除value里面的值
          textVal: '',
          img1: img1,
          img2: img2,
          isInput: true,
          zIndex: '',  //主级的下标
          cIndex: '',  //子级的下标
          isAdd: false,  //团队概况
          type: '', //  * 1 代表 主级修改* 2 代表 子级修改* 3 代表 项目信息修改
          teamObj: '', //成员相关信息
          type1: '', //1 新增 2 主机修改 3子级修改
          qiniuToken: '', //七牛token
        }
    },
     created(){
      this.getToken();
            if(!!this.allData.memberInfo.length){
          this.allData.memberInfo.forEach(val => {
            this.addToDatas.push({
            id: 3,   // 3.成员信息 4代表团队优势
            isNoDele: true,
            name: val.name, //上传的文件名称
            file: '',
            position: val.position, //职位
            btnMail: val.email,
            btnDescribe: val.desc,
            url: val.image, ////上传的文件uir
            text: val.desc, //文本输入
            title: '团队概况', //项目信息
            children: [],   //增加的数据
          	teamId: val.id,
            createDate: val.createDate,
            creator: val.creator,
            pid: val.pid,
            })
          });
      }
         if(!!this.allData.teamStrengths.length){
          this.allData.teamStrengths.forEach(val => {
            this.addToDatas.push({
            id: 4,   // 3.成员信息 4代表团队优势
            isNoDele: true, //用来编辑是否删除，
            name: val.name, //上传的文件名称
            file: '',
            url: val.image, ////上传的文件uir
            text: val.content, //文本输入
            title: '团队概况', //项目信息
            children: [],   //增加的数据
          	teamId: val.id,
            createDate: val.createDate,
            creator: val.creator,
            pid: val.pid,
            })
          });
      }
      console.log(this.addToDatas)
    },
    mounted(){

    },
    methods:{

      	getToken () {
				this.$http.get('http://www.xiangmulai.com/api/qiniu/token').then((res) =>{
					this.qiniuToken = res.data.data.token
				}).catch((err) => {

				})},
      /*增加团队优势*/
      addTeamdvantageAClick(){
            this.$http.post('http://www.xiangmulai.com/api/projects/'+this.allData.id+'/teamStrength',{
          pid: this.$store.state.projectId,
          content: '',
        }).then((res)=>{
          let resD = res.data.data;
			  this.addToDatas.unshift({
          id: 4,   // 0代表文字  1代表图片 2视频 3.成员信息 4代表团队优势
          isNoDele: true, //用来编辑是否删除，
          name: '', //上传的文件名称
          file: '',
          url: this.img1, //上传的文件uir
          text: '点击输入"团队优势"的相关内容', //文本输入
          title: '团队优势', //项目信息
          children: [],   //增加的数据
        	teamId: resD.id,
          createDate: resD.createDate,
          creator: resD.creator,
           pid: resD.pid,
        })
      
				}).catch((res)=>{

				})
      },
      /*加号点击事件*/
      addThisDataClick(type,index){
        if(type == 3){
          this.isPopup = 2;
          this.isAdd = true
          this.zIndex = index;
          this.type1 = 1;
          this.teamObj = '';
        }else if(type == 4){
           this.$http.post('http://www.xiangmulai.com/api/projects/'+this.allData.id+'/teamStrength',{
          pid: this.$store.state.projectId,
          content: '',
        }).then((res)=>{
          this.addToDatas[index].children.push({
            url: this.img1, ////上传的文件uir
            text: '点击输入"团队优势"的相关内容', //文本输入
          })
				}).catch((res)=>{

				})
        }
      },
      /*替换图片*/
      replaceImgClick(ev,index,index1){
        let file = ev.target.files[0];
        if(!/^image\//.test(file.type)){
          this.$options.methods.toast('格式不对，请重新上传图片！');
          return;
        }
        let _this = this;
        this.isInput = false;
        let adderUrl = 'http://p280n68q1.bkt.clouddn.com/'
	      let formData = new FormData();
				formData.append('token',this.qiniuToken)
				formData.append('file',file)
				formData.append('fileName',file.name)
				this.$http.post('http://upload.qiniu.com',formData).then((res)=>{
            // console.log(res.data.hash)
            let hash = res.data.hash;
            if(this.addToDatas[index].id == 3){
   
        if(index1 === undefined){
            _this.isInput = true;
            _this.addToDatas[index].url = adderUrl + hash
          this.$http.put('http://www.xiangmulai.com/api/projects/'+this.allData.id+'/users',{
          id: _this.addToDatas[index].teamId,
					pid: _this.addToDatas[index].pid,
          name: _this.addToDatas[index].name,
          position: _this.addToDatas[index].position,
          email: _this.addToDatas[index].btnMail,
          desc: _this.addToDatas[index].btnDescribe,
          headPic: adderUrl + hash,
        }).then((res)=>{
					// console.log(res)
				}).catch((res)=>{

				})

        }else {
           _this.isInput = true;
          _this.addToDatas[index].children[index1].url =  adderUrl + hash
          this.$http.put('http://www.xiangmulai.com/api/projects/'+ this.allData.id+'/users',{
          id: _this.addToDatas[index].teamId,
					pid: _this.addToDatas[index].pid,
          name: _this.addToDatas[index].name,
          position: _this.addToDatas[index].position,
          email: _this.addToDatas[index].btnMail,
          desc: _this.addToDatas[index].btnDescribe,
          headPic: adderUrl + hash,
        }).then((res)=>{
					// console.log(res)
				}).catch((res)=>{

				})
        }
      }else{
        if(index1 === undefined){
            _this.isInput = true;
            _this.addToDatas[index].url = adderUrl + hash
          this.$http.put('http://www.xiangmulai.com/api/projects/'+this.allData.id+'/teamStrength ',{
          id: _this.addToDatas[index].teamId,
          pid: _this.addToDatas[index].pid,
          content: _this.addToDatas[index].text,
        }).then((res)=>{
					// console.log(res)
				}).catch((res)=>{

				})

        }else {
           _this.isInput = true;
          _this.addToDatas[index].children[index1].url =  adderUrl + hash
          this.$http.put('http://www.xiangmulai.com/api/projects/'+ this.allData.id+'/teamStrength ',{
          id: _this.addToDatas[index].children[index1].teamId,
          pid: _this.addToDatas[index].children[index1].pid,
          content: _this.addToDatas[index].children[index1].text,
        }).then((res)=>{
					// console.log(res)
				}).catch((res)=>{

				})
        }
            }
 
    
					})
      },
      /*删除*/
      deleClick(index){
				MessageBox.confirm('确认删除').then(action => {
          if(this.addToDatas[index].id == 3){
    this.$http.delete('http://www.xiangmulai.com/api/projects/'+this.allData.id+'/users/' + this.addToDatas[index].teamId,{
          id: this.allData.teamId,
        }).then((res)=>{
					// console.log(res)
          this.addToDatas.splice(index,1);
				}).catch((res)=>{

				})
          }else{
   this.$http.delete('http://www.xiangmulai.com/api/projects/'+this.allData.id+'/teamStrength/' + this.addToDatas[index].teamId,{
          id: this.allData.teamId,
        }).then((res)=>{
					// console.log(res)
          this.addToDatas.splice(index,1);
				}).catch((res)=>{

				})
          }
      
				});
      },
      /*编辑文本获取到文字*/
      finishEditClick(val,type){
        /*
         * 1 代表 主级修改
         * 2 代表 子级修改
         * 3 代表 项目信息修改
         * */
        if(type === 1){
    this.$http.put('http://www.xiangmulai.com/api/projects/'+this.allData.id+'/teamStrength',{
          pid: this.$store.state.projectId,
          id: this.addToDatas[this.zIndex].teamId,
          content: val,
        }).then((res)=>{
					// console.log(res)             
          this.addToDatas[this.zIndex].text = val;
          this.isPopup = false;
          this.textVal = '';
          this.zIndex = '';
          this.cIndex = '';
      
				}).catch((res)=>{

				})

        }else if(type === 2){

          this.$http.put('http://www.xiangmulai.com/api/projects/'+this.allData.id+'/teamStrength',{
          pid: this.$store.state.projectId,
          id:  this.addToDatas[this.zIndex].children[this.cIndex].teamId,
          content: val,
        }).then((res)=>{
					// console.log(res)             
        this.addToDatas[this.zIndex].children[this.cIndex].text = val;
        this.isPopup = false;
        this.textVal = '';
        this.zIndex = '';
        this.cIndex = '';
      
				}).catch((res)=>{

				})
        }else if(type === 3) {
          this.addToDatas[this.zIndex].title = val;
         this.isPopup = false;
        this.textVal = '';
        this.zIndex = '';
        this.cIndex = '';
        }
      },
      /*删除成员信息*/
      teamEditDeleClick(type){
        if(type == 1){

        }else if(type == 2){
          this.$http.delete('http://www.xiangmulai.com/api/projects/'+this.allData.id+'/users/' + this.addToDatas[this.zIndex].teamId,{
          id: this.allData.id,
          uid: this.addToDatas[this.zIndex].teamId,
        }).then((res)=>{
					// console.log(res)
         this.addToDatas[this.zIndex].isNoDele = false;
          // this.addToDatas.splice(index,1);

             if(this.addToDatas.length && !this.addToDatas[this.zIndex].isNoDele && !this.addToDatas[this.zIndex].children.length){
          this.addToDatas.splice(this.zIndex,1);
        }
				}).catch((res)=>{

				})
        }else if(type == 3){
      
            this.$http.delete('http://www.xiangmulai.com/api/projects/'+this.allData.id+'/users/' + this.addToDatas[this.zIndex].children[this.cIndex].teamId,{
          id: this.allData.id,
          uid: this.addToDatas[this.zIndex].children[this.cIndex].teamId,
        }).then((res)=>{
					// console.log(res)
       this.addToDatas[this.zIndex].children.splice(this.cIndex,1);
          if(this.addToDatas.length && !this.addToDatas[this.zIndex].isNoDele && !this.addToDatas[this.zIndex].children.length){
          this.addToDatas.splice(this.zIndex,1);
        }
				}).catch((res)=>{

				})
        }
        this.isPopup = false;
      },
      /*保存编辑团队成员信息*/
      teamEditSaveClick(obj,type){
        this.isPopup = false;
        if(type == 1){
          if(this.isAdd){
            this.addToDatas[this.zIndex].children.push({
              teamId: obj.teamId,
              createDate: obj.createDate,
              creator: obj.creator,
              pid: obj.pid,
              name: obj.btnName, //名字
              position: obj.btnJob, //职位
              btnMail: obj.btnMail,
              btnDescribe: obj.btnDescribe,
              selected: obj.selected,
              file: '',
              url: this.img2, ////上传的文件uir
              text: obj.btnDescribe, //文本输入
              title: '团队概况', //团队概况
              children: [],   //增加的数据
            });
            this.isAdd = false
            this.zIndex = '';
            return;
          }
          this.addToDatas.unshift({
            id: 3,   // 0代表文字  1代表图片 2视频 3.成员信息 4代表团队优势
            teamId: obj.teamId,
            createDate: obj.createDate,
            creator: obj.creator,
            pid: obj.pid,
            isNoDele: true, //用来编辑是否删除，
            name: obj.btnName, //名字
            position: obj.btnJob, //职位
            btnMail: obj.btnMail,
            btnDescribe: obj.btnDescribe,
            selected: obj.selected,
            file: '',
            url: this.img2, ////上传的文件uir
            text: obj.btnDescribe, //文本输入
            title: '团队概况', //团队概况
            children: [],   //增加的数据
          })
        }else if(type == 2){
          this.addToDatas[this.zIndex].teamId = obj.teamId;
          this.addToDatas[this.zIndex].createDate = obj.createDate;
          this.addToDatas[this.zIndex].creator = obj.creator;
          this.addToDatas[this.zIndex].pid = obj.pid;
          this.addToDatas[this.zIndex].name = obj.btnName;
          this.addToDatas[this.zIndex].position = obj.btnJob;
          this.addToDatas[this.zIndex].btnMail = obj.btnMail;
          this.addToDatas[this.zIndex].btnDescribe = obj.btnDescribe;
          this.addToDatas[this.zIndex].selected = obj.selected;
        }else if(type == 3){
          this.addToDatas[this.zIndex].children[this.cIndex].teamId = obj.teamId;
          this.addToDatas[this.zIndex].children[this.cIndex].createDate = obj.createDate;
          this.addToDatas[this.zIndex].children[this.cIndex].creator = obj.creator;
          this.addToDatas[this.zIndex].children[this.cIndex].pid = obj.pid;
          this.addToDatas[this.zIndex].children[this.cIndex].name = obj.btnName;
          this.addToDatas[this.zIndex].children[this.cIndex].position = obj.btnJob;
          this.addToDatas[this.zIndex].children[this.cIndex].btnMail = obj.btnMail;
          this.addToDatas[this.zIndex].children[this.cIndex].btnDescribe = obj.btnDescribe;
          this.addToDatas[this.zIndex].children[this.cIndex].selected = obj.selected;
        }
      },
			getAllData () {
				let getId = this.$route.query.id
				this.$http.get(host.host+'/api/projects/'+getId).then((res)=>{
					this.allData = res.data.data.data.id
					console.log(this.allData)
				}).catch((err) => {

				})
			}
    },
		updated() {
		  //do something after updating vue instance
		  this.getAllData()
		},
    components:{
      teamEditNews,
      busNewsTextEdit
    }
}
</script>

<style scoped="scoped" lang="scss">
  .teamNews{
    position: relative;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    z-index: 2;
  }
  /*选择*/
  .tN_selectSet{
    position: relative;
    width: 3.6rem;
    height: 0.68rem;
    background-color: rgba(27,47,73,0.4);
    border-radius: 0.16rem;
    margin-top: 0.18rem;
    display: flex;
    align-items: center;
    padding: 0.08rem 0.6rem;

  }
  .tN_selectSet1{
    position: absolute;
    left: -0.5rem;
    width: 0.4rem;
    height: 0.4rem;
    cursor: pointer;
  }
  .tN_selectSet > .tN_selectSet2{
    position: relative;
    width: 0.4rem;
    height:  0.4rem
  }
  .tN_selectSet > .tN_selectSet2 > img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    pointer-events: none;
  }

  /*内容区域*/
  .tNcontent{
    position: relative;
    width: 100%;
    padding: 0.36rem 0.36rem 0;
  }
  .tNbigBox{
    position: relative;
    width: 100%;
    height: auto;
    overflow: hidden;
  }
  .tNcontent_1{
    position: relative;
    width: 100%;
    border-radius: 0.04rem;
    padding: 0.32rem 0.36rem 0 0.46rem;
    background-color: #F4F4F4;
  }
  .tNcontent_2{
    position: relative;
    width: 100%;
    display: flex;
  }
  .tNcontent_1  .img{
    position: relative;
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 0.04rem;
    box-shadow: 2px 2px 3px #D9D9D9;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  /*图片*/
  .tNcontent_1  .img > img {
    position: relative;
    max-width: 100%;
    max-height: 100%;
  }
  .tNcontent_1  .img > input{
    font-size: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  /*文字*/
  .tNcontent_1  .text{
    margin-left: 0.34rem;
    flex: 1;
    height: 1.6rem;
    line-height: 0.4rem;
    resize: none;
    font-size: 0.4rem;
    outline: none;
    border: 0;
    color: #727272;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;

  }
  /*加号*/
  .bN_add{
    position: relative;
    width: 100%;
    height: 0.44rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .bN_add > img{
    width: 0.24rem;
    height: 0.24rem;
    cursor: pointer;
  }
  /*项目信息*/
  .bN_project{
    position: relative;
    padding-bottom: 0.4rem;
    width: 100%;
    display: flex;
  }
  .bN_project .bN_title{
    font-size: 0.28rem;
    color: rgba(255,255,255,.8);
    margin-top: 0.14rem;
  }
  .bN_project .bN_img1{
    width: 0.16rem;
    height: 0.16rem;
    margin-left: 0.04rem;
    position: relative;
    top: 0.12rem;
    cursor: pointer;
  }
  .bN_project .bN_img2{
    width: 0.38rem;
    height: 0.38rem;
    position: absolute;
    top: 0.1rem;
    right: 0.2rem;
    cursor: pointer;
  }
  .bN_add input{
    font-size: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
