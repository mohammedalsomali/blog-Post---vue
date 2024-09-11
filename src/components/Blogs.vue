<script setup>
import {ref, onMounted} from 'vue'
import { blogs } from '../stores/publishBlog'


    const val = ref('');
    console.log(blogs);

</script>


<template>
    <ul>
        <article v-for="blog in blogs">
          <header> {{ blog.subject }}</header>
          <p> {{ blog.body }}</p>
        </article>
    </ul>
</template>