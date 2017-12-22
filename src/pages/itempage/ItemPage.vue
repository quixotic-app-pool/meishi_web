<template>
  <div class="">
    <itemPage0 :data="data" v-if="model.viewport === 0"/>
    <itemPage1 :data="data" v-else/>
    <customdialog :dialogVisible='dialogVisible' :msg="dialogMsg"/>
  </div>
</template>
<script>
import ItemPage0 from './ItemPage0'
import ItemPage1 from './ItemPage1'
import Dialog from '../../components/Dialog'
export default {
  name: 'ItemPage',
  data () {
    return {
      model: window.cnfg.model,
      dialogMsg: '',
      dialogVisible: false,
      data: {}
    }
  },
  components: {
    itemPage0: ItemPage0,
    itemPage1: ItemPage1,
    customdialog: Dialog
  },
  mounted: function () {
    var self = this
    this.$http.get('/dev/api/fetchrecipe?id=' + self.$route.params.recipe_id)
    .then(function (res) {
      console.log('recipe data from server: ' + JSON.stringify(res.body.data))
      self.data = res.body.data
    })
    this.$root.$on('openDialog', function (msg) {
      self.dialogMsg = msg
      self.dialogVisible = true
    })
  }
}
</script>
