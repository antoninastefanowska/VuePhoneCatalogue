<template>
    <div>
        <ul>
            <phonelistitem v-for="phone in phones" :key="phone.id" :phone="phone" />
        </ul>
        <phoneaddform />
    </div>
</template>

<script>
    module.exports = {
        data() {
            return Database.instance;
        },

        components: { 
            phonelistitem: httpVueLoader('./phone_list_item.vue'),
            phoneaddform: httpVueLoader('./phone_add.vue')
        }
    };
</script>

<style>
</style>