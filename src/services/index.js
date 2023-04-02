import axios from "axios";

axios.defaults.baseURL =
  "https://ghost-barber.up.railway.app";
  // "http://localhost:5000";
  // "http://192.168.43.25";

export const setAuthToken = (token) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

setAuthToken();

export * from "./auth";
export * from "./services";
export * from "./reservations";
export * from "./user";
