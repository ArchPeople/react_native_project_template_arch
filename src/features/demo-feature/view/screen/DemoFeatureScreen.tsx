import { StyleSheet, View } from 'react-native';
import React, { memo, useEffect, useRef } from 'react';
import { AppBar, Scaffold, StatusController } from '@app/components/organisms';
import { useSelector } from 'react-redux';
import { RootState } from '@app/store/store';
import { demoSliceApiFunction } from '@features/demo-feature/reducer/demoSlice';
import { useAppDispatch } from '@core/hooks';
import { viewState } from '@core/common/view-state/viewState';
import { assetColors } from '@app/assets';
import { themePadding, themeSystemMode } from '@app/themes';
import { useSystemMode } from '@core/hooks';
import axios from 'axios';

type DemoFeatureScreenProps = {};

export const DemoFeatureScreen: React.FC<DemoFeatureScreenProps> = memo(() => {
  const demoFeatureState = useSelector(
    (state: RootState) => state.demo.demoFeatureState,
  );

  const { systemMode } = useSystemMode();

  const dispatch = useAppDispatch();

  const cancelToken = useRef(axios.CancelToken.source());

  useEffect(() => {
    dispatch(
      demoSliceApiFunction({
        cancelToken: cancelToken.current.token,
      }),
    );
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

  useEffect(() => {
    return () => {
      cancelToken.current.cancel();
    };
  }, []);

  return (
    <Scaffold>
      <AppBar title="Demo Feature" />
      <View
        style={[
          styles.container,
          {
            backgroundColor:
              systemMode == themeSystemMode.light
                ? assetColors.lightMode
                : assetColors.darkMode,
          },
        ]}
      >
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
            dispatch(
              demoSliceApiFunction({ cancelToken: cancelToken.current.token }),
            );
          }}
        />
      </View>
    </Scaffold>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...themePadding.ph16,
  },
});
