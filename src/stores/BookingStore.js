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
        availability: false,
    }),
    getter: {
        //methode zum Berechen der Nächte
        numberNights() {
            return (this.departureDate - this.arrivalDate)
        }
    },

    actions: {
        setBookingDates(arrivalDate, departureDate, roomId) {
            this.arrivalDate = arrivalDate;
            this.departureDate = departureDate;
            this.roomId = roomId;
        },

        checkAvailability() {
            const apiUrl = `https://boutique-hotel.helmuth-lammer.at/api/v1/room/${this.roomId}/from/${this.arrivalDate}/to/${this.departureDate}`

            axios.get(apiUrl).then(response => {
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