<template>
	<div class="busNews">
    <!--选择-->
    <div class="bN_selectSet">
      <img class="bN_selectSet1" src="../../assets/img/publish/fb04.png" alt="">
      <div @click="isPopup = 1,type = 0,maxLength = 1000" class="bN_selectSet2">
        <img src="../../assets/img/publish/fb05.png" alt="">
        <!--<router-link to="/publish/NextSet/busNewsTextEdit" tag="div" class="textEdit" maxlength="1000"></router-link>-->
      </div>
      <div class="bN_selectSet2">
        <img src="../../assets/img/publish/fb06.png" alt="">
        <input v-if="isInput" @change="imgSelectClick" class="bN_file1" type="file" accept="image/*">
      </div>
      <div class="bN_selectSet2">
        <img src="../../assets/img/publish/fb07.png" alt="">
        <input v-if="isInput" @change="videoSelectClick" type="file" accept="video/*">
      </div>
    </div>

    <!--相关内容区域-->
    <div class="bN-content">
      <div class="bN-bigBox"  v-for="(data,index) in addToDatas">
        <!--内容-->
        <div class="bN-content_1">
          <div class="bN-content_2">
            <!--图片/视频-->
            <div class="img" key='1'>
              <img v-if="data.id === 0 || data.id === 1" :src="data.url" alt="">
              <video v-if="data.id === 2" :src="data.url"></video>

              <input v-if="(data.id === 0 || data.id === 1) && isInput " @change="replaceImgClick($event,index)" type="file" accept="image/*">
              <input v-if="data.id === 2 && isInput" @change="replaceVideoClick($event,index)" type="file" accept="video/*">
            </div>
            <!--文字说明-->
            <div @click="isPopup = 1,type = 1,maxLength = 1000,zIndex = index,textVal = data.text" class="text" v-html="data.text" :title="data.text"></div>
          </div>
          <div  class="bN-content_2" v-for="(childData,index1) in data.children" style="margin-top: 0.2rem">
            <!--图片/视频-->
            <div class="img" key='2'>
              <img v-if="data.id === 0 || data.id === 1" :src="childData.url" alt="">
              <video v-if="data.id === 2" :src="childData.url"></video>

              <input v-if="(data.id === 0 || data.id === 1) && isInput " @change="replaceImgClick($event,index,index1)" type="file" accept="image/*">
              <input v-if="data.id === 2 && isInput" @change="replaceVideoClick($event,index,index1)" type="file" accept="video/*">
            </div>
            <!--文字说明-->
            <div @click="isPopup = 1,type = 2,maxLength = 1000,cIndex = index1,zIndex = index,textVal = childData.text" class="text" v-html="childData.text" :title="childData.text"></div>
          </div>
          <!--加号-->
          <div class="bN_add">
            <img src="../../assets/img/publish/fb08.png" alt="加载失败">
            <input v-if="(data.id === 0 || data.id === 1) && isInput " @change="imgSelectClick($event,index)" type="file" accept="image/*">
            <input v-if="(data.id === 2) && isInput" @change="videoSelectClick($event,index)" type="file" accept="video/*">
          </div>
        </div>
        <!--项目介绍-->
        <div class="bN_project">
          <div @click="textVal = data.title,isPopup = 1,maxLength = 8,type = 3,zIndex = index" style="position: relative;display: flex;align-items: center">
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
    <busNewsTextEdit v-if="isPopup === 1" :maxLength="maxLength" @syncData="finishEditClick" :type="type" :textVal="textVal"></busNewsTextEdit>
	</div>
</template>

<script>
  import { Toast,MessageBox,Indicator} from 'mint-ui';
  import busNewsTextEdit from './busNewsTextEdit';
	import host from '../../config'
export default {
	data(){
        return {
          addToDatas: [],  //添加的数据
          isInput: true,  //选择图片后，消除value里面的值
          isPopup: false, //弹出层
          type: 0, //编写文字  0代表文字  1代表图片 2视频
          img1: '../../../static/img/fb11.png',
          maxLength: '',//输入最大字数
          zIndex: '',  //主级的下标
          cIndex: '',  //子级的下标
          textVal: '', //文字说明
          qiniuToken: '', //七牛token
          adderUrl : 'http://p280n68q1.bkt.clouddn.com/'

        }
    },
  	props: ['allData'],
    created(){
      this.getToken()
      if(!!this.allData.businessInfo.length){
          this.allData.businessInfo.forEach(val => {
            this.addToDatas.push({
            // id: 1,   // 0代表文字  1代表图片 2视频
            name: val.name, //上传的文件名称
            file: '',
            url: val.image, ////上传的文件uir
            text: val.desc, //文本输入
            title: '项目信息', //项目信息
            children: [],   //增加的数据
          	teamId: val.id,
            createDate: val.createDate,
            creator: val.creator,
            pid: val.pid,
            })
          });
      }
    },
    mounted(){


    },
    methods:{
      	getToken () {
				this.$http.get(host.host+'/api/qiniu/token').then((res) =>{
					this.qiniuToken = res.data.data.token
				}).catch((err) => {

				})},
      toast(text){
        Toast({
          message: text,
          position: 'middle',
          duration: 1000
        });
      },
      /*上传图片*/
      imgSelectClick(ev,index){
        let file = ev.target.files[0];
        if(!/^image\//.test(file.type)){
          this.$options.methods.toast('格式不对，请重新上传图片！');
          return;
        }
				// this.$http.post(host.host+'/api/projects/20/businessInfo').then((res)=>{
				// 	console.log(res)
				// }).catch((err) => {

				// })
        let _this = this;
        this.isInput = false;
        Indicator.open('Loading...');
	      let formData = new FormData();
				formData.append('token',this.qiniuToken)
				formData.append('file',file)
				formData.append('fileName',file.name)
				_this.$http.post('http://upload.qiniu.com',formData).then((res)=>{
            // console.log(res.data.hash)
            let hash = res.data.hash;
            if(index !== undefined){
          this.$http.post('http://www.xiangmulai.com/api/projects/'+this.allData.id+'/businessInfo ',{
					pid: this.$store.state.projectId,
          title: '',
          desc: '',
          image: _this.adderUrl + hash,
        }).then((res)=>{
          // console.log(res)
          let resD = res.data.data;
          _this.addToDatas[index].children.push({
            name: file.name, //上传的文件名称
            file: file,
            url: _this.adderUrl + hash,  ////上传的文件uir
            text: '', //文本输入
          	teamId: resD.id,
            createDate: resD.createDate,
            creator: resD.creator,
            pid: resD.pid,
            
          })
				}).catch((res)=>{

				})
        }else {

  this.$http.post('http://www.xiangmulai.com/api/projects/'+this.allData.id+'/businessInfo ',{
          // id: _this.addToDatas[index].teamId,
					pid: this.$store.state.projectId,
          title: '项目信息',
          desc: '',
          image: _this.adderUrl + hash,
        }).then((res)=>{
          // console.log(res)
          let resD = res.data.data;
          _this.addToDatas.unshift({
            id: 1,   // 0代表文字  1代表图片 2视频
            name: file.name, //上传的文件名称
            file: file,
            url: _this.adderUrl + hash, ////上传的文件uir
            text: '', //文本输入
            title: '项目信息', //项目信息
            children: [],   //增加的数据
          	teamId: resD.id,
            createDate: resD.createDate,
            creator: resD.creator,
            pid: resD.pid,
          })
				}).catch((res)=>{

				})

        }
        Indicator.close();
					})
        setTimeout(function(){
          _this.isInput = true;
        },0)
      },
      /*上传视频*/
      videoSelectClick(ev,index){
        let file = ev.target.files[0];
        let _this = this;
        this.isInput = false;
        if(!/^video\//.test(file.type)){
          this.$options.methods.toast('格式不对，请重新上传视频！');
          return;
        }
        Indicator.open('Loading...');
	      let formData = new FormData();
				formData.append('token',this.qiniuToken)
				formData.append('file',file)
				formData.append('fileName',file.name)
				this.$http.post('http://upload.qiniu.com',formData).then((res)=>{
            // console.log(res.data.hash)
            let hash = res.data.hash;
            if(index !== undefined){

   this.$http.post('http://www.xiangmulai.com/api/projects/'+this.allData.id+'/businessInfo ',{
					pid: this.$store.state.projectId,
          title: '',
          desc: '',
          video: _this.adderUrl + hash,
        }).then((res)=>{
          // console.log(res)
           let resD = res.data.data;
         _this.addToDatas[index].children.push({
            name: file.name, //上传的文件名称
            file: file,
            url: _this.adderUrl + hash,  ////上传的文件uir
            text: '', //文本输入
          	teamId: resD.id,
            createDate: resD.createDate,
            creator: resD.creator,
            pid: resD.pid,
          })
				}).catch((res)=>{

				})
        }else {
           this.$http.post('http://www.xiangmulai.com/api/projects/'+this.allData.id+'/businessInfo ',{
          // id: _this.addToDatas[index].teamId,
					pid: this.$store.state.projectId,
          title: '项目信息',
          desc: '',
          video: _this.adderUrl + hash,
        }).then((res)=>{
          // console.log(res)
            let resD = res.data.data;
           _this.addToDatas.unshift({
            id: 2,   // 0代表文字  1代表图片 2视频
            name: file.name, //上传的文件名称
            file: file,
            url: _this.adderUrl + hash, ////上传的文件uir
            text: '', //文本输入
            title: '项目信息', //项目信息
            children: [],   //增加的数据
          	teamId: resD.id,
            createDate: resD.createDate,
            creator: resD.creator,
            pid: resD.pid,
          })
				}).catch((res)=>{

				})
    
        }
        Indicator.close();
					})
        setTimeout(function(){
          _this.isInput = true;
        },0)
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
 
       Indicator.open('Loading...');
	      let formData = new FormData();
				formData.append('token',this.qiniuToken)
				formData.append('file',file)
				formData.append('fileName',file.name)
				this.$http.post('http://upload.qiniu.com',formData).then((res)=>{
            // console.log(res.data.hash)
            let hash = res.data.hash;
          if(index1 === undefined){

       this.$http.put('http://www.xiangmulai.com/api/projects/'+this.allData.id+'/businessInfo ',{
          id: _this.addToDatas[index].teamId,
					pid: _this.addToDatas[index].pid,
          title: _this.addToDatas[index].title,
          desc:  _this.addToDatas[index].text,
          image: _this.adderUrl + hash,
        }).then((res)=>{
           _this.addToDatas[index].url =  _this.adderUrl + hash;  ////上传的文件uir
				}).catch((res)=>{

				})
  
        }else {
            this.$http.put('http://www.xiangmulai.com/api/projects/'+this.allData.id+'/businessInfo ',{
          id: _this.addToDatas[index].teamId,
				  pid: _this.addToDatas[index].pid,
          title: _this.addToDatas[index].children[index1].title,
          desc:  _this.addToDatas[index].children[index1].text,
          image: _this.adderUrl + hash,
        }).then((res)=>{
          _this.addToDatas[index].children[index1].url =  _this.adderUrl + hash;  ////上传的文件uir
				}).catch((res)=>{

				})
        }
        Indicator.close();
					})
        setTimeout(function(){
          _this.isInput = true;
        },0)
      },
      /*替换视频*/
      replaceVideoClick(ev,index,index1){
        let file = ev.target.files[0];
        let _this = this;
        this.isInput = false;
        if(!/^video\//.test(file.type)){
          this.$options.methods.toast('格式不对，请重新上传视频！');
          return;
        }
          Indicator.open('Loading...');
	      let formData = new FormData();
				formData.append('token',this.qiniuToken)
				formData.append('file',file)
				formData.append('fileName',file.name)
				this.$http.post('http://upload.qiniu.com',formData).then((res)=>{
            // console.log(res.data.hash)
            let hash = res.data.hash;
          if(index1 === undefined){

 this.$http.put('http://www.xiangmulai.com/api/projects/'+this.allData.id+'/businessInfo ',{
          id: _this.addToDatas[index].teamId,
					pid: _this.addToDatas[index].pid,
          title: _this.addToDatas[index].title,
          desc: _this.addToDatas[index].text,
          video: _this.adderUrl + hash,
        }).then((res)=>{
					// console.log(res)
          _this.addToDatas[index].url =  _this.adderUrl + hash;  ////上传的文件uir
				}).catch((res)=>{

				})

        }else {
           this.$http.put('http://www.xiangmulai.com/api/projects/'+this.allData.id+'/businessInfo ',{
          id: _this.addToDatas[index].teamId,
					pid: _this.addToDatas[index].pid,
          title: _this.addToDatas[index].title,
          desc: _this.addToDatas[index].text,
          video: _this.adderUrl + hash,
        }).then((res)=>{
					// console.log(res)
              _this.addToDatas[index].children[index1].url =  _this.adderUrl + hash;  ////上传的文件uir
				}).catch((res)=>{

				})
        }

        Indicator.close();
					})
        setTimeout(function(){
          _this.isInput = true;
        },0)

      },
      /*删除*/
      deleClick(index){
				MessageBox.confirm('确认删除').then(action => {
          this.$http.delete('http://www.xiangmulai.com/api/projects/' + this.allData.id+'/businessInfo/' + this.addToDatas[index].teamId,{
          id: this.addToDatas[index].teamId,
        }).then((res)=>{
		     	this.addToDatas.splice(index,1);
				}).catch((res)=>{

				})
				});

      },
      /*编辑文本获取到文字*/
      finishEditClick(val,id){
        this.isPopup = false;
        this.textVal = '';
        /*
        * 0 代表新增
        * 1 代表 主级修改
        * 2 代表 子级修改
        * 3 代表 项目信息修改
        * */
          switch(id){
            case 0:
   this.$http.post('http://www.xiangmulai.com/api/projects/'+this.allData.id+'/businessInfo ',{
					pid: this.$store.state.projectId,
          title: '项目信息',
          desc: val,
          image: this.img1,
        }).then((res)=>{
          let resD = res.data.data;
      this.addToDatas.unshift({
                id: 0,
                name: '',
                url: this.img1,
                text: val, //文本输入
                title: '项目信息',
                children: [],
              	teamId: resD.id,
                createDate: resD.createDate,
                creator: resD.creator,
                pid: resD.pid,
              })
				}).catch((res)=>{

				})
                  break;
            case 1:
            let formData = new FormData();
            formData.append('id',this.addToDatas[this.zIndex].teamId);
            formData.append('pid',this.addToDatas[this.zIndex].pid);
            formData.append('title',this.addToDatas[this.zIndex].title);
            formData.append('desc',val);
              if(this.addToDatas[this.zIndex].id == 1){
            formData.append('image',this.url);
              }else{
            formData.append('video',this.url);
              }

            this.$http.put('http://www.xiangmulai.com/api/projects/'+this.allData.id+'/businessInfo ',formData).then((res)=>{
			      this.addToDatas[this.zIndex].text = val;
				}).catch((res)=>{

				})
              break;
            case 2:
            let formData1 = new FormData();
            formData1.append('id',this.addToDatas[this.zIndex].children[this.cIndex].teamId);
            formData1.append('pid',this.addToDatas[this.zIndex].children[this.cIndex].pid);
            formData1.append('title',this.addToDatas[this.zIndex].children[this.cIndex].title);
            formData1.append('desc',val);
              if(this.addToDatas[this.zIndex].id == 1){
            formData1.append('image',this.url);
              }else{
            formData1.append('video',this.url);
              }

            this.$http.put('http://www.xiangmulai.com/api/projects/'+this.allData.id+'/businessInfo ',formData1).then((res)=>{
			    this.addToDatas[this.zIndex].children[this.cIndex].text = val;
				}).catch((res)=>{

				})
              break;
            case 3:
            let formData2 = new FormData();
            formData2.append('id',this.addToDatas[this.zIndex].teamId);
            formData2.append('pid',this.addToDatas[this.zIndex].pid);
            formData2.append('title',val);
            formData2.append('desc',this.addToDatas[this.zIndex].pid);
              if(this.addToDatas[this.zIndex].id == 1){
            formData2.append('image',this.url);
              }else{
            formData2.append('video',this.url);
              }

            this.$http.put('http://www.xiangmulai.com/api/projects/'+this.allData.id+'/businessInfo ',formData2).then((res)=>{
			            this.addToDatas[this.zIndex].title = val;
				}).catch((res)=>{

				})
              break;
          }
      }
    },
    components:{
      busNewsTextEdit
    }
}
</script>


<style scoped="scoped" lang="scss">
.busNews{
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  z-index: 2;
}
/*选择*/
  .bN_selectSet{
    position: relative;
    width: 3.6rem;
    height: 0.68rem;
    background-color: rgba(27,47,73,0.4);
    border-radius: 0.16rem;
    margin-top: 0.18rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.08rem 0.6rem;

  }
  .bN_selectSet1{
    position: absolute;
    left: -0.5rem;
    width: 0.4rem;
    height: 0.4rem;
    cursor: pointer;
  }
  .bN_selectSet > .bN_selectSet2{
    position: relative;
    width: 0.4rem;
    height:  0.4rem
  }
  .bN_selectSet2 > input{
  font-size: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
  .textEdit{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .bN_selectSet > .bN_selectSet2 > img{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  pointer-events: none;
}
  /*内容区域*/
  .bN-content{
    position: relative;
    width: 100%;
    padding: 0.36rem 0.36rem 0;
  }
  .bN-bigBox{
    position: relative;
    width: 100%;
    height: auto;
    overflow: hidden;
  }
  .bN-content_1{
    position: relative;
    width: 100%;
    border-radius: 0.04rem;
    padding: 0.32rem 0.36rem 0 0.46rem;
    background-color: #F4F4F4;
  }
  .bN-content_2{
    position: relative;
    width: 100%;
    display: flex;
  }
  .bN-content_1  .img{
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
.bN-content_1  .img > img {
  position: relative;
  max-width: 100%;
  max-height: 100%;
}
  /*視頻*/
.bN-content_1  .img > video {
  position: relative;
  max-width: 100%;
  max-height: 100%;
}
.bN-content_1  .img > input{
  font-size: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/*文字*/
  .bN-content_1  .text{
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
