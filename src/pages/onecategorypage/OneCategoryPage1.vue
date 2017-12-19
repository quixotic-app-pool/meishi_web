<template>
  <div class="zm-one-container">
    <div class="zm-one-inner">
      <div class="zm-one-breadcrumb">
        <div class="zm-item-breadcrumb">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>焖饭</el-breadcrumb-item>
            <el-breadcrumb-item>铸铁锅版焖饭--黑胡椒牛肉焖饭 </el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>
      <div class="zm-one-box">
        <div class="zm-one-left">
          <div class="zm-one-suggestion">
              <a href="#" v-for="(item, index) in ['全部分类', '市场热门', '最新上架', '折扣项目']" :key="index">{{item}}</a>
          </div>
          <div class="zm-one-category">
            <el-collapse v-model="activeNames" @change="handleChange">
              <div  v-for="(item, index) in ['烘焙', '烧烤', '西点', '茶点']" :key="index">
                <el-collapse-item class="zm-one-category-unit" :title="item" name="1"  :name="index">
                  <a href="#" v-for="(item2, index2) in 3" :key="index2">蒜泥龙虾</a>
                </el-collapse-item>
              </div>
            </el-collapse>
          </div>
        </div>
        <div class="zm-one-mid">
          <div class="zm-one-mid-title">
              烘焙
          </div>
          <div class="zm-one-mid-filter">
              <a href="#">最受欢迎</a> |
              <a href="#" style="color: #dd3915">最近流行</a> |
              <a href="#" style="color: #dd3915">学习人数</a>
          </div>
          <div class="zm-one-mid-list">
              <div class="zm-one-mid-list-item" v-for="(item, index) in 10" :key="index">
                  <img style="width: 50%; height: 150px; object-fit:cover;" src="../img2.jpeg" alt="">
                  <div style="width:50%; padding: 0 10px; box-sizing:border-box; display:flex; flex-direction:column; justify-content: center; align-items: flex-start;">
                    <div style="text-align:left; font-size: 20px;font-weight: 700; padding-bottom: 5px;">
                        蔓越莓饼干(图文完全版)
                        <span style="color:white; background-color:rgb(254,197,10); font-size:12px; padding:2px 3px;">独家</span>
                        <span style="opacity:0.8; background-color:rgb(240, 242, 247); font-size:12px; padding:2px 3px;">步骤图</span>
                    </div>
                    <div style="color:#9c6730; font-size:14px;">
                       面粉、酵母、白糖、水、面粉
                    </div>
                    <div style="display:flex; align-items: center;">
                      <div style="color:#909090; font-size:13px;">
                        综合评分
                      </div>
                      <div style="padding-left:5px; color:#72a46d; font-size:13px; line-height: 16px;">
                        9.0
                      </div>
                    </div>
                    <div style="display:flex; align-items: center;">
                      <span style="color:#909090; font-size:14px;">256人收藏</span>
                      <span>---</span>
                      <span style="color:#909090; font-size:14px;">56人学习</span>
                    </div>
                  </div>
              </div>
          </div>
          <div class="zm-one-mid-pagination">
            <el-pagination layout="prev, pager, next" :total="50">
            </el-pagination>
          </div>
        </div>
        <div class="zm-one-right">
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
          <div class="zm-promo-aside-inner">
            <div class="">
              <div style="margin-bottom: 16px; padding: 10px 0 10px 10px; text-align: left; border-bottom: 1px solid #f0f2f7; font-size: 20px;font-weight: 700;">
                  热点项目
              </div>
              <div style="cursor: pointer;padding: 0 5px 5px 5px; display:flex; flex-direction: row;" v-for="(item, index) in 5" :key='item'>
                  <img style="filter: blur(1px); height: 70px; width: 50%; object-fit: cover;" src="http://www.yelin-spa.com.tw/food/img/DSC_9659.jpg" alt="">
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
  </div>
</template>

<script>
export default {
  name: 'OneCategoryPage',
  data () {
    return {
      activeNames: ''
    }
  },
  methods: {
    handleChange () {
    }
  }
}
</script>

<style scoped>
.zm-one-category-unit a {
  padding: 3px 0;
}
.zm-one-right {
  width: 30%;
}
.zm-one-mid-pagination {

}
.zm-one-mid-list {
  display: flex;
  flex-direction: column;
}
.zm-one-mid-list-item {
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 20px;
  cursor: pointer;
}
.zm-one-mid-filter {
  align-self: flex-start;
  padding-bottom: 20px;
}
.zm-one-mid-filter a {
  text-decoration: none;
  color: #909090;
}
.zm-one-mid-filter a:hover {
  color: white !important;
  background-color: #dd3915;
}
.zm-one-mid-title {
  align-self: flex-start;
  font-size: 34px;
  padding-bottom: 20px;
  font-weight: 700;
}
.zm-one-mid {
  display: flex;
  flex-direction: column;
  width: 50%;
}
.zm-one-category {
  padding-right: 20%;
}
.zm-one-category a {
  text-decoration: none;
  display: flex;
  flex-direction: column;
  color:#222;
  font-size: 14px;
}
.zm-one-category a:hover {
  color: #dd3915;
}
.zm-one-suggestion {
  display: flex;
  flex-direction: column;
}
.zm-one-suggestion a {
  text-decoration: none;
  color: #222;
  align-self: flex-start;
  padding-bottom: 16px;
  font-weight: 700;
}
.zm-one-suggestion a:hover {
  color: #dd3915;
}
.zm-one-left {
  width: 20%;
}
.zm-one-box {
  display: flex;
  flex-direction: row;
}
.zm-one-breadcrumb {

}
.zm-one-inner {
  display: flex;
  flex-direction: column;
}
.zm-one-container {
  width: 100%;
  padding: 0 10%;
  box-sizing: border-box;
  background-color: white;
}
.zm-promo-aside-inner {
  width: 100%;
  -webkit-box-shadow: 0 1px 3px 0 rgba(0,34,77,.1);
  box-shadow: 0 1px 3px 0 rgba(0,34,77,.1);
  background-color: white;
  border-radius: 2px;
  margin-bottom: 10px;
}
.zm-item-breadcrumb .el-breadcrumb {
  padding: 30px 0 20px 0;
  font-size: 16px;
}
</style>
