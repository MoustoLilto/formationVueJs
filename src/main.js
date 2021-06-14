import Vue from 'vue';
import VueLogger from 'vuejs-logger';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';

import App from './App';
import router from './router';
import store from './stores';
import vuetify from './plugins/vuetify';

import headerPlugin from './plugins/header.plugin';
import headerStore from './stores/header';

const options = {
    isEnabled: true,
    logLevel: 'debug',
    stringifyArguments: false,
    showLogLevel: true,
    showMethodName: true,
    separator: '|',
    showConsoleColors: true,
};

Vue.use(VueLogger, options);
Vue.use(headerPlugin, headerStore);
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    vuetify,
    render: (h) => h(App),
}).$mount('#app');
