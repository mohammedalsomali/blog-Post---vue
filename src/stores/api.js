import {defineStore}  from "pinia";
import  pocketbase from "pocketbase";

export const pb = new pocketbase('http://127.0.0.1:8090');

export const usePocketStore = defineStore('pbConnection', {
    state: () => ({
        isAthenticated: false,
        token: null,
        user: null,
        }),

    getters: {
        isLogedIn: (state) => !!state.token,
        getUser: (state) => state.user,
        
    },

    actions: {
        
        async login(username, password){
            try {
                const login = pb.collection('users').authWithPassword(username, password);
                this.isAthenticated = true;
                this.token = pb.authStore.token;
                console.log(this.token);
            } catch (error) {
                console.error(error);
            }
        },


        async logout() {

        },


        async registerUser() {

        },

        async getUserInfo(){

        },

        async getBlogs(){

        },

        async createBlog() {

        },

        async editBlogs() {

        }

    }
});