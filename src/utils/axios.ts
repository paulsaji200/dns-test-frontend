import axios from "axios";

const api = axios.create({
  baseURL: "https://dns-project-server.onrender.com/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;