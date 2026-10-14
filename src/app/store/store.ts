import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    // @plop-reducer-anchor <-- Do not remove
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
