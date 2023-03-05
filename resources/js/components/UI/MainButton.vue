<template>
    <button class="button" @click="this.prevent" v-if="this.type !== 'submit'">
        <slot/>
    </button>
    <input type="submit" :value="this.value" class="button" @click="this.prevent" v-else />
</template>

<script>
export default {
    props: {
        type: String,
        value: {
            type: String,
            default: "",
        }
    },
    name: "main-button",
    methods: {
        prevent(e) {
            e.preventDefault();
        }
    }
}
</script>

<style lang="scss" scoped>
.button {
    max-width: 260px;
    width: 100%;
    display: inline-flex;
    position: relative;
    align-items: center;
    justify-content: center;
    min-height: 40px;
    border-radius: 5px;
    border: none;
    outline: none;
    background-color: #4b5563;
    color: #fff;
}
</style>
