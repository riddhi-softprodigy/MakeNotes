import React from 'react';
import {Text, TextStyle} from 'react-native';
import styles from './style';

interface Props {
  children: any;
  style?:TextStyle;
  onPress?: () => void;
  numberOfLines?: 1;
}

const AppText = ({children, style, onPress, numberOfLines}: Props) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      onPress={onPress}
      style={[styles.text, style]}>
      {children}
    </Text>
  );
};

export default AppText;
