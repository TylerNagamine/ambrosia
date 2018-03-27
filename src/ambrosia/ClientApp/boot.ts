import './css/site.css';
import Element from 'element-ui';
import Vue from 'vue';
import VueRouter from 'vue-router';

import AppComponent from './components/app/app.vue';
import HomeComponent from './components/home/home.vue';
import UserAdmin from './components/useradmin/useradmin.vue';
import RecipeAdmin from './components/recipeadmin/recipeadmin.vue';

import store from './store';

Vue.use(Element);
Vue.use(VueRouter);

const routes = [
    { path: '/', component: HomeComponent },
    { path: '/counter', component: (resolve: any) => require(['./components/counter/counter.vue'], resolve) },
    { path: '/fetchdata', component: (resolve: any) => require(['./components/fetchdata/fetchdata.vue'], resolve) },
    { path: '/users', component: UserAdmin },
    { path: '/recipes', component: RecipeAdmin },
];

new Vue({
    el: '#app-root',
    router: new VueRouter({ mode: 'history', routes: routes }),
    render: h => h(AppComponent),
    store: store,
});
