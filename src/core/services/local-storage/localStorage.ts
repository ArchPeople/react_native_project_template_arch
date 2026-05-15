import { createAsyncStorage } from '@react-native-async-storage/async-storage';

const storage = createAsyncStorage('app-storage');

export const localStorage = {
  setValue: async (key: string, value: string) => {
    try {
      await storage.setItem(key, value);
    } catch (e) {
      console.error('Storage Set Error:', e);
    }
  },
  getValue: async (key: string) => {
    try {
      return await storage.getItem(key);
    } catch (e) {
      console.error('Storage Get Error:', e);
      return null;
    }
  },
  deleteValue: async (key: string) => {
    try {
      await storage.removeItem(key);
    } catch (e) {
      console.error('Storage Delete Error:', e);
    }
  },
  clearAllValue: async () => {
    try {
      await storage.clear();
    } catch (e) {
      console.error('Storage Clear Error:', e);
    }
  },
};
