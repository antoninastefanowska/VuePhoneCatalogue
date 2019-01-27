<template>
    <div class="container-tabledetails add">
        <table>
            <tr>
                <th>Nazwa</th>
                <td>{{currentPhone.name}}</td>
            </tr>
            <tr>
                <th>Model</th>
                <td>{{currentPhone.model}}</td>
            </tr>
            <tr>
                <th>Marka</th>
                <td>{{currentPhone.brand.name}}</td>
            </tr>
            <tr>
                <th>Data wypuszczenia</th>
                <td>{{currentPhone.releaseMonth}}/{{currentPhone.releaseYear}}</td>
            </tr>
            <tr>
                <th>Typ</th>
                <td>{{currentPhone.type.name}}</td>
            </tr>
            <tr>
                <th>Klawiatura fizyczna</th>
                <td>{{currentPhone.keyboard}}</td>
            </tr>
            <tr>
                <th>Przekątna ekranu</th>
                <td>{{currentPhone.sizeInch}}</td>
            </tr>
            <tr>
                <th>Ekran dotykowy</th>
                <td>{{currentPhone.touchscreen}}</td>
            </tr>
            <tr>
                <th>Karta sim</th>
                <td>{{currentPhone.sim.name}}</td>
            </tr>
            <tr>
                <th>DualSim</th>
                <td>{{currentPhone.dualsim}}</td>
            </tr>
            <tr>
                <th>Karta pamięci</th>
                <td>{{currentPhone.memoryCard.name}}</td>
            </tr>
            <tr>
                <th>Pamięć wewnętrzna [Gb]</th>
                <td>{{currentPhone.memoryMB / 1024}}</td>
            </tr>
            <tr>
                <th>Pamięć RAM [Gb]</th>
                <td>{{currentPhone.ramMB / 1024}}</td>
            </tr>
            <tr>
                <th>System operacyjny</th>
                <td>{{currentPhone.operatingSystem.name}}</td>
            </tr>
            <tr>
                <th>Wersja systemu operacyjnego</th>
                <td>{{currentPhone.operatingSystemVersion}}</td>
            </tr>
            <tr>
                <th>Procesor</th>
                <td>{{currentPhone.chipset}}</td>
            </tr>
            <tr>
                <th>Zegar procesora [GHz]</th>
                <td>{{currentPhone.cpuGHz}}</td>
            </tr>
            <tr>
                <th>Rdzenie</th>
                <td>{{currentPhone.cores}}</td>
            </tr>
            <tr>
                <th>Bateria [mAh]</th>
                <td>{{currentPhone.batterymAH}}</td>
            </tr>
            <tr>
                <th>Matryca aparatu [MP]</th>
                <td>{{currentPhone.cameraMP}}</td>
            </tr>
            <tr>
                <th>Lampa błyskowa</th>
                <td>{{currentPhone.cameraLED}}</td>
            </tr>
            <tr>
                <th>Radio</th>
                <td>{{currentPhone.radio}}</td>
            </tr>
            <tr>
                <th>Transmisja danych</th>
                <td>
                    <div v-for="communication in currentPhone.communications" :key="communication.id" class="block">
                        {{ communication.name }},
                    </div>
                </td>
            </tr>
            <tr>
                <th>Czujniki</th>
                <td>
                    <div v-for="sensor in currentPhone.sensors" :key="sensor.id" class="block">
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
            currentPhone() {
                if (this.$route.params.id < this.phones.length)
                    return this.phones[this.$route.params.id];
            }
        }
    }
</script>