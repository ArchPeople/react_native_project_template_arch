import { configureStore } from '@reduxjs/toolkit';
import systemModeReducer from '@core/hooks/system-mode/useSystemMode';
import demoReducer from '@features/demo-feature/reducer/demoSlice';

export const store = configureStore({
  reducer: {
    // @plop-reducer-anchor <-- Do not remove
    demo: demoReducer,
    systemMode: systemModeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
