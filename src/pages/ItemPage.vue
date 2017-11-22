<template>
  <div class="zm-item-container">
    <div style="width:100%; display: flex;">
      <div class="zm-item-left">
        <div class="zm-item-breadcrumb">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>焖饭</el-breadcrumb-item>
            <el-breadcrumb-item>铸铁锅版焖饭--黑胡椒牛肉焖饭 </el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="zm-item-title">
          铸铁锅版焖饭--黑胡椒牛肉焖饭
        </div>
        <div class="">
          <img style="width: 100%;" src="./itemAssets/1.jpg" alt="">
        </div>
        <div style="display:flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #f3f3f3;">
          <div style="display: flex; align-items: center  ">
            <div style="color: #dd3915; font-size: 18px;">
              11
            </div>
            <div style="font-size: 14px; color: #909090;">
              人学过这道菜
            </div>
          </div>
          <div>
             <el-button style="font-size: 18px;" type="danger" round>收藏</el-button>
          </div>
        </div>
        <div style="display: flex; align-items: center; padding: 10px 0;">
          <img style="width: 70px; height: 70px; border-radius: 35px;" src="./einstain.jpeg" alt="">
          <div style="padding: 0 10px;">
            爱新觉罗·爱因斯坦
          </div>
          <img style="width: 20px; height: 20px;" src="./chef-man.png" alt="">
        </div>
        <div style="text-align: left; margin: 30px 0 16px 0; font-size: 18px; line-height: 1.8;">
          小时候曾经吃过朋友家做的“新疆手抓饭”味道一直记忆犹新，
          把肉跟胡萝卜混在米饭中装在一个小饭盒里放在锅中蒸熟,肉的味道进入到了米饭里面,太赞了!
          多年后,新入手了一个铸铁锅,看了很多用铸铁锅焖饭的食谱,所以结合了西餐焖饭的原理,
          自己没事尝试了这个黑胡椒牛肉焖饭,虽然有点非中非西吧,但是个人觉得入手简单,对于偷懒的人简直就是福音啊!现在就分享一下!
        </div>
        <div class="">
          <div class="zm-item-right-title" style="font-size:24px; padding: 10px 0;">
            用料
          </div>
          <div class="" v-for="(item, index) in ingredients" :key="index">
            <div style="font-size: 18px;line-height: 50px;display: flex;text-align:left; border-bottom:1px solid #f3f4f5;">
              <div style="flex:1; padding-left: 10px;">
                {{item.name}}
              </div>
              <div style="flex:1;padding-left: 20px;">
                {{item.value}}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="zm-item-right">
        <div class="zm-item-weixin" style="">
            <div class="">
              <div style="display:flex; flex-direction:row; align-items:center;  padding: 10px 0 0 0; text-align: left; font-size: 20px;font-weight: 700;">
                <img style="width: auto; height: 50px;" src="./weixin.jpeg" alt="">
                <div class="">
                  联系我们
                </div>
              </div>
              <img style="width: 100%; height: auto; padding: 2px; box-sizing: border-box;  " src="./example_erweima.png" alt="">
            </div>
        </div>
        <div style="padding-top:40px;">
          <div class="zm-item-right-title">
            铸铁锅版焖饭--黑胡椒牛肉焖饭所在分类
          </div>
          <div class="zm-item-right-tag" v-for="(item, index) in ['焖饭', '焖', '饭']" :key="item">
                {{item}}
          </div>
        </div>
        <div style="padding-top:40px; clear: both;">
          <div class="zm-item-right-title" style="padding-bottom: 10px;">
            被大家加入到以下套餐
          </div>
          <div v-for="(item, index) in 3" :key="item" style="display: flex; flex-direction: column; justify-content: center;border: 1px solid #f3f3f3; margin-bottom: 20px;">
                <img style="width: 100%; object-fit: cover; height: 100px;" src="./img1.jpg" alt="">
                <div style="padding: 14px 10px;">
                  珐琅铸铁锅的日常
                </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 主要制作过程，图文兼并 -->
    <div class="zm-item-recipe-container">
      <div class="zm-item-right-title" style="font-size:24px; padding: 50px 0 20px 0;">
        铸铁锅版焖饭--黑胡椒牛肉焖饭的做法
      </div>
      <div class="zm-item-recipe-loop" style="padding: 10px 0 20px 0;" v-for="(item, index) in recipe" :key="index">
        <div  class="zm-item-recipe-pic" style="border-bottom: 1px solid #f3f3f3; width: 70%; padding-right: 10px; padding-bottom: 20px;">
          <div v-for="(el, o) in item.imgUrls" :key="o">
            <img style="width: 100%; height: auto; object-fit: cover;" :src="el" alt="">
          </div>
        </div>
        <div class="zm-item-recipe-description" style="border:1px solid rgb(243, 243, 243);padding: 10px; text-align:left; width: 30%; align-self: flex-start;" v-sticky= '{ zIndex: 1, stickyTop: 70}'>
            <div class="zm-item-right-title" style="border-bottom: 1px solid #f3f3f3;">
              {{item.key}}
            </div>
            <div style="font-size: 18px;line-height: 1.8;">
              {{item.description}}
            </div>
        </div>
      </div>
    </div>
    <div class="zm-bottom-promo">
        <div class="zm-item-right-title" style="font-size:24px;padding: 20px 0 10px 0;">
          市场流行项目强力推荐
        </div>
        <el-row :gutter="20" >
          <el-col :span="6" v-for="(o, index) in 4" :key="o">
            <el-card :body-style="{ padding: '0px' }">
              <img style="height: 120px; width: 100%; object-fit: cover;" src="http://www.yelin-spa.com.tw/food/img/DSC_9659.jpg">
              <div style="padding: 10px 2px;">
                <span>烤箱菜走起--蒜蓉烤茄子</span>
                <div style="font-size:12px; color: #a5a7a6">
                   123人参与项目
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
import VueSticky from '../components/StickyIndex.js'
export default {
  name: 'ItemPage',
  data () {
    return {
      ingredients: [{name: '牛肉', value: '半斤'}, {name: '胡萝卜', value: '1根'}, {name: '洋葱', value: '1个'}, {name: '青豆', value: '适量'}, {name: '大米', value: '2量杯'}, {name: '水', value: '2.5量杯'},
               {name: '生抽，蚝油，料酒', value: '各1汤勺'}, {name: '白胡椒，黑胡椒碎，五香粉，辣椒粉，孜然，芝麻', value: '适量'}, {name: '葱蒜末', value: '少许'}],
      recipe: [{key: '第一步', imgUrls: ['https://img1.qunarzz.com/travel/poi/1502/75/0798be182d7af0.jpg_r_480x360x95_bb0773dc.jpg', 'http://www.yelin-spa.com.tw/food/img/DSC_9659.jpg'], description: '牛肉切成小块,加入耗油,生抽,料酒,黑胡椒碎,孜然,辣椒粉,五香粉,辣椒粉,白胡椒,淀粉抓匀腌制10分钟'},
               {key: '第二步', imgUrls: ['http://cphualientour.weebly.com/uploads/4/5/8/0/45800523/3058957_orig.jpg'], description: '大米淘洗干净后,放在水中浸泡30分钟.洋葱切碎,胡萝卜切丁,备用'},
               {key: '第三步', imgUrls: ['https://img1.qunarzz.com/travel/poi/1502/75/0798be182d7af0.jpg_r_480x360x95_bb0773dc.jpg', 'http://www.yelin-spa.com.tw/food/img/DSC_9659.jpg', 'http://www.yelin-spa.com.tw/food/img/DSC_9659.jpg', 'http://www.yelin-spa.com.tw/food/img/DSC_9659.jpg'], description: '锅中放油,放入葱蒜,五香粉,芝麻爆香,之后放入腌制好的牛肉炒熟,最后放入洋葱碎跟胡萝卜还有青豆一起炒熟之后加入浸泡的大米,炒一下'},
               {key: '第四步', imgUrls: ['http://cphualientour.weebly.com/uploads/4/5/8/0/45800523/3058957_orig.jpg', 'http://www.yelin-spa.com.tw/food/img/DSC_9659.jpg', 'http://cphualientour.weebly.com/uploads/4/5/8/0/45800523/3058957_orig.jpg', 'https://img1.qunarzz.com/travel/poi/1502/75/0798be182d7af0.jpg_r_480x360x95_bb0773dc.jpg'], description: '放入水(水量是大米量的1.2倍)盖上盖子,开大火烧开后转小火煮30分钟,然后停火后再闷15分钟.搞定!'},
               {key: '第五步', imgUrls: ['https://img1.qunarzz.com/travel/poi/1502/75/0798be182d7af0.jpg_r_480x360x95_bb0773dc.jpg'], description: '成品图'}]
    }
  },
  directives: {
    'sticky': VueSticky
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
</style>
