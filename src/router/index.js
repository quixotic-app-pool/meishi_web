/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-11-20T16:27:16+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: index.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-11-23T16:19:04+08:00
 */

import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld'
import MainPage from '@/pages/MainPage'
import ItemPage from '@/pages/ItemPage'
import LogInPage from '@/pages/LogInPage'
import AllCategoryPage from '@/pages/AllCategoryPage'
import OneCategoryPage from '@/pages/OneCategoryPage'
import MinePage from '@/pages/MinePage'
import SettingPage from '@/pages/SettingPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SettingPage',
      component: SettingPage
    },
    {
      path: '/',
      name: 'MinePage',
      component: MinePage
    },
    {
      path: '/one',
      name: 'OneCategoryPage',
      component: OneCategoryPage
    },
    {
      path: '/all',
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
