import {defineStore} from "pinia";
import axios from "axios";
import router from "../router/index.js";

export const useRoomStore = defineStore('room', {
        state: () => ({
            "rooms" : {}
        }),
        actions : {
            index(){
                axios.get('http://localhost:8000/api/rooms',{
                    headers: {
                        Authorization: "Bearer " + sessionStorage.getItem('TOKEN')
                    }
                })
                    .then((response) => {
                        this.rooms = response.data
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            },
            createRoom(data) {
                axios.post('http://localhost:8000/api/room', data , {
                    headers: {
                        Authorization: 'Bearer ' + sessionStorage.getItem('TOKEN')
                    }
                }).then((response) => {
                    this.rooms = response.data
                    router.push('rooms')
                }).catch((error) => {
                    console.log(error)
                })
            },
            deleteRoom(id){
                axios.delete('http://localhost:8000/api/room/'+ id, {
                    headers: {
                        Authorization: 'Bearer ' + sessionStorage.getItem('TOKEN')
                    }
                })
                    .then((response) => {
                        console.log(response);
                        router.push({name:'rooms'});
                    }).catch((error) => {
                        console.log(error);
                    })
            }
        }
    }
)