<template>
    <router-link :to="link">
        <div class="sidebar-image">

        </div>
    </router-link>
</template>

<script>
    export default {
        name: 'AppSideBarItem',
        data: function() {
            return {
                publicPath: '/../../assets/img/dis.png'
            }
        },
        props: {
            link: {
                type: String,
                default: '/',
            },
            source: {
                type: String,
                default: 'logo.png',
            },
        },
    };
</script>

<style lang="scss" scoped>

</style>
