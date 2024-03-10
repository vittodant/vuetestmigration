
//Vue.config.productionTip = false | DEPRECATO https://v3-migration.vuejs.org/breaking-changes/global-api.html#config-productiontip-removed

//DEPRECATO: Options api sostituita
/*
new Vue({
  render: h => h(App),
}).$mount('#app')
*/

import { createApp } from 'vue';
import App from './App.vue';

createApp(App).mount('#app');