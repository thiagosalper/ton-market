import React from 'react';
import { TextStyle, StyleSheet, View, ViewStyle, FlatList } from 'react-native';
import { TonText } from '../../../ui';
import ItemCart from '../components/itemCart';
import { CartViewModel } from '../interfaces';
import useCartViewModel from '../viewModel/cart.vm';

const CartView: React.FC = () => {
  const vm: CartViewModel = useCartViewModel();
  return (
    <View style={styles.container}>
      <TonText style={styles.title}>{vm.list.products?.length} produtos no carrinho</TonText>
      <FlatList
        data={vm.list.products}
        renderItem={({item, index}) => (
          <ItemCart item={item} removeItem={() => vm.removeProduct(index)} />
        )}
      />
      <TonText style={styles.title}>Total a pagar: ${vm.list.total}</TonText>
    </View>
  )
};

export default CartView;

interface ProductsViewStyleInterface {
  container: ViewStyle;
  title: TextStyle;
}

const styles = StyleSheet.create<ProductsViewStyleInterface>({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    paddingVertical: 20,
  }
});
