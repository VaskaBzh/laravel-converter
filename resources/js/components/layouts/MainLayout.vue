<template>
    <div class="container">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "main-layout",
    }
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    align-items: center;
    padding: 36px 0;
}
</style>
