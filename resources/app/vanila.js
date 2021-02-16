window.Vue = require('vue').default;

// import router           from '../routers/index';
// import Vuetify          from '../plugins/vuetify';
// import store            from '../store/index';
// import instance         from '../plugins/axios';

Vue.component('lotr', require('./components/Lotr').default);

// Vue.config.productionTip = false;
// Vue.prototype.$http = instance;

// window.axios = require('axios');
// window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const lotr = new Vue({
    el: '#lotr',
    // router: router,
    // vuetify: Vuetify,
    // store,
});
