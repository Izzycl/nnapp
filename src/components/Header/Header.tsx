import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface HeaderProps {}

const Header: FC<HeaderProps> = props => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <Text>Header</Text>
    </View>
  );
};

export default Header;
