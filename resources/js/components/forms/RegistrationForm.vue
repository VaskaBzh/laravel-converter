<template>
    <form class="form">
        <form-row @getValue="this.getName" label="Введите ваше имя" id="email" type="name" placeholder="Имя"></form-row>
        <form-row @getValue="this.getEmail" label="Введите вашу электронную почту" id="email" type="email" placeholder="Электронная почта"></form-row>
        <form-row @getValue="this.getPassword" label="Введите ваш пароль" id="password" type="password" placeholder="Пароль"></form-row>
        <form-row @getValue="this.getPassword" label="Подтвердите ваш пароль" id="password_confirmation" type="password" placeholder="Подтверждение пароля"></form-row>
        <main-button :value="'Зарегистрироваться'" :type="'submit'" @click.prevent="this.getData">Зарегистрироваться</main-button>
    </form>
</template>

<script>
export default {
    name: "registration-form",
    data() {
        return {
            name: "",
            email: "",
            password: "",
            password_confirmation: "",
        };
    },
    methods: {
        getEmail(email) {
            this.email = email;
        },
        getName(name) {
            this.name = name;
        },
        getPassword(password) {
            this.password = password;
            this.password_confirmation = password;
        },
        getData() {
            let data = {
                name: this.name,
                email: this.email,
                password: this.password,
                password_confirmation: this.password_confirmation,
            }
            this.$emit("getData", data);
        },
    },
}
</script>
