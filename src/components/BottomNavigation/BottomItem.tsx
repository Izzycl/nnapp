import {useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface BottomItemProps {}

const BottomItem: FC<BottomItemProps> = props => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  const onPresTab = () => {};

  return (
    <View style={styles.container}>
      <Text>BottomItem</Text>
    </View>
  );
};

export default BottomItem;
