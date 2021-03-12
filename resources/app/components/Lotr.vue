<template>
    <v-app>
        <lotr-header></lotr-header>
        <lotr-main></lotr-main>
    </v-app>
</template>

<script>
    import LotrMain   from '../../layouts/lotr/lotr-main';
    import LotrHeader from '../../layouts/lotr/lotr-header';

    export default {
        name: 'Lotr',
        components: { LotrHeader, LotrMain },
    };
</script>

<style scoped>

</style>
