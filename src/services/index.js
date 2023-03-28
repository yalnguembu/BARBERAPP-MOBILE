import axios from "axios";

axios.defaults.baseURL =
  "https://barberapp-be-api-production-e55f.up.railway.app";

export const setAuthToken = (token) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

setAuthToken();

export * from "./auth";
export * from "./services";
export * from "./reservations";
export * from "./user";
