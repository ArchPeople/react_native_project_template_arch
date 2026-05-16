import { createMMKV } from 'react-native-mmkv';

const storage = createMMKV();

export const localStorage = {
  setValue: (key: string, value: string) => {
    try {
      storage.set(key, value);
    } catch (e) {
      console.error('Storage Set Error:', e);
    }
  },

  getValue: (key: string) => {
    try {
      return storage.getString(key) ?? null;
    } catch (e) {
      console.error('Storage Get Error:', e);
      return null;
    }
  },

  deleteValue: (key: string) => {
    try {
      storage.remove(key);
    } catch (e) {
      console.error('Storage Delete Error:', e);
    }
  },

  clearAllValue: () => {
    try {
      storage.clearAll();
    } catch (e) {
      console.error('Storage Clear Error:', e);
    }
  },
};
