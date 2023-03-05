<template>
</template>

<script>
export default {
    name: "logout-form",
    mounted() {
        axios.post('/logout')
            .then(res => {
                localStorage.removeItem('x_xsrf_token');
                this.$router.push({name: 'login'})
            })
    }
}
</script>
