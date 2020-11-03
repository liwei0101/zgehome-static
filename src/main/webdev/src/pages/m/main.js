import  './config'		
import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/common/reset.css';
import '@/common/m.css';
import store from './store'


import { setStore, getStore, removeStore } from '@/libs/storage'
import { getRequest, postRequest, $http} from '@/libs/http/$http.js'


// 组件库未使用请删除
// 有赞
import vant from 'vant';
import 'vant/lib/index.css';
import '@/components/Vant';
Vue.use(vant);

//推荐
import '@/components/Common/mobile';


//Vecharts 图表
import VCharts from 'v-charts'
import '@/components/VCharts';
Vue.use(VCharts);





// 挂载全局使用的方法
Vue.prototype.$http = $http; 
Vue.prototype.getRequest = getRequest;
Vue.prototype.postRequest = postRequest;

Vue.prototype.setStore = setStore;
Vue.prototype.getStore = getStore;
Vue.prototype.removeStore = removeStore;

Vue.config.productionTip = false





new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')