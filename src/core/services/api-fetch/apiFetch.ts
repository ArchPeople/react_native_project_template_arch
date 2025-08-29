import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import {
  IDeleteApi,
  IGetApi,
  IPostApi,
  IPutApi,
} from './interface/apiFetch.interface';

const api = axios.create({
  timeout: 10000,
});

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  error => {
    return Promise.reject(error);
  },
);

export const apiFetch = {
  getApi: async (url: string, config?: IGetApi) => {
    try {
      const response: AxiosResponse = await api.get(url, {
        params: config?.params,
        headers: config?.headers,
        cancelToken: config?.cancelToken,
      });
      return response.data;
    } catch (error: any) {
      return null;
    }
  },

  postApi: async (url: string, config?: IPostApi) => {
    try {
      const response: AxiosResponse = await api.post(url, config?.body, {
        params: config?.params,
        headers: config?.headers,
        cancelToken: config?.cancelToken,
      });
      return response.data;
    } catch (error: any) {
      return null;
    }
  },

  putApi: async (url: string, config?: IPutApi) => {
    try {
      const response: AxiosResponse = await api.put(url, config?.body, {
        params: config?.params,
        headers: config?.headers,
        cancelToken: config?.cancelToken,
      });
      return response.data;
    } catch (error: any) {
      return null;
    }
  },

  deleteApi: async (url: string, config?: IDeleteApi) => {
    try {
      const response: AxiosResponse = await api.delete(url, {
        params: config?.params,
        headers: config?.headers,
        cancelToken: config?.cancelToken,
      });
      return response.data;
    } catch (error: any) {
      return null;
    }
  },
};
