import '../scss/style.scss';
import Vue from 'vue';
import VueRouter from 'vue-router';
import {routes} from './routes';
import Main from './vuecomponents/main.vue';
import AlertBox from './vuecomponents/ui/alertbox.vue';
import LoadingCircle from './vuecomponents/ui/loadingCircle.vue';
Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',
    routes
});
Vue.component('AlertBox', AlertBox);
Vue.component('MainApp', Main);
Vue.component('LoadingCircle', LoadingCircle);
const app = new Vue({
    router,
    el: '#app'
});

//jquery scrollbar
$(function(){
    $('body .content').scrollbar();
});


