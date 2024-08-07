import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AfetrLoginNavigator from './afterLoginNavigation';
import BeforeLoginNavigator from './beforeLoginNavigation';
import NavigationService from './navigationService';
import * as storage from '../Service/asyncStoreConfig';
import { setToken } from '../Redux/login';

const RootStack = createNativeStackNavigator();

const Navigator = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector(
    (state: any) => state.loginReducer,
  );
  const [onBoadring, setOnBoarding] = useState();
  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const userDataObj: any = await storage.getItem('userData');
    dispatch(setToken(JSON.parse(userDataObj)));
  };
  return (
    <NavigationContainer
      ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}>
      {userData ?
        <AfetrLoginNavigator
        />
        : <BeforeLoginNavigator
          type={
            1
          }
          onBoadring={onBoadring}
        />}

    </NavigationContainer>
  );
};

export default Navigator;
