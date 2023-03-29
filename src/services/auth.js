import axios from "axios";

export const auth = {
  login: async (data) => {
    return await axios.post("/auth/login", data);
  },

  register: async (data) => {
    return await axios.post("/auth/register", { ...data });
  },
};
