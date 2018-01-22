<style lang="scss" scoped>
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
</style>

<template>
  <div id="">
    <div class="center-middle">
        <div class="middle-first">
          <img :src="info.logo" alt="">
          <div class="">
            <h1>{{info.name}}</h1>
            <h3>{{info.shortDesc}}</h3>
            <div class="">
              <div class="">
                <h3></h3>
                <p>TAG</p>
              </div>
              <ul>
                <li v-for="tag in info.tags">
                  <p >{{tag}}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

      <div class="middle-second">
        <div class="ms-left">
          <h3></h3>
          <p class="p-first">{{info.category}}</p>
          <h4></h4>
          <p class="p-second"></p>
          <p class="p-third">{{info.province}}·{{info.city}}</p>
        </div>
        <div class="ms-right">
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
      <div class="middle-third">
        <div class="mt-left">
          <p>TA们都支持关注</p>
          <ul>
            <li>
              <img src="../../assets/img/discovery/logo230x230.png" alt="">
            </li>
            <li>
              <img src="../../assets/img/discovery/logo230x230.png" alt="">
            </li>
            <li>
              <img src="../../assets/img/discovery/logo230x230.png" alt="">
            </li>
            <li>
              <img src="../../assets/img/discovery/logo230x230.png" alt="">
            </li>
          </ul>
        </div>
        <div class="mt-right">
          <i></i>
          <p>123</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['info'],
  name: "",
  data: () => ({

  })
}
</script>
