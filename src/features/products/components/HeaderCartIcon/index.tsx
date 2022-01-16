import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { MainRouteProps } from '../../../../routers/types';
import { TonIcons, TonText } from '../../../../ui';
import { useSelectorTyped } from '../../../../utils/hooks/useSelectorTyped';

const HeaderCartIcon: React.FC = () => {
  const navigation = useNavigation<MainRouteProps>();
  const { cart } = useSelectorTyped((store) => store.cart); 
  return (
    <TouchableOpacity onPress={() => navigation.navigate('CartRoute')}>
      <TonText>[{cart?.length}]<TonIcons.IconCart /></TonText>
    </TouchableOpacity>
  );
};

export default HeaderCartIcon;
