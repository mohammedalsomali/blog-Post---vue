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
                const login = await pb.collection('users').authWithPassword(username, password);
                this.isAthenticated = true;
                this.token = pb.authStore.token;
                this.logout();
                console.log(this.token);
            } catch (error) {
                console.error(error);
            }
        },


        async logout() {
        if(this.isAthenticated){
            this.isAthenticated = false;
            this.token = null;
            this.user = null;
            pb.authStore.clear();;
        }
            
        },


        async registerUser(data) {
            const newUser = await pb.collection('users').create(data);
        },

        async updateUserInfo(){
            if(!this.token){
                return console.log('user not logedin');
            }
            const auth = await pb.collection('users').authRefresh({
                GET: this.token
            });
            console.log(auth);
        },

        async getBlogs(){

        },

        async createBlog() {

        },

        async editBlogs() {

        }

    }
});