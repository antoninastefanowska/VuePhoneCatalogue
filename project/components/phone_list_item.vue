<template>
    <tr>
        <td class="column1">{{phone.id}}</td>
        <td class="column2">{{phone.name}}</td>
        <td class="column3">{{phone.brand.name}}</td>
        <td class="column4"><input type="button" value="Szczegóły" @click="details"></td>
        <td class="column5"><input type="button" value="Edytuj" @click="edit"></td>
        <td class="column6"><input type="button" value="Usuń" @click="remove"></td>
    </tr>
</template>

<script>
    module.exports = {
        data() {
            return {
                database: Database.instance
            }
        },

        props: {
            phone: {
                type: Phone,
                required: true
            }
        },

        methods: {
            details() {
                this.$router.push('/phones/' + this.phone.id);
            },

            edit() {
                this.$router.push('/phones/' + this.phone.id + '/edit');
            },

            remove() {
                this.database.deletePhone(this.phone.id);
            }
        }
    }
</script>