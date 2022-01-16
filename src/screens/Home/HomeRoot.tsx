import {useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Robot from '../../assets/svg/welding-robot.svg';
interface HomeRootProps {}

const HomeRoot: FC<HomeRootProps> = props => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <Robot />
    </View>
  );
};

export default HomeRoot;
