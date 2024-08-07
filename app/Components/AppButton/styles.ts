import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import Colors from '../../Utils/colors';
import {FontFamily} from '../../Utils/fonts';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../Utils/colors';

interface Props {
  button: ViewStyle;
  text: TextStyle;
}

const styles = StyleSheet.create<Props>({
  button: {
    backgroundColor: colors.greenFast,
    width: wp(90),
    height: hp(6),
    alignSelf: 'center',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    marginBottom: hp(.5)
  },
  text: {
    fontSize: hp(2.2),
    color: Colors.white,
    fontFamily: FontFamily.OutfitBold,
  },
});

export default styles;
