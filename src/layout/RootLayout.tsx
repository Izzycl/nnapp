import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import React, {FC} from 'react';
import BottomNavigation from '../components/BottomNavigation/BottomNavigation';
import HomeRoot from '../screens/Home/HomeRoot';
import SettingsRoot from '../screens/Settings/SettingsRoot';

const Tab = createBottomTabNavigator();

interface RootLayoutProps {}

const RootLayout: FC<RootLayoutProps> = props => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigation {...props} />}>
      <Tab.Screen name="HomeRoot" component={HomeRoot} />
      <Tab.Screen name="SettingsRoot" component={SettingsRoot} />
    </Tab.Navigator>
  );
};

export default RootLayout;
