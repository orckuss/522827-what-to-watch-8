import axios, { AxiosError, AxiosInstance } from 'axios';
import { AUTH_TOKEN_KEY_NAME, HttpCode, REQUEST_BASE_URL, REQUEST_TIMEOUT } from 'src/constants';
import { TokenStorage } from 'src/utils/token';

export type UnauthorizedCallback = () => void;

const storage = new TokenStorage(AUTH_TOKEN_KEY_NAME);

export const createAPI = (onUnauthorized: UnauthorizedCallback): AxiosInstance => {
  const axiosInstance = axios.create({
    baseURL: REQUEST_BASE_URL,
    timeout: REQUEST_TIMEOUT,
  });

  axiosInstance.interceptors.request.use(
    (config) => {
      const token = storage.getToken();

      if (token) {
        config.headers['X-Token'] = token;
      }

      return config;
    },
  );

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (error.response?.status === HttpCode.Unauthorized) {
        onUnauthorized();
      }

      return Promise.reject(error);
    },
  );

  return axiosInstance;
};
