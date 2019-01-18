<template>
    <div>
        <ul>
            <phonelistitem v-for="phone in phones" :key="phone.id" :phone="phone" />
        </ul>
    </div>
</template>

<script>
    module.exports = {
        data() {
            return Data.instance;
        },

        components: { phonelistitem: httpVueLoader('./phone_list_item.vue') }
    };
</script>

<style>
</style>