<template>
  <div class="zm-item0-container">
    <div class="zm-item0-img">
      <img style="width: 100%; height: auto; object-fit: cover;" src="../img2.jpeg" alt="">
    </div>
    <div class="zm-item0-inner">
      <div class="zm-item0-title">
        <div style="font-size:30px; font-weight: 700;">
          {{data.title}}
        </div>
      </div>

      <div class="zm-item0-content">
        <div style="line-height: 24px;">
          {{data.description}}
        </div>
      </div>

      <div >
        <el-button @click="openDialog()" class="zm-item0-btn" type="danger" name="button">打开APP收藏菜谱</el-button>
      </div>

      <div class="zm-item0-ingredients">
        <div style="width:100%; padding-bottom:10px; text-align: left; font-size:20px; font-weight: 700; border-bottom: 1px solid #f3f4f5;">
          用料
        </div>
        <div>
          <div class="zm-item0-ingredient" v-for="(item, index) in data.ingredients" :key="index">
            <div style="flex:1;text-align:left;">
              {{item.name}}
            </div>
            <div style="flex:1;text-align:left;">
              {{item.quantity}}{{item.unit}}
            </div>
          </div>
        </div>
      </div>

      <div class="zm-item0-steps">
        <div class="zm-item0-step" v-for="(item, index) in data.steps" :key="index">
          <div style="text-align:left;padding: 10px 0; font-size: 20px; font-weight: 700;">
            步骤 {{index + 1}}
          </div>
          <div class="">
            <img style="width:100%;" src="../img4.jpg" alt="">
          </div>
          <div style="line-height: 24px;text-align: justify; padding-top: 5px;">
            {{item.description}}
          </div>
        </div>
      </div>

      <div v-if="data.tip" class="zm-item0-tip">
        <div style="text-align:left; font-size: 20px; font-weight: 700; padding-bottom:10px;">
          小贴士
        </div>
        <div style="text-align:justify; line-height: 24px;">
          {{data.tip}}
        </div>
      </div>

      <div style="padding-bottom:30px;">
        <el-button @click="openDialog()" class="zm-item0-btn" type="danger" name="button">将做法保存到手机</el-button>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemPage0',
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  data () {
    return {
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
    openDialog () {
      this.$root.$emit('openDialog', '下载我们的APP可以永久收藏，还有更多实用功能帮您了解我们的热门项目！')
    }
  }
}
</script>

<style scoped>
.zm-item0-ingredients {
  padding-top: 20px;
}
.zm-item0-ingredient {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 7px 0;
  border-bottom: 1px solid #f3f4f5;
}
.zm-item0-author {
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.zm-item0-tip {
  padding: 20px 0;
}
.zm-item0-step {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 20px;
}
.zm-item0-steps {
  padding-top: 40px;
  width: 100%;
}
.zm-item0-btn {
  width: 100%;
  font-size: 20px;
}
.zm-item0-content {
  padding: 20px 0;
  text-align: justify;
}
.zm-item0-title {
  padding: 20px 0;
  border-bottom: 1px solid #f3f4f5;
}
.zm-item0-img {

}
.zm-item0-inner {
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
.zm-item0-container {
  width: 100%;
  padding-top: 10px;
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
.zm-main0-swiper-container {
  width: 100%;
  padding: 32px 0;
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
</style>
