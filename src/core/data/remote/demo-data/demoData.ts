import { config } from '@core/config';
import { apiFetch } from '@core/services/api-fetch';
import { apiPath } from '../api-path';
import { IDemoDataResponse } from './interface/demoDataResponse.interface';
import { IBaseFailure } from '@core/common/base/baseFailure.interface';
import { CancelToken } from 'axios';

interface IFetchDemoDataParams {
  cancelToken?: CancelToken;
}

export const demoData = {
  fetchDemoData: async ({ cancelToken }: IFetchDemoDataParams = {}): Promise<
    IDemoDataResponse | IBaseFailure
  > => {
    try {
      const data: IDemoDataResponse = await apiFetch.getApi(
        config.demoDomain + apiPath.demoEndpoint,
        { cancelToken },
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
