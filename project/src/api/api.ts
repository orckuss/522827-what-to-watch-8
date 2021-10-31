import axios, { AxiosInstance } from 'axios';
import { REQUEST_BASE_URL, REQUEST_TIMEOUT } from '../constants';

export const createAPI = (): AxiosInstance => {
  const axiosInstance = axios.create({
    baseURL: REQUEST_BASE_URL,
    timeout: REQUEST_TIMEOUT,
  });

  return axiosInstance;
};
