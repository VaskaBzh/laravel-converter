<template>
    <form class="form">
        <form-row @getValue="this.getCoin" label="Выберите вашу валюту" id="coin" :selectObject="this.select" type="select" placeholder="Валюта"></form-row>
        <form-row v-if="this.converted" @getValue="this.getValue" :disabled="true" id="value" type="textarea" placeholder="Количество валюты"></form-row>
        <form-row v-else @getValue="this.getValue" id="value" type="textarea" placeholder="Количество валюты"></form-row>
        <main-button v-if="this.noButton === false" type="submit" @submit.prevent="this.getData">Конвертировать</main-button>
    </form>
</template>

<script>

export default {
    props: {
        noButton: Boolean,
        converted: Number,
    },
    name: "convert-form",
    data() {
        return {
            select: [
                { value: "usd", option: "USD" },
                { value: "rur", option: "RUR" },
                { value: "eur", option: "EUR" },
                { value: "gbp", option: "GBP" },
            ],
            coin: "",
            value: "",
        };
    },
    methods: {
        getCoin(coin) {
            this.coin = coin;
        },
        getValue(value) {
            this.value = value;
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
