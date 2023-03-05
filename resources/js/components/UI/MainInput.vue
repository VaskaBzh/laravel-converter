<template>
    <textarea v-if="this.disabled && this.type === 'textarea'" disabled class="input textarea" :type="this.type" :placeholder="this.placeholder" v-model="this.value" @change="this.getValue"></textarea>
    <textarea v-else-if="this.type === 'textarea'" class="input textarea" v-if="this.type === 'textarea'" :type="this.type" :placeholder="this.placeholder" v-model="this.value" @change="this.getValue"></textarea>
    <input class="input" v-else :type="this.type" :placeholder="this.placeholder" v-model="this.value" @change="this.getValue">
</template>

<script>
export default {
    props: {
        disabled: Boolean,
        type: String,
        placeholder: String,
        id: String,
    },
    data() {
        return {
            value: "",
        };
    },
    mounted() {;
    },
    name: "main-input",
    watch: {
        value(newValue, oldValue) {
            this.$emit('getValue', newValue);
        }
    },
    methods: {
    }
}
</script>

<style lang="scss" scoped>
.input {
    display: inline-flex;
    padding: 8px 16px;
    width: 100%;
    min-height: 40px;
    border-radius: 5px;
    border: 1px solid #4b5563;
    background: #fff;
    color: #000;
    font-size: 16px;
    &.textarea {
        min-height: 160px;
    }
}
</style>
