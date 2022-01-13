import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { MainNavParamList } from './types';
import { ProductsView, CartView } from '../features';

const RootNav = createNativeStackNavigator<MainNavParamList>();

const MainNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <RootNav.Navigator initialRouteName={'ProductsRoute'}>
        <RootNav.Screen name='ProductsRoute' component={ProductsView} />
        <RootNav.Screen name='CartRoute' component={CartView} />
      </RootNav.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigator;
