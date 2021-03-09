export default {
    namespaced: true,
    state: {
        dialog: {
            isActive: false,
            type: undefined,
            code: undefined,
            message: undefined,
        },
    },
    getters: {
        appDialogType: state => state.dialog.type,
        appDialogCode: state => state.dialog.code,
        appDialogMessage: state => state.dialog.message,
        appDialogIsActive: state => state.dialog.isActive,
    },
    mutations: {
        showDialog( state, payload ) {
            state.dialog.isActive = true;
            state.dialog.type = payload.type;
            state.dialog.code = payload.status;
            state.dialog.message = payload.message;
        },
        hideDialog( state ) {
            state.dialog.isActive = false;
            state.dialog.type = null;
            state.dialog.code = null;
            state.dialog.message = null;
        },
    },
    actions: {
    },
};
