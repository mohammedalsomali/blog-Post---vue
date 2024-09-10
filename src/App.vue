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
            </ul>
        </nav>
        <router-View />
    </div>

</template>

<style scoped>

nav {
    background-color: black;
    width: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
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
