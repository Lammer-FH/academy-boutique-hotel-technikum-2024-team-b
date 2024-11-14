import {defineStore} from "pinia";
import axios from "axios";


export const useBookingStore = defineStore('booking', {
    state: () => ({

        roomId: null,
        roomName: "",
        firstName: "",
        lastName: "",
        birthDate: null,
        emailAdresse: "",
        arrivalDate: "",
        departureDate: "",
        availability: false,
    }),
    getters: {
       numberNights(state) {
            return (new Date(state.departureDate) - new Date(state.arrivalDate))/(1000 * 3600 * 24);

        }
    },

    actions: {
        setBookingDates(arrivalDate, departureDate, roomId, roomName) {
            this.arrivalDate = arrivalDate;
            this.departureDate = departureDate;
            this.roomId = roomId;
            this.roomName = roomName
        },

        setUserData(firstName, lastName, birthDate, emailAdresse) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.birthDate = birthDate;
            this.emailAdresse = emailAdresse;
        },


        async checkAvailability() {
            const apiUrl = `https://boutique-hotel.helmuth-lammer.at/api/v1/room/${this.roomId}/from/${this.arrivalDate}/to/${this.departureDate}`

            await axios.get(apiUrl)
                .then(response => {
                this.availability = response.data.available;
            }  )
                .catch(error => {
                    //handle error
                    console.log(error)
                })
        }


        //Methode zum Ändern der Daten bzw. Speichern der Benutzerdaten und Axios-calls -> speichern Booking
        // du kann als url denselben Link verwenden wie ich. Die RoomId und RoomName wurde auch von mir schon gesetzt. Du musst im Prinzip nur noch deine formulardaten hierreinspeichern und dann den Post-Request machen.
    }
})