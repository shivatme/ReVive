import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from './Icon';
import AppText from './AppText';

interface CategoryItem {
  label: string;
  icon: string;
  backgroundColor: string;
}

interface CategoryPickerItemProps {
  item: CategoryItem;
  onPress: () => void;
}

const CategoryPickerItem: React.FC<CategoryPickerItemProps> = ({
  item,
  onPress,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Icon
          backgroundColor={item.backgroundColor}
          name={item.icon}
          size={80}
        />
        <AppText style={styles.label}>{item.label}</AppText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '33%',
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: 'center',
  },
  label: {
    marginTop: 5,
    textAlign: 'center',
  },
});

export default CategoryPickerItem;
