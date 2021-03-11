<template>
    <div>
        <v-dialog v-model="appDialogIsActive"
                  persistent
                  width="400">
            <v-card>
                {{ appDialogMessage }}
            </v-card>
            <v-btn color="primary"
                   text
                   @click="hideDialog">
                I accept
            </v-btn>
        </v-dialog>
    </div>
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex';
    export default {
        name: 'AppDialog',
        computed: {
            ...mapGetters('ui', ['appDialogIsActive', 'appDialogMessage']),
        },
        methods: {
            ...mapMutations('ui',['hideDialog']),
        }
    };
</script>

<style scoped>

</style>
