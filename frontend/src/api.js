import axios from "axios";


const baseURL = "https://your-backend.vercel.app";


// Process URLs for your AI query resolver
export const processUrls = async (urls) => {
  try {
    const response = await fetch(`${baseURL}/process-urls`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ urls: ["https://..."] }),
});

  } catch (error) {
    throw new Error(
      error.response?.data?.detail || "Failed to process URLs. Please try again."
    );
  }
};

// Query documents for your AI query resolver
export const queryDocs = async (query) => {
  try {
    const response = await fetch(`${baseURL}/process-urls`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ urls: ["https://..."] }),
});

  } catch (error) {
    throw new Error(
      error.response?.data?.detail || "Failed to fetch the answer. Please try again."
    );
  }
};