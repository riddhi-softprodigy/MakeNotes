import {
  SafeAreaView,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useAppSelector } from '../../Redux';
import styles from './style';
import AppText from '../../Components/AppText/AppText';
import AppInput from '../../Components/AppInput';
import AppButton from '../../Components/AppButton';
import { Loader } from '../../Components/Loader';
import { ScreenNavigationProp } from '../../Navigation/Types';
import { loginUser } from '../../Redux/login';
import { validateEmail } from '../../Utils/validation';
import { showToast } from '../../Utils/functions';


const Login = () => {
  const dispatch = useDispatch<any>();
  const { visible }: any = useAppSelector(state => state?.loader);
  const navigation = useNavigation<ScreenNavigationProp>();
  const [email, setemail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [phoneError, setPhoneError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [show, setShow] = useState<boolean>(false);

  const handleLogin = async () => {
    if (email && password) {
      if (!validateEmail(email)) {
        setPhoneError('Please enter valid phone number');
      } else {
        setPhoneError('');
        setPasswordError('');
        const body: any = {
          email: email,
          password: password,
        };
        dispatch(loginUser(body));
      }
    } else {
      showToast('Please fill all fields', 1);
    }
  };


  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'android' ? 'height' : 'padding'}>
        <ScrollView
          keyboardShouldPersistTaps={'handled'}
          contentContainerStyle={styles.scrollViewContainer}>
          <View style={styles.center}>
            <Image source={require('../../Assets/images/icon.png')} />
            <View style={styles.header}>
              <View style={styles.divider} />
              <View style={styles.headerText}>
                <AppText style={styles.fontRegular}> Login </AppText>
              </View>
              <View style={styles.divider} />
            </View>
            <View style={styles.inputContainer}>
              <AppInput
                title="Email"
                onChangeText={val => {
                  setemail(val)
                }}
                value={email}
                placeholder="Enter Mobile Number"
                showError={!!phoneError}
                errorTitle={phoneError}

              />
              <AppInput
                title="Enter Password"
                onChangeText={setPassword}
                value={password}
                placeholder="Enter Password"
                showError={!!passwordError}
                errorTitle={passwordError}
                secureTextEntry={!show}
                //   RightIcon={show ? EyeOpen : Hide}
                onPressRightIcon={() => setShow(!show)}
                onFocus={() => setPhoneError('')}
              />
            </View>
            <View style={styles.buttonMargin}>
              <AppButton title="Login" onPress={() => handleLogin()} />
            </View>
            <View style={styles.signUpText}>
              <AppText style={styles.fontRegular}>
                Don't have an account?{' '}
                <AppText
                  style={styles.signUpTxt}
                  onPress={() => navigation.navigate('SignUp')}>
                  Sign Up
                </AppText>
              </AppText>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <Loader show={visible} />
    </SafeAreaView>
  );
};

export default Login;
