import { config } from '@core/config';
import { apiFetch } from '@core/services/api-fetch';
import { apiPath } from '../api-path';
import { IDemoDataResponse } from './interface/demoDataResponse.interface';
import { IBaseFailure } from '@core/common/base/baseFailure.interface';
import { GenericAbortSignal } from 'axios';

interface IFetchDemoDataParams {
  signal?: GenericAbortSignal;
}

export const demoData = {
  fetchDemoData: async ({ signal }: IFetchDemoDataParams = {}): Promise<
    IDemoDataResponse | IBaseFailure
  > => {
    try {
      const data: IDemoDataResponse = await apiFetch.getApi(
        config.demoDomain + apiPath.demoEndpoint,
        { signal },
      );
      return data;
    } catch (error: any) {
      const failure: IBaseFailure = {
        errorMessage: error.message,
      };
      return failure;
    }
  },
};
