import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";

import { BASE_URL } from "../utils/apiutils";

const API: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

API.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem("token");

  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default API;
