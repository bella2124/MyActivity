import Vue from "vue";
import App from "@/views/App.vue";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import axios from 'axios'
import locale from 'element-ui/lib/locale';
import lang from 'element-ui/lib/locale/lang/en'
import '@/assets/css/style.css';

Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.use(axios)
window.axios = require('axios')
locale.use(lang);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
