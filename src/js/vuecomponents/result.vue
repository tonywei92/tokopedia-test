<template>
    <div>
        <h2 class="title text-center">Denominations result:</h2>
        <p>Amount currency unit needed for {{ result.money | formatCurrency }} : </p>
        <ul>
            <li v-for="(item,index) in result.values" :key="index">
                You need {{item}} of {{result.unit}} {{index}}
            </li>
        </ul>

        Money left: {{ result.moneyleft + '' | formatCurrency }}
    </div>
</template>
<script>
    // used lodash to get object size
    import _ from 'lodash';

    export default {
        props: {
            // initialize Result object, needed to avoid error
            result: {
                default:
                    function () {
                        return {
                            values: {}
                        }
                    }
            }
        },
        data() {
            return {}
        },
        computed: {},
        mounted() {
            // if no result passed, eg. if user open /result without input first,
            // then redirect back to home
            if (!_.size(this.result.values)) {
                this.$router.push('/');
            }
        }
    }
</script>
