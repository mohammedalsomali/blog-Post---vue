import defineStore  from "pinia";
import pocketbase from 'pocketbase';

const pb = new pocketbase('http://127.0.0.1:8090');

export const usePocketStore = defineStore('pbConnection', {
    state: {
        isAthenticated: false,
        token: null,
        user: null,
        },

    getters: {
        isLogedIn: (state) => !!state.token,
        getUser: (state) => state.user,
        
    },

    actions: {
        
        async login(){

        },


        async logout() {

        },


        async register() {

        },

        async getUserInfo(){

        },

        async getBlogs(){

        },

        async createBlog() {

        },

        async editblogs() {

        }

    }
});