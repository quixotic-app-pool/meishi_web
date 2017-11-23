<template>
  <div class="zm-mine-container">
    <div class="zm-mine-inner">
      <div class="zm-mine-top">
        <div class="zm-mine-top-left">
          <img style="height:160px; width: 160px; border-radius: 80px;" src="./einstain.jpeg" alt="">
        </div>
        <div class="zm-mine-top-mid">
          <div style="font-size:34px; font-weight: 700;">
              我的偶像爱因斯坦
          </div>
          <div style="font-size:12px; color:#909090; padding-top:10px">
            2017-8-11 加入
          </div>
        </div>
        <div class="zm-mine-top-right">
          <a href="#">设置个人信息</a>
        </div>
      </div>
      <div class="zm-mine-option">
        <a id="autofocus" href="#" @click="switchTab(1)" class="zm-mine-option-sub">我的项目</a>
        <a href="#" @click="switchTab(2)" class="zm-mine-option-sub">收藏</a>
        <a href="#" @click="switchTab(3)" class="zm-mine-option-sub">留言板</a>
        <div class="zm-mine-option-sub1">

        </div>
      </div>
      <div class="zm-mine-content">
        <el-row v-if="index === 1" :gutter="100">
          <el-col class="zm-mine-content-item" :span="8" v-for="(o, index) in 4" :key="o">
            <el-card style="" :body-style="{ padding: '0px' }">
              <img style="height:216px; width: 100%; object-fit:cover;" src="http://cphualientour.weebly.com/uploads/4/5/8/0/45800523/3058957_orig.jpg">
              <div style="text-align:left; padding: 14px;">
                <div class="">
                  黑钻吐司
                </div>
                <div style="color:#909090; font-size:12px;">
                  <span>222</span>
                  <span>人做过</span>
                  <span>1233人收藏</span>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-row v-if="index === 2" :gutter="100">
          <el-col class="zm-mine-content-item" :span="8" v-for="(o, index) in 4" :key="o">
            <el-card style="" :body-style="{ padding: '0px' }">
              <img style="height:216px; width: 100%; object-fit:cover;" src="http://cphualientour.weebly.com/uploads/4/5/8/0/45800523/3058957_orig.jpg">
              <div style="text-align:left; padding: 14px;">
                <div class="">
                  和之前不一样额
                </div>
                <div style="color:#909090; font-size:12px;">
                  <span>222</span>
                  <span>人做过</span>
                  <span>1233人收藏</span>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <div v-if="index === 3">
          <div style="display:flex; flex-direction:column; align-items:flex-start;">
            <el-input class="zm-mine-textarea" type="textarea" :rows="5" placeholder="如何您有任何疑问或者建议可以给我们留言..." v-model="textarea">
            </el-input>
            <el-button type="danger" name="button">发信</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MinePage',
  data () {
    return {
      index: 1,
      once: true
    }
  },
  mounted () {
    var el = document.getElementById('autofocus')
    el.style.color = 'white'
    el.style['background-color'] = '#dd3915'
  },
  methods: {
    switchTab (index) {
      if (this.once) {
        var el = document.getElementById('autofocus')
        el.style.color = '#222'
        el.style['background-color'] = '#f5f6f5'
        this.once = false
      }
      this.index = index
    }
  }
}
</script>

<style scoped>
.zm-mine-textarea {
  width: 50%;
  padding-bottom: 20px;
}
.zm-mine-textarea  textarea {
  font-size: 18px;
}
.zm-mine-content-item {
  padding-bottom: 20px;
}
.zm-mine-content {

}
.zm-mine-option-sub1 {
  width: 55%;
}
.zm-mine-option-sub {
  width: 15%;
  border-right: 3px solid white;
  height: 50px;
  line-height: 50px;
  text-decoration: none;
  color: #222;
}
.zm-mine-option-sub:hover, .zm-mine-option-sub:focus {
  color: white !important;
  cursor: pointer;
  background-color: #dd3915 !important;
}
.zm-mine-option {
  display: flex;
  width: 100%;
  background-color: #f5f6f5;
  align-items: center;
  margin: 40px 0;
}
.zm-mine-top-right {
  width: 20%;
}
.zm-mine-top-right a {
  font-size:12px;
  color:#909090;
  text-decoration: none;
}
.zm-mine-top-right a:hover {
  background-color: #909090;
  color: #fff;
}
.zm-mine-top-mid {
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.zm-mine-top-left {
  width: 20%;
}
.zm-mine-top {
  display: flex;
  padding-top: 30px;
}
.zm-mine-inner {
  display: flex;
  flex-direction: column;
}
.zm-mine-container {
  width: 100%;
  box-sizing: border-box;
  padding: 0 10%;
  background-color: white;
  display: flex;
  flex-direction: column;
}
</style>
