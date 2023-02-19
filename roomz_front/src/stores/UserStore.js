import {defineStore} from "pinia";
import axios from "axios";
import {data} from "autoprefixer";
import router from "../router/index.js";

export const useUserStore = defineStore('user', {
    //state
    state: () => ({
        user: null,
        token: null,
        isLoggedIn: false
    }),
    //actions
    actions: {
        login(data){
            axios.post('http://localhost:8000/api/login', data)
                .then((response) => {
                    this.user = response.data.user
                    this.token = response.data.token
                    this.isLoggedIn = true
                    sessionStorage.setItem('TOKEN', response.data.token)
                    router.push({name: 'app.dashboard'})
                })
                .catch((error) => {
                    return error;
                })
        },
        logout(){
            axios.post('http://localhost:8000/api/logout',{},
                {
                    headers:{
                        Authorization: `Bearer `+ sessionStorage.getItem('TOKEN')
                    }
                }
            )
                .then(() => {
                    this.user = null
                    this.isLoggedIn = false
                    sessionStorage.removeItem('TOKEN')
                    router.push({name:'login'})
                })
                .catch((error) => {
                    return error;
                })
        }
    }

})
