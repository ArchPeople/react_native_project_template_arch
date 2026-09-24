import { GenericAbortSignal } from 'axios';

export interface IGetApi {
  params?: Record<string, any>;
  headers?: Record<string, any>;
  signal?: GenericAbortSignal;
}

export interface IPostApi {
  body?: Record<string, any>;
  params?: Record<string, any>;
  headers?: Record<string, any>;
  signal?: GenericAbortSignal;
}

export interface IPutApi {
  body?: Record<string, any>;
  params?: Record<string, any>;
  headers?: Record<string, any>;
  signal?: GenericAbortSignal;
}

export interface IDeleteApi {
  body?: Record<string, any>;
  params?: Record<string, any>;
  headers?: Record<string, any>;
  signal?: GenericAbortSignal;
}
