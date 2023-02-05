import { defineStore } from "pinia";
import axios from "axios";

export const useReservationStore = defineStore("ReservationStore",  {
    //state
    state: () => ({
        reservationData: null,
    }),
    //actions
    actions : {
        getData(){
            axios({
                method: 'get',
                url: 'http://localhost:8000/api/test',
                responseType: 'JSON'
            })
                .then(function(response) {
                    return response
                })
        }
    }
})