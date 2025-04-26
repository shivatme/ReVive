import React, {ReactNode} from 'react';
import {Text, TextProps, TextStyle} from 'react-native';
import defaultStyles from '../config/styles';

interface AppTextProps extends TextProps {
  children: ReactNode;
  style?: TextStyle | TextStyle[];
}

function AppText({children, style, ...otherProps}: AppTextProps) {
  return (
    <Text style={[defaultStyles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
}

export default AppText;
