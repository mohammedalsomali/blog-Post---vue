<script setup>
import {ref, onMounted} from 'vue'
import { blogs } from '../stores/publishBlog'


    const val = ref('');
    console.log(blogs);

</script>


<template>

    <div v-for="blog in blogs">
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{{ blog.subject }}</div>
            <p class="text-gray-700 text-base">
                {{ blog.body }}
            </p>
        </div>
    </div>

</template>