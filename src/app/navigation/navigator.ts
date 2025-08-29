import { DemoFeatureView } from '@features/demo-feature';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screenOptions: {
    headerShown: false,
  },
  screens: {
    Home: {
      screen: DemoFeatureView,
    },
  },
});

export const Navigator = createStaticNavigation(RootStack);