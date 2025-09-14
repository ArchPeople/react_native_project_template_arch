import { DemoFeatureView } from '@features/demo-feature';
import { LandingView } from '@features/landing';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { demoFeatureNavigationParam } from './param/demoFeatureNavigationParam';

export type RootStackParamList = {
  Landing: demoFeatureNavigationParam;
  Demo: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>({
  initialRouteName: 'Landing',
  screenOptions: {
    headerShown: false,
  },
  screens: {
    Landing: {
      screen: LandingView,
    },
    Demo: {
      screen: DemoFeatureView,
    },
  },
});

export const Navigator = createStaticNavigation(RootStack);
