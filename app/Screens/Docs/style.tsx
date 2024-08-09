import { Platform, StyleSheet } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import colors from '../../Utils/colors';
import { FontFamily, FontSize } from '../../Utils/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContainer: {
    paddingBottom: Platform.OS === 'android' ? hp(8) : hp(2),
  },
  scanContainer: {
    marginTop: hp(16),
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

  },
  scan: {
    borderRadius: wp(2),
    borderColor: colors.white,
    borderWidth: 1,
    paddingHorizontal: wp(4), paddingVertical: wp(4),
    marginHorizontal: wp(4),
    height: wp(20),
    width: wp(20),
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(4),
    paddingVertical: hp(1.5)
  },
  background: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
  emptySpace: {
    width: wp(6),
  },
  title: {
    color: colors.white,
    fontFamily: FontFamily.OutfitBold,
    fontSize: FontSize.h2,
  },
  divider: {
    backgroundColor: colors.lightGrayBackground,
    borderWidth: 0.3,
    borderColor: colors.lightGrayBackground,
    width: wp(33),
  },
  headerText: {
    paddingHorizontal: hp(3),
    fontFamily: FontFamily.ManropeRegular,
  },
  inputContainer: {
    flexDirection: 'column',
    height: hp(20),
    justifyContent: 'space-around',
    gap: hp(4),
  },
  forgetPasswordView: {
    alignSelf: 'flex-end',
  },
  forgotPasswordText: {
    alignSelf: 'flex-end',
    color: colors.greenPrimary,
    fontFamily: FontFamily.ManropeBold,
  },
  buttonMargin: {
    marginVertical: hp(2),
  },
  signUpText: {
    marginTop: hp(22),
    fontFamily: FontFamily.ManropeMedium,
  },
  signUpTxt: {
    color: colors.cyanBlue,
    fontFamily: FontFamily.ManropeBold,
  },
  fontRegular: { fontFamily: FontFamily.ManropeRegular, color: colors.dimGray },
  center: {
    alignItems: 'center',
  },
});

export default styles;
