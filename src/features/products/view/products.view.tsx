import React from 'react';
import { ScrollView, StyleSheet, ViewStyle } from 'react-native';
import { TonText } from '../../../ui';
import BoxProduct from '../components/BoxProduct';
import { ProductsViewModel } from '../interfaces';
import useProductsViewModel from '../viewModel/products.vm';

const ProductsView: React.FC = () => {
  const vm: ProductsViewModel = useProductsViewModel();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {vm.loading && <TonText>Carregando ...</TonText>}
      {!vm.loading && vm.list.map((item) => <BoxProduct item={item} addItem={() => vm.addProduct(item)} removeItem={() => vm.removeProduct(item.id)} />)}
      {vm.list?.length === 0 && !vm.loading && <TonText>Nenhum produto</TonText>}
    </ScrollView>
  )
};

export default ProductsView;

interface ProductsViewStyleInterface {
  container: ViewStyle;
}

const styles = StyleSheet.create<ProductsViewStyleInterface>({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
  }
});
