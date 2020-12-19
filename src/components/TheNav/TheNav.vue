<template>
    <nav class="bg-gray-800 text-white w-full fixed top-0 left-0 right-0 shadow z-20">
        <div class="w-full px-5 md:px-0 md:w-11/12 flex items-center justify-between mx-auto h-full">
            <img src="../../assets/images/logo.png" class="w-24" alt="" />
            <div class="flex items-center justify-center space-x-12 text-xl h-full">
                <router-link to="/">Home</router-link> <router-link to="/teams">Teams</router-link>
                <router-link to="/drivers">Drivers</router-link>
            </div>
        </div>
    </nav>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
nav {
    height: 10vh;
}
a {
    font-weight: bold;
    color: #b4b4b4;
    outline: none;

    &.router-link-exact-active {
        color: #ffffff;
    }
}
</style>
