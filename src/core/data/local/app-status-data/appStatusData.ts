import { localStorage } from '@core/services/local-storage';
import { storageKey } from '../storageKey';

const key = storageKey.appStatusStorageKey;

export const appStatusData = {
  setAppStatusData: async (value: boolean) => {
    await localStorage.setValue(key, String(value));
  },
  getAppStatusData: async () => {
    const value = await localStorage.getValue(key);
    if (value != null) {
      return value === 'true' ? true : false;
    } else {
      return false;
    }
  },
  deleteAppStatusDaya: async () => {
    await localStorage.deleteValue(key);
  },
};
