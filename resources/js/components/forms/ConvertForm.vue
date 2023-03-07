<template>
    <form class="form">
        <form-row
            @getValue="this.getCoin"
            label="Выберите вашу валюту"
            id="coin"
            :selectObject="this.select"
            type="select"
            placeholder="Валюта"></form-row>
        <form-row
            v-if="this.convertedValue > -1"
            :value="this.convertedValue"
            :key="this.convertedValue"
            :disabled="true"
            id="value"
            type="textarea"
            placeholder="Количество валюты"></form-row>
        <form-row
            v-else
            :disabled="false"
            @getValue="this.getValue"
            id="value"
            type="textarea"
            placeholder="Количество валюты"></form-row>
        <main-button
            v-if="this.noButton === false"
            type="submit"
            @submit.prevent="this.getData">Конвертировать</main-button>
    </form>
</template>

<script>

export default {
    props: {
        noButton: Boolean,
        converted: Number,
        disabled: {
            type: Boolean,
            default: false,
        },
        select: {
            type: Object,
            default: {},
        }
    },
    name: "convert-form",
    data() {
        return {
            coin: "",
            value: "",
            selectObj: this.select,
        };
    },
    computed: {
        convertedValue() {
            let value;
            this.selectObj.map(sel => {
                if (sel.option === this.coin) {
                    let con = this.converted;
                    if (this.converted < 0) {
                        value = Math.abs(con) * sel.value;
                    } else {
                        value = con / sel.value;
                    }
                }
            })
            return value;
        }
    },
    methods: {
        getCoin(coin) {
            this.coin = coin;
        },
        getValue(value) {
            this.value = value;
            this.getData();
        },
        getData() {
            let data = {
                coin: this.coin,
                value: this.value,
            }
            this.$emit("getData", data);
        },
    },
}
</script>
