

<script setup>
import {ref} from 'vue'

const blogSubject = ref('');
const blogBody = ref('');
let blogs = [];
const postBlog = () => {
    const keyls = blogSubject.value;
    const valls = blogBody.value;
    blogs.push([keyls, valls]);
    console.log(blogs );

   
};



</script>

<template>
    <div class="blogContainer">
        <form @submit.prevent="postBlog">
            <input type="text" class="blogSubject" v-model="blogSubject">
            <textarea name="blogBody" maxlength="255" v-model="blogBody"> 

            </textarea>
            <input type="submit">

        </form>
        
    </div>
</template>


<style scoped>
form {
    height: 300px;
    display: grid;
    grid-template-columns: auto;
}
textarea{
    background-color: aqua;
    height: 255px;
}
</style>