import axios from "axios";

axios.defaults.baseURL =
  "https://barberapp-be-api-production-e55f.up.railway.app";
// "http://192.168.43.25:5000";

export const setAuthToken = (token) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

setAuthToken();

export * from "./auth";
export * from "./services";
export * from "./reservations";
export * from "./user";
