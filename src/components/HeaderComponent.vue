<template>
  <div class="zm-header">
    <div class="zm-header-inner">
      <router-link to="/" class="zm-logo" style="text-decoration: none">
        青菜帮
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HeaderComponent',
  data () {
    return {
      state: ''
    }
  },
  methods: {
    querySearchAsync () {

    },
    handleSelect () {

    }
  }
}
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
.zm-header {
  position: fixed;
  width: 100%;
  z-index: 1000;
  overflow: hidden;
  background: rgba(255,255,255,0.8);
  height: 52px;
  -webkit-box-shadow: 0 1px 3px 0 rgba(0,34,77,.1);
  box-shadow: 0 1px 3px 0 rgba(0,34,77,.1);
  background-clip: content-box;
}
.zm-header-inner {
  width: 100%;
  padding: 0 10%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 4px;
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
  padding: 0 20px;
}
.zm-header-search {
  display: flex;
  justify-content: space-around;
}
.zm-search-inner {
  width: 300px;
  font-size: 18px;
  margin-right: 10px
}
.zm-header-join {
  display: flex;
  justify-content: space-around;
}
.zm-header-join div {
  padding: 0 10px;
}
</style>
