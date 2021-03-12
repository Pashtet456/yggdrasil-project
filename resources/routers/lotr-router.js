import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use( VueRouter );

const routes = [
    {
        path: '/lotr/',
        name: 'LotrMain',
        component: () => import( '../pages/lotr/lotr-main-page' ),
    },
    {
        path: '/lotr/donate',
        name: 'LotrDonate',
        component: () => import( '../pages/lotr/lotr-donate-page' ),
    },
    {
        path: '/lotr/rules',
        name: 'LotrRules',
        component: () => import( '../pages/lotr/lotr-rules-page' ),
    },
    {
        path: '/authorization',
        name: 'Authorization',
        component: () => import( '../pages/authorization' ),
        meta: { title:'Авторизация' },
    },
    {
        path: '/registration',
        name: 'Registration',
        component: () => import( '../pages/registration' ),
        meta: { title:'Регистрация' },
    },
    {
        path: '/forgot-password',
        name: 'ForgotPassword',
        component: () => import( '../pages/forgot-password' ),
        meta: { title:'Восстановление пароля' },
    },
    {
        path: '/cabinet',
        name: 'Cabinet',
        component: () => import( '../pages/cabinet' ),
        meta: { title:'Личный кабинет' },
    },
];

const router = new VueRouter( {
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
} );

export default router;
