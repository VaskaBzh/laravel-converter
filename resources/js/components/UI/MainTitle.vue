<template>
    <h1 class="title">
        <slot/>
    </h1>
</template>

<script>
export default {
    name: "main-title",
}
</script>

<style lang="scss" scoped>
    h1.title {
        font-size: 72px;
        line-height: 82px;
        text-align: center;
    }
</style>
