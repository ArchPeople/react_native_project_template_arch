import { configureStore } from '@reduxjs/toolkit';
import systemModeReducer from '@core/hooks/system-mode/useSystemMode';
import demoReducer from '@features/demo-feature/reducer/demoSlice';

export const store = configureStore({
  reducer: {
    systemMode: systemModeReducer, // Reducer for system mode management (Light or Dark)
    demo: demoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
