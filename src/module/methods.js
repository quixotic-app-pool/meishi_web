/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-12-19T09:37:22+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: methods.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-12-22T12:11:13+08:00
 */

 var methodsModule = {}
 var cnfg = window.cnfg

 methodsModule.debounce = function (func, wait, immediate) {
   var timeout
   return function () {
     var context = this
     var args = arguments
     var later = function () {
       timeout = null
       if (!immediate) func.apply(context, args)
     }
     var callNow = immediate && !timeout
     clearTimeout(timeout)
     timeout = setTimeout(later, wait)
     if (callNow) func.apply(context, args)
   }
 }

 methodsModule.resize = function () {
   var w = window.innerWidth || document.body.clientWidth
   var h = window.innerHeight || document.body.clientHeight

   var viewport = cnfg.model.viewport

   if (w < 978) {
     if (viewport !== 0) {
       cnfg.model.viewport = 0
     }
   } else {
     if (viewport !== 1) {
       cnfg.model.viewport = 1
     }
   }
   cnfg.model.width = w
   cnfg.model.height = h
 }

 module.exports = methodsModule
