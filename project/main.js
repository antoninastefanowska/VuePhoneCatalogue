const router = new VueRouter({
    routes: [
        { path: '/', component: httpVueLoader('./components/phone_list.vue') },
        { path: '/phones', component: httpVueLoader('./components/phone_list.vue') },
        { path: '/search', component: httpVueLoader('./components/search.vue') },
        { path: '/compare', component: httpVueLoader('./components/compare.vue') },
        { path: '/compare/:id_1/:id_2', component: httpVueLoader('./components/compare.vue') },
        { path: '/phones/add', component: httpVueLoader('./components/phone_edit.vue') },
        { path: '/phones/:id', component: httpVueLoader('./components/phone_details.vue') },
        { path: '/phones/:id/edit', component: httpVueLoader('./components/phone_edit.vue'), props: { editMode: true } }
    ]
});

const vue = new Vue({
    el: '#app',
    router
});