// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios';
import lodash from 'lodash';
import VueAlertify from 'vue-alertify';
import VueClipboard from 'vue-clipboard2';
import Vuetify from 'vuetify';
import Hljs from 'highlight.js';
import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons/iconfont/material-icons.css';
import router from './router';
import store from './store';
import App from './App';


Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.prototype._ = lodash;

Vue.use(Vuetify);
Vue.use(VueAlertify);
Vue.use(VueClipboard);


Vue.directive('highlightjs', (el) => {
  const blocks = el.querySelectorAll('pre code');
  Array.prototype.forEach.call(blocks, Hljs.highlightBlock);
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
