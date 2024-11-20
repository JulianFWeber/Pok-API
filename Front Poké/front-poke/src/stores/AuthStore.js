import { defineStore } from "pinia";
import AuthService from "src/services/AuthService";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    error: null,
  }),

  actions: {
    async login(username, password) {
      try {
        const user = await AuthService.login(username, password);
        this.user = user;
        this.error = null;
      } catch (error) {
        this.error = error.message;
      }
    },

    async register(username, password) {
      try {
        const response = await AuthService.post('http://localhost:3000/Users', {
          username,
          password
        });

        if (response.data) {
          this.user = response.data;
        } else {
          this.error = 'Erro ao registrar usuário.';
        }
      } catch (error) {
        this.error = error.message;
      }
    },

    logout() {
      this.user = null;
      this.error = null;
    },
  },
});