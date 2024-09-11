<script setup>
import {ref, onMounted} from 'vue'
import blogs from './Blog.vue'

onMounted(() => {
    console.log(blogs);
})
</script>


<template>
    <ul>
        <article v-for="blog in blogs">
            
          {{ blog.subject}}
          {{ blog.body}}
        </article>
    </ul>
</template>