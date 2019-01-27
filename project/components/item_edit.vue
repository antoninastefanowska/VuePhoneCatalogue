<template>
    <form @submit.prevent="editMode ? edit() : add()">
        <div class="container-tabledetails add">
            <table>
                <tr>
                    <th>Nazwa</th>
                    <td><input type="text" v-model="currentItem.name"></td>
                </tr>
            </table>
        </div>
        <input type="submit" class="button" value="Zapisz">
    </form>
</template>

<script>
    var item = new Object();
    module.exports = {
        data() {
            return {
                database: Database.instance,
                currentItem: item
            }
        },

        props: {
            itemType: {
                required: true
            },

            editMode: {
                type: Boolean,
                default: false
            }
        },

        methods: {
            add() {
                this.database.addItem(this.currentItem, this.itemType);
                this.$router.push('/' + this.itemType);
            },

            edit() {
                this.database.editItem(this.currentItem, this.itemType);
                this.$router.push('/' + this.itemType);
            }
        },

        created() {
            if (this.editMode)
                this.currentItem = this.database[this.itemType][this.$route.params.id];
        }
    }
</script>
