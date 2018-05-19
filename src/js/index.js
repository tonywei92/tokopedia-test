import '../scss/style.scss';
import Vue from 'vue';
import VueRouter from 'vue-router';
import {routes} from './routes';
import Main from './vuecomponents/main.vue';
import AlertBox from './vuecomponents/ui/alertbox.vue';
import LoadingCircle from './vuecomponents/ui/loadingCircle.vue';

// global currency unit
window.CurrencyUnit = 'Rp';

// Create format money filter
Vue.filter('formatCurrency', function (value) {
    if (!value) return '';
    value = parseFloat(value);
    if (value === 0) {
        value = "0";
    }
    return accounting.formatMoney(value, window.CurrencyUnit + "\u00A0", 2, ".", ",");
});

// init vue.js router
Vue.use(VueRouter);
const router = new VueRouter({
    //set browser history fallback
    mode: 'history',
    routes
});

// Load all necessary components
Vue.component('AlertBox', AlertBox);
Vue.component('MainApp', Main);
Vue.component('LoadingCircle', LoadingCircle);
const app = new Vue({
    router,
    el: '#app'
});

//jquery scrollbar
$(function () {
    $('body .content').scrollbar();
});


