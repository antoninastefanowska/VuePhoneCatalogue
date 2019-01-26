<template>
    <div>
        <input type="button" class="button" value="Wyszukaj">        
        <div class="head">
            <p >Sortuj po <input type="radio" id="sort_new" name="sort" value="New"/> 
            <label for="keyboard_false">Dacie</label>
            <input type="radio" id="sort_nazwa" name="sort" value="Yes">
            <label for="sort_nazwa">Nazwie</label></p>
        </div>
        <div class="container-table100">
            <table>
                <thead>
                    <tr class="table100-head">
                        <th class="column1">#</th>
                        <th class="column2">Nazwa</th>
                        <th class="column3">Marka</th>
                        <th class="column4"></th>
                        <th class="column5"></th>
                        <th class="column6"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr is="phonelistitem" v-for="phone in phones" :key="phone.id" :phone="phone" />
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    module.exports = {
        data() {
            return Database.instance;
        },

        components: { 
            phonelistitem: httpVueLoader('./phone_list_item.vue')
        }
    };
</script>