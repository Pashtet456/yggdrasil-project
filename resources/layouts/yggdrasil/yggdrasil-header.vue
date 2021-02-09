<template>
    <v-app-bar app>
        <v-container class="pa-0 ma-0 d-flex align-center header">
            <!-- Логотип -->
            <div class="header-logo__ygg d-flex align-center">
                <v-img :src="myImage"></v-img>
<!--                <v-img-->
<!--                        alt="Vuetify Logo"-->
<!--                        contain-->
<!--                        :width="this.$vuetify.application.top - 5"-->
<!--                        :src="'../../../resources/assets/img/logo.png'"/>-->
                <router-link to="/">
<!--                    <v-img  -->
<!--                            alt="Vuetify Logo"-->
<!--                            contain-->
<!--                            :src="require('../../assets/img/logo.png')"-->
<!--                    />-->
<!--                            :src="require('../../assets/img/logo.png')"-->
<!--                            :width="this.$vuetify.application.top - 5"/>-->
                </router-link>
                <span>Yggdrasil project</span>
            </div>
            <v-spacer/>
            <!-- Меню -->
            <div class="header-menu">
                <ListItemsMenu :menu="menu"/>
            </div>
            <v-spacer/>
<!--            &lt;!&ndash; Логотип &ndash;&gt;-->
<!--            <div class="header-logo__vk">-->
<!--                <router-link to="/">-->
<!--                    <v-img-->
<!--                            alt="Vuetify Logo"-->
<!--                            contain-->
<!--                            :src="require('../../assets/img/logo.png')"-->
<!--                            :width="this.$vuetify.application.top - 5"/>-->
<!--                </router-link>-->
<!--            </div>-->
<!--            &lt;!&ndash; Логотип &ndash;&gt;-->
<!--            <div class="header-logo__dis">-->
<!--                <router-link to="/">-->
<!--                    <v-img-->
<!--                            alt="Vuetify Logo"-->
<!--                            contain-->
<!--                            :src="require('../../assets/img/logo.png')"-->
<!--                            :width="this.$vuetify.application.top - 5"/>-->
<!--                </router-link>-->
<!--            </div>-->
        </v-container>
    </v-app-bar>
</template>

<script>
    import ListItemsMenu from '../../templates/menus/ListItemsMenu';

    export default {
        name: 'yggdrasil-header',
        components: {
            ListItemsMenu,
        },
        data: () => ( {
            myImage: require('../../assets/img/logo.png'),
            menu: [
                {
                    text: 'Главная',
                    link: '/',
                },
                {
                    text: 'Правила',
                    link: '/rules',
                },
                {
                    text: 'Донат',
                    link: '/donate',
                },
            ],
        } ),
    };

</script>

<style lang="scss" scoped>
    .header {
        max-width: 100%;
        &-logo__ygg {
            width: 118px;
            white-space: nowrap;
        }
    }
</style>
