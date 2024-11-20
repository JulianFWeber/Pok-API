import { api } from "src/boot/axios";

export default {
  async login(username, password) {
    const response = await api.get("/Users");
    const users = response.data;
    const user = users.find(
      (u) => u.User === username && u.Senha === password
    );
    if (user) {
      return user;
    } else {
      throw new Error("Usuário ou senha incorretos.");
    }
  },

  async register(newUser) {
    const response = await api.get("/Users");
    const users = response.data;
    const userExists = users.some(
      (u) => u.User === newUser.User
    );
    if (userExists) {
      throw new Error("Nome de usuário já existe.");
    }

    const registerResponse = await api.post("/Users", newUser);
    return registerResponse.data;
  },
};