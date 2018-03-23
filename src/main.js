// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import comheader from './components/header'
import comfooter from './components/footer'
import VueWechatTitle from 'vue-wechat-title'
import './style/css/bootstrap.min.css'
import './style/css/reset.css'
import './style/css/style.css'

Vue.component('my-header', comheader)
Vue.component('my-footer', comfooter)
Vue.use(VueWechatTitle)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
