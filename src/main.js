/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-11-20T16:27:16+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: main.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-11-20T17:10:59+08:00
 */

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { Button, Select } from 'element-ui'

import App from './App'
import router from './router'

// element
Vue.use(Button)
Vue.use(Select)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
