<template>
  <div id="app">
      <header-component/>
      <div style="width:100%; height: 52px;"></div>
      <router-view/>
      <footer-component />
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
  font-family: sans-serif, 'Avenir', Helvetica, Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f3f3f3;
}
</style>
