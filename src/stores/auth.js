import axios from "axios";
import { defineStore } from "pinia";


export const useAuthStore = defineStore('auth',{
    state: ()=> ({
        user: null,
    }),
    actions: {
        sanctum(){
            return axios.get('sanctum/csrf-cookie')
        },
        login(email,password) {
            return axios.post('api/login',{
                email,
                password
            }).then((response)=>{
                this.user = response.data.data
            })
        }
    },
    getters: {
        isLoggedIn: (state) => !!state?.user?.id
    }
})