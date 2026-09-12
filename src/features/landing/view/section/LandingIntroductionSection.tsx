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
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@app/navigation/navigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import { localizationUtil, screenSizeUtil } from '@core/general-helpers/utils';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Demo'>;

type LandingIntroductionSectionProps = {};

export const LandingIntroductionSection: React.FC<LandingIntroductionSectionProps> =
  memo(() => {
    const { systemMode, setMode } = useSystemMode();
    const navigation = useNavigation<NavigationProp>();
    const { t } = useTranslation();

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
          <TextBase style={themeFonts.h4ExtraBold}>
            {t('welcome_message', { name: 'Arch' })}
          </TextBase>
          <Gap height={ds(20)} />
          <TextBase style={[themeFonts.bodySmLight, { textAlign: 'center' }]}>
            {t('introduction_message')}
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
          <View style={[{ flexDirection: 'row', gap: ds(20) }]}>
            <PressableBase
              onPress={() => {
                localizationUtil.changeLanguage('en');
              }}
            >
              <TextBase style={[themeFonts.bodyLgRegular]}>🇬🇧</TextBase>
            </PressableBase>
            <PressableBase
              onPress={() => {
                localizationUtil.changeLanguage('fr');
              }}
            >
              <TextBase style={[themeFonts.bodyLgRegular]}>🇫🇷</TextBase>
            </PressableBase>
          </View>
          <Gap height={ds(20)} />
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
                {t('light_mode')}
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
                {t('dark_mode')}
              </TextBase>
            </PressableBase>
          </View>
        </View>
        <Gap height={ds(20)} />
        <TextBase style={[themeFonts.bodyXsLight, { textAlign: 'center' }]}>
          ver 2.2.1
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
