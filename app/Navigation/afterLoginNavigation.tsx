import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import TextRecognaigation from '../Screens/text_recognaigation';
import Docs from '../Screens/Docs';
import BottomTabNavigator from './bottomTabs';
import Notes from '../Screens/Notes';


const AfterLoginStack = createNativeStackNavigator();

interface types {
  type: number;
}

export const commonScreens = [
  {name: 'BottomTabNavigator', component: BottomTabNavigator},
  
];

const screensData = [
  {
    name: 'Home',
    component: Home,
  },
  {
    name: 'TextRecognaigation',
    component: TextRecognaigation,
  },
  {
    name: 'Docs',
    component: Docs,
  },
  {
    name: 'Notes',
    component: Notes,
  }
];


const AfetrLoginNavigator = () => {
  let screens: any =
    [...screensData]
    ;
    screens = [...screens, ...commonScreens];

  return (
    <AfterLoginStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="BottomTabNavigator">
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
