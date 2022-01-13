import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { MainNavParamList } from './types';

const RootNav = createNativeStackNavigator<MainNavParamList>();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <RootNav.Navigator>
      </RootNav.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigator;
