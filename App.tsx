import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import AppStatusBar from './src/components/AppStatusBar';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigators/RootNavigator';

function App() {

  return (
    <AppStatusBar>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </AppStatusBar>
  );
}

export default App;