import axios, { AxiosInstance } from 'axios';
import { baseUrl } from '.';

export const api: AxiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 1000 * 20,
  headers: {
    ContentType: 'application/json',
    AccessControlAllowOrigin: '*',
  },
});

api.interceptors.request.use((request) => {
  return request;
});

api.interceptors.response.use((response) => {
  return response;
});
