<template>
    <div class="container">
        <div class="row-center material-box">
            <div class="nav" style="">
                <div class="nav__logo" style="height: 100%;">
                    <h1>Tokopedia</h1>
                </div>
                <div class="nav__button" style="height: 100%">
                    <transition name="slide">
                        <router-link to="about">
                            <i class="fas fa-info-circle"></i>
                        </router-link>
                    </transition>
                </div>
            </div>
            <div class="content scrollbar-macosx">
                <div class="content-inner">
                    <router-view>

                    </router-view>
                </div>
            </div>

            <router-link v-show="$route.path !== '/'" to="/" class="fab material-box">
                <i class="fas fa-arrow-left"></i>
            </router-link>
        </div>
    </div>
</template>
<style scoped="">
    .enter { transform: translateX(100%) }
    .enter-to { transform: translateX(0) }
    .slide-enter-active { position: absolute }

    .leave { transform: translateX(0) }
    .leave-to { transform: translateX(-100%) }

    .slide-enter-active,
    .slide-leave-active { transition: all 750ms ease-in-out }
</style>