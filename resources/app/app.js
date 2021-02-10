/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */


window.Vue = require('vue').default;

import router  from '../routers';
import Vuetify from '../plugins/vuetify';
import store from '../store';
import instance from '../plugins/axios';
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('yggdrasil-project', require('./components/YggdrasilProject.vue').default);
Vue.component('lotr', require('./components/Lotr.vue').default);
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin addin  g components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


Vue.config.productionTip = false;
Vue.prototype.$http = instance;


const app = new Vue({
    el: '#app',
    router,
    vuetify: Vuetify,
    store,
});
