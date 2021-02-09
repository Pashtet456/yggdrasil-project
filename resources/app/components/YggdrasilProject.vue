<template>
    <v-app>
        <yggdrasil-header></yggdrasil-header>
        <yggdrasil-main></yggdrasil-main>
        <yggdrasil-footer></yggdrasil-footer>
        <alert></alert>
    </v-app>
</template>

<script>
    import YggdrasilHeader from '../../layouts/yggdrasil/yggdrasil-header';
    import YggdrasilMain   from '../../layouts/yggdrasil/yggdrasil-main';
    import YggdrasilFooter from '../../layouts/yggdrasil/yggdrasil-footer';
    import Alert           from '../../templates/alerts/Alert';
    export default {
        name: 'YggdrasilProject',
        components: { Alert, YggdrasilFooter, YggdrasilMain, YggdrasilHeader },
    };
</script>

<style scoped>

</style>
