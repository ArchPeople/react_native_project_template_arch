import AsyncStorage from '@react-native-async-storage/async-storage';

export const localStorage = {
  setValue: async (key: string, value: string) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {}
  },
  getValue: async (key: string) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value != null) {
        return value;
      }
    } catch (e) {
      return null;
    }
  },
  deleteValue: async (key: string) => {
    try {
      await AsyncStorage.removeItem('@MyApp_key');
    } catch (e) {}
  },
  clearAllValue: async () => {
    try {
      await AsyncStorage.clear();
    } catch (e) {}
  },
};
