import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { MainNavParamList } from './types';
import { ProductsView } from '../features';

const RootNav = createNativeStackNavigator<MainNavParamList>();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <RootNav.Navigator initialRouteName={'ProductsRoute'}>
        <RootNav.Screen name='ProductsRoute' component={ProductsView} />
      </RootNav.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigator;
