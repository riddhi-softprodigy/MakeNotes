import React from 'react';
import {TextStyle, TouchableOpacity, ViewStyle} from 'react-native';
import AppText from '../AppText/AppText';
import styles from './styles';

interface Props {
  title: string;
  onPress: () => void;
  buttonStyle?: ViewStyle;
  disabled?: boolean;
  titleStyle?: TextStyle;
}

const AppButton = ({
  onPress,
  title = '',
  buttonStyle,
  titleStyle,
  disabled,
}: Props) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={() => onPress()}
      style={[styles.button, buttonStyle]}>
      <AppText style={[styles.text, titleStyle]}>{title}</AppText>
    </TouchableOpacity>
  );
};

export default AppButton;
