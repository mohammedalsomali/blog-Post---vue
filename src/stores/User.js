import { ref, computed } from "vue";
import { defineStore } from "pinia";
import pocketbase from 'pocketbase';


export const useUserStore = defineStore('user', {
    state:  () => ({
        data: {
            username: '',
            email: '',
            emailVisibility: true,
            password: '',
            confirmPassword: '',
            nm: '',
        }
    }),

    actions: {
        async newUser() {
            const pb = new pocketbase('http://127.0.0.1:8090');
            
            try {
                await pb.collection('users').create(this.data);
              } catch (error) {
                  console.log(error.response.data.password.message);
              }
        }
        

    }

});