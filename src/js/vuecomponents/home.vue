<template>
    <div>
        <h2 class="title text-center">Software Engineer Mobile Web Test</h2>
        <p class="text-center subtitle">Denomination Tool</p>
        <form action="" @submit.prevent="process">
            <div class="form-group">
                <label for="currency_input">Input Currency:</label>
                <div class="input-group">
                    <input v-model="currency_input" type="text" id="currency_input"
                           class="form-control text-center" placeholder="Ex: Rp 100.000" :disabled="loading">
                    <router-link to="/example" class="btn material-box" title="View Examples">?</router-link>
                </div>

            </div>
            <button class="btn material-box" :disabled="loading">Denominate it!</button>
            <loading-circle v-if="loading"></loading-circle>
            <alert-box @fix_button_click="fix" ref="alertBox" :message="alert.message"
                       :button_caption="alert.button_caption"></alert-box>
        </form>
    </div>
</template>

<script>
    import CurrencyValidator from '../modules/CurrencyValidator';
    import CurrencyDenominator from '../modules/CurrencyDenominator';

    export default {
        data() {
            return {
                //bind to input
                currency_input: '',
                //set current suggestion ready to be choosen
                suggestion: '',
                //initialize alert options
                alert: {
                    message: '',
                    button_caption: ''
                },
                //show loading bar or not
                loading: false
            }
        },
        methods: {
            //on click 'Denominate it'
            process() {
                this.$refs.alertBox.dismiss();
                let self = this;
                this.loading = true;
                // for demo purposes, use loading
                setTimeout(function () {
                    self.denominateIt();
                    self.loading = false;
                }, 1000);
            },
            denominateIt() {
                let valid = this.validator.validate(this.currency_input);

                switch (valid.code) {
                    case -1:
                    case 0:
                    case 2:
                        //any other code than 1, show alert
                        this.showAlert(valid);
                        break;
                    case 1:
                        let result = this.denominator.get(valid.value);
                        this.$router.push({name: 'result', params: {result: result, newInstance: true}});
                        break;
                }
            },
            showAlert(statusObj) {
                //set suggestion and format it with Currency.js
                this.suggestion = this.$options.filters.formatCurrency(statusObj.suggestion);
                //set message
                this.alert.message = statusObj.message;
                if (statusObj.code === 2) { // if status is not match but have suggestion
                    this.alert.message += '. Suggestion:'
                }
                if (statusObj.code === 0) { // if status missed match
                    this.alert.message += '. Click on [?] button to view valid formats'
                }
                // set fix suggestion text
                this.alert.button_caption = this.suggestion;
                //show alert
                this.$refs.alertBox.show();
            },
            fix() {
                // this method called after user choose suggestion from alertbox
                this.currency_input = this.suggestion;
                this.process();
            }
        },
        mounted() {
            //init Currency Validator and Currency Denominator
            this.validator = new CurrencyValidator(window.CurrencyUnit);
            this.denominator = new CurrencyDenominator();
            tippy('.btn');
        }
    }
</script>