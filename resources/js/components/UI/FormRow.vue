<template>
    <div class="form_row">
        <label v-if="this.label !== ''" :for="this.id" class="label">{{ this.label }}</label>
        <main-input :value="this.value" :disabled="this.disabled" v-if="this.selectObject.length === 0" @getValue="this.getValue" :id="this.id" :type="this.type" :placeholder="this.placeholder"></main-input>
        <main-select v-else @getValue="this.getValue" :values="this.selectObject" :id="this.id" :type="this.type" :placeholder="this.placeholder"></main-select>
    </div>
</template>

<script>
export default {
    props: {
        type: String,
        placeholder: String,
        disabled: Boolean,
        label: {
            type: String,
            default: "",
        },
        id: String,
        selectObject: {
            type: Array,
            default: [],
        },
        value: String,
    },
    name: "form-row",
    methods: {
        getValue(value) {
            this.$emit('getValue', value);
        },
    }
}
</script>

<style lang="scss" scoped>
.form_row {
    display: flex;
    flex-direction: column;
    gap: 4px;
}
</style>
