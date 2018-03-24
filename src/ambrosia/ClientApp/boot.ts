import './css/site.css';
import Element from 'element-ui';
import Vue from 'vue';
import VueRouter from 'vue-router';

import store from './store';

Vue.use(Element);
Vue.use(VueRouter);

const routes = [
    { path: '/', component: require('./components/home/home.vue') },
    { path: '/counter', component: (resolve: any) => require(['./components/counter/counter.vue'], resolve) },
    { path: '/fetchdata', component: (resolve: any) => require(['./components/fetchdata/fetchdata.vue'], resolve) },
    { path: '/users', component: require('./components/useradmin/useradmin.vue') },
    { path: '/recipes', component: require('./components/recipeadmin/recipeadmin.vue') },
];

new Vue({
    el: '#app-root',
    router: new VueRouter({ mode: 'history', routes: routes }),
    render: h => h(require('./components/app/app.vue')),
    store: store,
});
