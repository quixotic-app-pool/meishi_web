/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-11-20T16:27:16+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: index.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-11-23T10:54:36+08:00
 */

import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld'
import MainPage from '@/pages/MainPage'
import ItemPage from '@/pages/ItemPage'
import LogInPage from '@/pages/LogInPage'
import AllCategoryPage from '@/pages/AllCategoryPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AllCategoryPage',
      component: AllCategoryPage
    },
    {
      path: '/main',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/item',
      name: 'ItemPage',
      component: ItemPage
    },
    {
      path: '/login',
      name: 'LogInPage',
      component: LogInPage
    },
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
