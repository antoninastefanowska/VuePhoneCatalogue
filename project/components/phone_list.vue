<template>
    <div>
        <input type="button" class="button" value="Wyszukaj">
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
                        <th class="column3">
                            Marka
                            <input type="button" @click="sortByBrand" value="▼" class="sortButton">
                        </th>
                        <th class="column4"></th>
                        <th class="column5"></th>
                        <th class="column6"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr is="phonelistitem" v-for="phone in phones" :key="phone.id" :phone="phone" />
                    <tr>
                        <td></td>
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
                sortedByBrand: false,
                sortedByID: true
            }
        },

        computed: {
            phones() {
                let phones = this.database.phones;
                if (this.$route.query.name)
                    phones = phones.filter(phone => phone.name.toLowerCase().includes(this.$route.query.name.toLowerCase()));
                if (this.$route.query.brandID >= 0)
                    phones = phones.filter(phone => phone.brandID === this.$route.query.brandID);

                if (this.sortedByName)
                    return phones.slice().sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
                else if (this.sortedByBrand)
                    return phones.slice().sort((a, b) => a.brand.name.toLowerCase().localeCompare(b.brand.name.toLowerCase()));
                else if (this.sortedByID)
                    return phones.slice().sort((a, b) => a.id > b.id);
                else
                    return phones;
            }
        },

        methods: {
            sortByName() {
                this.sortedByName = true;
                this.sortedByID = false;
                this.sortedByBrand = false;
            },

            sortByBrand() {
                this.sortedByBrand = true;
                this.sortedByName = false;
                this.sortedByID = false;
            },

            sortByID() {
                this.sortedByID = true;
                this.sortedByBrand = false;
                this.sortedByName = false;
            },

            add() {
                this.$router.push('/phones/add');
            }
        },

        components: { 
            phonelistitem: httpVueLoader('./phone_list_item.vue')
        }
    };
</script>