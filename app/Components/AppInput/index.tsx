import React from 'react';
import {
  KeyboardTypeOptions,
  Text,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import styles from './style';
import colors from '../../Utils/colors';

interface Props {
  onChangeText: ((text: string) => void) | undefined;
  value: string;
  multiline?: boolean;
  placeholder?: string;
  onFocus?: () => void;
  secureTextEntry?: boolean;
  maxLength?: number;
  disabled?: boolean;
  keyboardType?: KeyboardTypeOptions;
  inputContainer?: ViewStyle;
  textInputStyles?: ViewStyle | any;
  numberOfLines?: any;
  container?: ViewStyle;
  titleStyle?: TextStyle;
  titleMain?: ViewStyle;
  inputStyle?: TextStyle;
  title?: string;
  LeftIcon?: any;
  RightIcon?: any;
  editable?: boolean;
  onPressRightIcon?: () => void;
  onPressLeftIcon?: () => void;
  leftIconDisabled?: boolean;
  rightIconDisabled?: boolean;
  errorTitle?: string;
  showError?: Boolean;
}

const AppInput = ({
  multiline = false,
  placeholder = '',
  secureTextEntry = false,
  onChangeText,
  disabled = true,
  maxLength,
  keyboardType,
  value,
  onFocus,
  LeftIcon,
  title,
  container,
  titleMain,
  titleStyle,
  inputStyle,
  RightIcon,
  editable = true,
  onPressRightIcon,
  onPressLeftIcon,
  leftIconDisabled,
  rightIconDisabled,
  errorTitle,
  showError,
}: Props) => {
  return (
    <View>
      <TouchableOpacity
        disabled={disabled}
        style={[
          styles.container,
          container,
          LeftIcon &&
            RightIcon && {
              justifyContent: 'space-between',
              paddingHorizontal: wp(2),
            },
        ]}>
        {title && (
          <View style={[styles.titleMain, titleMain]}>
            <Text style={[styles.title, titleStyle]}>{title}</Text>
          </View>
        )}
        {LeftIcon && (
          <TouchableOpacity
            onPress={() => onPressLeftIcon && onPressLeftIcon()}
            disabled={leftIconDisabled}>
            <LeftIcon height={hp(6)} width={wp(6)} />
          </TouchableOpacity>
        )}

        <TextInput
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          style={[
            styles.input,
            inputStyle,
            LeftIcon &&
              RightIcon && {
                width: '80%',
                marginLeft: 0,
              },
            (LeftIcon || RightIcon) && {
              width: '88%',
            },
          ]}
          placeholderTextColor={colors.transparentBlack}
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          editable={editable}
          onFocus={onFocus}
          maxLength={maxLength}
          multiline={multiline}
        />
        {RightIcon && (
          <TouchableOpacity
            disabled={rightIconDisabled}
            onPress={() => onPressRightIcon && onPressRightIcon()}>
            <RightIcon height={hp(6)} width={wp(6)} />
          </TouchableOpacity>
        )}
      </TouchableOpacity>
      <View
        style={{
          marginTop: hp(0.3),
        }}>
        {showError && <Text style={styles.errorTitle}>{errorTitle}</Text>}
      </View>
    </View>
  );
};
export default AppInput;
