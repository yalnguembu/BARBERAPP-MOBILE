import axios from "axios";

export const services = {
  getAll: async () => {
    return await axios.get("/services");
  },
  
  getById: async (id) => {
    return await axios.get(`/service/${id}`);
  },
};
