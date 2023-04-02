import axios from "axios";

export const reservations = {
  create: async (service) => {
    return await axios.post(`/reservation`, { ...service });
  },

  getByClient: async (userId) => {
    return await axios.get(`/reservations/?user-id=${userId}`);
  },

  getArchivedByClient: async (userId) => {
    return await axios.get(`/reservations/archived/?user-id=${userId}`);
  },

  getById: async (id) => {
    return await axios.get(`/reservation/${id}`);
  },

  cancel: async (id) => {
    return await axios.put(`/reservation/${id}/cancel`);
  },

  update: async (id, data) => {
    return await axios.put(`/reservation/${id}`, { ...data });
  },
};
