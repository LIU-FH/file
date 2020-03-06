import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/tailwind.css'
// import ViewUI from 'view-design';
// import 'view-design/dist/styles/iview.css';
// Vue.use(ViewUI)
import utils from "./utils/index";
import VueClipboard from 'vue-clipboard2'
import VueLazyload from 'vue-lazyload'

VueClipboard.config.autoSetContainer = true
Vue.use(VueClipboard)
Vue.prototype.$utils = utils


Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('./assets/img/error.png'),
  loading: require('./assets/img/loading.gif'),
  attempt: 1
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')