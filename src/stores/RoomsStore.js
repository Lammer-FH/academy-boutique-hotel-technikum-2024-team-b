// stores/RoomsStore.js
import { defineStore } from "pinia";
import axios from "axios";

export const useRoomsStore = defineStore("roomstore", {
    state: () => ({
        rooms: [],
        selectRoomId: null, // Stores the selected room ID
        roomsLoaded: false,  // Flag to track if rooms are already loaded
    }),

    actions: {
        async fetchRooms() {
            if (this.roomsLoaded) return;
            const apiUrl = `https://boutique-hotel.helmuth-lammer.at/api/v1/rooms`;

            try {
                const response = await axios.get(apiUrl);
                this.rooms = response.data;
                this.roomsLoaded = true;
            } catch (error) {
                console.error("Error fetching rooms:", error);
            }
        },

        setSelectedRoomId(roomId) {
            this.selectRoomId = roomId; // Set the selected room ID
        },

        getSelectedRoomId() {
            return this.selectRoomId; // Return the current selected room ID
        },
    },
});
