// api.js
// @ts-nocheck
import axios from 'axios';

const token = localStorage.getItem('token') || ''; 
const authHeader = {
  headers: {
    Authorization: 'Bearer ' + token,
  },
};

const API = axios.create({
  baseURL: 'https://prickly-tan-uniform.cyclic.app/api/v1',
  ...authHeader,
});

export default API;
