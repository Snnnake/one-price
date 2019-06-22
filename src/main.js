import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 优先查找文件，如果文件找不到就找目录
import ElementUI from 'element-ui'
import './styles/index.less'

import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
