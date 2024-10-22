<script setup>
import { ref, onMounted } from 'vue'
import { blogs } from '../stores/publishBlog'


const val = ref('');
console.log(blogs);

</script>


<template>
    <div class="max-w flex flex-col items-center">
        <div class="w-1/2 my-1 bg-white border border- border-gray-200 rounded-lg shadow light:bg-gray-800 light:border-grey-700"
            v-for="blog in blogs">
            <a href="#">
                <img class="rounded-t-lg" src="#" alt="" />
            </a>
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 light:text-white"> {{ blog.subject
                        }}</h5>
                </a>
                <p class="mb-3 break-words font-normal text-gray-700 dark:text-gray-400"> {{ blog.body }}</p>
            </div>
        </div>


    </div>


</template>