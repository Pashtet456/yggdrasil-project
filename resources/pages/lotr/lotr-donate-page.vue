<template class="donate">
    <div class="cards text-center ma-auto">
        <div class="borders-cards">
            <v-card class="mb-8">
                Легендарные мечи
            </v-card>
            <div class="d-flex flex-wrap cards-inner">

                <v-card class="card-img align-text-bottom ma-3">
                    Меч что-то там
                </v-card>
                <v-card class="card-img align-text-bottom ma-3">
                    Меч что-то там
                </v-card>
                <v-card class="card-img align-text-bottom ma-3">
                    Меч что-то там
                </v-card>
                <v-card class="card-img align-text-bottom ma-3">
                    Меч что-то там
                </v-card>
                <v-card class="card-img align-text-bottom ma-3">
                    Меч что-то там
                </v-card>
                <v-card class="card-img align-text-bottom ma-3">
                    Меч что-то там
                </v-card>
                <v-card class="card-img align-text-bottom ma-3">
                    Меч что-то там
                </v-card>
                <v-card class="card-img align-text-bottom ma-3">
                    Меч что-то там
                </v-card>
                <v-card class="card-img align-text-bottom ma-3">
                    Меч что-то там
                </v-card>
                <v-card class="card-img align-text-bottom ma-3">
                    Меч что-то там
                </v-card>
            </div>
        </div>

        <div class="borders-cards">
            <v-card class="mb-8">
                Не легендарные мечи
            </v-card>
            <div class="d-flex flex-wrap cards-inner">

                <v-card class="card-img align-text-bottom ma-3">
                    палка что-то там
                </v-card>
                <v-card class="card-img align-text-bottom ma-3">
                    палка что-то там
                </v-card>
                <v-card class="card-img align-text-bottom ma-3">
                    палка что-то там
                </v-card>
                <v-card class="card-img align-text-bottom ma-3">
                    палка что-то там
                </v-card>
                <v-card class="card-img align-text-bottom ma-3">
                    палка что-то там
                </v-card>
                <v-card class="card-img align-text-bottom ma-3">
                    палка что-то там
                </v-card>
            </div>
        </div>

        <div class="d-flex flex-column card-detail pa-4">
            <v-card width="260px" height="200px" class="card-img--c ma-2"/>
            <div class="text-center">
                урон: 10<br>
                qweqwe: 20<br>
                sss: 102<br>
            </div>
            <v-btn class="ma-5"> Купить</v-btn>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'LotrDonate',
    };
</script>

<style scoped>
    .cards {
        width: 1000px;
    }
    .card-img {
        background-color: #1b4b72;
        width: 200px;
        height: 200px;
        background-image: url("../../assets/img/vk.png");
        background-size: 100%;
    }
    .cards-inner{
        justify-content: center;
    }
    .borders-cards {
        border: 2px solid black;
        padding: 0;
        margin-bottom: 10px;
    }
    .card-img--c {
        background-color: #1b4b72;
        background-image: url("../../assets/img/vk.png");
        background-size: contain;
        background-position: center;
    }
    .card-detail {
        align-items: center;
        width: 350px;
        text-align: center;
        border: 2px solid black;
        background-color: #1a202c;

    }
</style>
