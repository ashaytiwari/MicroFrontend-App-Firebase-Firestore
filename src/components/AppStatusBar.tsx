import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import { colors } from '../styles/colors';

export interface IChildrenProps {
  children: React.ReactNode
}

const AppStatusBar: React.FC<IChildrenProps> = (props) => {

  const { children } = props;

  const statusBarBackgroundColor = colors.primary;
  const statusBarStyle = 'light-content';

  return (
    <>
      <StatusBar backgroundColor={statusBarBackgroundColor} barStyle={statusBarStyle} />
      <SafeAreaView style={{ flex: 0, backgroundColor: statusBarBackgroundColor }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: statusBarBackgroundColor }}>
        {children}
      </SafeAreaView>
    </>
  );

};

export default AppStatusBar;