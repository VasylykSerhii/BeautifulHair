import axios, { AxiosInstance } from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import { api, URLS, baseUrl } from '.';
import store from 'store/store';
import { login, logout } from 'store';

export const apiAuth: AxiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 1000 * 20,
  headers: {
    ContentType: 'application/json',
    AccessControlAllowOrigin: '*',
  },
});

const getAccessToken = () => localStorage.getItem('token') || '';

// request hendler
apiAuth.interceptors.request.use((request: any) => {
  request.headers.Authorization = `Bearer ${getAccessToken()}`;
  return request;
});

const refreshAuthLogic = async () => {
  const refreshToken = localStorage.getItem('refresh_token') || '';

  try {
    const { data } = await api.post(URLS.refreshTokens, {
      refresh_token: refreshToken,
    });

    store.dispatch(login(data.user, data.accessToken) as any);
    return await Promise.resolve();
  } catch (error) {
    store.dispatch(logout() as any);
    return Promise.reject(error);
  }
};

createAuthRefreshInterceptor(apiAuth, refreshAuthLogic, {
  statusCodes: [401],
});
