<template>
    <form @submit.prevent="editMode ? edit() : add()">
        <div class="container-tabledetails add">
            <table>
                <tr>
                    <th>Nazwa</th>
                    <td><input type="text" v-model="currentPhone.name"></td>
                </tr>
                <tr>
                    <th>Model</th>
                    <td><input type="text" v-model="currentPhone.model"></td>
                </tr>
                <tr>
                    <th>Marka</th>
                    <td>
                        <select v-model="currentPhone.brandID">
                            <option disabled value="-1">Wybierz markę</option>
                            <option v-for="brand in database.brands" :key="brand.id" :value="brand.id">
                                {{ brand.name }}
                            </option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th>Data wypuszczenia</th>
                    <td>
                        <select v-model="currentPhone.releaseMonth">
                            <option disabled value="-1">Wybierz miesiąc</option>
                            <option value="1">styczeń</option>
                            <option value="2">luty</option>
                            <option value="3">marzec</option>
                            <option value="4">kwiecień</option>
                            <option value="5">maj</option>
                            <option value="6">czerwiec</option>
                            <option value="7">lipiec</option>
                            <option value="8">sierpień</option>
                            <option value="9">wrzesień</option>
                            <option value="10">październik</option>
                            <option value="11">listopad</option>
                            <option value="12">grudzień</option>
                        </select>
                        <select v-model="currentPhone.releaseYear">
                            <option disabled value="-1">Wybierz rok</option>
                            <option v-for="number in range(1990, 2019)" :key="number" :value="number">
                                {{ number }}
                            </option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th>Typ</th>
                    <td>
                        <select v-model="currentPhone.typeID">
                            <option disabled value="-1">Wybierz typ</option>
                            <option v-for="type in database.types" :key="type.id" :value="type.id">
                                {{ type.name }}
                            </option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th>Klawiatura fizyczna</th>
                    <td>
                        <input type="radio" id="keyboard_true" v-model="currentPhone.keyboard" :value="true">
                        <label for="keyboard_true">Tak</label>
                        <input type="radio" id="keyboard_false" v-model="currentPhone.keyboard" :value="false">
                        <label for="keyboard_false">Nie</label>
                    </td>
                </tr>
                <tr>
                    <th>Przekątna ekranu [cale]</th>
                    <td><input type="number" value="4" step="0.1" min="0.5" v-model="currentPhone.sizeInch" /></td>
                </tr>
                <tr>
                    <th>Ekran dotykowy</th>
                    <td>
                        <input type="radio" id="touchscreen_true" v-model="currentPhone.touchscreen" :value="true">
                        <label for="touchscreen_true">Tak</label>
                        <input type="radio" id="touchscreen_false" v-model="currentPhone.touchscreen" :value="false">
                        <label for="touchscreen_false">Nie</label>
                    </td>
                </tr>
                <tr>
                    <th>Karta sim</th>
                    <td>
                        <select v-model="currentPhone.simID">
                            <option disabled value="-1">Wybierz typ karty sim</option>
                            <option v-for="sim in database.sims" :key="sim.id" :value="sim.id">
                                {{ sim.name }}
                            </option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th>DualSim</th>
                    <td>
                        <input type="radio" id="dualsim_true" v-model="currentPhone.dualsim" :value="true">
                        <label for="dualsim_true">Tak</label>
                        <input type="radio" id="dualsim_false" v-model="currentPhone.dualsim" :value="false">
                        <label for="dualsim_false">Nie</label>
                    </td>
                </tr>
                <tr>
                    <th>Karta pamięci</th>
                    <td>
                        <select v-model="currentPhone.memoryCardID">
                            <option disabled value="-1">Wybierz typ karty pamięci</option>
                            <option v-for="memoryCard in database.memoryCards" :key="memoryCard.id" :value="memoryCard.id">
                                {{ memoryCard.name }}
                            </option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th>Pamięć wewnętrzna [Mb]</th>
                    <td><input type="number" value="1024" min="0" v-model="currentPhone.memoryMB"></td>
                </tr>
                <tr>
                    <th>Pamięć RAM [Mb]</th>
                    <td><input type="number" value="1024" min="0" v-model="currentPhone.ramMB"></td>
                </tr>
                <tr>
                    <th>System operacyjny</th>
                    <td>
                        <select v-model="currentPhone.operatingSystemID">
                            <option disabled value="-1">Wybierz system operacyjny</option>
                            <option v-for="operatingSystem in database.operatingSystems" :key="operatingSystem.id" :value="operatingSystem.id">
                                {{ operatingSystem.name }}
                            </option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th>Wersja systemu operacyjnego</th>
                    <td><input type="number" value="5" step="0.1" min="0" v-model="currentPhone.operatingSystemVersion" /></td>
                </tr>
                <tr>
                    <th>Procesor</th>
                    <td><input type="text" v-model="currentPhone.chipset"></td>
                </tr>
                <tr>
                    <th>Zegar procesora [GHz]</th>
                    <td><input type="number" value="1.5" step="0.01" min="0" v-model="currentPhone.cpuGHz"></td>
                </tr>
                <tr>
                    <th>Rdzenie</th>
                    <td><input type="number" value="8" min="1" v-model="currentPhone.cores"></td>
                </tr>
                <tr>
                    <th>Bateria [mAh]</th>
                    <td><input type="number" value="3000" min="0" v-model="currentPhone.batterymAH"></td>
                </tr>
                <tr>
                    <th>Matryca aparatu [MP]</th>
                    <td><input type="number" value="13" step="0.5" min="0" v-model="currentPhone.cameraMP"></td>
                </tr>
                <tr>
                    <th>Lampa błyskowa</th>
                    <td>
                        <input type="radio" id="led_true" v-model="currentPhone.cameraLED" :value="true">
                        <label for="led_true">Tak</label>
                        <input type="radio" id="led_false" v-model="currentPhone.cameraLED" :value="false">
                        <label for="led_false">Nie</label>
                    </td>
                </tr>
                <tr>
                    <th>Radio</th>
                    <td>
                        <input type="radio" id="radio_true" v-model="currentPhone.radio" :value="true">
                        <label for="radio_true">Tak</label>
                        <input type="radio" id="radio_false" v-model="currentPhone.radio" :value="false">
                        <label for="radio_false">Nie</label>
                    </td>
                </tr>
                <tr>
                    <th>Transmisja danych</th>
                    <td>
                        <div v-for="communication in database.communications" :key="communication.id" class="block">
                            <input type="checkbox" :id="communication.name" :value="communication.id" v-model="currentPhone.communicationIDs">
                            <label :for="communication.name">{{ communication.name }}</label>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th>Czujniki</th>
                    <td>
                        <div v-for="sensor in database.sensors" :key="sensor.id" class="block">
                            <input type="checkbox" :id="sensor.name" :value="sensor.id" v-model="currentPhone.sensorIDs">
                            <label :for="sensor.name">{{ sensor.name }}</label>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
        <input type="submit" class="button" value="Zapisz">
    </form>
</template>

<script>
    var phone = new Phone();
    module.exports = {
        data() {
            return {
                database: Database.instance,
                currentPhone: phone
            }
        },

        props: {
            editMode: {
                type: Boolean,
                default: false
            }
        },

        methods: {
            add() {
                this.database.addPhone(this.currentPhone);
                this.$router.push('/phones');
            },

            edit() {
                this.database.editPhone(this.currentPhone);
                this.$router.push('/phones');
            },

            range(start, end) {
                let array = [];
                for (let i = start; i <= end; i++)
                    array.push(i);
                return array;
            }
        },

        created() {
            if (this.editMode)
                this.currentPhone = this.database.phones[this.$route.params.id];
        }
    }
</script>
