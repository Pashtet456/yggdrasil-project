<template>
    <v-app-bar app>
        <v-container class="pa-0 ma-0 d-flex align-center header" fluid>

            <!-- Логотип -->
            <router-link to="/">
                <div class="image-block image-block--logo"></div>
            </router-link>

            Yggdrasil project

            <v-spacer/>

            <!-- Меню -->
            <v-list class="d-flex pa-0 header__nav-menu">

                <v-list-item v-for="item in menu" :key="item.link">
                    <router-link :to="item.link">
                        {{ item.text }}
                    </router-link>
                </v-list-item>

                <v-list-item>
                    <!--Авторизованный пользователь-->
                    <template v-if="false">
                        qew
                    </template>

                    <!--Не авторизованный пользователь-->
                    <template v-else>
                        <router-link to="/authorization">
                            Войти
                        </router-link>
                    </template>
                </v-list-item>
            </v-list>

            <v-spacer/>
            <router-link to="/">
                <div class="image-block image-block--vk"></div>
            </router-link>
            <router-link to="/">
                <div class="image-block image-block--dis"></div>
            </router-link>
        </v-container>
    </v-app-bar>
</template>

<script>

    export default {
        name: 'yggdrasil-header',
        data: () => ( {
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
    .image-block {
        height: 64px;
        width: 64px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: 64px 64px;

        &--vk {
            background-image: url('../../assets/img/vk.png');
        }

        &--logo {
            background-image: url('../../assets/img/logo.png');
        }

        &--dis {
            background-image: url('../../assets/img/dis.png');
        }
    }
</style>
