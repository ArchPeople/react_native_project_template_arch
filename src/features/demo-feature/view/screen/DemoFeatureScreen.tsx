import { StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';
import { AppBar, Scaffold } from '@app/components/organisms';
import { useSelector } from 'react-redux';
import { RootState } from '@app/store/store';
import { demoSliceApiFunction } from '@features/demo-feature/reducer/demoSlice';
import { useAppDispatch } from '@core/hooks';
import { viewState } from '@core/common/view-state/viewState';
import { assetColors } from '@app/assets';
import { ButtonBase } from '@app/components/atoms';

const DemoFeatureScreen = () => {
  const demoFeatureState = useSelector(
    (state: RootState) => state.demo.demoFeatureState,
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(demoSliceApiFunction());
  }, []);

  useEffect(() => {
    if (demoFeatureState === viewState.loading) {
      // Do something when loading
    } else if (demoFeatureState === viewState.success) {
      // Do something when success
    } else if (demoFeatureState === viewState.error) {
      // Do something when error
    }
  }, [demoFeatureState]);

  return (
    <Scaffold>
      <AppBar title="Demo Feature" />
      <View style={styles.container}>
        <ButtonBase label={'Check'} />
      </View>
    </Scaffold>
  );
};

export default DemoFeatureScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: assetColors.systemMode,
  },
});
