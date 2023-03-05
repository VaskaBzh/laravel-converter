<template>
    <div class="converter">
        <convert-form :noButton="false" @getData="this.converter"></convert-form>
        <div class="right"></div>
        <convert-form :converted="this.convertedValue" :noButton="true"></convert-form>
    </div>
</template>

<script>
    export default {
        name: "converter-component",
        data() {
            return {
                USD: 0,
                EUR: 0,
                GBP: 0,
                convertedValue: 0,
            };
        },
        mounted() {
            axios.get("/api/get_api")
                .then(res => {
                    Reflect.ownKeys(res.data.Valute).forEach((val) => {
                        console.log(Reflect.get(res.data.Valute, val))
                        if (Reflect.get(res.data.Valute, val).CharCode === "USD") {
                            this.USD = Reflect.get(res.data.Valute, val).Value;
                        } else if (Reflect.get(res.data.Valute, val).CharCode === "EUR") {
                            this.EUR = Reflect.get(res.data.Valute, val).Value;
                        } else if (Reflect.get(res.data.Valute, val).CharCode === "GBP") {
                            this.GBP = Reflect.get(res.data.Valute, val).Value;
                        }
                    })
                })
                .catch(err => {
                    console.log(err.response);
                })
            axios.get("/api/user")
                .catch(err => {
                    console.log(err.response);
                })
        },
        methods: {
            converter(el) {
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
