import React from 'react';
import { ScrollView, StyleSheet, View, ViewStyle } from 'react-native';
import { TonText } from '../../../ui';
import { CartViewModel } from '../interfaces';
import useCartViewModel from '../viewModel/cart.vm';

const CartView: React.FC = () => {
  const vm: CartViewModel = useCartViewModel();
  return (
    <View style={styles.container}>
      <TonText>{0} produtos no carrinho</TonText>
      
    </View>
  )
};

export default CartView;

interface ProductsViewStyleInterface {
  container: ViewStyle;
}

const styles = StyleSheet.create<ProductsViewStyleInterface>({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  }
});
