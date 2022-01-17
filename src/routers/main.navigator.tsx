import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { MainNavParamList } from './types';
import { ProductsView, CartView } from '../features';
import { TonText } from '../ui';
import HeaderCartIcon from '../features/products/components/HeaderCartIcon';
import FeedbackBox from '../ui/tonFeedback';
import { useSelectorTyped } from '../store/hooks/useSelectorTyped';
import useAppActions from '../store/actions/appActions';

const RootNav = createNativeStackNavigator<MainNavParamList>();

const MainNavigator: React.FC = () => {
  const { feedback } = useSelectorTyped((store) => store.app );
  const appAction = useAppActions();
  return (
    <NavigationContainer>
      <RootNav.Navigator initialRouteName={'ProductsRoute'}>
        <RootNav.Screen 
          name='ProductsRoute' 
          component={ProductsView} 
          options={{
            title: 'Ton-Market', 
            headerLeft: (_) => <TonText>Olá</TonText>, 
            headerRight: (_) => <HeaderCartIcon />,
          }} />
        <RootNav.Screen 
          name='CartRoute' 
          component={CartView}
          options={{
            title: 'Carrinho', 
            headerBackTitle: 'Voltar'
          }} />
      </RootNav.Navigator>
      { feedback?.text && (
        <FeedbackBox 
          type={feedback?.type} 
          text={feedback?.text} 
          callback={appAction.clearFeedback} /> 
        )
      }
    </NavigationContainer>
  )
}

export default MainNavigator;
