import { defineStore } from "pinia";
import axios from "axios";

export const useLoggedInStore = defineStore('LoggedIn', {
    state: () => ({
        firstname: "",
        lastname: "",
        birthDate: "",
        emailAdresse: "",
        token: localStorage.getItem("token"),
    }),

    actions: {
        async getUser() {
            const apiUrl = 'https://boutique-hotel.helmuth-lammer.at/api/user';
            const token = localStorage.getItem("token");

            try {
                console.log("Fetching user data...");
                const response = await axios.get(apiUrl, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        Accept: "application/json",
                    },
                });

                let { firstname, lastname, birthDate, emailAdresse } = response.data;
                this.firstname = firstname;
                this.lastname = lastname;
                this.birthDate = birthDate;
                this.emailAdresse = emailAdresse;

            } catch (error) {
                console.error("Error fetching user data:", error.response ? error.response.data : error.message);
            }
        }
    },
});
