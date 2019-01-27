<template>
    <div>
        <div class="container-table100">
            <table>
                <thead>
                    <tr class="table100-head">
                        <th class="column1">
                            ID
                            <input type="button" @click="sortByID" value="▼" class="sortButton">
                        </th>
                        <th class="column2">
                            Nazwa
                            <input type="button" @click="sortByName" value="▼" class="sortButton">
                        </th>
                        <th class="column4"></th>
                        <th class="column5"></th>
                        <th class="column6"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr is="itemlistitem" v-for="item in items" :key="item.id" :item="item" :item_type="itemType" />
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td class="column6"><input type="button" value="Dodaj" @click="add"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    module.exports = {
        data() {
            return {
                database: Database.instance,
                sortedByName: false,
                sortedByID: true
            }
        },

        props: {
            itemType: {
                required: true
            }
        },

        computed: {
            items() {
                let items = this.database[this.itemType];

                if (this.sortedByName)
                    return items.slice().sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
                else if (this.sortedByID)
                    return items.slice().sort((a, b) => a.id > b.id);
                else
                    return items;
            }
        },

        methods: {
            sortByName() {
                this.sortedByName = true;
                this.sortedByID = false;
            },

            sortByID() {
                this.sortedByID = true;
                this.sortedByName = false;
            },

            add() {
                this.$router.push('/' + this.itemType + '/add');
            }
        },

        components: { 
            itemlistitem: httpVueLoader('./item_list_item.vue')
        }
    };
</script>