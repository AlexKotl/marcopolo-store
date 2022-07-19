import axios from "axios";

export default axios.create({
  baseURL: import.meta.env.VITE_API_ENDPOINT,
  timeout: 1000,
  headers: { "x-api-key": import.meta.env.VITE_API_KEY },
});
