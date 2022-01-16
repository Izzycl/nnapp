import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface SettingsRootProps {}

const SettingsRoot: FC<SettingsRootProps> = props => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <Text>SettingsRoot</Text>
    </View>
  );
};

export default SettingsRoot;
