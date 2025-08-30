import { StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';
import { AppBar, Scaffold, StatusController } from '@app/components/organisms';
import { useSelector } from 'react-redux';
import { RootState } from '@app/store/store';
import { demoSliceApiFunction } from '@features/demo-feature/reducer/demoSlice';
import { useAppDispatch } from '@core/hooks';
import { viewState } from '@core/common/view-state/viewState';
import { assetColors } from '@app/assets';
import { themePadding } from '@app/themes';

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
        <StatusController
          title={'Check API Status'}
          buttonLabel={'Check'}
          disabled={demoFeatureState === viewState.loading}
          statusColor={
            demoFeatureState === viewState.loading
              ? assetColors.yellow
              : demoFeatureState === viewState.success
              ? assetColors.green
              : assetColors.red
          }
          onPressed={() => {
            dispatch(demoSliceApiFunction());
          }}
        />
      </View>
    </Scaffold>
  );
};

export default DemoFeatureScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: assetColors.systemMode,
    ...themePadding.ph16,
  },
});
