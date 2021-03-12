<template>
    <v-main>
        <v-container>
            <router-view></router-view>
        </v-container>
        <app-dialog></app-dialog>
    </v-main>
</template>

<script>
    import SidebarItems from '../../templates/sidebars/SideBarItems';
    import AppDialog    from '../../components/dialogs/AppDialog';
    export default {
        name: 'lotr-main',
        components: { AppDialog, SidebarItems },
    };
</script>

<style scoped>

</style>
