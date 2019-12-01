import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import f from './Components/FetchPage.vue';
import football from './Components/fakeFootball.vue'
import App from './App.vue';

const routes = [
    {path: '/src/:url/:page', component: f, },
    {path: '/football/', component: football}
];

const router = new VueRouter({routes: routes});

new Vue({
    el: '#app',
    render: h => h(App),
    router,
});