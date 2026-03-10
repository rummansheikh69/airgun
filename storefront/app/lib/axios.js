import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.airgunbd.com/api",
  withCredentials: true,
});
