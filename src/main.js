import Vue from 'vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import axios from 'axios';

// import for the chart
import Highcharts from 'highcharts';
import HighchartsVue from 'highcharts-vue';
import exportingInit from 'highcharts/modules/exporting';
import highchartsMoreInit from 'highcharts/highcharts-more';
import solidGaugeInit from 'highcharts/modules/solid-gauge';

import App from './App'
import { routes } from './routes';
import { store } from './store/index';

Vue.config.productionTip = false
exportingInit(Highcharts);
highchartsMoreInit(Highcharts);
solidGaugeInit(Highcharts);

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(HighchartsVue);

const router = new VueRouter({
  mode: 'history',
  routes,
});

axios.defaults.baseURL = "http://3.0.87.5:4000";

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
