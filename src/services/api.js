import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://profile-backend-eight.vercel.app/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Let the browser set multipart boundaries for file uploads.
    if (config.data instanceof FormData && config.headers) {
      delete config.headers['Content-Type'];
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
  //  console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;

