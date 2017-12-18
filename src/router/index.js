/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-11-20T16:27:16+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: index.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-12-17T20:58:37+08:00
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
import ChatPage from '@/pages/ChatPage'

import MainPage0 from '@/pages/MainPage0'
import ItemPage0 from '@/pages/ItemPage0'
import AllCategoryPage0 from '@/pages/AllCategoryPage0'
import OneCategoryPage0 from '@/pages/OneCategoryPage0'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/chat',
      name: 'ChatPage',
      component: ChatPage
    },
    {
      path: '/main0',
      name: 'MainPage0',
      component: MainPage0
    },
    {
      path: '/item0',
      name: 'ItemPage0',
      component: ItemPage0
    },
    {
      path: '/all0',
      name: 'AllCategoryPage0',
      component: AllCategoryPage0
    },
    {
      path: '/one0',
      name: 'OneCategoryPage0',
      component: OneCategoryPage0
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
      path: '/',
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
