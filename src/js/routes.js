import Home from './vuecomponents/home.vue';
import FormatExample from './vuecomponents/formatExample.vue';
import Result from './vuecomponents/result.vue';
import About from './vuecomponents/about.vue';
export const routes =[
    { path: '/', component:Home },
    { path: '/example', component:FormatExample },
    { path: '/result', name: 'result', component:Result, props:true },
    { path: '/about', name: 'about', component:About }
];