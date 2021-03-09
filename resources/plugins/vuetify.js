import Vue     from 'vue';
import Vuetify from 'vuetify';
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/dist/vuetify.min.css';

Vue.use( Vuetify );

const opts = {
    icons: {
        iconfont: 'mdi',
    },
    theme: {
        themes: {
            light: {
                // primary: '#ff2',
                // secondary: '#111',
                // accent: '#aaa223',
                // error: '#FF5252',
                // info: '#2196F3',
                // success: '#ccc2c2',
                // warning: '#FFC107',
            },
        },
    },
};

export default new Vuetify( opts );
