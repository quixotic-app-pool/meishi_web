<template>
  <div class="zm-one0-container">
    <div class="zm-one0-inner">

      <div style="font-size: 30px; font-weight: 700; padding: 30px 0 20px 0;">
        宴客菜
      </div>

      <div style="font-size: 12px; color: #909090;">
        <span>来自</span>
        <span style="color: #fa5555;">神仙的小肉粽</span>
      </div>

      <div style="width:100%; text-align: left; padding: 10px 0;">
        高端大气上档次，又适合在家制作
      </div>

      <div style="width: 100%; padding: 20px 0 30px 0;">
        <el-button style="width:100%; font-size: 20px;" type="danger" name="button">收藏全部菜谱</el-button>
      </div>

      <div style="width:100%;">
        <div style="width:100%;" v-for="(item, index) in 10" :key="index">
          <img style="width: 100%; height: 200px; object-fit: cover;" src="../img2.jpeg" alt="">
          <div style="height:100px; display:flex; justify-content:flex-start;  align-items:center;">
            <div style="width:100%;display:flex; flex-direction:column; align-items:flex-start; justify-content:center">
              <div style="font-size: 20px;">
                粽香排骨卷
              </div>
              <div style="font-size: 12px; color: #909090">
                烟火间
              </div>
              <div style="font-size: 12px; color: #909090">
                318 人做过这道菜
              </div>
            </div>
            <div class="">
              <img style="height: 50px; width: 50px; border-radius: 25px;" src="../einstain.jpeg" alt="">
            </div>
          </div>
        </div>
      </div>

      <div style="width: 100%;">
        <el-button style="background-color:white; color: #fa5555; border: 1px solid #fa5555; font-size: 20px; width: 100%;" type="danger" name="button">查看更多结果</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OneCategoryPage0'
}
</script>

<style scoped>
.zm-one0-container {
  width: 100%;
}
.zm-one0-inner {
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
