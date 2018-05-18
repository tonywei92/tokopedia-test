<template>
    <div>
        <transition name="fade">
            <div class="alert" v-if="visible">
                <div class="message">
                    {{message}}
                    <br>
                    <a href="#" @click.prevent="emitClick">{{button_caption}}</a>
                </div>
                <div class="text-right">
                    <a href="#" @click.prevent="dismiss" class="dismiss">Dismiss</a>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
    export default {
        props: ['message', 'button_caption'],
        data() {
            return {
                visible: false
            }
        },
        methods: {
            dismiss() {
                this.visible = false;
            },
            show(){
                this.visible = true;
            },
            emitClick(){
                this.$emit('fix_button_click', '');
                this.dismiss();
            }
        }
    }
</script>

<style scoped>

    .message {
        padding: 1rem 1rem;
        line-height: 1.2rem;
        font-size: 0.9rem;
    }

    .alert {
        transition: all 1s ease;
        border-radius: 4px;
        margin-top: 20px;
        background-color: #fdffad;
        border: 1px solid #ffba00;
    }

    a.dismiss {
        text-decoration: none;
        font-size: 0.8rem;
        margin: 0.8rem 1rem;
        display: block;
    }

    /* Animation */
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .2s
    }
    .fade-enter,
    .fade-leave-to
    {
        opacity: 0
    }

</style>