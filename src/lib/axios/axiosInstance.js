import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // use .env for flexibility
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: Interceptors
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Add your error handling here
    return Promise.reject(error);
  }
);

export default axiosInstance;
