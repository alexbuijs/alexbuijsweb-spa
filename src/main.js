import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import data from '@/data'
import '@/filters'

import '@/bootstrap.scss'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import 'font-awesome/css/font-awesome.css'

import * as VueGoogleMaps from 'vue2-google-maps'

import VueAnalytics from 'vue-analytics'

Vue.use(BootstrapVue)

Vue.use(VueGoogleMaps, {
  load: {
    key: data.google_maps_key
  }
})

Vue.use(VueAnalytics, {
  id: data.google_analytics_key,
  router
})

Vue.config.productionTip = false

Object.defineProperty(Vue.prototype, '$store', { value: data })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
