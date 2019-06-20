import Vue from 'vue'
import App from './App.vue'
// 优先查找文件，如果文件找不到就找目录
import router from './router/index'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
