<template>
    <div class="header">
        <div class="container">
            <div class="header__wrapper">
                <router-link class="logo" to="/">Yoor Convert</router-link>
                <header-links></header-links>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "header-component",
}
</script>

<style lang="scss" scoped>
.header {
    background-color: #fff;
    border-bottom: 1px solid rgba(#4b5563, 0.5);
    &__wrapper {
        display: flex;
        justify-content: space-between;
        gap: 16px;
        align-items: center;
        padding: 16px 0;
        @media (max-width: 767.98px) {
            padding: 0;
        }
    }
}
</style>
