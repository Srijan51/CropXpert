import api from "./api";

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: string;
  language: string;
}

export const authService = {
  async register(data: any) {
    const response = await api.post("/users/register", data);
    return response.data;
  },

  async login(data: any) {
    const response = await api.post("/users/login", data);
    if (response.data.access_token) {
      localStorage.setItem("token", response.data.access_token);
    }
    return response.data;
  },

  async getProfile() {
    const response = await api.get("/users/profile");
    return response.data;
  },

  logout() {
    localStorage.removeItem("token");
  },
};
