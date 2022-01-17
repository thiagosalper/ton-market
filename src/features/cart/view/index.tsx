import React from 'react';
import { TextStyle, StyleSheet, View, ViewStyle, FlatList } from 'react-native';
import { TonButton, TonColors, TonText } from '../../../ui';
import moneyFormat from '../../../utils/number/moneyFormat';
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
          <ItemCart key={index} item={item} removeItem={() => vm.removeProduct(item.product.id)} />
        )}
        showsVerticalScrollIndicator={false}
      />
      <TonText style={styles.title}>Total a pagar: {moneyFormat(vm.list.total)}</TonText>
      <TonButton 
        label='LIMPAR' 
        onPress={vm.clearAll} 
        style={styles.clearButton}
        styleLabel={styles.clearButtonLabel} />
    </View>
  )
};

export default CartView;

interface ProductsViewStyleInterface {
  container: ViewStyle;
  title: TextStyle;
  clearButton: ViewStyle;
  clearButtonLabel: TextStyle;
}

const styles = StyleSheet.create<ProductsViewStyleInterface>({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingBottom: 32,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    paddingVertical: 20,
  }, 
  clearButton: {
    backgroundColor: TonColors.black.default,
  },
  clearButtonLabel: {
    color: 'white',
  }
});
