import { defineStore } from "pinia";
import axios from "axios";
import { useUserStore } from "./userStore"; // Import your UserStore for authentication logic

// Helper function to generate headers
function getAuthHeaders() {
    let userStore = useUserStore(); // Access the UserStore
    let headers = {};
    if (userStore.isAuthenticated) {
        headers.Authorization = `Bearer ${userStore.token}`;
    }
    return headers;
}

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
        isLoaded: true,
        bookingSubmissionSuccess: true,
    }),
    getters: {
        numberNights(state) {
            return (new Date(state.departureDate) - new Date(state.arrivalDate)) / (1000 * 3600 * 24);
        }
    },
    actions: {
        setBookingDates(arrivalDate, departureDate, roomId, roomName, pricePerNight) {
            this.arrivalDate = arrivalDate;
            this.departureDate = departureDate;
            this.roomId = roomId;
            this.roomName = roomName;
            this.pricePerNight = pricePerNight;
        },

        setUserData(firstName, lastName, birthDate, emailAdresse) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.birthDate = birthDate;
            this.emailAdresse = emailAdresse;
        },

        async checkAvailability() {
            const apiUrl = `https://boutique-hotel.helmuth-lammer.at/api/v1/room/${this.roomId}/from/${this.arrivalDate}/to/${this.departureDate}`;
            try {
                const response = await axios.get(apiUrl, { headers: getAuthHeaders() });
                this.availability = response.data.available;
            } catch (error) {
                this.isLoaded = false;
                console.error("Error checking availability:", error);
            }
        },

        async saveBooking() {
            const apiUrl = `https://boutique-hotel.helmuth-lammer.at/api/v1/room/${this.roomId}/from/${this.arrivalDate}/to/${this.departureDate}`;
            try {
                const response = await axios.post(
                    apiUrl,
                    {
                        firstname: this.firstName,
                        lastname: this.lastName,
                        email: this.emailAdresse,
                        birthdate: this.birthDate,
                    },
                    { headers: getAuthHeaders() }
                );
                this.bookingId = response.data.id;
            } catch (error) {
                this.bookingSubmissionSuccess = false;
                console.error("Error saving booking:", error);
            }
        }
    }
});
