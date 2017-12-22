<template>
  <div class="zm-item-container">
    <div style="width:100%; display: flex;">
      <div class="zm-item-left">
        <div class="zm-item-breadcrumb">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/one/' +  topic}">{{data.type}}</el-breadcrumb-item>
            <el-breadcrumb-item>{{data.title}}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="zm-item-title">
          {{data.title}}
        </div>
        <div class="">
          <img style="width: 100%;" src="../itemAssets/1.jpg" alt="">
        </div>
        <div style="display:flex; justify-content: flex-end; padding: 10px 0; border-bottom: 1px solid #f3f3f3;">
           <el-button @click="addFavorite()" style="font-size: 18px;" type="danger" round>收藏</el-button>
        </div>
        <div style="text-align: left; margin: 30px 0 16px 0; font-size: 18px; line-height: 1.8;">
          {{data.description}}
        </div>
        <div class="">
          <div class="zm-item-right-title" style="font-size:24px; padding: 10px 0;">
            用料
          </div>
          <div class="" v-for="(item, index) in data.ingredients" :key="index">
            <div style="font-size: 18px;line-height: 50px;display: flex;text-align:left; border-bottom:1px solid #f3f4f5;">
              <div style="flex:1; padding-left: 10px;">
                {{item.name}}
              </div>
              <div style="flex:1;padding-left: 20px;">
                {{item.quantity}}{{item.unit}}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="zm-promo-aside" style="margin-top: 118px;" >
          <div class="zm-promo-aside-inner">
              <div style="display:flex; align-items:center;">
                <el-popover ref="popover1" placement="right" title="扫描下方二维码，联系客服" width="200" trigger="hover">
                  <img style="width: 100%; height: auto; padding: 2px; box-sizing: border-box;  " src="../example_erweima.png" alt="">
                </el-popover>
                  <div v-popover:popover1 style="cursor:pointer; display:flex; flex-direction:row; align-items:center;  padding: 0 0 0 10px; text-align: left; border-bottom: 1px solid #f0f2f7; font-size: 20px;font-weight: 700;">
                    <img style="width: auto; height: 50px;" src="../weixin.jpeg" alt="">
                    <div class="">
                      微信联系我们
                    </div>
                  </div>
              </div>
          </div>
          <div class="zm-promo-aside-inner">
              <div style="display:flex; align-items:center;">
                <el-popover ref="popover1" placement="right" title="支持苹果和安卓手机" width="200" trigger="hover">
                  <img style="width: 100%; height: auto; padding: 2px; box-sizing: border-box;  " src="../example_erweima.png" alt="">
                </el-popover>
                  <div v-popover:popover1 style="cursor:pointer; display:flex; flex-direction:row; align-items:center;  padding: 0 0 0 10px; text-align: left; border-bottom: 1px solid #f0f2f7; font-size: 20px;font-weight: 700;">
                    <img style="width: auto; height: 50px;" src="http://www.techreviewer.co.uk/wp-content/uploads/2017/02/apps.jpg" alt="">
                    <div class="">
                      下载我们的APP
                    </div>
                  </div>
              </div>
          </div>

      </div>
    </div>

    <!-- 主要制作过程，图文兼并 -->
    <div class="zm-item-recipe-container">
      <div class="zm-item-right-title" style="font-size:24px; padding: 50px 0 20px 0;">
        {{data.title}}的做法
      </div>
      <div class="zm-item-recipe-loop" style="padding: 10px 0 20px 0;" v-for="(item, index) in data.steps" :key="index">
        <div  class="zm-item-recipe-pic" style="border-bottom: 1px solid #f3f3f3; width: 70%; padding-right: 10px; padding-bottom: 20px;">
          <div v-for="(el, o) in ['https://img1.qunarzz.com/travel/poi/1502/75/0798be182d7af0.jpg_r_480x360x95_bb0773dc.jpg']" :key="o">
            <img style="width: 100%; height: auto; object-fit: cover;" :src="el" alt="">
          </div>
        </div>
        <div class="zm-item-recipe-description" style="border:1px solid rgb(243, 243, 243);padding: 10px; text-align:left; width: 30%; align-self: flex-start;" v-sticky= '{ zIndex: 1, stickyTop: 70}'>
            <div class="zm-item-right-title" style="border-bottom: 1px solid #f3f3f3;">
              第{{index + 1}}步
            </div>
            <div style="font-size: 18px;line-height: 1.8;">
              {{item.description}}
            </div>
        </div>
      </div>
    </div>
    <div class="zm-bottom-promo">
        <div class="zm-item-right-title" style="font-size:24px;padding: 20px 0 10px 0;">
          热门项目
        </div>
        <el-row :gutter="20" >
          <el-col :span="6" v-for="(item, index) in hotList" :key="index">
              <el-card :body-style="{ padding: '0px', cursor: 'pointer'}">
                <div @click="swicthRecipe(item._id)"  class="">
                  <img style="height: 120px; width: 100%; object-fit: cover;" src="http://www.yelin-spa.com.tw/food/img/DSC_9659.jpg">
                  <div style="padding: 10px 2px;">
                    <span>{{item.title}}</span>
                  </div>
                </div>
              </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
import VueSticky from '../../components/StickyIndex.js'
export default {
  name: 'ItemPage1',
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  data () {
    return {
      hotList: [],
      topicArray: ['本周流行菜谱', '活动折扣', '热门项目', '最新上架']
    }
  },
  directives: {
    'sticky': VueSticky
  },
  mounted () {
    var self = this
    this.$http.get('/dev/api/fetchlist?type=2&page=0')
    .then(function (res) {
      console.log('hot list data from server: ' + JSON.stringify(res.body.data))
      self.hotList = res.body.data
    })
  },
  computed: {
    topic () {
      // workaround, not ideal though
      var topic
      for (let key in this.topicArray) {
        if (this.topicArray[key] === this.data.type) {
          topic = key
          break
        }
      }
      return topic
    }
  },
  methods: {
    routeToCategory () {
      alert('f')
    },
    swicthRecipe (_id) {
      this.$router.replace({path: '/item/' + _id})
      location.reload(true)
      window.scrollTo(0, 0)
    },
    addFavorite () {
      this.$root.$emit('openDialog', '下载我们的APP可以永久收藏，还有更多实用功能帮您了解我们的热门项目！')
    }
  }
}
</script>
<style scoped>
.zm-bottom-promo {
  display: flex;
  flex-direction: column;
}
.zm-item-recipe-pic {
  display: flex;
  flex-direction: column;
}
.zm-item-recipe-loop {
  width: 100%;
  display: flex;
}
.zm-item-recipe-container {
  display: flex;
  flex-direction: column;
}
.zm-item-right-tag {
  background: #f8f8f8;
  color: #222;
  padding: 10px 20px;
  font-size: 16px;
  display: inline-block;
  margin-right: 8px;
  margin-top: 10px;
  float: left;
}
.zm-item-right-title {
  font-size: 20px;
  font-weight: 700;
  color: #c0ae7d;
  text-align: left;
}
.zm-item-weixin {
  width: 100%;
  margin-bottom: 10px;
}
.zm-item-left {
  width: 70%;
  margin-right: 20px;
}
.zm-item-right {
  width: 30%;
  padding-top: 56px;
}
.zm-item-container {
  padding: 0 10%;
  box-sizing: border-box;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding-bottom: 100px;
}
.zm-item-breadcrumb .el-breadcrumb {
  padding: 30px 0 20px 0;
  font-size: 16px;
}
.zm-item-title {
  font-size: 34px;
  font-weight: 700;
  float: left;
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
</style>
