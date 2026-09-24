import { IBaseFailure } from '@core/common/base/baseFailure.interface';
import { demoData } from '@core/data/remote';
import { IDemoDataResponse } from '@core/data/remote/demo-data/interface/demoDataResponse.interface';
import { GenericAbortSignal } from 'axios';

interface IgetDemoDataParams {
  signal?: GenericAbortSignal;
}

export const demoFeatureRepository = {
  getDemoData: async ({ signal }: IgetDemoDataParams = {}): Promise<
    IDemoDataResponse | IBaseFailure
  > => {
    const result = await demoData.fetchDemoData({ signal });
    return result;
  },
};
