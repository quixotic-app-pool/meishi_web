<template>
  <div class="">
    <mainPage0 :data= "data" v-if="model.viewport === 0"/>
    <mainPage1 :data= "data" v-if="model.viewport === 1"/>
  </div>
</template>
<script>
import MainPage0 from './MainPage0'
import MainPage1 from './MainPage1'
import axios from 'axios'
export default {
  name: 'MainPage',
  data () {
    return {
      model: cnfg.model,
      data: {}
    }
  },
  mounted () {
    var self = this
    axios.get('/api/fetchmainpagecontent')
    .then(function(res){
      console.log('main page data from server: ' + JSON.stringify(res))
      // TODO: this will be done when js file sent to server with same domain
      // self = res.data
    })
  },
  components: {
    mainPage0: MainPage0,
    mainPage1: MainPage1
  }
}
</script>
