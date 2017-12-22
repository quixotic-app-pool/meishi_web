<template>
  <div class="">
    <oneCategoryPage0 :data="data" v-if="model.viewport === 0"/>
    <oneCategoryPage1 :data="data" v-if="model.viewport === 1"/>
  </div>
</template>
<script>
import OneCategoryPage0 from './OneCategoryPage0'
import OneCategoryPage1 from './OneCategoryPage1'
export default {
  name: 'MainPage',
  data () {
    return {
      model: window.cnfg.model,
      data: {},
      topic: ''
    }
  },
  components: {
    oneCategoryPage0: OneCategoryPage0,
    oneCategoryPage1: OneCategoryPage1
  },
  mounted () {
    var self = this
    this.requestData(self.$route.params.topic, 0)
    this.$root.$on('listData', function (topic, page) {
      self.requestData(topic, page)
    })
  },
  methods: {
    requestData (topic, page) {
      // var self = this
      this.$http.get('http://localhost:3000/api/fetchlist?type=' + topic + '&page=' + page)
      .then(function (res) {
        console.log('topic data from server: ' + JSON.stringify(res))
        // TODO: this will be done when js file sent to server with same domain
        // self.data = res.data
        // here we also include page number
        // data.page = page
        // include topic
        // data.topic = topic
      })
    }
  }
}
</script>
