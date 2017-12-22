<template>
  <div class="">
    <oneCategoryPage0 :topic="topic" :page="page" :data="data" v-if="model.viewport === 0"/>
    <oneCategoryPage1 :topic="topic" :page="page" :data="data" v-if="model.viewport === 1"/>
    <customdialog :dialogVisible='dialogVisible' :msg="dialogMsg"/>
  </div>
</template>
<script>
import OneCategoryPage0 from './OneCategoryPage0'
import OneCategoryPage1 from './OneCategoryPage1'
import Dialog from '../../components/Dialog'
export default {
  name: 'MainPage',
  data () {
    return {
      model: window.cnfg.model,
      data: [],
      topic: '',
      page: 0,
      dialogMsg: '',
      dialogVisible: false
    }
  },
  components: {
    oneCategoryPage0: OneCategoryPage0,
    oneCategoryPage1: OneCategoryPage1,
    customdialog: Dialog
  },
  mounted () {
    var self = this
    this.requestData(self.$route.params.topic, 0)
    this.$root.$on('listData', function (topic, page, reset) {
      self.requestData(topic, page, reset)
    })
  },
  methods: {
    requestData (topic, page, reset) {
      var self = this
      self.topic = topic
      this.$http.get('/dev/api/fetchlist?type=' + topic + '&page=' + page)
      .then(function (res) {
        console.log('topic data from server: ' + JSON.stringify(res.body.data))
        if (self.data.length === 0 || reset === true) {
          self.data = res.body.data
        } else {
          self.data.push(...res.body.data)
        }
        self.page = page
      })

      this.$root.$on('openDialog', function (msg) {
        self.dialogMsg = msg
        self.dialogVisible = true
      })
    }
  }
}
</script>
