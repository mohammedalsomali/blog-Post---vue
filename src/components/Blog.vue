<script setup>
import { ref, computed, onMounted } from 'vue'
import { usePocketStore } from '@/stores/api';
import { useRouter } from 'vue-router';




const pocketstore = usePocketStore();
const islogedin = ref('');
const router = useRouter();

onMounted(() => {
  islogedin.value = pocketstore.$state.token;

})


const blogSubject = ref('');
const blogBody = ref('');
const wordCount = computed(() => {
  return blogBody.value.length;
})


let imgdata = ref();
//retrieve files that should be added to the blog
const uploadImage = (e) => {
  const image = e.target.files[0];
  imgdata.value = image;

}


const publishBlog = () => {
  const data = {
    "subject": blogSubject.value,
    "body": blogBody.value,
    "likes": 0,
    "auther": pocketstore.$state.userId,
    "media": imgdata.value,
  }
  pocketstore.createBlog(data);
  router.push({name: 'home'});
}

</script>

<template>
  <div class="heading text-center font-bold text-2xl m-5 text-gray-800">Something on Your mind? why dont you blog about
    it</div>

  <div v-if="islogedin"
    class="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
    <input class="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none" spellcheck="false" placeholder="Title"
      type="text" v-model="blogSubject">
    <textarea class="description bg-gray-100 sec p-3 h-80 border border-gray-300 outline-none" spellcheck="false"
      placeholder="Write down your Ideas and let the World Know." v-model="blogBody" maxlength="800"></textarea>

    <!-- icons -->
    <div class="icons flex text-gray-500 m-2">
      <input type="file" accept="image/jpeg" @change="(e) => uploadImage(e)"/>
      <div class="count ml-auto text-gray-400 text-xs font-semibold">{{ wordCount }}/800</div>
    </div>
    <!-- buttons -->
    <div class="buttons flex m-2">
      <button
        class="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto">Cancel</button>
      <button
        class="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500"
        type="submit" @click="publishBlog()">Post</button>
    </div>
  </div>
  <div v-else="" class="heading text-center font-bold text-2xl m-5 text-gray-800"> please login if you want to post!!!
  </div>


</template>
