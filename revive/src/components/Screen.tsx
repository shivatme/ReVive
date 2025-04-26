import React, {ReactNode} from 'react';
import {SafeAreaView, StyleSheet, ViewStyle, StyleProp} from 'react-native';

interface ScreenProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

function Screen({children, style}: ScreenProps) {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default Screen;
