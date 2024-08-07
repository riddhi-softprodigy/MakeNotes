import {Platform, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import colors from '../../Utils/colors';
import { FontFamily } from '../../Utils/fonts';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollViewContainer: {
    paddingBottom: Platform.OS === 'android' ? hp(8) : hp(2),
  },
  header: {
    padding: hp(5),
    flexDirection: 'row',
    alignItems: 'center',
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
  fontRegular: {fontFamily: FontFamily.ManropeRegular, color: colors.dimGray},
  center: {
    alignItems: 'center',
  },
});

export default styles;
