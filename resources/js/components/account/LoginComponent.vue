<template>
    <div class="login">
        <login-form @getData="this.login"></login-form>
    </div>
</template>

<script>
    export default {
        name: "login-component",
        methods: {
            login(data) {
                axios.get("/sanctum/csrf-cookie")
                    .then(response => {
                        axios.post("/login", data)
                            .then(resp => {
                                localStorage.setItem('x_xsrf_token', resp.config.headers['X-XSRF-TOKEN']);
                                this.$router.push({name: 'converter'})
                            })
                            .catch(err => {
                                console.log(err)
                            })
                    })
            },
        },
    }
</script>

<style lang="scss" scoped>
.login {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 32px 0;
    width: 100%;
}
</style>
