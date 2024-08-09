import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabIcon } from './customBottomTab';

import { useAppSelector } from '../Redux';
import Home from '../Screens/Home';
import styles from './style';
import Docs from '../Screens/Docs';
const Tab = createBottomTabNavigator();

const BottomTabNavigator = ({ route }: { route: any }) => {
  const activeScreenName = route.state?.routes[route.state.index]?.name;
  const { userData } = useAppSelector((state: any) => state.loginReducer);

  const Screens = [
    {
      name: 'Home',
      component: Home,
    },
    {
      name: 'Docs',
      component: Docs,
    },
    
  ];

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarStyle: styles.barStyle,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => {
          if (route.name === 'Home') {
            return (
              <TabIcon
                title={'Home'}
                icon={'home'}
                activeTab={focused ? true : false}
              />
            );
          } else if (route.name === 'Docs') {
            return (
              <TabIcon
                title={'Docs'}
                icon={'docs'}
                activeTab={focused ? true : false}
              />
            );
          } 
        },
      })}>
      {Screens.map((item: { name: string; component: any }, index: number) => (
        <Tab.Screen
          key={index}
          name={item.name}
          component={item.component}
          options={{ headerShown: false }}
          listeners={({ navigation }) => ({
            tabPress: e => {
              if (item?.name === 'Create') {
                e.preventDefault();
                navigation.navigate('CreateJob');
              }
            },
          })}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
