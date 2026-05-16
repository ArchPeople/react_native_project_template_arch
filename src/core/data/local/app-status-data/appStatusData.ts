import { localStorage } from '@core/services/local-storage';
import { storageKey } from '../storageKey';

const key = storageKey.appStatusStorageKey;

export const appStatusData = {
  setAppStatusData: (value: boolean) => {
    localStorage.setValue(key, String(value));
  },
  getAppStatusData: () => {
    const value = localStorage.getValue(key);
    if (value != null) {
      return value === 'true' ? true : false;
    } else {
      return false;
    }
  },
  deleteAppStatusData: () => {
    localStorage.deleteValue(key);
  },
};
