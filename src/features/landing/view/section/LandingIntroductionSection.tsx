import { Image, StyleSheet, View } from 'react-native';
import React, { memo } from 'react';
import {
  ButtonBase,
  Gap,
  GradientView,
  PressableBase,
  Spacer,
  TextBase,
} from '@app/components/atoms';
import { ds } from '@core/general-helpers/extensions';
import {
  themeFonts,
  themeGradient,
  themePadding,
  themeSystemMode,
} from '@app/themes';
import { useSystemMode } from '@core/hooks';
import { assetColors, assetImages } from '@app/assets';
import { screenSizeUtil } from '@core/general-helpers/utils/screen-size/screnSizeUtil';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@app/navigation/navigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Demo'>;

type LandingIntroductionSectionProps = {};

export const LandingIntroductionSection: React.FC<LandingIntroductionSectionProps> =
  memo(() => {
    const { systemMode, setMode } = useSystemMode();
    const navigation = useNavigation<NavigationProp>();

    return (
      <GradientView
        colors={[
          systemMode == themeSystemMode.light
            ? assetColors.lightYellow
            : assetColors.maroonRed,
          systemMode == themeSystemMode.light
            ? assetColors.lightRed
            : assetColors.darkPurple,
        ]}
        start={themeGradient.topLeft}
        end={themeGradient.bottomRight}
        style={styles.main}
      >
        <View style={styles.container}>
          <Gap height={ds(150)} />
          <Image
            source={
              systemMode == themeSystemMode.light
                ? assetImages.archLogoBlack
                : assetImages.archLogoWhite
            }
            style={{ height: ds(80), resizeMode: 'contain' }}
          />
          <Gap height={ds(80)} />
          <TextBase style={themeFonts.h4ExtraBold}>Welcome to Arch</TextBase>
          <Gap height={ds(20)} />
          <TextBase style={[themeFonts.bodySmLight, { textAlign: 'center' }]}>
            Check the demo feature showcase by clicking the button below.
          </TextBase>
          <Gap height={ds(40)} />
          <ButtonBase
            width={ds(180)}
            label={'Demo Feature'}
            onPress={() => {
              navigation.navigate('Demo');
            }}
          />
          <Spacer />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <PressableBase
              onPress={() => {
                setMode(themeSystemMode.light);
              }}
            >
              <TextBase
                style={
                  systemMode == themeSystemMode.light
                    ? themeFonts.bodyXsMedium
                    : themeFonts.bodyXsLight
                }
              >
                Light Mode
              </TextBase>
            </PressableBase>
            <TextBase> | </TextBase>
            <PressableBase
              onPress={() => {
                setMode(themeSystemMode.dark);
              }}
            >
              <TextBase
                style={
                  systemMode == themeSystemMode.dark
                    ? themeFonts.bodyXsMedium
                    : themeFonts.bodyXsLight
                }
              >
                Dark Mode
              </TextBase>
            </PressableBase>
          </View>
        </View>
        <Gap height={ds(20)} />
        <TextBase style={[themeFonts.bodyXsLight, { textAlign: 'center' }]}>
          ver 1.3.0
        </TextBase>
        <Gap height={ds(screenSizeUtil.getBottomBarHeight) + ds(20)} />
      </GradientView>
    );
  });

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    ...themePadding.phXXL,
  },
});
