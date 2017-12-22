<template>
  <div class="zm-one0-container">
    <div class="zm-one0-inner">

      <div style="font-size: 30px; font-weight: 700; padding: 30px 0 20px 0;">
        本周流行
      </div>
      <div style="width:100%;">
        <div style="width:100%;" v-for="(item, index) in 10" :key="index">
          <img style="width: 100%; height: 200px; object-fit: cover;" src="../img2.jpeg" alt="">
          <div style="height:100px; display:flex; justify-content:flex-start;  align-items:center;">
            <div style="width:100%;display:flex; flex-direction:column; align-items:center; justify-content:center">
              <div style="font-size: 20px;">
                粽香排骨卷
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style="width: 100%;">
        <el-button @click="moreData()" style="background-color:white; color: #fa5555; border: 1px solid #fa5555; font-size: 20px; width: 100%;" type="danger" name="button">查看更多结果</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OneCategoryPage0',
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  methods: {
    moreData () {
      // we find topic & page number from props.data
      this.$root.$emit('listData', this.data.topic, this.data.page + 1)
    }
  }
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
