<template>
    <div>

        <h2 class="title text-center">Software Engineer Mobile Web Test</h2>
        <p class="text-center subtitle">Denomination Tool</p>
        <form action="" @submit.prevent="process">
            <div class="form-group">
                <label for="currency_input">Input Currency:</label>
                <div class="input-group">
                    <input v-model="currency_input" type="text" id="currency_input"
                           class="form-control text-center" placeholder="Rp 100.000">
                    <router-link to="/example" class="btn material-box" title="View Examples">?</router-link>
                </div>

            </div>
            <button class="btn material-box" :disabled="loading">Submit</button>
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
                currency_input: '',
                suggestion: '',
                alert: {
                    message: '',
                    button_caption: ''
                },
                loading: false
            }
        },
        methods: {
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
                        this.showAlert(valid);
                        break;
                    case 1:
                        let result = this.denominator.get(valid.value);
                        this.$router.push({name: 'result', params: {result: result}});
                        break;
                }
            },
            showAlert(statusObj) {
                this.suggestion = statusObj.suggestion;
                this.alert.message = statusObj.message;
                if (statusObj.code === 2) {
                    this.alert.message += '. Some suggestion:'
                }
                if (statusObj.code === 0) {
                    this.alert.message += '. Click on [?] button to view valid formats'
                }
                this.alert.button_caption = statusObj.suggestion;
                this.$refs.alertBox.show();
            },
            fix() {
                this.currency_input = this.suggestion;
                this.process();
            }
        },
        mounted() {
            this.validator = new CurrencyValidator();
            this.denominator = new CurrencyDenominator();
            tippy('.btn');
        }
    }
</script>