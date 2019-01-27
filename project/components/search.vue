<template>
    <form @submit.prevent="search">
        <div class="container-tabledetails add">
            <table>
                <tr>
                    <th>Nazwa</th>
                    <td><input type="text" v-model="name"></td>
                </tr>
                <tr>
                    <th>Marka</th>
                    <td>
                        <select v-model="brandID">
                            <option disabled value="-1">Wybierz markę</option>
                            <option v-for="brand in database.brands" :key="brand.id" :value="brand.id">
                                {{ brand.name }}
                            </option>
                        </select>
                    </td>
                </tr>
            </table>
        </div>
        <input type="submit" class="button" value="Szukaj">
    </form>
</template>

<script>
    module.exports = {
        data() {
            return {
                database: Database.instance,
                name: '',
                brandID: '-1'
            }
        },

        methods: {
            search() {
                let query = new Object();
                if (this.name)
                    query.name = this.name;
                if (this.brandID >= 0)
                    query.brandID = this.brandID;
                this.$router.push({path: 'phones', query: query});
            }
        }
    }
</script>