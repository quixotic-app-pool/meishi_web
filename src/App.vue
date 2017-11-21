<template>
  <div id="app">
    <el-container>

      <header-component/>
      <div style="width:100%; height: 52px;"></div>
      <el-main>
        <router-view/>
      </el-main>

      <el-footer>
        <footer-component/>
      </el-footer>

    </el-container>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent'
import FooterComponent from '@/components/FooterComponent'

export default {
  name: 'app',
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 2000px;
}
</style>
