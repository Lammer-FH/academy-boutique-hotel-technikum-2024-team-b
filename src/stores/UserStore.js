import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore('userStore', {
    state: () => ({
        wasSuccess: false,
        token: null,
    }),
    getters: {},

    actions: {
        async registerUser(firstName, lastName, birthDate, emailAdresse, username, password) {
            const apiUrl = 'https://boutique-hotel.helmuth-lammer.at/api/v1/register';
            try {
                const response = await axios.post(apiUrl, {
                    firstname: firstName,
                    lastname: lastName,
                    email: emailAdresse,
                    birthdate: birthDate,
                    username: username,
                    password: password,
                });

                this.wasSuccess = true;

                let token = response.data;
                localStorage.setItem("token", token);
                this.token = token;

            } catch (error) {
                this.wasSuccess = false;
            }
        },
        async handleLogin(clientId, secret) {
            const apiUrl = 'https://boutique-hotel.helmuth-lammer.at/api/v1/login';

            try {
                const response = await axios.post(apiUrl, {
                    clientId: clientId,
                    secret: secret,
                });

                if (response.data !== undefined) {
                    let token = response.data;

                    localStorage.setItem("token", token);
                    this.token = token;

                    this.wasSuccess = true;
                } else {
                    this.wasSuccess = false;
                }
            } catch (error) {
                this.wasSuccess = false;
            }
        },
        logout() {
            localStorage.removeItem("token");
            this.token = null;
        }
    }
});
