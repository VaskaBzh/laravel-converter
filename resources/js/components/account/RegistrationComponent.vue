<template>
    <div class="reg">
        <registration-form @getData="this.reg"></registration-form>
    </div>
</template>

<script>
    export default {
        name: "registration-component",
        methods: {
            reg(data) {
                console.log(data)
                axios.get("/sanctum/csrf-cookie")
                    .then(response => {
                        axios.post("/register", data)
                            .then(resp => {
                                localStorage.setItem('x_xsrf_toker', resp.config.headers['X-XSRF-TOKEN']);
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
.reg {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 32px 0;
    width: 100%;
}
</style>
