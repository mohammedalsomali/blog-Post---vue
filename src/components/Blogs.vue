<script setup>
import { ref, onBeforeMount } from 'vue'
import { useCounterStore } from '@/stores/counter';
import { usePocketStore } from '@/stores/api';

const likes = useCounterStore();
const pocketStore = usePocketStore();
const blogs = ref([]);


onBeforeMount(async () => {
    const getBlogs = await pocketStore.getBlogs();
    getBlogs.forEach((each) => {
        blogs.value.push(each)
        console.log(blogs);
    })
    
    await pocketStore.updateUserInfo();
    
})






</script>


<template>
    <div class="max-w flex flex-col items-center">
        <div class="w-1/2 my-1 bg-white border border- border-gray-200 rounded-lg shadow light:bg-gray-800 light:border-grey-700"
            v-for="blog in blogs">
            <a href="#">
                <img v-if="blog.media" class="rounded-t-lg" :src="'http://127.0.0.1:8090/api/files/' + blog.collectionId + '/'+ blog.id + '/' + blog.media" alt="" />
            </a>
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 light:text-white"> {{ blog.subject
                        }}</h5>
                </a>
                <p class="mb-3 break-words font-normal text-gray-700 dark:text-gray-400"> {{ blog.body }}</p>
            </div>
            <button @click="likes.increment" class="flex">
                <svg class="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span> {{ likes.count }}</span>

            </button>
        </div>


    </div>


</template>