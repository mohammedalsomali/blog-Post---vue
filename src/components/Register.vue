<script setup>
import { usePocketStore } from '@/stores/api';
import { ref } from 'vue';

let pb = null;

const username = ref('');
const password = ref('');
const confirmPassword = ref('');

const createUser = usePocketStore();



const formCreate = () => {
  const data = {
    username: username.value,
    email: '',
    emailVisibility: true,
    password: password.value,
    passwordConfirm: confirmPassword.value,
  };
  createUser.registerUser(data);

}




</script>

<template>
  <div class="h-full w-full flex flex-col items-center justify-center">
    <form class="bg-white shadow-md max-w-xs rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="formCreate">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
          Username
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username" type="text" placeholder="Username" v-model="username" required>
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
          Password
        </label>
        <input
          class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password" type="password" placeholder="******************" v-model="password" required>
        <p class="text-red-500 text-xs italic">Please make a password</p>
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
          Confirm Password
        </label>
        <input
          class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password" type="password" placeholder="******************" v-model="confirmPassword" required>
        <p class="text-red-500 text-xs italic">Please confirm the password</p>
      </div>
      <div class="flex items-center justify-center">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit">
          Sign Up
        </button>

      </div>
    </form>
  </div>
</template>