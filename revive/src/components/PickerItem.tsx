import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import AppText from './AppText';

interface PickerItemProps {
  item: {
    label: string;
    value: string | number;
  };
  onPress: () => void;
}

const PickerItem: React.FC<PickerItemProps> = ({item, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{item.label}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});

export default PickerItem;
