<template>
  <div class="">
    <mainPage0 :data= "data" v-if="model.viewport === 0"/>
    <mainPage1 :data= "data" v-if="model.viewport === 1"/>
    <customdialog :dialogVisible='dialogVisible' :msg="dialogMsg"/>
  </div>
</template>
<script>
import MainPage0 from './MainPage0'
import MainPage1 from './MainPage1'
import Dialog from '../../components/Dialog'
export default {
  name: 'MainPage',
  data () {
    return {
      model: window.cnfg.model,
      data: [],
      dialogMsg: '',
      dialogVisible: false
    }
  },
  mounted () {
    var self = this
    // console.log('going to call server for main page data')
    // 跨域问题 http://www.jianshu.com/p/75a9f9b5a1bb
    this.$http.get('/dev/api/fetchmainpagecontent')
    .then(function (res) {
      // console.log('main page data from server: ' + JSON.stringify(res.body.data))
      self.data = res.body.data
      // console.log('self.data:' + JSON.stringify(self.data))
    })
    this.$root.$on('openDialog', function (msg) {
      self.dialogMsg = msg
      self.dialogVisible = true
    })
  },
  components: {
    mainPage0: MainPage0,
    mainPage1: MainPage1,
    customdialog: Dialog
  }
}
</script>
