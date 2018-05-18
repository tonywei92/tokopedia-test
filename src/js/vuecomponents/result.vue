<template>
    <div>
        <h2 class="title text-center">Denominations result:</h2>
        <p>Amount money unit needed for {{result.unit}}&nbsp;{{result.money}} : </p>
        <ul>
            <li v-for="(item,index) in result.values" :key="index">
                You need {{item}} of {{result.unit}} {{index}}
            </li>
        </ul>
        Money left: {{result.unit }}&nbsp;{{result.moneyleft}}
    </div>
</template>
<script>
    import _ from 'lodash';

    export default {
        props: {
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
            if (!_.size(this.result.values)) {
                this.$router.push('/');
            }
        }
    }
</script>
