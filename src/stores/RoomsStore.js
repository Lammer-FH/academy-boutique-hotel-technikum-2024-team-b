import {defineStore} from "pinia";
import axios from "axios";

export const useRoomsStore = defineStore('rooms', {
    state: () => ({
        roomId: null,
        roomName: "",
        roomPricePerNight: 0,
        rooms: [],
        isLoaded: true,

    }),
    getters: {
        getRoomById: (state) => {
            return () => {
                return state.rooms.find(room => room.id === state.roomId); // Find room by id
            }
        }
    },

    actions: {
        setRoomIdAndNameAndPrice(roomId, roomName, pricePerNight) {
            this.roomId = roomId;
            this.roomName = roomName;
            this.roomPricePerNight = pricePerNight
        },
        setRoomId(roomId) {
            this.roomId = roomId;
        },

        async fetchRooms() {
            const apiUrl = `https://boutique-hotel.helmuth-lammer.at/api/v1/rooms`;
            try {
                let response = await axios.get(apiUrl);
                this.rooms = response.data;

            } catch (error) {
                this.isLoaded = false;
            }
        }
    }
});
