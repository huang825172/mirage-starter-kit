import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import axios from 'axios'
import {BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from "./App";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VueRouter);
Vue.prototype.axios = axios;

const router = new VueRouter({
    mode: 'history',
    routes
});

// 更换页面标题
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next();
});

new Vue({
    router,
    components: {App},
    template: '<App/>'
}).$mount('#app');