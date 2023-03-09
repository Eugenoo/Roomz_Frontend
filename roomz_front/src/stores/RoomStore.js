import {defineStore} from "pinia";
import axios from "axios";

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
                }).catch((error) => {
                    console.log(error)
                })
            }
        }
    }
)