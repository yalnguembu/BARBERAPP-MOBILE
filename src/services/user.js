import axios from "axios";

export const user = {
  getAll: async () => {
    return await axios.get("/users");
  },

  getById: async (id) => {
    return await axios.get(`/user/${id}`);
  },

  update: async (id, data) => {
    return await axios.put(`/user/${id}`, { ...data });
  },
};
