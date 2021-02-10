<template>
    <router-link :to="link">
        <v-img
               height="100"
               width="100"/>
        <div v-bind:style="`background-image: url(${publicPath})`">

        </div>
        <div class="img">

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

<style scoped>
/*.img {*/
/*    background-image: url(../../assets/img/vk.png);*/
/*    background-repeat: no-repeat;*/
/*    background-position: center;*/
/*    background-size: 64px 64px;*/
/*}*/
</style>
