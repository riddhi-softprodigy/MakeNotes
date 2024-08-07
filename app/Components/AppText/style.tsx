import {StyleSheet, TextStyle} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {FontFamily} from '../../Utils/fonts';
import colors from '../../Utils/colors';

interface Props {
  text: TextStyle;
}

const styles = StyleSheet.create<Props>({
  text: {
    fontSize: hp(1.8),
    color: colors.black,
    fontFamily: FontFamily.OutfitBold,
  },
});

export default styles;
