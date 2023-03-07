<template>
    <div class="select" :class="{ open: this.is_open }">
        <div class="select_title" @click="this.selectOpen">{{ this.selectOption }}</div>
        <div class="select__options">
            <div class="select_option" @click="this.selectOptions(value.option)" :data-val="value.value" :key="i" v-for="(value, i) in this.values">
                {{ value.option }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        placeholder: String,
        values: Object,
    },
    name: "main-select",
    data() {
        return {
            is_open: false,
            selectOption: "",
        };
    },
    methods: {
        selectHide() {
            if (this.is_open === true) {
                this.is_open = false;
            }
        },
        selectOpen() {
            this.is_open === false ? this.is_open = true : this.is_open = false
        },
        selectOptions(optionTitle) {
            this.selectOption = optionTitle;
            this.$emit("getValue", optionTitle);
        },
    },
    mounted() {
        document.querySelector('body').addEventListener("click", this.selectHide.bind(this), true)
        this.selectOption = this.values[0].option;
        this.$emit("getValue", this.selectOption);
    },
}
</script>

<style lang="scss" scoped>
.select {
    max-width: calc(50% - 5px);
    width: 100%;
    min-height: 40px;
    border-radius: 5px;
    border: 1px solid #4b5563;
    background: #fff;
    position: relative;
    margin-bottom: 16px;
    cursor: pointer;
    transition: all 0.3s ease 0s;

    &.open {
        border-radius: 5px 5px 0 0;
        .select {
            &__options {
                visibility: visible;
                opacity: 1;
                transform: rotateX(0deg);
            }
        }
    }
    &_title {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 40px;
        color: #000;
        display: inline-flex;
        padding: 0 16px;
        justify-content: center;
        align-items: center;
    }
    &__options {
        width: 100%;
        position: absolute;
        top: 38px;
        left: 0;
        display: flex;
        flex-direction: column;
        visibility: hidden;
        opacity: 0;
        transition: all 0.3s ease 0s;
        transform-origin: top center;
        transform: rotateX(-90deg);
        background: #fff;
        border: 1px solid #4b5563;
        border-radius: 0 0 5px 5px;
    }
    &_option {
        width: 100%;
        height: 40px;
        color: #000;
        display: inline-flex;
        padding: 0 16px;
        justify-content: center;
        border-bottom: 1px solid #4b5563;
        align-items: center;
    }
}
</style>
