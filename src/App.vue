<template>
    <the-nav></the-nav>
    <router-view v-slot="slotProps">
        <transition name="fade-button" mode="out-in">
            <component :is="slotProps.Component"></component>
        </transition>
    </router-view>
</template>
<script>
import TheNav from "./components/TheNav/TheNav"
export default {
    components: { TheNav },
}
</script>
<style lang="scss">
#app {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

.rank {
    font-size: 42px;
}
.fname {
    font-size: 12px * 1.5;
}
.lname {
    font-size: 15px * 1.5;
}

.fade-button-enter-from,
.fade-button-leave-to {
    opacity: 0;
    transform: translateX(-120px);
}

.fade-button-enter-active {
    transition: all 0.4s ease-out;
}

.fade-button-leave-active {
    transition: all 0.4s ease-in;
}

.fade-button-enter-to,
.fade-button-leave-from {
    opacity: 1;
    transform: translateX(0);
}
.route-enter-from {
}
.route-enter-active {
    animation: slider 0.4s ease-out;
}
.route-enter-to {
}
.route-leave-active {
    animation: slider 0.4s ease-in;
}
@keyframes slider {
    0% {
        transform: translateX(0) scale(1);
    }

    70% {
        transform: translateX(-120px) scale(-1.1);
    }

    100% {
        transform: translateX(-150px) scale(1);
    }
}
</style>
