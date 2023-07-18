
import axios from 'axios';

const userApi = axios.create({
  baseURL: 'https://prickly-tan-uniform.cyclic.app/api/v1/user'
});

export default userApi;