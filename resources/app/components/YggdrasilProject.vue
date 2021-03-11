<template>
    <v-app>
        <yggdrasil-header></yggdrasil-header>
        <yggdrasil-main></yggdrasil-main>
        <yggdrasil-footer></yggdrasil-footer>
    </v-app>
</template>

<script>
    import YggdrasilHeader from '../../layouts/yggdrasil/yggdrasil-header';
    import YggdrasilMain   from '../../layouts/yggdrasil/yggdrasil-main';
    import YggdrasilFooter from '../../layouts/yggdrasil/yggdrasil-footer';

    export default {
        name: 'YggdrasilProject',
        components: { YggdrasilFooter, YggdrasilMain, YggdrasilHeader },
        mounted() {
            console.log(this.$vuetify);
        }
    };
</script>

<style lang="scss">
    @font-face {
        font-family: 'Montserrat';
        src: local('Montserrat Regular'), local('Montserrat-Regular'), url('../../assets/fonts/Montserrat/Montserrat-Regular.woff2') format('woff2');
        font-style: normal;
        font-weight: normal;
        font-display: swap;
    }
    .theme--dark {

        font-family: Montserrat,sans-serif;

        &.v-list {
            background: transparent !important;
        }
        &.v-application {
            background-color: #3a3837 !important;

            & a {
                text-decoration: none;
            }
        }
        &.v-toolbar.v-sheet {
            background-color: #3a3837 !important;
        }
    }

    .side-bar-item {
        width: 64px;
        height: 64px;
        background-image: url(../../assets/img/logo.png);
        background-repeat: no-repeat;
        background-position: center;
        background-size: 64px 64px;

        &:first-child {
            background-image: url(../../assets/img/dis.png);
        }
    }

</style>
