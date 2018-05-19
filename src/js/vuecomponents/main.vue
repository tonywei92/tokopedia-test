<!--
This is master page, navs, fab "back" button and child page in here
-->
<template>
    <div class="container">
        <div class="row-center material-box">
            <div class="nav" style="">
                <div class="nav__logo" style="height: 100%;">
                    <h1 @click="backToHome">Tokopedia</h1>
                </div>
                <div class="nav__button" style="height: 100%">
                    <router-link to="about">
                        <i class="fas fa-info-circle"></i>
                    </router-link>
                </div>
            </div>
            <div class="content scrollbar-macosx">
                <div class="content-inner">
                    <transition name="fade">
                        <keep-alive>
                            <router-view>

                            </router-view>
                        </keep-alive>
                    </transition>
                </div>
            </div>
            <!-- dont show fab "back" button if we are on root page '/'  -->
            <a v-show="$route.path !== '/'" href="#" @click.prevent="navigateBack" class="fab material-box">
                <i class="fas fa-arrow-left"></i>
            </a>
        </div>
    </div>
</template>
<script>
    export default {
        methods:{
            navigateBack(){
                this.$router.go(-1);
            },
            backToHome(){
                this.$router.push('/');
            }
        }
    }
</script>
<style scoped="">
    .fade-enter-active, .fade-leave-active {
        transition-property: opacity;
        transition-duration: .25s;
    }

    .fade-enter-active {
        transition-delay: .25s;
    }

    .fade-enter, .fade-leave-active {
        opacity: 0
    }
</style>