import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ComponentOne from './components/ComponentOne.vue';
import ComponentTwo from './components/ComponentTwo.vue';

Vue.config.productionTip = false


// Register your components globally
Vue.component('component-one', ComponentOne);
Vue.component('component-two', ComponentTwo);

new Vue({
  router, // Add the router to the Vue instance
  render: h => h(App),
}).$mount('#app');

