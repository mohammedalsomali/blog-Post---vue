import { ref, computed } from "vue";
import { defineStore } from "pinia";
import pocketbase from 'pocketbase';


export const useUserStore = defineStore('user', {
    
    state: () => ({
        data: {
            username: '',
            email: '',
            emailVisibility: true,
            password: '',
            passwordConfirm: '',
        },

        userStatus: {
            logedIn: false,
        }

    }),

    actions: {
        updatestate(newData) {
            console.log(this.data);
            this.data = newData;
            console.log(this.data);
        },

        async newUser(bew) {
           

            try {
                //// remove all api calls to its own store so that blogs and users could be called independently
                //// maybe use axios
                const pb = pocketbase('http://127.0.0.1:8090');
                const records = await pb.collection('users').create(bew);
                console.log(records);
            } catch (error) {
                console.log(error.response.data.password.message);
            }
        },




    }

});