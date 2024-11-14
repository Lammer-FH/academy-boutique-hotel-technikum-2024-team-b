import {defineStore} from "pinia";
import axios from "axios";

export const useRoomsStore = defineStore('roomstore', {
    state: () => ({

        rooms: []
    }),
    getter: {},

    actions: {

        checkRooms() {
            const apiUrl = `https://boutique-hotel.helmuth-lammer.at/api/v1/rooms`

            axios.get(apiUrl).then(response => {
                this.rooms = response.data;
            })
                .catch(error => {
                    //handle error
                    console.log(error)
                })
        }
    }
})