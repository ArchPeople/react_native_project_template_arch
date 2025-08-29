import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './demoState';

export const demoSlice = createSlice({
  name: 'demo',
  initialState,
  reducers: {
    setTitle: state => {
      state.title = 'Nothing';
    },
  },
});

export const { setTitle } = demoSlice.actions;

export default demoSlice.reducer;
