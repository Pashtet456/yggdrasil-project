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
    };
</script>

<style scoped>

</style>
