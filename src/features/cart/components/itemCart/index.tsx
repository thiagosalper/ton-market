import React from 'react';
import {View, StyleSheet, ViewStyle, TouchableOpacity, TextStyle} from 'react-native';
import { CartItem, Product } from '../../../../data';
import { TonText } from '../../../../ui';
import moneyFormat from '../../../../utils/number/moneyFormat';

interface ItemCartInterface {
  item: CartItem;
  removeItem(): void;
}

const ItemCart: React.FC<ItemCartInterface> = ({item, removeItem}) => {
  return (
    <View style={styles.base}>
      <View style={styles.image}></View>
      <View>
        <TonText style={styles.title}>{item.product.name}</TonText>
        <TonText>Unitário: {moneyFormat(item.product.price)}</TonText>
        <TonText>Subtotal: {moneyFormat(item.product.price * item.quantity)}</TonText>
      </View>
      <TouchableOpacity 
        style={styles.removeButton}
        onPress={removeItem}>
          <TonText>X</TonText>
      </TouchableOpacity>
    </View>
  )
};

export default ItemCart;

interface ItemCartStyleInterface {
  base: ViewStyle;
  image: ViewStyle;
  title: TextStyle;
  removeButton: ViewStyle;
}

const styles = StyleSheet.create<ItemCartStyleInterface>({
  base: {
    padding: 16,
    flexDirection: 'row',
  },
  image: {
    backgroundColor: '#ccc',
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 16,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  removeButton: {
    backgroundColor: 'tomato',
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
    top: '50%',
  }
});
