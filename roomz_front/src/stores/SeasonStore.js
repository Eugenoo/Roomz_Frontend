import {defineStore} from "pinia";
import axios from "axios";


export const useSeasonStore = defineStore('season', {
    state: () => ({
        "seasons" : {}
    }),
    actions : {
        index(){
            axios.get('http://localhost:8000/api/seasons', {
                headers : {
                    Authorization: "Bearer " + sessionStorage.getItem('TOKEN')
                }
            })
                .then((response) => {
                    console.log(response)
                    this.seasons = response.data
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }
})