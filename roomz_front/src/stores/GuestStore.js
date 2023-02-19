import {defineStore} from "pinia";
import axios from "axios";
import {useUserStore} from "./UserStore.js";

export const useGuestStore = defineStore('guest', {
    //state
    state: () => ({
        "guest" : {}
    }),
    //actions
    actions: {
        index(){
            axios.get('http://localhost:8000/api/guests',{
                headers : {
                    Authorization: `Bearer `+ sessionStorage.getItem('TOKEN')
                }
            }).then((response) => {
                this.guest = response.data
            }).catch((error) => {
                console.log(error)
            })
        }
        , createGuest(guest) {
            axios.post('http://localhost:8000/api/guest', guest, {
                headers : {
                    Authorization : "Bearer " + sessionStorage.getItem('TOKEN')
                }
            }).then((response) => {
                console.log(response);
                }
            )
                .catch((error) => {
                    console.log(error)
                })
        }
    }
})


