import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { MainRouteProps } from '../../../../routers/types';
import { TonText } from '../../../../ui';
import { useSelectorTyped } from '../../../../store/hooks/useSelectorTyped';

const HeaderCartIcon: React.FC = () => {
  const navigation = useNavigation<MainRouteProps>();
  const { cart } = useSelectorTyped((store) => store.cart); 
  return (
    <TouchableOpacity onPress={() => navigation.navigate('CartRoute')}>
      <TonText>[{cart?.length}]</TonText>
    </TouchableOpacity>
  );
};

export default HeaderCartIcon;
