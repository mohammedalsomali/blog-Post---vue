<script setup>
import { usePocketStore } from '@/stores/api';
import { storeToRefs } from 'pinia';
import { computed, ref, watch } from 'vue';

const useStore = usePocketStore();
const islogedin = ref('');
const { token } = storeToRefs(useStore)

watch(
  token,
  () => {
    console.log(token);
    islogedin.value = token;
  }
)

</script>
<template>
  <nav class="bg-white border-gray-200 dark:bg-midnight">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
      <div class="flex items-center space-x-6 rtl:space-x-reverse">
        <a class="flex items-center space-x-3 rtl:space-x-reverse">
          <router-link :to="{ name: 'home' }"> Home </router-link>
        </a>
        <a class="flex items-center space-x-3 rtl:space-x-reverse">
          <router-link :to="{ name: 'Blog' }"> Blog </router-link>
        </a>
      </div>
      <a  v-if="!islogedin" class="text-blue-600 dark:text-blue-500 hover:underline">
        <router-link :to="{ name: 'login' }"> Login
        </router-link>
      </a>
      <a  v-else="" class="text-blue-600 dark:text-blue-500 hover:underline">
        <button @click=" useStore.logout()">
          logout
        </button>
      </a>
    </div>
    <div>
    </div>
  </nav>
</template>