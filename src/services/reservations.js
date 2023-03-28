import axios from "axios";

export const reservations = {
  getAll: async () => {
    return await axios.get("/reservations");
  },

  getById: async (id) => {
    return await axios.get(`/reservation/${id}`);
  },

  create: async (service) => {
    return await axios.post(`/reservation`, { ...service });
  },
};
