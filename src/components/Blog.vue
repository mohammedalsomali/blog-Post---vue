
<script setup>
import {ref} from 'vue'
import { createNewBlog } from '../stores/publishBlog'

const blogSubject = ref('');
const blogBody = ref('');

const postBlog = () => {
    createNewBlog(blogSubject.value, blogBody.value);
};



</script>

<template>
    <div class="container h-lvh">
        <form @submit.prevent="postBlog" class="flex flex-col w-1/2 h-2">
            <input type="text" class="rounded-md" v-model="blogSubject">
            <textarea class="resize-none rounded-md" maxlength="255" v-model="blogBody"> 

            </textarea>
            <input type="submit">

        </form>
        
    </div>
</template>


<style scoped>

</style>