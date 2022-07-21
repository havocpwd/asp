import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import VeeValidate from 'vee-validate'

Vue.config.productionTip = false
Vue.use(require('vue-moment'))
Vue.use(VeeValidate)


new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')