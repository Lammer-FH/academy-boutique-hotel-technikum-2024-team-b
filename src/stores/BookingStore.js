import {defineStore} from "pinia";
import axios from "axios";


export const useBookingStore = defineStore('booking', {
    state: () => ({

        roomId: null,
        roomName: "",
        pricePerNight: null,
        firstName: "",
        lastName: "",
        birthDate: "",
        emailAdresse: "",
        arrivalDate: "",
        departureDate: "",
        availability: false,
        bookingId: null,

    }),
    getters: {
       numberNights(state) {
            return (new Date(state.departureDate) - new Date(state.arrivalDate))/(1000 * 3600 * 24);

        }
    },

    actions: {
        setBookingDates(arrivalDate, departureDate, roomId, roomName, pricePerNight) {
            this.arrivalDate = arrivalDate;
            this.departureDate = departureDate;
            this.roomId = roomId;
            this.roomName = roomName
            this.pricePerNight = pricePerNight
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
        },

        saveBooking() {
            const apiUrl = `https://boutique-hotel.helmuth-lammer.at/api/v1/room/${this.roomId}/from/${this.arrivalDate}/to/${this.departureDate}`

            axios.post(apiUrl, {
                firstname: this.firstName,
                lastname: this.lastName,
                email: this.emailAdresse,
                birthdate: this.birthDate
            })
                .then((response) => {
                    this.bookingId = response.data.id;
                    console.log(response)


                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }
})