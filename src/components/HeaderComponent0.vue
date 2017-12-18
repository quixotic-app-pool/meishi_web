<template>
  <div class="zm-header0">
    <div class="zm-header0-inner">
      <div class="zm-logo0">
        青菜帮
      </div>
      <div class="">
        <el-button class="zm-header0-btn1" type="default" name="button">用APP打开</el-button>
        <el-button class="zm-header0-btn2" type="danger" name="button">安装应用</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HeaderComponent0',
  data () {
    return {
      state: ''
    }
  },
  methods: {}
}
</script>

<style scoped>
.zm-header0-btn1 {
  color: #fa5555;
  border-color: #fa5555
}
.zm-header0-btn2 {

}
.zm-header0-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  width: 100%;
  box-sizing: border-box;
}
.zm-logo0 {
  font-size: 30px;
  color: #EB9E05;
}
.zm-header0 {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  z-index: 1000;
  overflow: hidden;
  background: rgba(255,255,255,0.8);
  height: 52px;
  -webkit-box-shadow: 0 1px 3px 0 rgba(0,34,77,.1);
  box-shadow: 0 1px 3px 0 rgba(0,34,77,.1);
}
</style>
