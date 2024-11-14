import { defineStore } from "pinia";
import pocketbase from "pocketbase";

export const pb = new pocketbase('http://127.0.0.1:8090');

export const usePocketStore = defineStore('pbConnection', {
    state: () => ({
        isAthenticated: false,
        token: null,
        userId: null,
        blogs: null,
        
        
    }),

    actions: {

        async login(username, password) {
            try {
                const login = await pb.collection('users').authWithPassword(username, password);
                this.isAthenticated = true;
                this.token = pb.authStore.token;
                this.userId = pb.authStore.model.id;
                
            } catch (error) {
                console.error(error);
            }
        },


        async logout() {
            pb.authStore.clear();
            this.isAthenticated = false;
            this.token = null;
            this.user = null;
            


        },


        async registerUser(data) {
            const newUser = await pb.collection('users').create(data);
        },

        async updateUserInfo() {
            if(localStorage.getItem("pocketbase_auth")){
                this.token = localStorage.getItem("pocketbase_auth");
            }
            if (!this.token) {
                return console.log('user not logedin');
            }
            const auth = await pb.collection('users').authRefresh({
                GET: this.token
            });
            console.log(auth);
        },

        async getBlogs() {
            const blogs = await pb.collection('blogs').getFullList({
                sort: '-created',
            })
            return blogs;


        },

        async createBlog(blogData) {
            const newBlog = await pb.collection('blogs').create(blogData);
            
        },

        async editBlogs() {

        },
        
    }
});