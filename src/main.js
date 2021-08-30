import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import echarts from 'echarts'
import './assets/style/commin.css'  //公共组件
import './assets/font/iconfont.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
