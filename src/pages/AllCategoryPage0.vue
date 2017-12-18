<template>
  <div class="zm-all0-container">
    <div class="zm-all0-inner">
      <div class="zm-all0-one" v-for="(item, index) in 4" :key="index">
          <div style="font-size:20px; font-weight:700; text-align: left; padding: 30px 0 10px 0;">
            市场热门
          </div>
          <div class="">
            <el-row :gutter="10">
              <el-col style="padding-bottom: 10px;" :span="8" v-for="(o, index) in 8" :key="index" >
                <el-card :body-style="{ padding: '0px' }">
                  <img style="width: 100%;" src="./img2.jpeg" class="image">
                  <div style="padding: 10px;">
                    <span>甜品</span>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AllCategoryPage0'
}
</script>

<style scoped>
.zm-all0-inner {
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
.zm-all0-container {
  width: 100%;
}
</style>
