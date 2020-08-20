import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"


import VueWechatTitle from 'vue-wechat-title'
Vue.use(VueWechatTitle)

import "./assets/reset.css";
import "./assets/index.css";
import "./assets/font-awesome.css";

Vue.config.productionTip = false

// axios.defaults.baseURL = '/api';
Vue.prototype.$http = axios;
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
