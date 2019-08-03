import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import App from './App.vue'
import SomeComponent from './components/SomeComponent.vue'

const routes = [
    {
        path: '/data/:type',
        component: SomeComponent
    }
];

const router = new VueRouter({routes: routes});

new Vue({
    el: '#app',
    render: h => h(App),
    router,
});