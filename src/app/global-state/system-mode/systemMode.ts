import { themeSystemMode } from '@app/themes';
import { create } from 'zustand';

type systemModeState = {
  systemMode: string | null;
  setsystemMode: (theme: string) => void;
};

export const useSystemModeStore = create<systemModeState>(set => ({
  systemMode: themeSystemMode.light,
  setsystemMode: systemMode => set({ systemMode }),
}));
