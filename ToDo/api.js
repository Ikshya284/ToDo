// api.js
const API_BASE_URL = import.meta.env.DEV
  ? import.meta.env.VITE_API_BASE_DEV
  : import.meta.env.VITE_API_BASE_PROD;

export default API_BASE_URL;