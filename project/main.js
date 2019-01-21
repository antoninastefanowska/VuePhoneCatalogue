const router = new VueRouter({
    routes: [
        { path: '/', component: httpVueLoader('./components/phone_list.vue') },
        { path: '/phones', component: httpVueLoader('./components/phone_list.vue') },
        { path: '/phones/:id', component: httpVueLoader('./components/phone_details.vue') }
    ]
});

const vue = new Vue({
    el: '#app',
    router
});