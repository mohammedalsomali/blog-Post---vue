import { ref, computed } from "vue";
import { defineStore } from "pinia";
import pocketbase from 'pocketbase';

const pb = new pocketbase('http://127.0.0.1:8090');


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
            console.log(this.data)
            // const pb = new pocketbase('http://127.0.0.1:8090');

            try {
                const records = await pb.collection('users').create(bew);
                console.log(records);
            } catch (error) {
                console.log(error.response.data.password.message);
            }
        },




    }

});