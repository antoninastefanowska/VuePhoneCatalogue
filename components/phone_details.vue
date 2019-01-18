<template>
    <div v-if="currentPhone">
        <div>{{ currentPhone.name }}</div>
        <div>{{ currentPhone.brand.name }}</div>
        <div>{{ currentPhone.operatingSystem.name }}</div>
        <div>
            <div v-for="sensor in currentPhone.sensors" :key="sensor.id">
                {{ sensor.name }}
            </div>
        </div>
    </div>
</template>

<script>
    module.exports = {
        data() {
            return Data.instance;
        },

        computed: {
            currentPhone() {
                if (this.$route.params.id < this.phones.length)
                    return this.phones[this.$route.params.id];
            }
        }
    }
</script>

<style>
</style>