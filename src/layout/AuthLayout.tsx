import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface AuthLayoutProps {}

const AuthLayout: FC<AuthLayoutProps> = props => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <Text>AuthLayout</Text>
    </View>
  );
};

export default AuthLayout;
