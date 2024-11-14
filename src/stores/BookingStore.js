import {defineStore} from "pinia";
import axios from "axios";

export const useBookingStore = defineStore('booking', {
    state: () => ({

        roomId: Number,
        roomName: String,
        firstName: String,
        lastName: String,
        birthDate: Date,
        emailAdresse: String,
        arrivalDate: Date,
        departureDate: Date,
        availability: Boolean,
    }),
    getter: {
       numberNights() {
            return (new Date (this.departureDate) - new Date (this.arrivalDate) / (1000 * 3600 * 24));

        }
    },

    actions: {
        setBookingDates(arrivalDate, departureDate, roomId) {
            this.arrivalDate = arrivalDate;
            this.departureDate = departureDate;
            this.roomId = roomId;
        },

        async checkAvailability() {
            const apiUrl = `https://boutique-hotel.helmuth-lammer.at/api/v1/room/${this.roomId}/from/${this.arrivalDate}/to/${this.departureDate}`

            await axios.get(apiUrl)
                .then(response => {
                this.availability = response.data.available;
                console.log(this.availability);
            }  )
                .catch(error => {
                    //handle error
                    console.log(error)
                })
        }


        //Methode zum Ändern der Daten bzw. Speichern der Benutzerdaten und Axios-calls -> speichern Booking
    }
})