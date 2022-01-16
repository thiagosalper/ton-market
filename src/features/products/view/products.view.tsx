import React from 'react';
import { ScrollView, StyleSheet, View, ViewStyle } from 'react-native';
import { TonText } from '../../../ui';
import BoxProduct from '../components/BoxProduct';
import CompareBar from '../components/CompareBar';
import { ProductsViewModel } from '../interfaces';
import useProductsViewModel from '../viewModel/products.vm';

const ProductsView: React.FC = () => {
  const vm: ProductsViewModel = useProductsViewModel();
  return (
    <View style={styles.base}>
      {vm.selection.length > 0 && <CompareBar selection={vm.selection} />}
      
      <ScrollView contentContainerStyle={styles.container}>
        {vm.loading && <TonText>Carregando ...</TonText>}
        {!vm.loading && vm.list && vm.list.map((item) => (
          <BoxProduct 
            item={item} 
            isCartItem={vm.checkIsCartItem(item.id)}
            addItem={() => vm.addProduct(item)} 
            removeItem={() => vm.removeProduct(item.id)} 
            onCompare={() => vm.onCompare(item)} />
        ))}
        {vm.list?.length === 0 && !vm.loading && <TonText>Nenhum produto</TonText>}
      </ScrollView>
    </View>
  )
};

export default ProductsView;

interface ProductsViewStyleInterface {
  base: ViewStyle;
  container: ViewStyle;
}

const styles = StyleSheet.create<ProductsViewStyleInterface>({
  base: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
  }
});
