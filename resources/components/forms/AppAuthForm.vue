<template>
    <app-form url="/api/hello"
              privacy-check
              :values="values"
              submit-text="Войти"
              :success.sync="success">
        <template v-slot:header>
            <div>Вход</div>
        </template>

        <template v-slot:fields="{ rules }">
            <v-text-field v-model="values.email"
                          :rules="[rules.required, rules.email]"
                          outlined label="E-mail"/>

            <v-text-field v-model="values.password"
                          :rules="[rules.required]"
                          outlined label="Пароль"
                          :type="values.isShowPass ? 'text' : 'password'"
                          :append-icon="values.isShowPass ? 'mdi-eye' : 'mdi-eye-off'"
                          @click:append="values.isShowPass = !values.isShowPass"/>
        </template>

        <template v-slot:footer>
            <section class="list-mb-4">
                <v-divider/>

                <router-link to="/forgot-password" class="text-decoration-none">
                    <v-btn color="primary" text block>
                        Забыли пароль?
                    </v-btn>
                </router-link>

                <v-divider/>

                <router-link to="/registration" class="text-decoration-none">
                    <v-btn color="primary" text block>
                        Зарегистрироваться
                    </v-btn>
                    {{ success.data }}
                </router-link>
            </section>
        </template>
    </app-form>
</template>

<script>
    import AppForm        from '../forms/AppForm';
    import store from 'vuex';

    export default {
        name: 'AppAuthForm',
        components: { AppForm },
        data: () => ( {
            values: {
                email: null,
                password: null,
                isShowPass: false,
            },
            success: {},
        } ),
        watch: {
            success: function ( val ) {

                let {
                    type,
                    message,
                } = val.data;
                let { status } = val;

                this.$store.commit('ui/showDialog', { type, message, status });
                return val;
            },
        },
    };
</script>
