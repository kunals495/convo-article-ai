import axios from "axios";

const API_BASE_URL = "http://localhost:8000";

export const processUrls = async (urls) => {
  const response = await axios.post(`${API_BASE_URL}/process-urls`, { urls });
  return response.data;
};

export const queryDocs = async (query) => {
  const response = await axios.post(`${API_BASE_URL}/query`, { query });
  return response.data;
};
