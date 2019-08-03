import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import f from './Components/FetchPage.vue';
import App from './App.vue';

const routes = [
    {
        path: '/master/:fetch',
        component: f,
    },
];

const router = new VueRouter({routes: routes});

new Vue({
    el: '#app',
    render: h => h(App),
    router
});