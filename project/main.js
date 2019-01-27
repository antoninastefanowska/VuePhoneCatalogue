const router = new VueRouter({
    routes: [
        { path: '/', component: httpVueLoader('./components/phone_list.vue') },
        { path: '/search', component: httpVueLoader('./components/search.vue') },
        { path: '/compare', component: httpVueLoader('./components/compare.vue') },
        { path: '/compare/:id_1/:id_2', component: httpVueLoader('./components/compare.vue') },
        
        { path: '/phones', component: httpVueLoader('./components/phone_list.vue') },
        { path: '/phones/add', component: httpVueLoader('./components/phone_edit.vue') },
        { path: '/phones/:id', component: httpVueLoader('./components/phone_details.vue') },
        { path: '/phones/:id/edit', component: httpVueLoader('./components/phone_edit.vue'), props: { editMode: true } },
        
        { path: '/brands', component: httpVueLoader('./components/item_list.vue'), props: { itemType: 'brands' } },
        { path: '/brands/add', component: httpVueLoader('./components/item_edit.vue'), props: { itemType: 'brands' } },
        { path: '/brands/:id', component: httpVueLoader('./components/item_details.vue'), props: { itemType: 'brands' } },
        { path: '/brands/:id/edit', component: httpVueLoader('./components/item_edit.vue'), props: { itemType: 'brands', editMode: true } },
        
        { path: '/types', component: httpVueLoader('./components/item_list.vue'), props: { itemType: 'types' } },
        { path: '/types/add', component: httpVueLoader('./components/item_edit.vue'), props: { itemType: 'types' } },
        { path: '/types/:id', component: httpVueLoader('./components/item_details.vue') , props: { itemType: 'types' } },
        { path: '/types/:id/edit', component: httpVueLoader('./components/item_edit.vue'), props: { itemType: 'types', editMode: true } },
        
        { path: '/sims', component: httpVueLoader('./components/item_list.vue'), props: { itemType: 'sims' } },
        { path: '/sims/add', component: httpVueLoader('./components/item_edit.vue'), props: { itemType: 'sims' } },
        { path: '/sims/:id', component: httpVueLoader('./components/item_details.vue'), props: { itemType: 'sims' } },
        { path: '/sims/:id/edit', component: httpVueLoader('./components/item_edit.vue'), props: { itemType: 'sims', editMode: true } },
        
        { path: '/memoryCards', component: httpVueLoader('./components/item_list.vue'), props: { itemType: 'memoryCards' } },
        { path: '/memoryCards/add', component: httpVueLoader('./components/item_edit.vue'), props: { itemType: 'memoryCards' } },
        { path: '/memoryCards/:id', component: httpVueLoader('./components/item_details.vue'), props: { itemType: 'memoryCards' } },
        { path: '/memoryCards/:id/edit', component: httpVueLoader('./components/item_edit.vue'), props: { itemType: 'memoryCards', editMode: true } },
        
        { path: '/operatingSystems', component: httpVueLoader('./components/item_list.vue'), props: { itemType: 'operatingSystems' } },
        { path: '/operatingSystems/add', component: httpVueLoader('./components/item_edit.vue'), props: { itemType: 'operatingSystems' } },
        { path: '/operatingSystems/:id', component: httpVueLoader('./components/item_details.vue'), props: { itemType: 'operatingSystems' } },
        { path: '/operatingSystems/:id/edit', component: httpVueLoader('./components/item_edit.vue'), props: { itemType: 'operatingSystems', editMode: true } },
        
        { path: '/communications', component: httpVueLoader('./components/item_list.vue'), props: { itemType: 'communications' } },
        { path: '/communications/add', component: httpVueLoader('./components/item_edit.vue'), props: { itemType: 'communications' } },
        { path: '/communications/:id', component: httpVueLoader('./components/item_details.vue'), props: { itemType: 'communications' } },
        { path: '/communications/:id/edit', component: httpVueLoader('./components/item_edit.vue'), props: { itemType: 'communications', editMode: true } },
        
        { path: '/sensors', component: httpVueLoader('./components/item_list.vue'), props: { itemType: 'sensors' } },
        { path: '/sensors/add', component: httpVueLoader('./components/item_edit.vue'), props: { itemType: 'sensors' } },
        { path: '/sensors/:id', component: httpVueLoader('./components/item_details.vue'), props: { itemType: 'sensors' } },
        { path: '/sensors/:id/edit', component: httpVueLoader('./components/item_edit.vue'), props: { itemType: 'sensors', editMode: true } },
    ]
});

const vue = new Vue({
    el: '#app',
    router
});