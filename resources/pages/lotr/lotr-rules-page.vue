<template >
    <app-rules class="rules"></app-rules>
</template>

<script>
    import AppRules from '../../components/rules/AppRules';
    export default {
        name: 'LotrRules',
        components: { AppRules },
    };
</script>

<style scoped>
.rules {
    width: 600px;
    margin: auto;
}
</style>
