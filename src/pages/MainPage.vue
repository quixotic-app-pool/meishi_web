<template>
  <div>
    <div class="zm-swiper-container" style="margin-top: 10px;">
      <div class="zm-swiper-container-inner">
        <el-carousel :interval="4000" type="card" height="300px">
          <el-carousel-item v-for="item in imgUrl" :key="item">
            <img class="zm-swiper-img" :src="item" alt=""/>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>

    <div class="zm-main-body">
        <div class="zm-main-left">
          <div class="zm-promo-one">
            <div class="zm-promo-title1">
              市场新流
            </div>
            <div style="margin-top: 16px;">
              <el-row class="zm-promo-one-list">
                <el-col :span="8" v-for="(o, index) in 3" :key="o" :offset="index > 0 ? 2 : 0">
                  <el-card :body-style="{ padding: '0px' }">
                    <img src="https://img1.qunarzz.com/travel/poi/1502/75/0798be182d7af0.jpg_r_480x360x95_bb0773dc.jpg" class="image">
                    <div style="padding: 14px;">
                      <span>Yummy hamburger</span>
                      <div class="bottom clearfix">
                        <time class="time">2017-12-22</time>
                        <el-button type="text" class="button">Operating button</el-button>
                      </div>
                    </div>
                  </el-card>
                </el-col>
              </el-row>
            </div>
          </div>
          <div class="zm-promo-one" style="margin-top: 20px;">
            <div class="zm-promo-title1">
              活动新品
            </div>
            <div style="margin-top: 16px;">
              <el-row class="zm-promo-one-list">
                <el-col :span="8" v-for="(o, index) in 3" :key="o" :offset="index > 0 ? 2 : 0">
                  <el-card :body-style="{ padding: '0px' }">
                    <img src="http://cphualientour.weebly.com/uploads/4/5/8/0/45800523/3058957_orig.jpg" class="image">
                    <div style="padding: 14px;">
                      <span>Yummy hamburger</span>
                      <div class="bottom clearfix">
                        <time class="time">2017-12-22</time>
                        <el-button type="text" class="button">Operating button</el-button>
                      </div>
                    </div>
                  </el-card>
                </el-col>
              </el-row>
            </div>
          </div>
          <div class="zm-promo-one" style="margin-top: 20px;">
            <div class="zm-promo-title1">
              热门搜索
            </div>
            <div style="margin-top: 16px;">
              <el-row class="zm-promo-one-list">
                <el-col :span="8" v-for="(o, index) in 3" :key="o" :offset="index > 0 ? 2 : 0">
                  <el-card :body-style="{ padding: '0px' }">
                    <img src="http://www.yelin-spa.com.tw/food/img/DSC_9659.jpg" class="image">
                    <div style="padding: 14px;">
                      <span>Yummy hamburger</span>
                      <div class="bottom clearfix">
                        <time class="time">2017-12-22</time>
                        <el-button type="text" class="button">Operating button</el-button>
                      </div>
                    </div>
                  </el-card>
                </el-col>
              </el-row>
            </div>
          </div>
        </div>
        <div class="zm-promo-aside" >
            <div class="zm-promo-aside-inner" style="" v-sticky= '{ zIndex: 1, stickyTop: 70}'>
                <div class="">
                  <div style="display:flex; flex-direction:row; align-items:center;  padding: 10px 0 0 10px; text-align: left; border-bottom: 1px solid #f0f2f7; font-size: 20px;font-weight: 700;">
                    <img style="width: auto; height: 50px;" src="./weixin.jpeg" alt="">
                    <div class="">
                      联系我们
                    </div>
                  </div>
                  <img style="width: 100%; height: auto; padding: 2px; box-sizing: border-box;  " src="./example_erweima.png" alt="">
                </div>
            </div>
            <div class="zm-promo-aside-inner" v-sticky= '{ zIndex: 1, stickyTop: 70}'>
              <div class="">
                <div style="margin-bottom: 16px; padding: 10px 0 10px 10px; text-align: left; border-bottom: 1px solid #f0f2f7; font-size: 20px;font-weight: 700;">
                    热点项目
                </div>
                <div style="padding: 0 5px 5px 5px; display:flex; flex-direction: row;" v-for="(item, index) in 5" :key='item'>
                    <img style="height: 70px; width: 50%; object-fit: cover;" src="http://www.yelin-spa.com.tw/food/img/DSC_9659.jpg" alt="">
                    <div style="display: flex; flex-direction: column; justify-content:flex-start;">
                      <div style="padding-left: 3px; font-weight:bold; text-align: left;">
                        超级好吃无敌蛋糕
                      </div>
                    </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import VueSticky from '../components/StickyIndex.js'
export default {
  name: 'MainPage',
  data () {
    return {
      oneFirstPlace: 0,
      imgUrl: ['https://img1.qunarzz.com/travel/poi/1502/75/0798be182d7af0.jpg_r_480x360x95_bb0773dc.jpg', 'http://cphualientour.weebly.com/uploads/4/5/8/0/45800523/3058957_orig.jpg', 'http://www.yelin-spa.com.tw/food/img/DSC_9659.jpg', 'http://www.yelin-spa.com.tw/food/img/DSC_9659.jpg']
    }
  },
  directives: {
    'sticky': VueSticky
  }
}
</script>
<style scoped>
.sticky {
  position: fixed;
  top: 0;
  width: 100%
}
.zm-main-left {
  width: 100%;
  margin-right: 10px;
}
.zm-promo-one-list {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.zm-promo-aside {
  width: 30%;
}
.zm-promo-aside-inner {
  width: 100%;
  -webkit-box-shadow: 0 1px 3px 0 rgba(0,34,77,.1);
  box-shadow: 0 1px 3px 0 rgba(0,34,77,.1);
  background-color: white;
  border-radius: 2px;
  margin-bottom: 10px;
}
.zm-main-body {
  padding: 0 10%;
  display: flex;
  margin-top: 10px;
}
.zm-promo-one {
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  -webkit-box-shadow: 0 1px 3px 0 rgba(0,34,77,.1);
  box-shadow: 0 1px 3px 0 rgba(0,34,77,.1);
  border-radius: 2px;
}
.zm-promo-title1 {
  display: flex;
  font-size: 20px;
  font-weight: 700;
  color: #c0ae7d;
  padding-bottom: 10px;
  border-bottom: 1px solid #f0f2f7;
}
.zm-swiper-container {
  padding: 0 10%;
}
.zm-swiper-container-inner {
  width: 100%;
  padding: 2px;
  background-color: white;
  -webkit-box-shadow: 0 1px 3px 0 rgba(0,34,77,.1);
  box-shadow: 0 1px 3px 0 rgba(0,34,77,.1);
  border-radius: 2px;
}
.zm-swiper-img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
.time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }

  .clearfix:after {
      clear: both
  }
</style>
