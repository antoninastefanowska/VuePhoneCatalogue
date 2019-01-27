<template>
    <div class="container-tabledetails add">
        <table>
            <tr>
                <th>Nazwa</th>
                <td>{{currentItem.name}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    module.exports = {
        data() {
            return {
                database: Database.instance
            }
        },

        props: {
            itemType: {
                required: true
            }
        },

        computed: {
            currentItem() {
                if (this.$route.params.id < this.database[this.itemType].length)
                    return this.database[this.itemType][this.$route.params.id];
            }
        }
    }
</script>