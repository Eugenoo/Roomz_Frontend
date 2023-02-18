import {defineStore} from "pinia";
import axios from "axios";
import {data} from "autoprefixer";
import router from "../router/index.js";

export const useUserStore = defineStore('user', {
    //state
    state: () => ({
        user: null,
        token: sessionStorage.getItem('TOKEN'),
        isLoggedIn: false
    }),
    //actions
    actions: {
        login(data){
            axios.post('http://localhost:8000/api/login', data)
                .then(({data}) => {
                    console.log('jestem')
                })
        },
        test(x){
            axios.post('http://localhost:8000/api/login', x)
                .then((response) => {
                    this.user = response.data.user
                    this.isLoggedIn = true
                    sessionStorage.setItem('TOKEN', response.data.token)
                    router.push({name: 'app.dashboard'})
                })
                .catch((error) => {
                    return error;
                })
        }
    }

})
