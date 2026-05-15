// @plop-navigation-import-anchor <-- Do not remove
import { DemoFeatureView } from '@features/demo-feature';
import { LandingView } from '@features/landing';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { demoFeatureNavigationParam } from './param/demoFeatureNavigationParam';

export type RootStackParamList = {
  // @plop-navigation-param-anchor <-- Do not remove
  Landing: demoFeatureNavigationParam;
  Demo: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>({
  initialRouteName: 'Landing',
  screenOptions: {
    headerShown: false,
  },
  screens: {
    // @plop-navigation-screen-anchor <-- Do not remove
    Landing: {
      screen: LandingView,
    },
    Demo: {
      screen: DemoFeatureView,
    },
  },
});

export const Navigator = createStaticNavigation(RootStack);
