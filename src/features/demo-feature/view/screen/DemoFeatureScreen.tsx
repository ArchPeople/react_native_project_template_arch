import { StyleSheet, View } from 'react-native';
import React, { memo, useEffect } from 'react';
import { AppBar, Scaffold, StatusController } from '@app/components/organisms';
import { assetColors } from '@app/assets';
import { themePadding, themeSystemMode } from '@app/themes';
import { useSystemModeStore } from '@app/global-state';
import { useDemoFeatureGetDemoData } from '@features/demo-feature/api/useDemoFeatureGetDemoData';

type DemoFeatureScreenProps = {};

export const DemoFeatureScreen: React.FC<DemoFeatureScreenProps> = memo(() => {
  const systemMode = useSystemModeStore(state => state.systemMode);
  const { data, isFetching, isError, error, refetch } =
    useDemoFeatureGetDemoData();

  useEffect(() => {
    if (isFetching) {
      // Do something when fetching
    } else if (data) {
      // Do something when data is available
    } else if (isError && error) {
      // Do something when error
    }
  }, [isFetching, data, isError]);

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
          disabled={isFetching}
          statusColor={
            isFetching
              ? assetColors.yellow
              : isError
                ? assetColors.red
                : assetColors.green
          }
          onPressed={() => {
            refetch();
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
