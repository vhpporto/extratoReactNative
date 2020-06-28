import axios from 'axios';

const api = axios.create({
  baseURL: 'http://18.228.30.132:3333',
});

export default api;
