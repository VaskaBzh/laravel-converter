<template>
    <div class="converter">
        <convert-form :select="this.select" :noButton="true" @getData="this.converter"></convert-form>
        <div class="right"></div>
        <convert-form :select="this.select" :converted="this.convertedValue" :disabled="true" :noButton="true"></convert-form>
    </div>
</template>

<script>
    export default {
        name: "converter-component",
        data() {
            return {
                convertedValue: 0,
                select: [
                    { value: 0, option: "USD", },
                    { value: 1, option: "RUR", },
                    { value: 0, option: "EUR", },
                    { value: 0, option: "GBP", },
                ],
            };
        },
        mounted() {
            axios.get("/api/get_api")
                .then(res => {
                    Reflect.ownKeys(res.data.Valute).forEach((val) => {
                        this.select.map(el => {
                            if (el.option === Reflect.get(res.data.Valute, val).CharCode) {
                                el.value = Reflect.get(res.data.Valute, val).Value;
                            }
                        })
                    })
                })
                .catch(err => {
                    console.log(err.response);
                })
        },
        methods: {
            converter(el) {
                let value;
                const tester = new RegExp(/\D/g);
                if (!tester.test(el.value)) {
                    this.select.map(sel => {
                        if (sel.option === el.coin) {
                            if (sel.value !== 1) {
                                value = el.value * sel.value;
                            } else {
                                value = -el.value;
                            }
                        }
                    })
                    this.convertedValue = value;
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
.converter {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
    .right {
        @media (min-width: 1280px) {
            width: 100px;
            height: 10px;
            background-color: #000;
            margin: auto 0;
            position: relative;
            border-radius: 0 5px 5px 0;
            &:before {
                content: '';
                position: absolute;
                right: -1px;
                top: -10px;
                width: 30px;
                height: 10px;
                background-color: #000;
                transform: rotate(45deg);
                border-radius: 0 5px 5px 0;
            }
            &:after {
                content: '';
                position: absolute;
                right: -1px;
                bottom: -10px;
                width: 30px;
                height: 10px;
                background-color: #000;
                transform: rotate(-45deg);
                border-radius: 0 5px 5px 0;
            }
        }
    }
}
</style>
