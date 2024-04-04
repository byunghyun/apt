import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    try {
      //
    } catch (error) {
      return Promise.reject(error);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response: AxiosResponse<any, any>) => {
    try {
      //
    } catch (error) {
      return Promise.reject(error);
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);
