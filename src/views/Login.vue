<script setup>
import { ref } from 'vue'

const redon  = ref('red');
const addBlog = () => {
  console.log('1');
  redon.value = 'yellow';
  console.log(redon);
}
</script>

<template>
  <main>
      <form @submit.prevent="addBlog" :style="{ 'background-color': redon }">
            <input type="text" required>
            <input type="text" required>
            <input type="submit" value="Login">
      </form>
  </main>
</template>


