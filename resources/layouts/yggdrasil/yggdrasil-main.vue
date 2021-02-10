<template>
    <v-main>
        <v-container>
            <router-view></router-view>
        </v-container>
        <alert></alert>
        <sidebar-items position="left"></sidebar-items>
        <sidebar-items position="right"></sidebar-items>
    </v-main>
</template>

<script>
    import Alert        from '../../templates/alerts/Alert';
    import SidebarItems from '../../templates/sidebars/SideBarItems';
    export default {
        name: 'yggdrasil-main',
        components: { SidebarItems, Alert },
    };
</script>

<style scoped>

</style>
