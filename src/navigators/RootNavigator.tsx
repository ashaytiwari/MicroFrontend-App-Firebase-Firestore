import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import Home from '../screens/Home';
import Products from '../screens/Products';
import { colors } from '../styles/colors';

const Drawer = createDrawerNavigator();

function RootNavigator(){

  const drawerNavigatorAttributes = {
    initialRouteName: 'Home',
    screenOptions: {
      headerStyle: { backgroundColor: colors.primary },
      headerTintColor: colors.white,
      // sceneContainerStyle: { backgroundColor: colors.tertiary },
      drawerContentStyle: {backgroundColor: colors.white},
      drawerInactiveTintColor: colors.tertiary,
      drawerActiveTintColor: colors.primary,
    }
  };

  return (
    <Drawer.Navigator {...drawerNavigatorAttributes}>
      <Drawer.Screen name='Home' component={Home} />
      <Drawer.Screen name='Products' component={Products} />
    </Drawer.Navigator>
  );

}

export default RootNavigator;