import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { BASE_URL } from '../utils/apiUtils';

const API: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

API.interceptors.request.use((req: AxiosRequestConfig) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers['Authorization'] = `Bearer ${token}`;
  }
  return req;
});

export default API;
