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
        options: {
            customProperties: true,
        },
        dark: true,
        themes: {
            dark: {
                primary: '#bebebe',
                secondary: '#3a3837',
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
