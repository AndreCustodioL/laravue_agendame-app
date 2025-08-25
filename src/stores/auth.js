import axios from "axios";
import { defineStore } from "pinia";
import { useMeStore } from "@/stores/me";


export const useAuthStore = defineStore('auth',{
    state: ()=> ({
    }),
    actions: {
        sanctum(){
            return axios.get('sanctum/csrf-cookie')
        },
        login(email,password) {
            return axios.post('api/login',{
                email,
                password
            })
            .then((response)=>{
                const meStore = useMeStore();
                meStore.user = response.data.data
            })
        }
    },
    getters: {
        isLoggedIn: (state) => !!state?.user?.id
    }
})