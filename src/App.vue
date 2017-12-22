<template>
  <div id="app">
      <header-component0 v-if = "model.viewport === 0"/>
      <header-component v-else/>
      <div style="width:100%; height: 52px;"></div>
      <router-view/>
      <footer-component0 v-if = "model.viewport === 0"/>
      <footer-component v-else/>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent'
import HeaderComponent0 from '@/components/HeaderComponent0'
import FooterComponent from '@/components/FooterComponent'
import FooterComponent0 from '@/components/FooterComponent0'

export default {
  name: 'app',
  data () {
    return {
      model: window.cnfg.model
    }
  },
  components: {
    HeaderComponent,
    FooterComponent,
    HeaderComponent0,
    FooterComponent0
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
  background-color: white;
}
</style>
