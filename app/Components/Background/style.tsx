import {StyleSheet, TextStyle} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {FontFamily} from '../../Utils/fonts';
import colors from '../../Utils/colors';


const styles = StyleSheet.create({
  text: {
    fontSize: hp(1.8),
    color: colors.black,
    fontFamily: FontFamily.OutfitBold,
  },
  background: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
});

export default styles;
