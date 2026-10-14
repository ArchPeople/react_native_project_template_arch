import { configureStore } from '@reduxjs/toolkit';
import demoReducer from '@features/demo-feature/reducer/demoSlice';

export const store = configureStore({
  reducer: {
    // @plop-reducer-anchor <-- Do not remove
    demo: demoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
