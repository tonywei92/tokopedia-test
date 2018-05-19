<!--
This is master page, navs, fab "back" button and child page in here
-->
<template>
    <div class="container">
        <div class="row-center material-box">
            <div class="nav" style="">
                <div class="nav__logo" style="height: 100%;">
                    <h1>Tokopedia</h1>
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
                        <router-view>

                        </router-view>
                    </transition>
                </div>
            </div>
            <!-- dont show fab "back" button if we are on root page '/'  -->
            <router-link v-show="$route.path !== '/'" to="/" class="fab material-box">
                <i class="fas fa-arrow-left"></i>
            </router-link>
        </div>
    </div>
</template>
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