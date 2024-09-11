<script setup>
    import {ref} from 'vue'
    const blogSubject = ref('subject');
    const blogBody = ref('blogBody');
    const blogs = [{
        'subject': blogSubject.value,
        'body': blogBody.value
        }];
    const postBlog = () => {
        const blog = {
        'subject': blogSubject.value,
        'body': blogBody.value
        };
        blogs.push(blog);
    };

    // export default  blogs;

    
</script>

<template>
    <div class="blogContainer">
        <form @click.prevent="postBlog">
            <input type="text" class="blogSubject" v-bind:value="blogSubject">
            <textarea name="blogBody" maxlength="255" :value="blogBody"> 

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