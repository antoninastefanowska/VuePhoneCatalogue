<template>
    <div class="container-tabledetails add">
        <table>
            <tr>
                <th>Nazwa</th>
                <td>
                    <select id="select1" @change="onSelectionChange">
                        <option v-for="phone in phones" :key="phone.id" :value="phone.id" :selected="phone1.id === phone.id">
                            {{phone.name}}
                        </option>
                    </select>
                </td>
                <td>
                    <select id="select2" @change="onSelectionChange">
                        <option v-for="phone in phones" :key="phone.id" :value="phone.id" :selected="phone2.id === phone.id">
                            {{phone.name}}
                        </option>
                    </select>
                </td>
            </tr>
            <tr>
                <th>Model</th>
                <td>{{phone1.model}}</td>
                <td>{{phone2.model}}</td>
            </tr>
            <tr>
                <th>Marka</th>
                <td>{{phone1.brand.name}}</td>
                <td>{{phone2.brand.name}}</td>
            </tr>
            <tr>
                <th>Data wypuszczenia</th>
                <td :class="cellClass(phone1, phone2, 'release')">{{phone1.releaseMonth}}/{{phone1.releaseYear}}</td>
                <td :class="cellClass(phone2, phone1, 'release')">{{phone2.releaseMonth}}/{{phone2.releaseYear}}</td>
            </tr>
            <tr>
                <th>Typ</th>
                <td>{{phone1.type.name}}</td>
                <td>{{phone2.type.name}}</td>
            </tr>
            <tr>
                <th>Klawiatura fizyczna</th>
                <td :class="cellClass(phone1, phone2, 'keyboard')">{{phone1.keyboard}}</td>
                <td :class="cellClass(phone2, phone1, 'keyboard')">{{phone2.keyboard}}</td>
            </tr>
            <tr>
                <th>Przekątna ekranu</th>
                <td :class="cellClass(phone1, phone2, 'sizeInch')">{{phone1.sizeInch}}</td>
                <td :class="cellClass(phone2, phone1, 'sizeInch')">{{phone2.sizeInch}}</td>
            </tr>
            <tr>
                <th>Ekran dotykowy</th>
                <td :class="cellClass(phone1, phone2, 'touchscreen')">{{phone1.touchscreen}}</td>
                <td :class="cellClass(phone2, phone1, 'touchscreen')">{{phone2.touchscreen}}</td>
            </tr>
            <tr>
                <th>Karta sim</th>
                <td>{{phone1.sim.name}}</td>
                <td>{{phone2.sim.name}}</td>
            </tr>
            <tr>
                <th>DualSim</th>
                <td :class="cellClass(phone1, phone2, 'dualsim')">{{phone1.dualsim}}</td>
                <td :class="cellClass(phone2, phone1, 'dualsim')">{{phone2.dualsim}}</td>
            </tr>
            <tr>
                <th>Karta pamięci</th>
                <td>{{phone1.memoryCard.name}}</td>
                <td>{{phone2.memoryCard.name}}</td>
            </tr>
            <tr>
                <th>Pamięć wewnętrzna [Gb]</th>
                <td :class="cellClass(phone1, phone2, 'memoryMB')">{{phone1.memoryMB / 1024}}</td>
                <td :class="cellClass(phone2, phone1, 'memoryMB')">{{phone2.memoryMB / 1024}}</td>
            </tr>
            <tr>
                <th>Pamięć RAM [Gb]</th>
                <td :class="cellClass(phone1, phone2, 'ramMB')">{{phone1.ramMB / 1024}}</td>
                <td :class="cellClass(phone2, phone1, 'ramMB')">{{phone2.ramMB / 1024}}</td>
            </tr>
            <tr>
                <th>System operacyjny</th>
                <td>{{phone1.operatingSystem.name}}</td>
                <td>{{phone2.operatingSystem.name}}</td>
            </tr>
            <tr>
                <th>Wersja systemu operacyjnego</th>
                <td :class="cellClass(phone1, phone2, 'operatingSystemVersion')">{{phone1.operatingSystemVersion}}</td>
                <td :class="cellClass(phone2, phone1, 'operatingSystemVersion')">{{phone2.operatingSystemVersion}}</td>
            </tr>
            <tr>
                <th>Procesor</th>
                <td>{{phone1.chipset}}</td>
                <td>{{phone2.chipset}}</td>
            </tr>
            <tr>
                <th>Zegar procesora [GHz]</th>
                <td :class="cellClass(phone1, phone2, 'cpuGHz')">{{phone1.cpuGHz}}</td>
                <td :class="cellClass(phone2, phone1, 'cpuGHz')">{{phone2.cpuGHz}}</td>
            </tr>
            <tr>
                <th>Rdzenie</th>
                <td :class="cellClass(phone1, phone2, 'cores')">{{phone1.cores}}</td>
                <td :class="cellClass(phone2, phone1, 'cores')">{{phone2.cores}}</td>
            </tr>
            <tr>
                <th>Bateria [mAh]</th>
                <td :class="cellClass(phone1, phone2, 'batterymAH')">{{phone1.batterymAH}}</td>
                <td :class="cellClass(phone2, phone1, 'batterymAH')">{{phone2.batterymAH}}</td>
            </tr>
            <tr>
                <th>Matryca aparatu [MP]</th>
                <td :class="cellClass(phone1, phone2, 'cameraMP')">{{phone1.cameraMP}}</td>
                <td :class="cellClass(phone2, phone1, 'cameraMP')">{{phone2.cameraMP}}</td>
            </tr>
            <tr>
                <th>Lampa błyskowa</th>
                <td :class="cellClass(phone1, phone2, 'cameraLED')">{{phone1.cameraLED}}</td>
                <td :class="cellClass(phone2, phone1, 'cameraLED')">{{phone2.cameraLED}}</td>
            </tr>
            <tr>
                <th>Radio</th>
                <td :class="cellClass(phone1, phone2, 'radio')">{{phone1.radio}}</td>
                <td :class="cellClass(phone2, phone1, 'radio')">{{phone2.radio}}</td>
            </tr>
            <tr>
                <th>Transmisja danych</th>
                <td :class="cellClass(phone1, phone2, 'communications')">
                    <div v-for="communication in phone1.communications" :key="communication.id" class="block">
                        {{ communication.name }},
                    </div>
                </td>
                <td :class="cellClass(phone2, phone1, 'communications')">
                    <div v-for="communication in phone2.communications" :key="communication.id" class="block">
                        {{ communication.name }},
                    </div>
                </td>
            </tr>
            <tr>
                <th>Czujniki</th>
                <td :class="cellClass(phone1, phone2, 'sensors')">
                    <div v-for="sensor in phone1.sensors" :key="sensor.id" class="block">
                        {{ sensor.name }}, 
                    </div>
                </td>
                <td :class="cellClass(phone2, phone1, 'sensors')">
                    <div v-for="sensor in phone2.sensors" :key="sensor.id" class="block">
                        {{ sensor.name }}, 
                    </div>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
    module.exports = {
        data() {
            return Database.instance;
        },

        computed: {
            phone1() {
                if (this.$route.params.id_1 < this.phones.length)
                    return this.phones[this.$route.params.id_1];
            },

            phone2() {
                if (this.$route.params.id_2 < this.phones.length)
                    return this.phones[this.$route.params.id_2];
            }
        },
        
        methods: {
            cellClass(phone1, phone2, attributeName) {
                let comparison = Phone.compareAttribute(phone1, phone2, attributeName);
                if (comparison === 1)
                    return 'better';
                else if (comparison === -1)
                    return 'worse';
                else
                    return '';
            },

            onSelectionChange() {
                let select1 = document.getElementById("select1"), select2 = document.getElementById("select2");
                let id1, id2;
                id1 = select1.options[select1.selectedIndex].value;
                id2 = select2.options[select2.selectedIndex].value;
                this.$router.push('/compare/' + id1 + '/' + id2);
            }
        }
    }
</script>