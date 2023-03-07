<template>
    <nav class="nav">
        <router-link v-if="this.token" class="link" to="converterV">Конвертер валют</router-link>
        <router-link v-if="!this.token" class="link" to="loginV">Вход</router-link>
        <router-link v-if="!this.token" class="link" to="registrationV">Регистрация</router-link>
        <router-link v-if="this.token" class="link" to="logoutV">Выход</router-link>
    </nav>
</template>

<script>
export default {
    name: "header-links",
    data() {
        return {
            token: null,
        };
    },
    watch: {
        '$route.path'() {
            this.getToken();
        }
    },
    methods: {
        getToken() {
            this.token = localStorage.getItem('x_xsrf_token');
        },
    },
    mounted() {
        this.getToken();
    },
    updated() {
        this.getToken();
    },
}
</script>

<style lang="scss">

</style>
