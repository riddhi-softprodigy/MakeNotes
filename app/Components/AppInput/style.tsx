import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {FontFamily, FontSize} from '../../Utils/fonts';
import colors from '../../Utils/colors';

interface Props {
  container: ViewStyle;
  titleMain: ViewStyle;
  title: TextStyle;
  input: TextStyle;
  errorTitle: TextStyle;
}

const styles = StyleSheet.create<Props>({
  container: {
    width: wp(90),
    alignSelf: 'center',
    borderWidth: 1,
    height: hp(6),
    borderRadius: hp(0.6),
    borderColor: colors.gray,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleMain: {
    height: hp(2),
    backgroundColor: colors.white,
    justifyContent: 'center',
    top: -hp(1),
    left: wp(2),
    borderRadius: hp(1),
    position: 'absolute',
    paddingHorizontal: wp(1),
  },
  title: {
    color: colors.darkGray,
    fontSize: FontSize.h1_4,
    fontFamily: FontFamily.ManropeRegular,
  },
  input: {
    height: hp(6),
    marginLeft: wp(3),
    fontFamily: FontFamily.ManropeRegular,
    fontSize: FontSize.h1_6,
    color: colors.darkGray,
    width: '95%',
  },
  errorTitle: {
    color: colors.red,
    width: wp(89),
    alignSelf: 'center',
    fontFamily: FontFamily.ManropeRegular,
    fontSize: FontSize.h1_4,
  },
  bot1: {
    marginTop: -hp(0.5),
  },
});

export default styles;
