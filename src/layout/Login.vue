<template>
    <div class="m-grid__item m-grid__item--fluid m-grid m-grid--hor m-login m-login--signin m-login--2 m-login-2--skin-2" id="m_login">
        <div class="m-grid__item m-grid__item--fluid m-login__wrapper">
            <div class="m-login__container">
                <div class="m-login__logo">
                    <img src="/img/logo.png" height="150px" width="auto">
                </div>
                <div class="m-login__signin">
                    <form action="#" @submit.prevent="submit" class="m-login__form m-form">
                        <div class="form-group m-form__group">

                            <input type="text" v-model="form.username" required autocomplete="off" autofocus  placeholder="nombre_de_usuario"  class="form-control m-input">

                        </div>

                        <div class="form-group m-form__group">

                            <input type="password" v-model="form.password" required autocomplete="current-password" placeholder="contraseña" class="form-control m-input m-login__form-input--last" >

                        </div>

                        <div class="m-login__form-action">
                            <button
                                :disabled="submitting"
                                type="submit"
                                id="m_login_signin_submit"
                                class="btn btn-secondary btn-focus m-btn m-btn--pill m-btn--custom m-btn--air m-login__btn m-login__btn--primary text-dark"
                            >Acceder</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    export default {
        name: "Login",
        data() {
            return{
                submitting: false,
                form: {
                    username: '',
                    password: '',
                    remember: false
                }
            }
        },
        methods: {
            ...mapActions({
                signIn: 'auth/signIn'
            }),
            async submit () {
                this.submitting = true;
                try {
                    await this.signIn(this.form);
                    this.redirectIntended();
                } catch (error) {
                    console.log(error);
                    this.submitting = false;
                }
            },
            redirectIntended() {
                let route = { name: 'home' };
                if (this.$route.params) {
                    let nextUrl = this.$route.params.nextUrl;
                    if (nextUrl)
                        route = { path: nextUrl };
                }
                this.$router.replace(route);
            }
        },
    }
</script>

<style scoped>

</style>
