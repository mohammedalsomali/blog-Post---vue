<script setup>
import Navbar from '@/components/Navbar.vue';

//testing pocket base connection

// import pocketbase from 'pocketbase';
// import { onMounted } from 'vue';

// let pb = null;

// onMounted(async () => {
//   pb = new pocketbase('http://127.0.0.1:8090');
//   const authData = await pb.collection('users').authWithPassword('testuser1', 'thisisatest');
//   // after the above you can also access the auth data from the authStore
//   console.log(pb.authStore.isValid);
//   console.log(pb.authStore.token);
//   console.log(pb.authStore.model);

//   // "logout" the last authenticated account
//   // pb.authStore.clear();
// })




</script>

<template>

  <div class="h-screen w-screen flex-col">

    <Navbar />

    <router-View />

  </div>


</template>
