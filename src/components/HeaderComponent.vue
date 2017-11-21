<template>
  <div class="zm-header">
    <div class="zm-logo">
      青菜帮
    </div>
    <div class="zm-header-options">
      <div class="">
        首页
      </div>
      <div class="">
        潮流新品
      </div>
      <div class="">
        最新全系列
      </div>
    </div>
    <div class="zm-header-search">
      <el-autocomplete class="zm-search-inner" v-model="state4" :fetch-suggestions="querySearchAsync" placeholder="搜索创业秘方..." @select="handleSelect"></el-autocomplete>
      <el-button type="primary">搜索</el-button>
    </div>
    <div class="zm-header-join">
      <div class="">
        登录
      </div>
      <div class="">
        注册
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HeaderComponent',
  data () {
    return {}
  },
  methods: {
    onSelect (item) {
      this.item = item
    },
    reset () {
      this.item = {}
    },
    selectOption () {
      // select option from parent component
      this.item = this.options[0]
    }
  }
}
</script>

<style scoped>
.zm-header {
  position: fixed;
  width: 100%;
  padding: 0 10%;
  box-sizing: border-box;
  z-index: 100;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /*position: relative;*/
  overflow: hidden;
  background: rgba(255,255,255,0.8);
  height: 52px;
  -webkit-box-shadow: 0 1px 3px 0 rgba(0,34,77,.1);
  box-shadow: 0 1px 3px 0 rgba(0,34,77,.1);
  background-clip: content-box;
}
.zm-logo {
  font-size: 30px;
  color: #EB9E05;
}
.zm-header-options {
  display: flex;
  justify-content: space-around;
}
.zm-header-options div {
  padding: 0 10px;
}
.zm-header-search {
  width: 400px;
  display: flex;
  justify-content: space-around;
}
.zm-search-inner {
  width: 300px;
  font-size: 18px;
}
.zm-header-join {
  display: flex;
  justify-content: space-around;
}
.zm-header-join div {
  padding: 0 10px;
}
</style>
