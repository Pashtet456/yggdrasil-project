<template>
    <v-main>
        <v-container>
            <router-view></router-view>
        </v-container>
        <app-dialog></app-dialog>
        <sidebar-items position="left"></sidebar-items>
        <sidebar-items position="right"></sidebar-items>
    </v-main>
</template>

<script>
    import SidebarItems from '../../templates/sidebars/SideBarItems';
    import AppDialog    from '../../components/dialogs/AppDialog';
    export default {
        name: 'yggdrasil-main',
        components: { AppDialog, SidebarItems },
    };
</script>

<style scoped>

</style>
