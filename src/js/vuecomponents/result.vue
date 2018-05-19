<template>
    <div>
        <h2 class="title text-center">Denominations result:</h2>
        <p>Amount currency unit needed for {{ cachedResult.money + '' | formatCurrency }} : </p>
        <ul>
            <li v-for="(item,index) in cachedResult.values" :key="index">
                You need {{item}} of {{cachedResult.unit}} {{index}}
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
            },
            newInstance: false
        },
        data() {
            return {
                cachedResult: {}
            }
        },
        activated() {
            // if newInstance's props is true from parent (home), then re-cached result
            if(this.newInstance){
                this.cachedResult = this.result;
            }

            // if newInstance's props is false and not cached
            // then go back, because this (Result) page need called from parent (home)
            if(!this.newInstance && _.size(this.cachedResult.values)===0){
                this.$router.push('/');
            }

            // otherwise, do nothing, kept the state
        }
    }
</script>
