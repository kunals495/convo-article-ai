import axios from "axios";

const API_BASE_URL = "http://localhost:8000";

// Process URLs for your AI query resolver
export const processUrls = async (urls) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/process-urls`, { urls });
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.detail || "Failed to process URLs. Please try again."
    );
  }
};

// Query documents for your AI query resolver
export const queryDocs = async (query) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/query`, { query });
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.detail || "Failed to fetch the answer. Please try again."
    );
  }
};