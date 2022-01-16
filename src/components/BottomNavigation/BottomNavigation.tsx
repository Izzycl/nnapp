import {
  BottomTabBarOptions,
  BottomTabBarProps,
} from '@react-navigation/bottom-tabs';
import React, {FC, useEffect} from 'react';
import {View, Text, StyleSheet, Pressable, Alert, Switch} from 'react-native';
import Reactotron from 'reactotron-react-native';
import useTheme from '../../hooks/useTheme';
import BottomItem from './BottomItem';
const BottomNavigation = (props: BottomTabBarProps<BottomTabBarOptions>) => {
  const {state, descriptors} = props;
  const {routes} = state;
  Reactotron.log!(state);
  const {colors, isLightTheme} = useTheme();
  const styles = StyleSheet.create({
    base: {
      width: '100%',
      height: 60,
      backgroundColor: isLightTheme ? colors.secondary : colors.primary,
      display: 'flex',
      flexDirection: 'row',
    },
  });

  return (
    <View style={styles.base}>
      {routes.map((route, idx: number) => (
        <BottomItem key={idx} />
      ))}
    </View>
  );
};

export default BottomNavigation;
