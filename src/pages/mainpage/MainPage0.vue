<template>
  <div class="zm-main0">
    <div class="zm-main0-inner">

      <div class="zm-main0-category-container">
        <el-row :gutter="5">
          <el-col class="pointer" :span="8" v-for="(item, index) in data.length > 0 && data[0].data" :key="index">
            <router-link :to="'/item/' + item._id" style="color: black; text-decoration: none;">
              <div style="padding-bottom:16px;">
                <img style="width: 100%; height: auto; object-fit: cover;" src="../img3.jpg" alt="">
                <div>
                  {{item.title}}
                </div>
              </div>
            </router-link>
          </el-col>
        </el-row>
        <div style="background-color:#f5f6f5; height:40px; display:flex; align-items:center; justify-content:center;">
          <router-link to="/one/0" style="color: black; text-decoration: none;">
            本周流行项目
          </router-link>
        </div>
      </div>

      <div class="zm-main0-swiper-container">
        <div style="display:flex; justify-content: space-between;">
          <div style="font-weight: 700;">
            活动折扣
          </div>
          <div style="color: #fa5555" class="pointer">
            打开APP更多优惠
          </div>
        </div>
        <div class="swiper-inner">
          <swiper :options="swiperOption">
            <swiper-slide style="display:flex; flex-direction: column; justify-content:space-between; align-items: center;" v-for="(item, index) in data.length > 0 && data[1].data" :key="index">
              <router-link to="/item/323" style="color: black; text-decoration: none;">
                <img style="width:100%; height:200px; object-fit: cover;" src="../img2.jpeg" alt="">
                <div style="height:100px; display:flex; flex-direction: column; justify-content:center; align-items: center;">
                  <div class="">
                    {{item.title}}
                  </div>
                </div>
              </router-link>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
      </div>

      <div class="">
        <div style="display:flex; justify-content: space-between;">
          <div style="font-weight: 700;">
            热门项目
          </div>
        </div>
        <div class="zm-main0-list">
          <div class=" pointer" v-for="(item, index) in data.length > 0 && data[2].data" :key="index">
            <router-link :to="'/item/' + item._id" class="zm-main0-list-item" style="color: black; text-decoration: none;">
              <div style="flex: 2;">
                  <img style="width:100%" src="../img3.jpg" alt="">
              </div>
              <div style="box-sizing:border-box;padding: 0 10px; display:flex; flex-direction: column; justify-content:center; align-items: flex-start; flex: 1;">
                <div class="">
                  {{item.title}}
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>

      <div class="zm-main0-swiper-container">
        <div style="display:flex; justify-content: space-between;">
          <div style="font-weight: 700;">
            最新上架
          </div>
          <div style="color: #fa5555" class="pointer">
            打开APP更多热门
          </div>
        </div>
        <div class="swiper-inner">
          <swiper :options="swiperOption">
            <swiper-slide style="display:flex; flex-direction: column; justify-content:space-between; align-items: center;" v-for="(item, index) in data.length > 0 && data[3].data" :key="index">
              <router-link :to="'/item/' + item._id" style="color: black; text-decoration: none;">
                <img style="width:100%; height:200px; object-fit: cover;" src="../img2.jpeg" alt="">
                <div style="height:100px; display:flex; flex-direction: column; justify-content:center; align-items: center;">
                  <div class="">
                    {{item.title}}
                  </div>
                </div>
              </router-link>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainPage0',
  props: {
    data: {
      type: Array,
      default: []
    }
  },
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
.zm-promo-link {
  text-decoration: none;
  color: #dd3915;
  font-size: 14px;
  margin-left: 20px;
  font-weight: normal;
}
.pointer {
  cursor: pointer;
}
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
