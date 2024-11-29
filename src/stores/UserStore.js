import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore('userStore', {
    state: () => ({
        wasSuccess: false,
    }),
    getters: {},

    actions: {
        async registerUser(firstName, lastName, birthDate, emailAdresse, username, password) {
            const apiUrl = 'https://boutique-hotel.helmuth-lammer.at/api/v1/register';
            try {
                const response = await axios.post(apiUrl, {
                    firstname: firstName,  // lowercase to match backend expectations
                    lastname: lastName,
                    email: emailAdresse,
                    birthdate: birthDate,
                    username: username,
                    password: password,
                });
                this.wasSuccess = true;
                localStorage.setItem("token", response.data); // Verify if the token is here or within response.data.token
            } catch (error) {
                console.error('Error during registration:', error.response ? error.response.data : error.message);
            }
        },
        async handleLogin(clientId, secret) {
            const apiUrl = `https://boutique-hotel.helmuth-lammer.at/api/v1/login`;

            try {
                const response = await axios.post(apiUrl, {
                    clientId: clientId,
                    secret: secret,
                });

                if (response.data !== undefined) {
                    localStorage.setItem("token", response.data);
                    this.wasSuccess = true;
                } else {
                    console.error("No token found in response:", response);
                    this.wasSuccess = false;
                }
            } catch (error) {
                console.error('Error during login:', error.response ? error.response.data : error.message);
                this.wasSuccess = false;
                throw error; // Rethrow the error so that the calling component can handle it
            }
        }
    },
});