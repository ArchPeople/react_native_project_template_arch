import { config } from '@core/config';
import { apiFetch } from '@core/services/api-fetch';
import { apiPath } from '../api-path';
import { IDemoDataResponse } from './interface/demoDataResponse.interface';
import { IBaseFailure } from '@core/common/base/baseFailure.interface';

export const demoData = {
  fetchDemoData: async (): Promise<IDemoDataResponse | IBaseFailure> => {
    try {
      const data: IDemoDataResponse = await apiFetch.getApi(
        config.demoDomain + apiPath.demoEndpoint,
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
