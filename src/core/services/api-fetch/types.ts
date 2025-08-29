import { CancelToken } from 'axios';

export interface IGetApi {
  params?: Record<string, any>;
  headers?: Record<string, any>;
  cancelToken?: CancelToken;
}

export interface IPostApi {
  body?: Record<string, any>;
  params?: Record<string, any>;
  headers?: Record<string, any>;
  cancelToken?: CancelToken;
}

export interface IPutApi {
  body?: Record<string, any>;
  params?: Record<string, any>;
  headers?: Record<string, any>;
  cancelToken?: CancelToken;
}

export interface IDeleteApi {
  body?: Record<string, any>;
  params?: Record<string, any>;
  headers?: Record<string, any>;
  cancelToken?: CancelToken;
}
