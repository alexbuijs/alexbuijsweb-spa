import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import data from '@/data'
import '@/filters'

import * as VueGoogleMaps from 'vue2-google-maps'

import '@/bootstrap.scss'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDnir75m6PKKc8qMi2p-HpSHs36yDP_zhM'
  }
})

Vue.config.productionTip = false

Object.defineProperty(Vue.prototype, '$store', { value: data })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
