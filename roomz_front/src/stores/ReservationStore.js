import { defineStore } from "pinia";

export const useReservationStore = defineStore("ReservationStore",  {
    //state
    state: () => ({
        count: 10,
    }),
    //actions
    getters: {
        doubleCount: (state) => state.count * 2,

        doubleCountPlusOne() {
            return this.doubleCount + 1
        }
    }
    //getters
})