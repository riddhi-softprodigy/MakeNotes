import {ActivityIndicator, View} from 'react-native';
import React from 'react';
import styles from './style';
import COLORS from '../../Utils/colors';

export const Loader = (props: any) => {
  const {show} = props;

  if (!show) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.modalContent}>
          <ActivityIndicator size="large" color={COLORS.black} />
        </View>
      </View>
    );
  }
};

export const HalfLoader = () => (
  <ActivityIndicator size="small" color={COLORS.black} />
);
