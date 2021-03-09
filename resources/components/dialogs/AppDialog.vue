<template>
    <div>
        ssss
        {{ appDialogType?dialog=true:appDialogType }}
        {{ appDialogType }}
        {{ dialog }}
        <v-dialog v-model="dialog" persistent>
            <v-btn
                    color="primary"
                    text
                    @click="dialog = false"
            >
                I accept
            </v-btn>
        </v-dialog>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        name: 'AppDialog',
        // data: function() {
        //     return {
        //         dialog: false,
        //     }
        // },
        computed: {
            ...mapGetters('ui', ['appDialogType']),
            dialog: function () {
                if (this.appDialogType )
            },
        },
    };
</script>

<style scoped>

</style>
