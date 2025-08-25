import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const processFile = async (data) => {
  const response = await api.post("/analyze-file", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

export const processText = async (text) => {
  const response = await api.post("/analyze", { body: text }, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
};

export default api;
