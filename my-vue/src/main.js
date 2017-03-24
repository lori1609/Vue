import Vue from 'vue'
import App from './App.vue'

import Home from './Home.vue';
import ServerStatus from './ServerStatus.vue';
//the component used in project should be registered in main.js
Vue.component('app-servers',Home);
Vue.component('app-servers-status', ServerStatus);

new Vue({
  el: '#app',
  render: h => h(App)
})
