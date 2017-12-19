<template>
  <div class="zm-main0">
    <div class="zm-main0-inner">
      <div class="zm-main0-search">
        <el-input style="font-size:16px;" placeholder="搜索流行项目..." v-model="input">
        </el-input>
      </div>

      <div class="zm-main0-category-container">
        <el-row :gutter="5">
          <el-col :span="8" v-for="(item, index) in 6" :key="index">
            <div style="padding-bottom:16px;">
              <img style="width: 100%; height: auto; object-fit: cover;" src="../img3.jpg" alt="">
              <div>
                快手菜
              </div>
            </div>
          </el-col>
        </el-row>
        <div style="background-color:#f5f6f5; height:40px; display:flex; align-items:center; justify-content:center;">
          <div class="">
            全部项目分类
          </div>
        </div>
      </div>

      <div class="zm-main0-swiper-container">
        <div style="display:flex; justify-content: space-between;">
          <div style="font-weight: 700;">
            市场流行
          </div>
          <div style="color: #fa5555">
            打开APP看排行榜
          </div>
        </div>
        <div class="swiper-inner">
          <swiper :options="swiperOption">
            <swiper-slide style="display:flex; flex-direction: column; justify-content:space-between; align-items: center;" v-for="(item, index) in 6" :key="index">
              <img style="width:100%; height:200px; object-fit: cover;" src="../img2.jpeg" alt="">
              <div style="height:100px; display:flex; flex-direction: column; justify-content:center; align-items: center;">
                <div class="">
                  编辑选新
                </div>
                <div style="font-size:12px; color: #909090">
                  新上架项目，欢迎选购
                </div>
              </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
      </div>

      <div class="zm-main0-list">
        <div class="zm-main0-list-item" v-for="(item, index) in 6" :key="index">
            <div style="flex: 1;">
                <img style="width:100%" src="../img3.jpg" alt="">
            </div>
            <div style="box-sizing:border-box;padding: 0 10px; display:flex; flex-direction: column; justify-content:center; align-items: flex-start; flex: 1;">
              <div class="">
                黑钻吐司
              </div>
              <div style="padding-top: 10px; font-size: 12px; color: #909090;">
                评分 8.9 290 人做过
              </div>
            </div>
        </div>
      </div>

      <div class="zm-main0-swiper-container">
        <div style="display:flex; justify-content: space-between;">
          <div style="font-weight: 700;">
            创业者动态
          </div>
          <div style="color: #fa5555">
            打开APP看排行榜
          </div>
        </div>
        <div class="swiper-inner">
          <swiper :options="swiperOption">
            <swiper-slide style="display:flex; flex-direction: column; justify-content:space-between; align-items: center;" v-for="(item, index) in 6" :key="index">
              <img style="width:100%; height:200px; object-fit: cover;" src="../img2.jpeg" alt="">
              <div style="height:100px; display:flex; flex-direction: column; justify-content:center; align-items: center;">
                <div class="">
                  编辑选新
                </div>
                <div style="font-size:12px; color: #909090">
                  新上架项目，欢迎选购
                </div>
              </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
      </div>

      <div class="zm-main0-list">
        <div class="zm-main0-list-item" v-for="(item, index) in 6" :key="index">
            <div style="flex: 1;">
                <img style="width:100%" src="../img3.jpg" alt="">
            </div>
            <div style="box-sizing:border-box;padding: 0 10px; display:flex; flex-direction: column; justify-content:center; align-items: flex-start; flex: 1;">
              <div class="">
                黑钻吐司
              </div>
              <div style="padding-top: 10px; font-size: 12px; color: #909090;">
                评分 8.9 290 人做过
              </div>
            </div>
        </div>
      </div>

      <div class="zm-main0-swiper-container">
        <div style="display:flex; justify-content: space-between;">
          <div style="font-weight: 700;">
            新进项目
          </div>
          <div style="color: #fa5555">
            打开APP看排行榜
          </div>
        </div>
        <div class="swiper-inner">
          <swiper :options="swiperOption">
            <swiper-slide style="display:flex; flex-direction: column; justify-content:space-between; align-items: center;" v-for="(item, index) in 6" :key="index">
              <img style="width:100%; height:200px; object-fit: cover;" src="../img2.jpeg" alt="">
              <div style="height:100px; display:flex; flex-direction: column; justify-content:center; align-items: center;">
                <div class="">
                  编辑选新
                </div>
                <div style="font-size:12px; color: #909090">
                  新上架项目，欢迎选购
                </div>
              </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
      </div>

      <div class="zm-main0-list">
        <div class="zm-main0-list-item" v-for="(item, index) in 6" :key="index">
            <div style="flex: 1;">
                <img style="width:100%" src="../img3.jpg" alt="">
            </div>
            <div style="box-sizing:border-box;padding: 0 10px; display:flex; flex-direction: column; justify-content:center; align-items: flex-start; flex: 1;">
              <div class="">
                黑钻吐司
              </div>
              <div style="padding-top: 10px; font-size: 12px; color: #909090;">
                评分 8.9 290 人做过
              </div>
            </div>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
export default {
  name: 'MainPage0',
  data () {
    return {
      state: '',
      swiperOption: {
        pagination: '.swiper-pagination',
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflow: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }
      }
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.zm-main0-list-item {
  display: flex;
  flex-direction: row;
  padding-bottom: 10px;
}
.zm-main0-list {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.zm-main0-swiper-container {
  width: 100%;
  padding: 32px 0;
}
.zm-main0-category-container {
  width: 100%;
}
.swiper-inner {
    width: 100%;
    height: 300px;
    padding: 10px 0;
  }
.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 300px;
}
.zm-main0-inner {
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 20px;
  box-sizing: border-box;
  padding: 16px;
}
.zm-main0-search {
  width: 100%;
  padding-bottom: 16px;
}
</style>
