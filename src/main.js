import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import { routes } from './routes.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import './registerServiceWorker';
import Vuelidate from "vuelidate/src";

import axios from 'axios';

library.add(faUserSecret);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(Vuelidate);

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.prototype.axios = axios.create({baseURL: 'http://localhost:3300', withCredentials: true});

const router = new VueRouter({
  routes,
  mode: 'hash'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
