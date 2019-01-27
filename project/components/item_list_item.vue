<template>
    <tr>
        <td class="column1">{{item.id}}</td>
        <td class="column2">{{item.name}}</td>
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
            item_type: {
                required: true
            },

            item: {
                required: true
            }
        },

        methods: {
            details() {
                this.$router.push('/' + this.item_type + '/' + this.item.id);
            },

            edit() {
                this.$router.push('/' + this.item_type + '/' + this.item.id + '/edit');
            },

            remove() {
                this.database.deleteItem(this.item.id, this.item_type);
            }
        }
    }
</script>