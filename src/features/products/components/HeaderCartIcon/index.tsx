import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { MainRouteProps } from '../../../../routers/types';
import { TonText } from '../../../../ui';
import { useSelectorTyped } from '../../../../utils/hooks/useSelectorTyped';

const HeaderCartIcon: React.FC = () => {
  const navigation = useNavigation<MainRouteProps>();
  const { cart } = useSelectorTyped((store) => store.products); 
  return (
    <TouchableOpacity onPress={() => navigation.navigate('CartRoute')}>
      <TonText>Buy [{cart?.length}]</TonText>
    </TouchableOpacity>
  );
};

export default HeaderCartIcon;
