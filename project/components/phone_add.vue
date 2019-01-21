<template>
    <div>
        <form @submit.prevent="add">
            <input v-model="newPhone.name">
        </form>
    </div>
</template>

<script>
    var phone = new Phone();
    module.exports = {
        data() {
            return {
                newPhone: phone,
                database: Database.instance
            }
        },

        methods: {
            add() {
                this.database.addPhone(this.newPhone);
                this.newPhone = new Phone();
            }
        }
    }
</script>

<style>
</style>
