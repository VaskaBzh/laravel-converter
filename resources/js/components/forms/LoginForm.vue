<template>
    <form class="form">
        <form-row @getValue="this.getEmail" label="Введите вашу электронную почту" id="email" type="email" placeholder="Электронная почта"></form-row>
        <form-row @getValue="this.getPassword" label="Введите ваш пароль" id="password" type="password" placeholder="Пароль"></form-row>
        <main-button type="submit" @mousedown.prevent="this.getData">Войти</main-button>
    </form>
</template>

<script>
export default {
    name: "login-form",
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        getEmail(email) {
            this.email = email;
        },
        getPassword(password) {
            this.password = password;
        },
        getData(e) {
            let data = {
                email: this.email,
                password: this.password,
            }
            this.$emit("getData", data);
        },
    },
}
</script>

<style lang="scss">
</style>
