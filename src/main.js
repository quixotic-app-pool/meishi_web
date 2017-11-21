/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-11-20T16:27:16+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: main.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-11-21T15:08:45+08:00
 */

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// import VueProgressiveImage from 'vue-progressive-image'
// import { MdButton, MdContent, MdTabs } from 'vue-material/dist/components'
// import VueTouchRipple from 'vue-touch-ripple'
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// import VueSwal from 'vue-swal'

import App from './App'
import router from './router'
// require('vue-material/dist/vue-material.min.css')
// require('swiper/dist/css/swiper.css')
// import VueImg from 'v-img'
// import VModal from 'vue-js-modal'

// require('vue-touch-ripple/component.css')
// Vue.use(VueProgressiveImage)
// Vue.use(VModal)
// Vue.use(VueSwal)
// Vue.use(VueImg)
// element
Vue.use(ElementUI)
// Vue.use(MdButton)
// Vue.use(MdContent)
// Vue.use(MdTabs)
// Vue.use(VueTouchRipple)
// Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
