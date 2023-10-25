// axiosConfig.js
import axios from "axios";

const instance = axios.create({
  baseURL: "https://the-purple-mango.onrender.com/api", // Replace with your actual base URL
});

export default instance;
