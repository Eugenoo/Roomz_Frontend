import { defineStore } from "pinia";
import axios from "axios";

export const useReservationStore = defineStore("reservation",  {
    //state
    state: () => ({
        name: 'reservation 1',
        counter: 0,
        reservation: null
    }),
    //actions
    actions : {
        addOne(){
            this.counter++
        },
        addTwo(){
            this.counter += 2;
        },
        getData(){
            axios({
                method: 'get',
                url: 'http://localhost:8000/api/test'
            })
                .then((response) => {
                    this.reservation = response.data
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    },
    //getters
    getters : {
        getByGetter(state){
            console.log(state)
            return state
        }
    }
})