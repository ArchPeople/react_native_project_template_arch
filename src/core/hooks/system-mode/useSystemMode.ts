import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useAppDispatch } from '../app-dispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { RootState } from '@app/store/store';
import { themeSystemMode } from '@app/themes';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';

type SystemMode = String;

interface SystemModeState {
  systemMode: SystemMode;
  changedManually: boolean;
}

const initialState: SystemModeState = {
  systemMode: themeSystemMode.light,
  changedManually: false,
};

export const systemModeSlice = createSlice({
  name: 'systemMode',
  initialState,
  reducers: {
    setSystemMode: (state, action: PayloadAction<SystemMode>) => {
      state.systemMode = action.payload;
      state.changedManually = true;
    },
    toggleSystemMode: state => {
      state.systemMode =
        state.systemMode === themeSystemMode.light
          ? themeSystemMode.dark
          : themeSystemMode.light;
    },
  },
});

export const { setSystemMode, toggleSystemMode } = systemModeSlice.actions;
export default systemModeSlice.reducer;

export const useSystemMode = () => {
  const systemScheme = useColorScheme();
  const dispatch = useAppDispatch();
  const systemMode = useSelector(
    (state: RootState) => state.systemMode.systemMode,
  );
  const changedManually = useSelector(
    (state: RootState) => state.systemMode.changedManually,
  );

  useEffect(() => {
    if (!changedManually) {
      setMode(
        systemScheme === 'light' ? themeSystemMode.light : themeSystemMode.dark,
      );
    }
  }, [systemScheme]);

  const setMode = (newMode: SystemMode) => {
    dispatch(setSystemMode(newMode));
  };

  const switchMode = () => {
    dispatch(toggleSystemMode());
  };

  return { systemMode, setMode, switchMode };
};
