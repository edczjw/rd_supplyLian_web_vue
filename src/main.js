// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入饿了吗ui
import ElementUI from 'element-ui'
import animate from 'animate.css'

//axios并不像ajax或者vue-resource那样，它默认post是以Request Payload这种形式来传输的
import axios from 'axios'

//引入vuex
import store from './store'

import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(animate)

//$axios替换axios
Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  store,//使用store
  components: { App },
  template: '<App/>'
})
