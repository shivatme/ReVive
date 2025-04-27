import React from 'react';
import AppText from '../AppText';
import {StyleSheet, TextStyle} from 'react-native';

interface ErrorMessageProps {
  error: any;
  visible: any;
}

function ErrorMessage({error, visible}: ErrorMessageProps) {
  if (!error || !visible) return null;
  return <AppText style={styles.error}>{error}</AppText>;
}

const styles = StyleSheet.create({
  error: {color: 'red'} as TextStyle, // Ensuring that the style is typed as TextStyle
});

export default ErrorMessage;
