import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import colors from '../config/colors';

type ButtonColor = 'primary' | 'secondary' | 'danger' | string; // Add other color types if necessary

interface AppButtonProps {
  title: string;
  onPress: () => void;
  color?: ButtonColor; // Default color is 'primary', but it can be customized
}

function AppButton({title, onPress, color = 'primary'}: AppButtonProps) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {backgroundColor: colors[color as keyof typeof colors]},
      ]}
      onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: '100%',
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

export default AppButton;
