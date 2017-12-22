<template>
  <div class="zm-footer-container">

    <div style="font-size:20px; padding: 10px 0;">
       人生唯有美食和爱不可辜负
    </div>

    <div class="zm-footer-btn" style="margin-top: 20px;">
      <div style="display:flex; flex-direction: column; align-items: center">
        <el-button @click="openDialog()" style="margin-bottom: 10px; height:50px; width: 80%; border-radius:0; font-size:20px" type="success" name="button">联系我们</el-button>
      </div>
    </div>
    <div class="zm-footer-box">
      <div class="">
        <div class="zm-footer-copyright">
          <div class="zm-footer-coop">
            Copyright © qingcaibang.com
          </div>
          <a href="#" class="zm-footer-coop">苏ICP备17068460号</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FooterComponent0',
  data () {
    return {}
  },
  methods: {
    openDialog () {
      this.$root.$emit('openMainPageDialog', '热线电话13988888888')
    }
  }
}
</script>
<style scoped>
  .zm-footer-btn {
    padding: 10px 0;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .zm-footer-coop {
    text-decoration: none;
    color: #909090;
    font-size: 13px;
    padding: 0 5px;
    margin: 5px 0 5px 0;
  }
  .zm-footer-copyright {
    display: flex;
    flex-direction: column;
  }
  .zm-footer-container {
    display: flex;
    width: 100%;
    padding: 10px 10%;
    box-sizing: border-box;
    flex-direction: column;
    background-color: white;
  }
  .zm-footer-box {
    display: flex;
    width: 100%;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .zm-footer-left {
    display: flex;
    flex-direction: column;
  }
</style>
