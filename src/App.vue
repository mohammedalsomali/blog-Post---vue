<script setup>

</script>

<template>
    <div id="pageContainer">
        <nav>
            <ul>
                <li>
                    <router-link :to="{ name: 'home' }"> Home </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'login' }"> Login </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'Blog' }"> blog </router-link>
                </li>
            </ul>
        </nav>
    </div>
    <router-View />

</template>

<style scoped>

nav {
    background-color: black;
    width: 100%;
    height: 10%;

}

ul {
    display: flex;
    flex-direction: row;

}

li {
    padding: 5%;
    list-style-type: none;
}
</style>
