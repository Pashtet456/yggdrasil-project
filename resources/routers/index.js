import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use( VueRouter );

const routes = [
    {
        path: '/',
        name: 'YggdrasilMain',
        component: () => import( '../pages/yggdrasil/yggdrasil-main-page' ),
        meta: { title:'Главная' },
    },
        {
        path: '/rules',
        name: 'YggdrasilRules',
        component: () => import( '../pages/yggdrasil/yggdrasil-rules-page' ),
        meta: { title:'Правила' },
    },
    {
        path: '/donate',
        name: 'YggdrasilDonate',
        component: () => import( '../pages/yggdrasil/yggdrasil-donate-page' ),
        meta: { title:'Донат' },
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
