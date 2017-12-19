<template>
  <div class="">
    <mainPage0 v-if="model.viewport === 0"/>
    <mainPage1 v-if="model.viewport === 1"/>
  </div>
</template>
<script>
import MainPage0 from './MainPage0'
import MainPage1 from './MainPage1'
export default {
  name: 'MainPage',
  data () {
    return {
      model: cnfg.model
    }
  },
  components: {
    mainPage0: MainPage0,
    mainPage1: MainPage1
  }
}
</script>
