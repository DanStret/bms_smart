import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://127.0.0.1:5000/api", // Cambia la URL si es necesario
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
