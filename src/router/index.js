/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-11-20T16:27:16+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: index.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-12-19T17:53:47+08:00
 */

import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/pages/mainpage/MainPage'
import OneCategoryPage from '@/pages/onecategorypage/OneCategoryPage'
import ItemPage from '@/pages/itempage/ItemPage'

import LogInPage from '@/pages/LogInPage'
import AllCategoryPage from '@/pages/AllCategoryPage'
import MinePage from '@/pages/MinePage'
import SettingPage from '@/pages/SettingPage'
import ChatPage from '@/pages/ChatPage'
import AllCategoryPage0 from '@/pages/AllCategoryPage0'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/chat',
      name: 'ChatPage',
      component: ChatPage
    },
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/all0',
      name: 'AllCategoryPage0',
      component: AllCategoryPage0
    },
    {
      path: '/setting',
      name: 'SettingPage',
      component: SettingPage
    },
    {
      path: '/mine',
      name: 'MinePage',
      component: MinePage
    },
    {
      path: '/one/:topic',
      name: 'OneCategoryPage',
      component: OneCategoryPage
    },
    {
      path: '/all',
      name: 'AllCategoryPage',
      component: AllCategoryPage
    },
    {
      path: '/item/:recipe_id',
      name: 'ItemPage',
      component: ItemPage
    },
    {
      path: '/login',
      name: 'LogInPage',
      component: LogInPage
    }
  ]
})
