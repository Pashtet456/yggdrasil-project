<template>
    <v-main>
        <v-container>
            <router-view></router-view>
        </v-container>
        <app-dialog></app-dialog>
        <sidebar-bad-component position="left"></sidebar-bad-component>
        <sidebar-bad-component position="right"></sidebar-bad-component>
<!--        <sidebar-items position="left"></sidebar-items>-->
<!--        <sidebar-items position="right"></sidebar-items>-->
    </v-main>
</template>

<script>
    import SidebarItems        from '../../templates/sidebars/SideBarItems';
    import AppDialog           from '../../components/dialogs/AppDialog';
    import SidebarBadComponent from '../../components/SidebarBadComponent';
    export default {
        name: 'yggdrasil-main',
        components: { SidebarBadComponent, AppDialog, SidebarItems },
    };
</script>

<style scoped>

</style>
