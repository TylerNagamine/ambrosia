import './css/site.css';
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
import Vue from 'vue';
import VueRouter from 'vue-router';

import AppComponent from './components/app/app.vue';
import HomeComponent from './components/home/home.vue';
import UserAdmin from './components/useradmin/useradmin.vue';
import RecipeAdmin from './components/recipeadmin/recipeadmin.vue';

import store from './store';

Vue.use(ElementUI);
Vue.use(VueRouter);

const routes = [
    { path: '/', component: HomeComponent, icon: 'el-icon-caret-right', title: 'Home' },
    { 
        path: '/counter',
        component: (resolve: any) => require(['./components/counter/counter.vue'], resolve),
        icon: 'el-icon-mobile-phone',
        title: 'Counter'
    },
    {
        path: '/fetchdata',
        component: (resolve: any) => require(['./components/fetchdata/fetchdata.vue'], resolve),
        icon: 'el-icon-phone-outline',
        title: 'Fetch Data',
    },
    { path: '/users', component: UserAdmin, icon: 'el-icon-upload2', title: 'User Admin' },
    { path: '/recipes', component: RecipeAdmin, icon: 'el-icon-tickets', title: 'Recipe Admin' },
];

new Vue({
    el: '#app-root',
    router: new VueRouter({ mode: 'history', routes: routes }),
    render: h => h(AppComponent),
    store: store,
});
