import React, {FC, PropsWithChildren, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {BasicTheme, Colors} from '../styles/index';
import {Theme} from '../styles/modules/styles';
interface ThemeProviderProps {}

export const ThemeContext = React.createContext<Theme>(BasicTheme);
const ThemeProvider = (props: PropsWithChildren<ThemeProviderProps>) => {
  const {children} = props;
  const [isLightTheme, setLightTheme] = useState(true);
  const toggleTheme = () =>
    setLightTheme((previousState: boolean) => !previousState);

  const CustomTheme: Theme = {
    ...BasicTheme,
    toggleTheme: toggleTheme,
    isLightTheme: isLightTheme,
  };

  return (
    <ThemeContext.Provider value={CustomTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
