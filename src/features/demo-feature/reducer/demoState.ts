import { viewState } from '@core/common/view-state/viewState';

interface IDemoState {
  title: string;
  demoFeatureState: string;
}

const initialState: IDemoState = {
  title: 'Old Title',
  demoFeatureState: viewState.initial,
};

export { initialState };
