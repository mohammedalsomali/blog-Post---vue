<script setup>

</script>
<template>
    <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div class="flex text-sm lg:flex-grow">
          <a class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 mr-4">
            <router-link :to="{ name: 'home' }"> Home </router-link>
          </a>
          <a class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            <router-link :to="{ name: 'login' }"> Login
            </router-link>
          </a>
          <a class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
            <router-link :to="{ name: 'Blog' }"> blog </router-link>
          </a>
        </div>
        <div>
      </div>
    </nav>
</template>