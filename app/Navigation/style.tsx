import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import Colors from '../Utils/colors';
import colors from '../Utils/colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {FontSize} from '../Utils/fonts';

interface Props {
  splash: ViewStyle;
  barStyle: ViewStyle;
  navBotBar: ViewStyle;
  unreadView: ViewStyle;
  unreadCount: TextStyle;
}

const styles = StyleSheet.create<Props>({
  splash: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  barStyle: {
    backgroundColor: colors.blueColor,
    height: hp(10),
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  navBotBar: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  unreadView: {
    position: 'absolute',
    backgroundColor: colors.red,
    paddingHorizontal: 2,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    top: 8,
    right: 12,
    height: 20,
    minWidth: 20,
  },
  unreadCount: {
    fontSize: FontSize.h1_3,
    color: Colors.white,
  },
});
export default styles;
