
//Vue.config.productionTip = false | DEPRECATO https://v3-migration.vuejs.org/breaking-changes/global-api.html#config-productiontip-removed

//DEPRECATO: Options api sostituita
/*
new Vue({
  render: h => h(App),
}).$mount('#app')
*/

import { createApp } from 'vue';
import App from './App.vue';
import { GLOBAL_MOUNT, INSTANCE_LISTENERS, INSTANCE_EMIT, INSTANCE_SET, COMPILER_IS_ON ,    FILTERS, COMPILER_FILTERS} from '@vue/compat';
createApp(App, {
  [GLOBAL_MOUNT]: true,
  [INSTANCE_LISTENERS]: true,
  [INSTANCE_EMIT]: true,
  [INSTANCE_SET]: true,
  [COMPILER_IS_ON]: true,
  [FILTERS]: true,
  [COMPILER_FILTERS]: true,
}).mount('#app');