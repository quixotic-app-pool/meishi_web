<template>
  <div class="">
    <itemPage0 v-if="model.viewport === 0"/>
    <itemPage1 v-else/>
    <customdialog :dialogVisible='dialogVisible' :msg="dialogMsg"/>
  </div>
</template>
<script>
import ItemPage0 from './ItemPage0'
import ItemPage1 from './ItemPage1'
import Dialog from '../../components/Dialog'
import axios from 'axios'
export default {
  name: 'ItemPage',
  data () {
    return {
      model: cnfg.model,
      dialogMsg: '',
      dialogVisible: false
    }
  },
  components: {
    itemPage0: ItemPage0,
    itemPage1: ItemPage1,
    customdialog: Dialog
  },
  mounted: function () {
    var self = this
    axios.get('http://localhost:3000/api/fetchrecipe?id=' + self.$route.params.recipe_id)
    .then(function(res){
      console.log('recipe data from server: ' + JSON.stringify(res))
      // TODO: this will be done when js file sent to server with same domain
      // self = res.data
    })
    this.$root.$on('openDialog', function (msg) {
        self.dialogMsg = msg
        self.dialogVisible = true
    })
  }
}
</script>
