<template>
  <div class="">
    <oneCategoryPage0 v-if="model.viewport === 0"/>
    <oneCategoryPage1 v-if="model.viewport === 1"/>
  </div>
</template>
<script>
import OneCategoryPage0 from './OneCategoryPage0'
import OneCategoryPage1 from './OneCategoryPage1'
export default {
  name: 'MainPage',
  data () {
    return {
      model: cnfg.model
    }
  },
  components: {
    oneCategoryPage0: OneCategoryPage0,
    oneCategoryPage1: OneCategoryPage1
  }
}
</script>
