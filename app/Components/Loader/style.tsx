import {StyleSheet} from 'react-native';
import colors from '../../Utils/colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.transparentBlack, 
  },
  modalContent: {
    backgroundColor: colors.white,
    padding: hp(3),
    borderRadius: wp(2),
    elevation: 5, 
    shadowColor: colors.black,
    shadowOpacity: 0.5,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 5,
  },
});
