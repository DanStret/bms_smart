import axios from "axios";

// Configurar la baseURL dinámicamente según el entorno
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "https://api-flask-tg2f.onrender.com/api/systems",
  headers: { "Content-Type": "application/json" },
});

export default api;
