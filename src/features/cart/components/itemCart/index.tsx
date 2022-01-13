import React from 'react';
import {View, StyleSheet, ViewStyle, TouchableOpacity} from 'react-native';
import { Product } from '../../../../data';
import { TonText } from '../../../../ui';

interface ItemCartInterface {
  item: Product;
  removeItem(): void;
}

const ItemCart: React.FC<ItemCartInterface> = ({item, removeItem}) => {
  return (
    <View style={styles.base}>
      <View style={styles.image}></View>
      <TonText>{item.name}</TonText>
      <TonText>{item.price}</TonText>
      <TouchableOpacity onPress={removeItem}><TonText>Remover</TonText></TouchableOpacity>
    </View>
  )
};

export default ItemCart;

interface ItemCartStyleInterface {
  base: ViewStyle;
  image: ViewStyle;
}

const styles = StyleSheet.create<ItemCartStyleInterface>({
  base: {
    padding: 16,
  },
  image: {
    backgroundColor: '#ccc',
    width: 40,
    height: 40,
    borderRadius: 8,
  }
});
