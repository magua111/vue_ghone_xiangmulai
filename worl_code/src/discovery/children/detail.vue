<style lang="scss" scoped>
.content{
  // position: relative;
  overflow: scroll;
  background: url(../../assets/img/discovery/detail1.png) no-repeat;
  margin-bottom: .72rem;
  // .bg{
  //   width: 100%;
  //   height: 100%;
  //   position: absolute;
  //
  // }
}
.publish{
  width: 100%;
  height: .8rem;
  background: rgba(255,255,255,0.92);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 .44rem 0 .36rem;
  .publish-left{
    display: flex;
    flex-direction: row;
    align-items: center;
    img{
      width: 1rem;
      height: 1rem;
    }
    h1{
      font-size: .36rem;
      color: #333;
    }
    p{
      color: #999;
      margin-left: .14rem;
    }
  }
  .publish-right{
  	display: flex;
    p{
      border: 1px solid #00a3fe;
      width: 1.4rem;
      height: .44rem;
      border-radius: .1rem;
      text-align: center;
      line-height: .44rem;
      color: #999;
    }
    h3{
    	padding: 0.08rem 0 0 0.15rem;
    	img{
    		width: 0.3rem;
    		height: 0.3rem;
    	}
    }
  }
}
.center{
  display: flex;
  flex-direction: column;
  margin-top: 1px;
  .center-top{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: .8rem;
    padding: 0 .3rem;
    align-items: center;
    margin-bottom: 1px;
    background: rgba(255, 255, 255, 0.78);
    .ct-left{
      display: flex;
      flex-direction: row;
      align-items: center;
      position: relative;
      img{
        width: 2.05rem;
        height: .44rem;
      }
      p{
        position: absolute;
        right: .2rem;
        color: #ec7d00;
      }
    }
    .ct-right{
      ul{
        display: flex;
        flex-direction: row;
        li{
          display: flex;
          flex-direction: row;
          p{
            &:nth-child(2){
              margin-left: .08rem;
              color: #666;
            }
            &:last-child{
              margin-left: .04rem;
              color: #999;
            }
          }
          &:last-child{
            margin-left: .32rem;
          }
        }
      }
    }
  }
  .center-middle{
    display: flex;
    flex-direction: column;
    background: rgba(255,255,255,0.78);
    .middle-first{
      display: flex;
      flex-direction: row;
      img{
        width: 1.8rem;
        height: 1.8rem;
        border-radius: 50%;
        margin: .28rem 0 0 .63rem;
      }
      &>div{
        display: flex;
        flex-direction: column;
        margin-top: .2rem;
        margin-left: .28rem;
        h1{
          font-size: .36rem;
          color: #333;
          margin-bottom: .2rem;
        }
        h3{
          font-size: .28rem;
          color: #666;
          margin-bottom: .4rem;
        }
        &>div{
          display: flex;
          flex-direction: row;
          margin-bottom: .2rem;
          div{
            display: flex;
            flex-direction: row;
            p{
              color: #666;
            }
          }
          ul{
            margin-left: .2rem;
            display: flex;
            flex-direction: row;
            li{
              margin-left: .2rem;
              &:first-child{
                margin-left: 0;
              }
              p{
                color: #005585;
              }
            }
          }
        }
      }
    }
    .middle-second{
      margin: 0 .3rem;
      border: 1px solid #eee;
      display: flex;
      justify-content: space-between;
      height: .6rem;
      align-items: center;
      border-radius: .05rem;
      .ms-left{
        display: flex;
        h3{
          margin-left: .04rem;
        }
        p{
          color: #666;
          margin-left: .04rem;
        }
        .p-third{
          margin-left: .24rem;
        }
      }
      .ms-right{
        margin-right: .12rem;
      }
    }
    .middle-third{
      height: 1.3rem;
      display: flex;
      width: 100%;
      padding: 0 .42rem 0 .33rem;
      align-items: center;
      justify-content: space-between;
      .mt-left{
        display: flex;
        flex-direction: row;
        align-items: center;
        p{
          color: #666;
        }
        ul{
          margin-left: .08rem;
          display: flex;
          flex-direction: row;
          li{
            margin-left: .24rem;
            width: .52rem;
            height: .52rem;
            display: flex;
            align-items:center;
            img{
              width: 100%;
              height: 100%;
            }
          }
        }
      }
      .mt-right{
        p{
          color: #999;
        }
      }
    }
  }
  .center-bottom{
    margin-top: 1px;
    width: 100%;
    height: .88rem;
    display: flex;
    align-items: center;
    padding: 0 .42rem 0 .33rem;
    background: rgba(255,255,255,0.88);
    justify-content: space-between;
    .cb-left{
      p{
        color: #666;
      }
    }
    .cb-right{
      p{
        color: #ccc;
      }
    }
  }
}
.main{
  width: 100%;
  padding: 0 .06rem;
  &>div{
    // margin: 0 .06rem;
    margin-top: .2rem;
    background: #fff;
    width: 100%;
  }
  .first{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 0 .3rem;
    h1{
      font-size: .32rem;
      font-size: .434343;
      margin: .36rem 0 .28rem 0;
    }
    img{
      width: 100%;
      display: flex;
    }
    p{
      color: #999;
      font-size: .28rem;
      padding: .24rem 0 .36rem 0;
    }
  }
  .second{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 0 .3rem;
    h1{
      font-size: .32rem;
      font-size: .434343;
      margin: .36rem 0 .28rem 0;
    }
    img{
      width: 100%;
      display: flex;
    }
  }
  .third{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    h1{
      font-size: .32rem;
      font-size: .434343;
      margin: .36rem 0 .28rem 0;
    }
    p{
      color: #999;
      font-size: .28rem;
      padding: .24rem .3rem .36rem .3rem;
    }
  }
  .four{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 0 .3rem;
    h1{
      font-size: .32rem;
      font-size: .434343;
      margin: .36rem 0 0 0;
    }
    ul{
    	width: 100%;
    	height: auto;
      display: flex;
      flex-direction: column;
      li{
        /*display: flex;
        flex-direction: row;*/
       /*overflow: hidden;*/
        margin-top: .3rem;
        .member_pic{
        	float:left;
        	img{
	          width: 1.7rem;
	          height: 1.7rem;
	        }
        }
        .member_info{
        	float: left;
        	margin-left: 0.2rem;
	          h3{
	            color: #434343;
	            margin-bottom: 0.1rem;
	            &:last-child{
		            color: #999;
		          }
	          }
	        &:last-child{
	          margin-left: .3rem;
	        }
        }
      }
    }
  }
  .five{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    h1{
      font-size: .32rem;
      font-size: .434343;
      margin: .36rem 0 .28rem 0;
    }
    img{
      padding: 0 .3rem;
    }
    p{
      color: #999;
      font-size: .28rem;
      padding: .24rem .3rem .36rem .3rem;
    }
  }
  .support{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    h1{
      margin: .36rem 0 .18rem 0;
      font-size: .24rem;
      color: #666;
    }
    &>p{
      width: 1.48rem;
      height: .45rem;
      background: #ea6f5a;
      color: rgba(255,255,255,0.8);
      border-radius: 1rem;
      text-align: center;
      line-height: .45rem;
    }
    .support-first{
      display: flex;
      flex-direction: row;
      margin-top: .2rem;
      p{
        color: #666;
        margin-left: .02rem;
        display: flex;
        align-items: center;
      }
      ul{
        display: flex;
        flex-direction: row;
        li{
          width: .42rem;
          height: .42rem;
          border-radius: 50%;
          display: flex;
          img{
            width: 100%;
          }
        }
      }
    }
    .support-second{
      margin-top: .66rem;
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 0 .3rem;
      .ss-left{
        border: 1px solid #ea6f5a;
        width: 2.3rem;
        height: .56rem;
        border-radius: 1rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
      }
      .ss-right{
        display: flex;
        flex-direction: row;
        align-items: center;
        ul{
          display: flex;
          flex-direction: row;
          li{
            border: 1px solid #666;
            width: .54rem;
            height: .54rem;
            border-radius: 50%;
            margin-right: .1rem;
          }
        }
        p{
          width: 1.4rem;
          height: .54rem;
          color: rgba(153,153,153,0.8);
          border: 1px solid #666;
          border-radius: 1rem;
          line-height: .54rem;
          text-align: center;
        }
      }
    }
    .support-third{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: .6rem;
      width: 100%;
      padding: 0 .3rem;
      margin-bottom: .36rem;
      div{
        display: flex;
        flex-direction: row;
        p{
          color: #666;
        }
        p:last-child{
          margin-left: .1rem;
          color: #999;
        }
      }
    }
  }
  .focus{
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    height: 1.78rem;
    padding: 0 .3rem;
    align-items: center;
    .focus-left{
      display: flex;
      flex-direction: row;
      img{
        width: 1.08rem;
        height: 1.08rem;
        border-radius: 50%;
      }
      &>div{
        display: flex;
        flex-direction: column;
        margin-left: .34rem;
      }
      .fl-top{
        display: flex;
        flex-direction: row;
        &>div{
          display: flex;
          flex-direction: row;
          align-items: center;
        }
        div:last-child{
          margin-left: .1rem;
        }
      }
      .fl-bottom{
        margin-top: .22rem;
        p{
          color: #999;
        }
      }
    }
  }
  .comment{
      display: flex;
      flex-direction: column;
      padding: 0 .3rem;
    .comment-first{
      height: 1rem;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #eee;
      .cf-left{
        display: flex;
        flex-direction: row;
        h3{
          color: #434343;
        }
      }
      .cf-right{
        ul{
          display: flex;
          flex-direction: row;
          li{
            display: flex;
            flex-direction: column;
            margin-left: .06rem;
            width: .9rem;
            height: .56rem;
            justify-content: center;
            align-items: center;
            h3{
              color: #100200;
            }
            p{
              color: #999;
            }
          }
        }
      }
    }
    .comment-second{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: .2rem;
      &>p{
        color: #434343;
      }
      div{
        p{
          color: #999;
        }
      }
    }
    .comment-third{
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-top: .24rem;
      img{
        width: .46rem;
        height: .46rem;
        border-radius: 50%;
      }
      h3{
        margin-left: .1rem;
        color: #005585;
      }
    }
    .comment-four{
      padding-left: .4rem;
      margin-top: .2rem;
      h3{
        color: #999;
      }
      div{
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        p{
          color: #ccc;
        }
      }
    }
    .comment-detail{
      margin: .24rem 0 .2rem .7rem;
      background: #f4f4f4;
      padding: .2rem;
      display: flex;
      flex-direction: column;
      div{
        margin-top: .2rem;
        display: flex;
        flex-direction: row;
        p{
          color: #005585;
        }
        span{
          color: #666;
        }
        &:first-child{
          margin-top: 0;
        }
      }
      &>p{
        color: #005585;
        text-align: right;
        margin-top: .3rem;
      }
    }
    .publish-comment{
      margin: .2rem 0 .36rem 0;
      display: flex;
      align-items: center;
      justify-content: center;
      p{
        color: #005585;
      }
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0
}
.second-enter-active, .second-leave-active{
  margin-left: 0
}
.detail-bottom{
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  height: .72rem;
  align-items: center;
  z-index: 99999;
  ul{
    display: flex;
    flex-direction: row;
    height: 100%;
    flex: 1;
    li{
      height: 100%;
      background: #f0f0f0;
      display: flex;
      flex: auto;
      align-items: center;
      justify-content: center;
      h2{
        color: #666;
        font-size: .3rem;
      }
      &.active{
        background: #999;
        h2{
          color: #fff;
        }
      }
    }
  }
  div{
    width: 1rem;
    height: 100%;
    background: #00a3fe;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h4{
      color: rgba(255,255,255,0.8)
    }
  }
}
.code_wrap{
  	width: 100%;
  	height: 100%;
  	position: fixed;
  	left: 0;
  	top: 0;
  	background: rgba(0,0,0,0.3);
  	.code{
  		width: 5.7rem;
  		height: 7.52rem;
  		margin: 1.5rem auto 0;
  		border-radius: 0.2rem;
  		background: #fff;
  		.code_title{
  			height: 1.58rem;
  			border-top-left-radius: 0.2rem;
  			border-top-right-radius: 0.2rem;
  			text-align: center;
  			color: #fff;
  			background: linear-gradient(to right,#0197ff,#02c2ff);
  			.code_title1{
  				padding-top: 0.4rem;
  				font-size: 0.4rem;
  			}
  			.code_title2{
  				padding-top: 0.18rem;
  				font-size: 0.24rem;
  			}
  		}
  		.code_content{
  			text-align: center;
  			color: #434343;
  			font-size: 0.36rem;
  			padding-top: 0.88rem;
  			.code_img{
  				height: 2.42rem;
  				img{
  					width: 2.42rem;
  					height: 2.42rem;
  				}
  			}
  			.code_tip1{
  				padding-top: 0.58rem;
  			}
  			.code_tip2{
  				padding-top: 0.24rem;
  			}
  		}
  	}
  	.delete_code{
  		text-align: center;
  		img{
  			width: 0.6rem;
  			height: 0.6rem;
  		}
  	}
  }
</style>

<template>
  <div class="detail">
    <div class="content" ref="contentHeight" v-scroll:throttle="{fn: onScroll, throttle: 500 }">
      <div class="bg">
      </div>
      <div class="publish" id="publishContent" v-show="isTop">
        <div class="publish-left">
          <img src="" alt="">
          <h1>项目来</h1>
          <p>免费发布推广您的项目</p>
        </div>
        <div class="publish-right">
          <p @click="isCode=true">马上发布</p>
          <h3 @click="closeTop"><img src="../../assets/img/user/close_ad.png"/></h3>
        </div>
      </div>
      <transition name="fade">
        <div class="center" v-show="centertShow" id="centerContent">
          <div class="center-top">
            <div class="ct-left">
              <img src="../../assets/img/discovery/support.png" alt="">
              <p>{{info.likerCount}}</p>
            </div>
            <div class="ct-right">
              <ul>
                <li>
                  <i></i>
                  <p>浏览</p>
                  <p>23</p>
                </li>
                <li>
                  <i></i>
                  <p>评论</p>
                  <p>{{info.commentCount}}</p>
                </li>
              </ul>
            </div>
          </div>
          <v-basic-message :info="info"></v-basic-message>
          <div class="center-bottom">
            <div class="cb-left">
              <i></i>
              <p>信息再多也不怕，微信聊天上线提醒功能</p>
            </div>
            <div class="cb-right">
              <p>11-23</p>
              <i></i>
            </div>
          </div>
        </div>
      </transition>
      <div class="main">
        <transition
        name="slide"
        enter-active-class="animated slideInLeft"
        leave-active-class="animated slideOutLeft"
        >
          <div class="first" id="firstContent" v-show="firstShow">
            <h1>项目介绍</h1>
            <div class="">
              <img src="../../assets/img/discovery/xiangmu.png" alt="">
            </div>
            <p>UU分期是我连（上海）网络科技有限公司基于UU分期是我连（上海）网络科技有限公司基于UU分期是我连（上海）网络科技有限公司基于UU分期是我连（上海）网络科技有限公司基于</p>
          </div>
        </transition/>
        <transition
        name="slide"
        enter-active-class="animated slideInLeft"
        leave-active-class="animated slideOutLeft"
        >
          <div class="second" v-show="secondShow" id="secondContent">
            <h1>商业模式</h1>
            <img src="../../assets/img/discovery/xiangmu.png" alt="">
          </div>
        </transition/>
        <transition
        name="slide"
        enter-active-class="animated slideInLeft"
        leave-active-class="animated slideOutLeft"
        >
          <div class="third" v-show="thirdShow" id="thirdContent">
            <h1>公司信息</h1>
            <p>UU分期是我连（上海）网络科技有限公司基于UU分期是我连（上海）网络科技有限公司基于UU分期是我连（上海）网络科技有限公司基于UU分期是我连（上海）网络科技有限公司基于</p>
          </div>
        </transition/>
        <transition
        name="slide"
        enter-active-class="animated slideInLeft"
        leave-active-class="animated slideOutLeft"
        >
          <div class="four" v-show="fourShow" id="fourContent">
          <h1>团队成员</h1>
          <ul>
            <li v-for="(item,index) in info.memberInfo" :key="index">
              <div class="member_pic">
                <img src="../../assets/img/discovery/my_selected.png" alt="">
              </div>
              <div class="member_info">
                <h3>{{item.name}}</h3>
                <h3>{{item.position}}</h3>
                <h3>{{item.desc}}</h3>
              </div>
            </li>
          </ul>
        </div>
        </transition/>
        <transition
        name="slide"
        enter-active-class="animated slideInLeft"
        leave-active-class="animated slideOutLeft"
        >
          <div class="five" v-show="fiveShow" id="fiveContent">
            <h1>团队经历与成就</h1>
            <p>UU分期是我连（上海）网络科技有限公司基于UU分期是我连（上海）网络科技有限公司基于UU分期是我连（上海）网络科技有限公司基于UU分期是我连（上海）网络科技有限公司基于</p>
          </div>
        </transition/>
        <transition
        name="slide"
        enter-active-class="animated slideInLeft"
        leave-active-class="animated slideOutLeft"
        >
          <div class="support" v-show="supportShow" id="supportContent">
          <h1>支持创业者,为你鼓励,为你加油</h1>
          <p>赞赏力挺</p>
          <div class="support-first">
            <ul>
              <li><img src="../../assets/img/discovery/my_selected.png" alt=""></li>
              <li><img src="../../assets/img/discovery/my_selected.png" alt=""></li>
              <li><img src="../../assets/img/discovery/my_selected.png" alt=""></li>
            </ul>
            <p>等16人</p>
          </div>
          <div class="support-second">
            <div class="ss-left">
              <h3></h3>
              <p>看好</p>
              <p>1700</p>
            </div>
            <div class="ss-right">
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <p>更多分享</p>
            </div>
          </div>
          <div class="support-third">
            <div class="">
              <p>阅读</p>
              <p>234</p>
            </div>
            <div class="">
              <p>举报</p>
            </div>
          </div>
        </div>
        </transition/>
        <transition
        name="slide"
        enter-active-class="animated slideInLeft"
        leave-active-class="animated slideOutLeft"
        >
          <div class="focus" v-show="focusShow" id="focusContent">
          <div class="focus-left">
            <img src="../../assets/img/discovery/logo230x230.png" alt="">
            <div class="">
              <div class="fl-top">
                <div class="">
                  <h1>简</h1>
                  <p>+</p>
                  <h1>约</h1>
                </div>
                <div class="">
                  <p>关注</p>
                </div>
              </div>
              <div class="fl-bottom">
                <p>心若静 万物静</p>
              </div>
            </div>
          </div>
          <div class="focus-right">

          </div>
        </div>
        </transition/>
        <transition
        name="slide"
        enter-active-class="animated slideInLeft"
        leave-active-class="animated slideOutLeft"
        >
          <div class="comment" v-show="commentShow" id="commentContent">
          <div class="comment-first">
            <div class="cf-left">
              <h2></h2>
              <h3>项目动态</h3>
            </div>
            <div class="cf-right">
              <ul>
                <li>
                  <h3>533</h3>
                  <p>人参与</p>
                </li>
                <li>
                  <h3>45</h3>
                  <p>人互动</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="comment-second">
            <p>最新点评</p>
            <div class="">
              <i></i>
              <p>私信</p>
            </div>
          </div>
          <div class="comment-third">
            <img src="../../assets/img/discovery/logo230x230.png" alt="">
            <h3>昵称</h3>
          </div>
          <div class="comment-four">
            <h3>合作平台的用户可享受最长30天的延后付款期或最长12期的分期付款方式，金融领域具有丰富经验</h3>
            <div class="">
              <i></i>
              <i></i>
              <p>34</p>
            </div>
          </div>
          <div class="comment-detail">
            <div class="">
              <p>放手：<span>加油</span></p>
            </div>
            <div class="">
              <p>昵称<span>回复</span></p>
              <p>放手<span>我们会加油，真的很感谢你们</span></p>
            </div>
            <div class="">
              <p>asdfsdf<span>我们会加油，真的很感谢你们</span></p>
            </div>
            <p>查看更多...</p>
          </div>
          <div class="publish-comment">
            <i></i>
            <p>发表评论</p>
          </div>
        </div>
        </transition/>
      </div>
    </div>
    <div class="detail-bottom">
      <ul>
        <li v-for="(bottomData,index) in bottomDatas" :class="{active: bottomData.active}" @click="clickBottom(index)">
          <h2>{{bottomData.name}}</h2>
        </li>
      </ul>
      <div class="">
        <i></i>
        <h4>123</h4>
      </div>
    </div>
    
    <!--二维码-->
    <div class="code_wrap" v-if="isCode">
    	<div class="code">
    		<div class="code_title">
    			<div class="code_title1">无需下载，轻松发布</div>
    			<div class="code_title2">创立您的项目影响力中心</div>
    		</div>
    		<div class="code_content">
    			<div class="code_img"><img src="../../../build/logo.png"/></div>
    			<div class="code_tip1">长按识别<span><img src="../../assets/img/user/ico_press.png"/></span>项目来二维码</div>
    			<div class="code_tip2">立即创立您的项目影响力中心</div>
    		</div>
    	</div>
    	<div class="delete_code" @click="closeCode"><img src="../../assets/img/user/close_code.png"/></div>
    </div>
    
  </div>
</template>
<script>
import host from '../../config'
export default {
  data: () => ({
  	isTop:true,
  	isCode:false,
    centertShow: false,
    firstShow: false,
    secondShow: false,
    thirdShow: false,
    fourShow: false,
    fiveShow: false,
    supportShow: false,
    focusShow: false,
    commentShow: false,
    thirdHeight: 0,
    bottomDatas: [
      {name: '项目介绍', active: true},
      {name: '商业模式', active: false},
      {name: '公司信息', active: false},
    ],
    info:{},
    getId: null
  }),
  watch: {
    // thirdHeight: {
    //   handler(newData) {
    //     console.log(newData)
    //   },
    //   deep: true
    // }
  },
  mounted() {
    this.getId = this.$route.query.id;
    console.log(1,this.$route.query.id)
    this.centertShow = true
    let w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
    let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    this.$refs.contentHeight.style.height = h + 'px'
    this.$refs.contentHeight.style.width = w + 'px'
    // this.$refs.firstContent.style.width = w + 'px'
    // this.$refs.secondShow.style.marginLeft = -w + 'px'
    // console.log(this.$refs.secondShow.style.marginLeft)
    this.firstShow = true
    this.secondShow = true

    // this.fourShow = true
    // this.fiveShow = true
    // this.supportShow = true
    // this.focusShow = true
    // this.commentShow = true
    // this.thirdHeight = this.$refs.thirdContent.scrollTop
    // console.log(document.getElementById('firstContent').style)

		//调用项目基本信息接口

  },
  methods: {
  	closeTop(){
  		this.isTop = false;
  	},
  	closeCode(){
  		this.isCode = false;
  	},
    onScroll (e) {
      // console.log(e.target.scrollTop)
      let getHeight = e.target.scrollTop
//    console.log(getHeight)
      let windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
      let publish = document.getElementById('publishContent').offsetHeight
      let center = document.getElementById('centerContent').offsetHeight
      let first = document.getElementById('firstContent').offsetHeight
      let second = document.getElementById('secondContent').offsetHeight
      let third = document.getElementById('thirdContent').offsetHeight
      let four = document.getElementById('fourContent').offsetHeight
      let five = document.getElementById('fiveContent').offsetHeight
      let support = document.getElementById('supportContent').offsetHeight
      let focus = document.getElementById('focusContent').offsetHeight
      let comment = document.getElementById('commentContent').offsetHeight
      let firstContentHeight = document.getElementById('firstContent').offsetHeight
      if(getHeight > 0) {
        this.thirdShow = true
      }
      if(third!==0) {
        if((getHeight - third) > 0) {
          this.fourShow = true
        }
      }
      if(four !== 0) {
        if((getHeight - third - four) > 0) {
          this.fiveShow = true
        }
      }
      if(five !== 0) {
        if((getHeight - third - four -five) > 0) {
          this.supportShow = true
        }
      }
      if(support !== 0) {
        if((getHeight - third - four -five - support) > 0) {
          this.focusShow = true
        }
      }
      if(focus !== 0) {
        if((getHeight - third - four -five - support - focus) > 0) {
          this.commentShow = true
        }
      }

    },
    clickBottom (_index) {
      for(let i = 0; i < this.bottomDatas.length; i++) {
        this.bottomDatas[i].active = false
      }
      this.bottomDatas[_index].active = true
      if(_index === 0) {

      }
    }
  },
  updated() {
  },
  created() {
    let that = this;
    console.log(1111)
		this.$http.get(host.host+'/api/projects/'+this.$route.query.id)
		.then(function(res){
			console.log(res);
			that.info = res.data.data;
		})
		.catch(function(err){
//		  	console.log(err);
		});
  }
}
</script>
