import { create } from 'zustand';

type demoFeatureState = {
  data: string | null;
  setdata: (theme: string) => void;
};

export const useDemoFeatureStore = create<demoFeatureState>(set => ({
  data: null,
  setdata: data => set({ data }),
}));
