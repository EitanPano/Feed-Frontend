import Vue from 'vue'
import app from './app.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false



new Vue({
  created() {
    this.$store.dispatch({type: 'loadFeed'})
  },


  router,
  store,
  render: h => h(app)
}).$mount('#app')
