import axios from 'axios';
import BASE_URI from '../constants/url';

const api = axios.create({
  baseURL: BASE_URI
});


export const post = async (url, options = {}) => {
  const { credentials = {} } = options;
  const response = await api.post(url, credentials);
  return response;
};


export const get = async (url) => {
  const response = await api.get(url);
  if (response.status === 400 || response.status === 401) {
    throw new Error('Please check your credentials');
  }
  return response;
};

export const remove = async (url) => {
  const response = await api.delete(url,);
  if (response.status === 400 || response.status === 401) {
    throw new Error('Please check your credentials');
  }
};

export default api;
