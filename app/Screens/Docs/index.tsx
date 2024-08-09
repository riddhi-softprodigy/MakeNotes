import React from 'react';
import { View, SafeAreaView, TouchableOpacity } from 'react-native';
import AppText from '../../Components/AppText/AppText';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../Redux/login';
import styles from './style';
import { Camera, Logout } from '../../Utils/images';
import CommonBackground from '../../Components/Background';
import navigationService from '../../Navigation/navigationService';

const Docs = () => {
  const dispatch = useDispatch<any>();
  return (
    <SafeAreaView style={styles.container}>
      <CommonBackground>
        <View style={styles.header}>
          <AppText style={styles.title}>Document</AppText>
          <View style={styles.emptySpace} />
          <TouchableOpacity onPress={() => dispatch(logoutUser({ showToast: true }))}>
            <Logout />
          </TouchableOpacity>
        </View>
       
      </CommonBackground>
    </SafeAreaView>
  );
};

export default Docs;
