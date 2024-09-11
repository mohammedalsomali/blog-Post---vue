<script setup>
import {ref, onMounted} from 'vue'
import blogs  from './Blog.vue'


    console.log(blogs);

</script>


<template>
    <ul>
        <article v-for="blog in blogs">
          {{ blog }}
        </article>
    </ul>
</template>