import {defineStore} from "pinia";
import axios from "axios";

export const useRoomsStore = defineStore('rooms', {
    state: () => ({
        roomId: 1,
        roomName: "",
        rooms: []
    }),
    getters: {
        getRoomById: (state) => {
            return () => {
                return state.rooms.find(room => room.id === state.roomId); // Find room by id
            }
        }
    },

    actions: {
        setRoomIdAndName(roomId, roomName) {
            this.roomId = roomId;
            this.roomName = roomName;
        },
        setRoomId(roomId) {
            this.roomId = roomId;
        },

        // Async action to fetch room data from the API
        async checkRooms() {
            const apiUrl = `https://boutique-hotel.helmuth-lammer.at/api/v1/rooms`;

            try {
                const response = await axios.get(apiUrl);
                // Assuming the response is an array directly, otherwise, adjust based on your API response structure
                if (Array.isArray(response.data)) {
                    this.rooms = response.data; // Assign the response data to rooms
                } else {
                    console.error("API response is not in the expected format.");
                }
            } catch (error) {
                console.error("Error fetching rooms: ", error);
            }
        }
    }
});
