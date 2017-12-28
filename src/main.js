// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./vuex/store.js"
import "@/assets/styles/base.less"
import TOOLS from  "@/assets/tools/tools.js"
Vue.config.productionTip = false
/* eslint-disable no-new */
window.TOOLS = TOOLS;
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
