// @ts-nocheck
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://long-blue-firefly-vest.cyclic.app/api/v1/blog'
});

export const getBlogs = async () => {
  const response = await api.get('/');
  return response.data;
}

export const getBlogById = async (id: number) => {
  const response = await api.get(`/${id}`);
  return response.data;
}

export const addBlog = async (blog: Blog) => {
  const response = await api.post('/', blog);
  return response.data;
}

export const updateBlog = async (id: number, blog: Blog) => {
  const response = await api.put(`/${id}`, blog);
  return response.data;  
}

export const deleteBlog = async (id: number) => {
  const response = await api.delete(`/${id}`);
  return response.data;
}