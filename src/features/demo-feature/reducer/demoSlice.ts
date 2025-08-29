import { viewState } from '@core/common/view-state/viewState';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { demoFeatureRepository } from '../repository/demoFeatureRepository';
import { initialState } from './demoState';

// API functions
const demoSliceApiFunction = createAsyncThunk(
  'demo/demoSliceApiFunction',
  async () => {
    const response = await demoFeatureRepository.getDemoData();
    return response;
  },
);

export const demoSlice = createSlice({
  name: 'demo',
  initialState,
  reducers: {
    // Regular functions
    setTitle: state => {
      state.title = 'Nothing';
    },
    demoSliceFunction: state => {
      state.demoFeatureState = viewState.success;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(demoSliceApiFunction.pending, state => {
        state.demoFeatureState = viewState.loading;
      })
      .addCase(demoSliceApiFunction.fulfilled, (state, action) => {
        if ('errorMessage' in action.payload) {
          state.demoFeatureState = viewState.error;
        } else {
          state.demoFeatureState = viewState.success;
          state.title = action.payload.title;
        }
      })
      .addCase(demoSliceApiFunction.rejected, state => {
        state.demoFeatureState = viewState.error;
      });
  },
});

export const { setTitle, demoSliceFunction } = demoSlice.actions;
export { demoSliceApiFunction };

export default demoSlice.reducer;
