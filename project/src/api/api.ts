import axios, { AxiosError, AxiosInstance } from 'axios';
import { HttpCode, REQUEST_BASE_URL, REQUEST_TIMEOUT } from 'src/constants';

export type UnauthorizedCallback = () => void;

export const createAPI = (onUnauthorized: UnauthorizedCallback): AxiosInstance => {
  const axiosInstance = axios.create({
    baseURL: REQUEST_BASE_URL,
    timeout: REQUEST_TIMEOUT,
  });

  axiosInstance.interceptors.request.use(
    (config) => config,
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
