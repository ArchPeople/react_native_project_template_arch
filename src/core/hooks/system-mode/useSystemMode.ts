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
}

const initialState: SystemModeState = {
  systemMode: themeSystemMode.light,
};

export const systemModeSlice = createSlice({
  name: 'systemMode',
  initialState,
  reducers: {
    setSystemMode: (state, action: PayloadAction<SystemMode>) => {
      state.systemMode = action.payload;
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
  const systemScheme = useColorScheme(); // detect system theme
  const dispatch = useAppDispatch();
  const systemMode = useSelector(
    (state: RootState) => state.systemMode.systemMode,
  );

  useEffect(() => {
    changeMode(
      systemScheme === 'dark' ? themeSystemMode.dark : themeSystemMode.light,
    );
  }, [systemScheme]);

  const changeMode = (newMode: SystemMode) => {
    dispatch(setSystemMode(newMode));
  };

  const switchMode = () => {
    dispatch(toggleSystemMode());
  };

  return { systemMode, changeMode, switchMode };
};
