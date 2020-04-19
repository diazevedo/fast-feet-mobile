import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333/',
  // baseURL: 'http://10.0.0.21:3333/',
});

export default api;
