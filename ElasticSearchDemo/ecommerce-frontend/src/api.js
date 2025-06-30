import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/books", // backend base path
});

export default api;
