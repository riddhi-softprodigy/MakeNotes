import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Screens/Login';
import SignUp from '../Screens/SignUp';


const BeforeLoginStack = createNativeStackNavigator();

const screensData = [
  {
    name: 'Login',
    component: Login,
  },
  {
    name: 'SignUp',
    component: SignUp,
  }
];

const BeforeLoginNavigator = ({ onBoadring }: any) => {
  let screens: any =
    [...screensData]
    ;
  return (
    <BeforeLoginStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {screens.map(
        (
          item: { name: string; component: any },
          index: React.Key | null | undefined,
        ) => (
          <BeforeLoginStack.Screen
            options={{
              headerShown: false,
            }}
            name={item.name}
            component={item.component}
            key={index}
          />
        ),
      )}
    </BeforeLoginStack.Navigator>
  );
};

export default BeforeLoginNavigator;
