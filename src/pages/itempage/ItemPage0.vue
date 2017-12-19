<template>
  <div class="zm-item0-container">
    <div class="zm-item0-img">
      <img style="width: 100%; height: auto; object-fit: cover;" src="../img2.jpeg" alt="">
    </div>
    <div class="zm-item0-inner">
      <div class="zm-item0-title">
        <div style="font-size:30px; font-weight: 700;">
          圣诞烤火鸡
        </div>
      </div>

      <div class="zm-item0-content">
        <div style="line-height: 24px;">
          虽然把整个过程记录下来麻烦无比，但是为了往后每年的福祉，还是要不辞劳苦的！
          ok！书归正传！
          这个方子肯定不是最正宗的，但是真的很好吃很入味！至少受到了众吃货的一致好评。
          网上搜了无数的攻略和方子，但绝大多数看起来都不靠谱，看看用料和配比就觉得不好吃。最后结合了几个看起来应该还不错的方子外加Jamie Oliver的配方，于是就成了眼前的这道绝世好吃大火鸡！
        </div>
      </div>

      <div >
        <el-button class="zm-item0-btn" type="danger" name="button">打开APP收藏菜谱</el-button>
      </div>

      <div class="zm-item0-ingredients">
        <div style="width:100%; padding-bottom:10px; text-align: left; font-size:20px; font-weight: 700; border-bottom: 1px solid #f3f4f5;">
          用料
        </div>
        <div>
          <div class="zm-item0-ingredient" v-for="(item, index) in 7" :key="index">
            <div style="flex:1;text-align:left;">
              白砂糖
            </div>
            <div style="flex:1;text-align:left;">
              95克
            </div>
          </div>
        </div>
      </div>

      <div class="zm-item0-steps">
        <div class="zm-item0-step" v-for="(item, index) in 7" :key="index">
          <div style="text-align:left;padding: 10px 0; font-size: 20px; font-weight: 700;">
            步骤 {{index + 1}}
          </div>
          <div class="">
            <img style="width:100%;" src="../img4.jpg" alt="">
          </div>
          <div style="line-height: 24px;text-align: justify; padding-top: 5px;">
            给火鸡暴菊！找一个啤酒瓶或者红酒瓶，把火鸡竖起来从菊花处插下去……囧，这样火鸡就竖起来了，也可以控掉腹腔内多余的水份。等待约三个小时；
           （腌火鸡自然越久越好啦，我们因为时间紧，腌制过程大概是5-6个小时，已经很好吃了！）
          </div>
        </div>
      </div>

      <div class="zm-item0-tip">
        <div style="text-align:left; font-size: 20px; font-weight: 700; padding-bottom:10px;">
          小贴士
        </div>
        <div style="text-align:justify; line-height: 24px;">
          1.如果滋味不够，可以自己做个酱汁（鸡汤＋淀粉＋烤火鸡流出来的汁），但实际上我这个非常好吃，完全不需要酱汁佐餐了！
          2.剩下的料舍不得扔掉可以顺带烤点土豆什么的也超级好吃！如果懒得的话到这步就已经大功告成了！！
          3.此法也可用于烤鸡~~~在涂抹盐的时候不上那么多盐即可。
        </div>
      </div>

      <div style="padding-bottom:30px;">
        <el-button class="zm-item0-btn" type="danger" name="button">将做法保存到手机</el-button>
      </div>


      <div class="zm-main0-swiper-container">
        <div style="display:flex; justify-content: space-between;font-size: 20px;">
          <div style="font-weight: 700; ">
            热门项目
          </div>
          <div style="color: #fa5555">
            打开APP更多详情
          </div>
        </div>
        <div class="swiper-inner">
          <swiper :options="swiperOption">
            <swiper-slide style="display:flex; flex-direction: column; justify-content:space-between; align-items: center;" v-for="(item, index) in 6" :key="index">
              <router-link to="/item/323" style="color: black; text-decoration: none;">
                <img style="width:100%; height:200px; object-fit: cover;" src="../img2.jpeg" alt="">
                <div style="height:100px; display:flex; flex-direction: column; justify-content:center; align-items: center;">
                  <div class="">
                    编辑选新
                  </div>
                  <div style="font-size:12px; color: #909090">
                    新上架项目，欢迎选购
                  </div>
                </div>
              </router-link>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
      </div>

      <div class="zm-main0-list">
        <div style="cursor: pointer;" v-for="(item, index) in 6" :key="index">
          <router-link to="/item/323" class="zm-main0-list-item" style="color: black; text-decoration: none;">
            <div style="flex: 2;">
                <img style="width:100%" src="../img3.jpg" alt="">
            </div>
            <div style="font-size:20px; box-sizing:border-box;padding: 0 10px; display:flex; flex-direction: column; justify-content:center; align-items: flex-start; flex: 1;">
              <div class="">
                黑钻吐司
              </div>
            </div>
          </router-link>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemPage0',
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
