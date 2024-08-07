import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/Home';


const AfterLoginStack = createNativeStackNavigator();

interface types {
  type: number;
}

const screensData = [
  {
    name: 'Home',
    component: Home,
  }
];


const AfetrLoginNavigator = () => {
  let screens: any =
    [...screensData]
    ;
  return (
    <AfterLoginStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home">
      {screens.map((item: { name: string; component: any }, index: number) => (
        <AfterLoginStack.Screen
          options={{
            headerShown: false,
          }}
          name={item.name}
          component={item.component}
          key={index}
        />
      ))}
    </AfterLoginStack.Navigator>
  );
};

export default AfetrLoginNavigator;
