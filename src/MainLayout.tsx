import {NavigationContainer} from '@react-navigation/native';
import React, {FC} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AuthLayout from './layout/AuthLayout';
import RootLayout from './layout/RootLayout';
import ThemeProvider from './utils/ThemeProvider';

interface MainLayoutProps {}

const MainLayout: FC<MainLayoutProps> = props => {
  const isLogged: boolean = true;
  return (
    <ThemeProvider>
      <NavigationContainer>
        {isLogged ? <RootLayout /> : <AuthLayout />}
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default MainLayout;
