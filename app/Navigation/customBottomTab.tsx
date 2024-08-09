import * as React from 'react';
import { View, Text } from 'react-native';
import {
  Docs_a,
  Docs_ia,
  Home_a,
  Home_ia,
} from '../Utils/images';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../Utils/colors';
import { FontFamily } from '../Utils/fonts';
import styles from './style';

export const TabIcon = (props: { title: any; icon: string; activeTab: any }) => {

  return (
    <View style={styles.navBotBar}>
      {props.icon === 'home' && props.activeTab ? (
        <Home_a height={hp(6.5)} width={wp(6.5)} />
      ) : props.icon === 'home' && !props.activeTab ? (
        <Home_ia height={hp(6)} width={wp(6)} />
      ) : props.icon === 'docs' && props.activeTab ? (
        <Docs_a height={hp(6.5)} width={wp(6.5)} />
      ) : props.icon === 'docs' && !props.activeTab && (
        <Docs_ia height={hp(6)} width={wp(6)} />
      )
      }
      {props.title !== undefined && (
        <Text
          style={[
            {
              fontFamily: props.activeTab
                ? FontFamily.OutfitBold
                : FontFamily.OutfitRegular,
              color: colors.white,
              opacity: props.activeTab ? 1 : 0.5,
            },
          ]}>
          {props.title}
        </Text>
      )}

    </View>
  );
};
